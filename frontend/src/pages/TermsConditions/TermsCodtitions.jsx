import React from 'react';
import './TermsConditions.css';
import { Link } from 'react-router-dom';

const companyName  = 'Flyintake Global Consulting Pvt Ltd';
const websiteUrl   = 'www.flyintakegc.com';
const contactEmail = 'officeflyintake@gmail.com';
const lastUpdated  = 'February 24, 2026';

/* ═══════════════════════════════════════════
   TERMS & CONDITIONS PAGE
═══════════════════════════════════════════ */
export function TermsConditions() {
  return (
    <div className="tp-page">

      <section className="tp-hero">
        <div className="tp-hero-inner">
          <h1 className="tp-hero-title">Terms &amp; Conditions</h1>
          <p className="tp-hero-date">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="tp-wrapper">

        <p className="tp-intro">
          Welcome to {companyName}. By using our website{' '}
          <strong>{websiteUrl}</strong> and our services, you agree to the
          following Terms &amp; Conditions. Please read them carefully before
          proceeding.
        </p>

        <div className="tp-block">
          <h2>Services</h2>
          <p>
            {companyName} provides overseas education consultancy services including
            guidance on university and course selection, application assistance, visa
            consultation, scholarship advice, and pre-departure orientation.
          </p>
          <p>
            University admissions and visa approvals are handled solely by the respective
            universities and government authorities. {companyName} facilitates and supports
            the process but does not guarantee any admission or visa outcome.
          </p>
        </div>

        <div className="tp-block">
          <h2>User Obligations</h2>
          <p>
            All users and clients must provide accurate, complete, and truthful information
            when using our services — including academic qualifications, personal details,
            test scores, and any other information required for applications.
          </p>
          <p>
            Misrepresentation of any information may result in immediate termination of
            services. Clients are responsible for meeting all application deadlines and
            document requirements set by universities and immigration authorities.
          </p>
        </div>

        <div className="tp-block">
          <h2>Accuracy of Information</h2>
          <p>
            {companyName} makes every effort to provide accurate and up-to-date information
            about universities, courses, visa requirements, and admission procedures.
            However, policies and fees are subject to change without notice.
          </p>
          <p>
            We strongly recommend verifying all critical information directly with the
            relevant university or government authority before making any decisions.
            Content on our website is for general informational purposes only and does
            not constitute legal, immigration, or financial advice.
          </p>
        </div>

        <div className="tp-block">
          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and
            other materials — is the property of {companyName} and is protected by
            applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, or use our content for any commercial
            purpose without prior written permission from {companyName}.
          </p>
        </div>

        <div className="tp-block">
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites including university
            portals, government immigration websites, and scholarship databases.
            These links are provided for your convenience only.
          </p>
          <p>
            {companyName} has no control over the content of those sites and accepts no
            responsibility for any loss or damage that may arise from your use of them.
          </p>
        </div>

        <div className="tp-block">
          <h2>Limitation of Liability</h2>
          <p>
            {companyName} is not liable for any indirect, incidental, or consequential
            damages arising from the use of our website or services.
          </p>
          <p>
            Admission and visa outcomes are the sole discretion of universities and
            government authorities respectively. We accept no liability for visa refusals,
            university rejections, or changes in institutional or government policies
            beyond our control.
          </p>
        </div>

        <div className="tp-block">
          <h2>Termination of Services</h2>
          <p>
            {companyName} reserves the right to suspend or terminate services to any
            client who provides false information, violates these terms, or behaves
            in a manner that is abusive or disrespectful toward our staff.
          </p>
        </div>

        <div className="tp-block">
          <h2>Changes to Terms</h2>
          <p>
            {companyName} reserves the right to update or modify these Terms &amp;
            Conditions at any time. Changes will be effective immediately upon
            posting to our website. Continued use of our services constitutes
            acceptance of the revised terms.
          </p>
        </div>

        <div className="tp-block">
          <h2>Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by applicable laws. Any
            disputes arising under these terms shall be subject to the jurisdiction
            of the relevant courts.
          </p>
        </div>

        <div className="tp-contact-note">
          <p>
            For any questions regarding these Terms &amp; Conditions, please
            contact us at{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>

      </div>

      <div className="tp-cta">
        <div className="tp-cta-inner">
          <h2>Start Your Abroad Journey Today!</h2>
          <Link to="/contact">
            <button className="tp-cta-btn">Reach Us Now</button>
          </Link>

        </div>
      </div>

    </div>
  );
}

/* ═══════════════════════════════════════════
   PRIVACY POLICY PAGE
═══════════════════════════════════════════ */
export function PrivacyPolicy() {
  return (
    <div className="tp-page">

      <section className="tp-hero">
        <div className="tp-hero-inner">
          <h1 className="tp-hero-title">Privacy Policy</h1>
          <p className="tp-hero-date">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="tp-wrapper">

        <p className="tp-intro">
          {companyName} is committed to protecting your personal information and
          your right to privacy. This Privacy Policy explains how we collect,
          use, and protect the information you provide when using our website{' '}
          <strong>{websiteUrl}</strong> and our consultancy services.
        </p>

        <div className="tp-block">
          <h2>Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide when
            submitting an enquiry, booking a consultation, or contacting us.
            This may include your full name, email address, phone number, country
            of residence, academic qualifications, and desired study destination.
          </p>
          <p>
            We do not collect any sensitive financial information, payment card
            details, or national identification numbers through this website.
          </p>
        </div>

        <div className="tp-block">
          <h2>How We Use Your Information</h2>
          <p>
            We use your personal information solely to deliver our consultancy
            services — including responding to your enquiries, arranging
            consultations, and providing guidance on universities, courses,
            and visa processes.
          </p>
          <p>
            With your consent, we may also send you relevant updates about study
            abroad opportunities, scholarship news, and upcoming events. You may
            opt out of these communications at any time by contacting us.
          </p>
        </div>

        <div className="tp-block">
          <h2>Information Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information to any third
            party. We will only share your information with universities,
            institutions, or visa agents directly involved in your application
            process, and only with your explicit knowledge and consent.
          </p>
          <p>
            We may disclose your information where required by law or in response
            to valid requests by public authorities.
          </p>
        </div>

        <div className="tp-block">
          <h2>Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to
            provide our services and fulfil the purposes outlined in this policy.
            You may request deletion of your personal data at any time by
            contacting us at{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>

        <div className="tp-block">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal information against unauthorised access,
            disclosure, alteration, or destruction. While we take every
            reasonable precaution, no method of electronic storage is 100% secure.
          </p>
        </div>

        <div className="tp-block">
          <h2>Your Rights</h2>
          <p>
            You have the right to access the personal information we hold about
            you, request correction of any inaccurate data, request deletion of
            your personal data, and withdraw consent to marketing communications
            at any time.
          </p>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>

        <div className="tp-block">
          <h2>Children's Privacy</h2>
          <p>
            Our services are intended for individuals who are at least 16 years
            of age. We do not knowingly collect personal information from children
            under 16. If you believe your child has submitted personal information
            to us, please contact us and we will promptly remove it.
          </p>
        </div>

        <div className="tp-block">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            changes, we will update the "Last Updated" date at the top of this
            page. Continued use of our website after any changes constitutes
            your acceptance of the updated policy.
          </p>
        </div>

        <div className="tp-contact-note">
          <p>
            For any questions regarding this Privacy Policy, please contact us
            at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>

      </div>

      <div className="tp-cta">
        <div className="tp-cta-inner">
          <h2>Start Your Abroad Journey Today!</h2>
          <button className="tp-cta-btn">Reach Us Now</button>
        </div>
      </div>

    </div>
  );
}

export default TermsConditions;