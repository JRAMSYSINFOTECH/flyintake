import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const globeRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Clear any existing content
    globeRef.current.innerHTML = '';

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      1, // Perfect 1:1 aspect ratio
      0.1,
      1000
    );
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    const size = Math.min(globeRef.current.clientWidth, globeRef.current.clientHeight);
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    globeRef.current.appendChild(renderer.domElement);

    // Professional Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Main directional light (sun)
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // Rim light for edge definition
    const rimLight = new THREE.DirectionalLight(0x6699ff, 0.5);
    rimLight.position.set(-4, 0, -4);
    scene.add(rimLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-2, -2, 2);
    scene.add(fillLight);

    // Subtle orange accent light
    const accentLight = new THREE.PointLight(0xff6b35, 0.4);
    accentLight.position.set(-3, 1, 4);
    scene.add(accentLight);

    // Create Earth sphere with very high detail for smooth appearance
    const geometry = new THREE.SphereGeometry(1, 128, 128);

    // Load high-quality Earth textures
    const textureLoader = new THREE.TextureLoader();
    
    const earthTexture = textureLoader.load(
      'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg'
    );
    
    const bumpTexture = textureLoader.load(
      'https://unpkg.com/three-globe@2.31.1/example/img/earth-topology.png'
    );

    // Professional realistic material
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.2,
      shininess: 30,
      specular: new THREE.Color(0x444444),
      reflectivity: 0.4,
      transparent: false,
      side: THREE.FrontSide
    });

    const earth = new THREE.Mesh(geometry, material);
    
    // Position to show continents nicely
    earth.rotation.y = -Math.PI / 2.5;
    earth.rotation.x = 0.1;
    
    scene.add(earth);

    // Professional atmosphere with gradient shader
    const atmosphereGeometry = new THREE.SphereGeometry(1.12, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
          gl_FragColor = vec4(0.95, 0.6, 0.4, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Stars with varied sizes
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = [];
    const starSizes = [];
    
    for (let i = 0; i < 4000; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      starPositions.push(x, y, z);
      starSizes.push(Math.random() * 1.5 + 0.5);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.012,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Smooth, realistic rotation animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Realistic Earth rotation (only Earth rotates)
      earth.rotation.y += 0.0018;
      
      // Very subtle atmosphere rotation for depth
      atmosphere.rotation.y += 0.0012;
      
      // Minimal star parallax
      stars.rotation.y += 0.00008;
      stars.rotation.x += 0.00004;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!globeRef.current) return;
      
      const size = Math.min(globeRef.current.clientWidth, globeRef.current.clientHeight);
      renderer.setSize(size, size);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (globeRef.current && renderer.domElement) {
        globeRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Particle canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 70;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.8 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flyin-hero">
      {/* Particle Background */}
      <canvas ref={canvasRef} className="particle-bg"></canvas>

      {/* World Map Background - NO GRID LINES */}
      <div className="world-map-bg"></div>

      {/* Gradient Overlays */}
      <div className="gradient-overlay gradient-1"></div>
      <div className="gradient-overlay gradient-2"></div>
      <div className="gradient-overlay gradient-3"></div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Global Education Consulting</span>
          </div>

          <h1 className="hero-title">
            Your Gateway to
            <span className="title-highlight"> Global Education</span>
            <br />
            <span className="title-outline">Opportunities</span>
          </h1>

          <p className="hero-description">
            Empowering students with expert abroad education guidance, transparent 
            processes, and global academic pathways to prestigious universities worldwide.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 6L8 14L4 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Expert Counseling</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 6L8 14L4 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>98% Visa Success</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 6L8 14L4 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>7 Countries</span>
            </div>
          </div>

          <div className="hero-cta">
           
            <Link to="/pages/white-link/Avail" className="btn-primary">
              Apply for Study Abroad
              
            </Link>
            <Link to="/contact-us" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          
        </div>

        {/* Right - CLEAN GLOBE (NO SHADOW, NO RING, NO GRID) */}
        <div className="hero-visual">
          <div ref={globeRef} className="globe-canvas"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;