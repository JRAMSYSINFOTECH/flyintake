import { useEffect, useRef } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const DESTINATIONS = [
  { code: "gb", name: "UK" },
  { code: "us", name: "USA" },
  { code: "au", name: "Australia" },
  { code: "ca", name: "Canada" },
  { code: "eu", name: "Europe" },
  { code: "de", name: "Germany" },
  { code: "ie", name: "Ireland" },
  
];

export default function Hero() {
  const mountRef  = useRef(null);
  const rendererRef = useRef(null);
  const frameRef  = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const load = () => initGlobe(el);
    if (window.THREE) { load(); return; }

    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.onload = load;
    document.head.appendChild(s);

    return () => {
      cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (el.contains(rendererRef.current.domElement))
          el.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  function initGlobe(el) {
    const THREE = window.THREE;
    const W = el.clientWidth;
    const H = el.clientHeight;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.z = 2.6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const loader  = new THREE.TextureLoader();
    const earthTex = loader.load(
      "https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg",
      () => renderer.render(scene, camera)
    );
    const bumpTex = loader.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/elev_bump_4k.jpg");
    const specTex = loader.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png");

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshPhongMaterial({
        map: earthTex, bumpMap: bumpTex, bumpScale: 0.05,
        specularMap: specTex, specular: new THREE.Color(0x334466), shininess: 18,
      })
    );
    scene.add(globe);

    const atm = new THREE.Mesh(
      new THREE.SphereGeometry(1.035, 64, 64),
      new THREE.MeshPhongMaterial({ color: 0x3399ff, transparent: true, opacity: 0.08, side: THREE.FrontSide })
    );
    scene.add(atm);

    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(1.08, 64, 64),
      new THREE.MeshPhongMaterial({ color: 0x1155bb, transparent: true, opacity: 0.04, side: THREE.FrontSide })
    ));

    // Stars
    const sv = [];
    for (let i = 0; i < 2000; i++) {
      const r = 80 + Math.random() * 200;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      sv.push(r*Math.sin(p)*Math.cos(t), r*Math.sin(p)*Math.sin(t), r*Math.cos(p));
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute("position", new THREE.Float32BufferAttribute(sv, 3));
    scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 0.25, transparent: true, opacity: 0.55 })));

    scene.add(new THREE.AmbientLight(0x333355, 0.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(5, 3, 5); scene.add(sun);
    const rim = new THREE.DirectionalLight(0x4488ff, 0.35);
    rim.position.set(-5, -2, -3); scene.add(rim);

    const tick = () => {
      frameRef.current = requestAnimationFrame(tick);
      globe.rotation.y += 0.0018;
      atm.rotation.y   += 0.0018;
      renderer.render(scene, camera);
    };
    tick();

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(el);
  }

  return (
    <section className="hero-wrap">

      {/* ── 1. Dark navy background — strictly inside hero bounds ── */}
      <div className="hero-bg" />

      {/* ── 2. Airplane image — left side, nose pointing right ── */}
      <div className="plane-bg" aria-hidden="true">
        <img
          className="plane-img"
          src="https://www.pngmart.com/files/3/Airplane-PNG-Transparent-Image.png"
          alt=""
          draggable="false"
          onError={e => {
            e.target.onerror = null;
            e.target.src = "https://freepngimg.com/thumb/airplane/5-airplane-png-image.png";
          }}
        />
      </div>

      {/* ── 3. Content ── */}
      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT */}
          <div className="text-area">
            <div className="badge">
              <span className="badge-dot" />
              <span className="badge-text">Trusted Student Consultancy</span>
            </div>

            <h1 className="main-title">
              Your Dream<br />
              <span className="orange">Study Abroad</span><br />
              Starts Here.
            </h1>

            <p className="subtitle">
              Expert guidance for university admissions, student visas,
              scholarships, and seamless relocation — tailored to your goals.
            </p>

            <div className="divider">
              <div className="div-line" />
              <div className="div-diamond" />
              <div className="div-line rev" />
            </div>

            <div className="dest-section">
              <p className="dest-label">Popular Destinations</p>
              <div className="dest-flags">
                {DESTINATIONS.map(d => (
                  <div key={d.code} className="dest-flag" title={d.name}>
                    <div className="flag-img-wrap">
                      <img
                        src={`https://flagcdn.com/w40/${d.code}.png`}
                        srcSet={`https://flagcdn.com/w80/${d.code}.png 2x`}
                        alt={`Flag of ${d.name}`}
                        className="flag-img"
                        loading="lazy"
                      />
                    </div>
                    <span className="dest-name">{d.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-row">
              
              <Link
                              to="/contact"
                              className="btn-primary"
                              
                            >
                            Get Free Consultation
                            </Link>
              
            </div>
          </div>

          {/* RIGHT — GLOBE */}
          <div className="visual-area">
            <div className="sphere-wrap">
              <div className="glow-ring ring-outer" />
              <div className="glow-ring ring-inner" />
              <div className="globe-canvas" ref={mountRef} />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-cue" aria-hidden="true">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </div>

    </section>
  );
}