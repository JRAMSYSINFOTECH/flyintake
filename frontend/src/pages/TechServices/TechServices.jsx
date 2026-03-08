import React, { useState, useMemo } from 'react';
import './TechServices.css';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────
   ALL IMAGES — Only rock-solid, widely cached Unsplash IDs
   Format: photo-{ID}  — all confirmed popular/stable IDs
───────────────────────────────────────────────────────────── */

/* Training card cover images */
const IMG = {
  'Full Stack Development':
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=90&fit=crop',
  'Data Science & AI':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90&fit=crop',
  'Cybersecurity':
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=90&fit=crop',
  'Cloud & DevOps':
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=90&fit=crop',
  /* Testing — code on screen / test dashboard */
  /* Testing card — laptop with code */
  'Testing':
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=90&fit=crop',
  /* Embedded — PCB / microcontroller close-up */
  'Embedded Systems & IoT':
    'https://images.unsplash.com/photo-1518770660439-d29c79bcf13a?w=800&q=90&fit=crop',
  /* Automotive — car electronics / cockpit */
  'Automotive':
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&q=90&fit=crop',
  'Networking & Infrastructure':
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=90&fit=crop',
  'Blockchain & Web3':
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=90&fit=crop',
  'Product & UX Design':
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=90&fit=crop',
  'Corporate IT Programs':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=90&fit=crop',
  /* Management */
  'MBA Core Management':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=90&fit=crop',
  'Business Analytics':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90&fit=crop',
  'Marketing & Sales':
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=90&fit=crop',
  'Finance & Investment':
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=90&fit=crop',
  'Human Resources':
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90&fit=crop',
  'Operations & Supply Chain':
    'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&q=90&fit=crop',
  'Project Management':
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=90&fit=crop',
  'Entrepreneurship & Startup':
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=90&fit=crop',
  'Digital Transformation':
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=90&fit=crop',
  'Leadership & Executive':
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=90&fit=crop',
};

/* Domain banner images (800×500) */
const DIMG = {
  cs:         'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=500&q=90&fit=crop',
  data:       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&q=90&fit=crop',
  ai:         'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&q=90&fit=crop',
  cyber:      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&q=90&fit=crop',
  cloud:      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&q=90&fit=crop',
  network:    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&q=90&fit=crop',
  /* Embedded — PCB circuitry */
  embedded:   'https://images.unsplash.com/photo-1518770660439-d29c79bcf13a?w=800&h=500&q=90&fit=crop',
  /* Automotive — car interior electronics */
  automotive: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&h=500&q=90&fit=crop',
  /* QA — laptop with code/test */
  qa:         'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&q=90&fit=crop',
  blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&q=90&fit=crop',
  product:    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&q=90&fit=crop',
  itsupport:  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&q=90&fit=crop',
  biz:        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&q=90&fit=crop',
  mktg:       'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=500&q=90&fit=crop',
  fin:        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&q=90&fit=crop',
  hr:         'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&q=90&fit=crop',
  ops:        'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&h=500&q=90&fit=crop',
  pm:         'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&q=90&fit=crop',
  startup:    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&q=90&fit=crop',
  intl:       'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&h=500&q=90&fit=crop',
};

/* Sidebar thumbnails (120×120) — same IDs, smaller crop */
const DTHUMB = {
  cs:         'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=120&h=120&q=90&fit=crop',
  data:       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&q=90&fit=crop',
  ai:         'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=120&h=120&q=90&fit=crop',
  cyber:      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=120&h=120&q=90&fit=crop',
  cloud:      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=120&h=120&q=90&fit=crop',
  network:    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=120&h=120&q=90&fit=crop',
  embedded:   'https://images.unsplash.com/photo-1518770660439-d29c79bcf13a?w=120&h=120&q=90&fit=crop',
  automotive: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=120&h=120&q=90&fit=crop',
  qa:         'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&q=90&fit=crop',
  blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=120&q=90&fit=crop',
  product:    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&q=90&fit=crop',
  itsupport:  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=120&h=120&q=90&fit=crop',
  biz:        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&q=90&fit=crop',
  mktg:       'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=120&h=120&q=90&fit=crop',
  fin:        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=120&h=120&q=90&fit=crop',
  hr:         'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=120&h=120&q=90&fit=crop',
  ops:        'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=120&h=120&q=90&fit=crop',
  pm:         'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=120&h=120&q=90&fit=crop',
  startup:    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=120&h=120&q=90&fit=crop',
  intl:       'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=120&h=120&q=90&fit=crop',
};

/* ─────────────────────────────────────────────────────────────
   ROLE CARD IMAGES — unique per role, technology-relevant
   All IDs are high-traffic Unsplash photos confirmed widely used
───────────────────────────────────────────────────────────── */
const ROLE_IMG = {
  /* ── Computer Science ── */
  'Software Engineer Intern':
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=360&q=90&fit=crop',
  'Full Stack Developer Intern':
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=360&q=90&fit=crop',
  'Backend Developer Intern':
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=360&q=90&fit=crop',
  'Frontend Developer Intern':
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=360&q=90&fit=crop',
  'Mobile App Developer Intern':
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=360&q=90&fit=crop',
  'DevOps Engineer Intern':
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=360&q=90&fit=crop',
  'Site Reliability Engineer Intern':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&q=90&fit=crop',
  'Cloud Application Developer Intern':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&q=90&fit=crop',
  'QA Automation Engineer Intern':
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=360&q=90&fit=crop',
  'Software Architect Intern':
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&q=90&fit=crop',

  /* ── Data Science ── */
  'Data Analyst Intern':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&q=90&fit=crop',
  'Business Intelligence Analyst Intern':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&q=90&fit=crop',
  'Data Scientist Intern':
    'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=360&q=90&fit=crop',
  'Machine Learning Engineer Intern':
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=360&q=90&fit=crop',
  'Data Engineer Intern':
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=360&q=90&fit=crop',
  'Analytics Engineer Intern':
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=360&q=90&fit=crop',
  'MLOps Engineer Intern':
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=360&q=90&fit=crop',

  /* ── AI ── */
  'AI Engineer Intern':
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=360&q=90&fit=crop',
  'Deep Learning Engineer Intern':
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=360&q=90&fit=crop',
  'NLP Engineer Intern':
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=360&q=90&fit=crop',
  'Computer Vision Engineer Intern':
    'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&h=360&q=90&fit=crop',
  'Generative AI Engineer Intern':
    'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=360&q=90&fit=crop',
  'Conversational AI Engineer Intern':
    'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&h=360&q=90&fit=crop',

  /* ── Cybersecurity ── */
  'Cybersecurity Analyst Intern':
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=360&q=90&fit=crop',
  'SOC Analyst Intern':
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=360&q=90&fit=crop',
  'Ethical Hacker Intern':
    'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&h=360&q=90&fit=crop',
  'Penetration Testing Intern':
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=360&q=90&fit=crop',
  'Cloud Security Intern':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&q=90&fit=crop',
  'Incident Response Intern':
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=360&q=90&fit=crop',

  /* ── Cloud & DevOps ── */
  'Cloud Engineer Intern':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&q=90&fit=crop',
  'Cloud Solutions Architect Intern':
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=360&q=90&fit=crop',
  'Kubernetes Engineer Intern':
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=360&q=90&fit=crop',
  'Platform Engineer Intern':
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&q=90&fit=crop',
  'SRE Intern':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&q=90&fit=crop',

  /* ── Networking ── */
  'Network Engineer Intern':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&q=90&fit=crop',
  'NOC Intern':
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=360&q=90&fit=crop',
  'Systems Administrator Intern':
    'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600&h=360&q=90&fit=crop',
  'Linux Engineer Intern':
    'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=360&q=90&fit=crop',

  /* ── Embedded Systems ── */
  'Embedded Systems Engineer Intern':
    'https://images.unsplash.com/photo-1518770660439-d29c79bcf13a?w=600&h=360&q=90&fit=crop',
  'Firmware Developer Intern':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=360&q=90&fit=crop',
  'IoT Application Developer Intern':
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=360&q=90&fit=crop',
  'Robotics Systems Engineer Intern':
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=360&q=90&fit=crop',
  /* Automotive roles — under Embedded domain */
  'Automotive Software Engineer Intern':
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=600&h=360&q=90&fit=crop',
  'CAN / Bus Protocol Engineer Intern':
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=360&q=90&fit=crop',
  'Automotive ECU Test Engineer Intern':
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=360&q=90&fit=crop',
  'ADAS & Autonomous Systems Intern':
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=360&q=90&fit=crop',

  /* ── Blockchain ── */
  'Blockchain Developer Intern':
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=360&q=90&fit=crop',
  'Web3 Developer Intern':
    'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=600&h=360&q=90&fit=crop',
  'Smart Contract Developer Intern':
    'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&h=360&q=90&fit=crop',
  'AR/VR Developer Intern':
    'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&h=360&q=90&fit=crop',

  /* ── QA & Testing — all distinct, technology-specific images ── */
  'QA Engineer Intern':
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=360&q=90&fit=crop',
  'Manual & Black/White Box Testing Intern':
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=360&q=90&fit=crop',
  'Test Automation Engineer Intern':
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=360&q=90&fit=crop',
  'Performance & Load Testing Intern':
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=360&q=90&fit=crop',
  'Security & Penetration Testing Intern':
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=360&q=90&fit=crop',
  'Mobile & Cross-Platform Testing Intern':
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=360&q=90&fit=crop',

  /* ── Product & UX ── */
  'Product Management Intern':
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=360&q=90&fit=crop',
  'UX/UI Designer Intern':
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=360&q=90&fit=crop',
  'Design Research Intern':
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=360&q=90&fit=crop',
  'Product Analytics Intern':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&q=90&fit=crop',

  /* ── IT Support ── */
  'IT Support Engineer Intern':
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=360&q=90&fit=crop',
  'IT Service Management Intern':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=360&q=90&fit=crop',
  'Operations Analyst Intern':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&q=90&fit=crop',

  /* ── Management roles ── */
  'Business Analyst Intern':
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&q=90&fit=crop',
  'Strategy Analyst Intern':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&q=90&fit=crop',
  'Management Consulting Intern':
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=360&q=90&fit=crop',
  'Corporate Strategy Intern':
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=360&q=90&fit=crop',
  'Digital Marketing Intern':
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=360&q=90&fit=crop',
  'Growth Marketing Intern':
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=360&q=90&fit=crop',
  'Brand Strategy Intern':
    'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&h=360&q=90&fit=crop',
  'Performance Marketing Intern':
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=360&q=90&fit=crop',
  'Financial Analyst Intern':
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=360&q=90&fit=crop',
  'Investment Analyst Intern':
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=360&q=90&fit=crop',
  'Corporate Finance Intern':
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=360&q=90&fit=crop',
  'FP&A Analyst Intern':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&q=90&fit=crop',
  'Talent Acquisition Intern':
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=360&q=90&fit=crop',
  'HR Business Partner Intern':
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=360&q=90&fit=crop',
  'Learning & Development Intern':
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=360&q=90&fit=crop',
  'People Analytics Intern':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&q=90&fit=crop',
  'Supply Chain Analyst Intern':
    'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=600&h=360&q=90&fit=crop',
  'Procurement Analyst Intern':
    'https://images.unsplash.com/photo-1664575602807-e002fc20892c?w=600&h=360&q=90&fit=crop',
  'Logistics Operations Intern':
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=360&q=90&fit=crop',
  'Project Management Intern':
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=360&q=90&fit=crop',
  'Agile / Scrum Intern':
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=360&q=90&fit=crop',
  'Program Management Intern':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&q=90&fit=crop',
  'Startup Operations Intern':
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=360&q=90&fit=crop',
  'Venture Analyst Intern':
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=360&q=90&fit=crop',
  'Innovation Strategy Intern':
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&q=90&fit=crop',
  'International Business Analyst Intern':
    'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=600&h=360&q=90&fit=crop',
  'Global Strategy Intern':
    'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&h=360&q=90&fit=crop',
  'Sustainability & ESG Intern':
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=360&q=90&fit=crop',
};

const getRoleImg = (roleTitle, domainId) =>
  ROLE_IMG[roleTitle] || DIMG[domainId] || DIMG['cs'];

const MIMG = {
  'Career Programs':
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=90&fit=crop',
  'Placement Assistance':
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=90&fit=crop',
  'Corporate Solutions':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=90&fit=crop',
  'Research & Innovation':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=90&fit=crop',
  'Workshops & Bootcamps':
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=90&fit=crop',
  'Knowledge Hub':
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=90&fit=crop',
};

/* ─────────────────────────────────────────────────────────────
   TRAINING DATA
───────────────────────────────────────────────────────────── */
const IT_TRAININGS = [
  {
    title: 'Full Stack Development',
    desc: 'Build end-to-end web applications with modern frontend and backend technologies.',
    topics: [
      'React / Angular / Vue',
      'Node.js & Express',
      'REST APIs & GraphQL',
      'Databases (SQL & NoSQL)',
      'Docker & Deployment',
    ],
    category: 'Development',
  },
  {
    title: 'Data Science & AI',
    desc: 'Master data analysis, machine learning, and AI-powered solutions at scale.',
    topics: [
      'Python for Data Science',
      'Machine Learning',
      'Deep Learning & Neural Networks',
      'NLP & Computer Vision',
      'MLOps & Deployment',
    ],
    category: 'AI & Data',
  },
  {
    title: 'Cybersecurity',
    desc: 'Protect systems, networks, and data with industry-standard security practices.',
    topics: [
      'Ethical Hacking & Pen Testing',
      'SOC & Threat Intelligence',
      'Cloud Security',
      'GRC & Compliance',
      'Incident Response',
    ],
    category: 'Security',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Design, deploy, and manage scalable cloud infrastructure and CI/CD pipelines.',
    topics: [
      'AWS / Azure / GCP',
      'Kubernetes & Docker',
      'Terraform & IaC',
      'CI/CD Pipelines',
      'SRE Practices',
    ],
    category: 'Cloud & DevOps',
  },
  {
    /* ════ TESTING — its own standalone card ════ */
    title: 'Testing',
    desc: 'Master the complete testing spectrum — from lifecycles and structured methodologies to automation, performance, security, and every specialised testing type used across the industry.',
    topics: [
      'SDLC (Software Development Life Cycle)',
      'STLC (Software Testing Life Cycle)',
      'V-Model & Agile Testing Lifecycle',
      'Unit Testing (JUnit, NUnit, pytest, Mocha)',
      'Integration Testing (Top-Down, Bottom-Up, Big Bang)',
      'System Testing (End-to-End Validation)',
      'Acceptance Testing (UAT, BAT, Alpha, Beta)',
      'Black Box Testing',
      'White Box Testing (Statement, Branch, Path Coverage)',
      'Grey Box Testing',
      'Equivalence Partitioning',
      'Boundary Value Analysis (BVA)',
      'Hill Testing (Pairwise / Combinatorial)',
      'Decision Table Testing',
      'State Transition Testing',
      'Use Case Testing',
      'Regression Testing & Smoke Testing',
      'Sanity Testing & Exploratory Testing',
      'Usability Testing',
      'Compatibility & Cross-Browser Testing',
      'Test Automation (Selenium, Cypress, Playwright)',
      'API Testing (Postman, REST Assured, SoapUI)',
      'Mobile Testing (Appium, XCUITest)',
      'Performance Testing (JMeter, Gatling, k6)',
      'Load Testing & Stress Testing',
      'Endurance (Soak) Testing & Spike Testing',
      'Security Testing & OWASP Top 10',
      'Penetration Testing Basics',
      'Shift-Left Testing & Agile QA',
      'Defect Life Cycle & Bug Reporting',
      'Test Management Tools (Jira, TestRail, Zephyr)',
      'ISTQB Foundation Certification Prep',
    ],
    category: 'Testing',
  },
  {
    /* ════ EMBEDDED SYSTEMS & IoT — core only, no automotive ════ */
    title: 'Embedded Systems & IoT',
    desc: 'Design firmware, real-time systems, and connected IoT solutions for resource-constrained hardware — from microcontrollers and RTOS to industrial edge computing.',
    topics: [
      'C/C++ for Embedded Systems',
      'RTOS & Firmware Development',
      'Microcontrollers (ARM Cortex, AVR, STM32)',
      'IoT Protocols (MQTT, CoAP, BLE, Zigbee)',
      'Raspberry Pi, Arduino & ESP32',
      'Industrial IoT & Edge Computing',
      'Embedded Linux & Device Drivers',
      'Real-Time Communication Fundamentals',
    ],
    category: 'Embedded',
  },
  {
    /* ════ AUTOMOTIVE — its own separate card ════ */
    title: 'Automotive',
    desc: 'Build expertise in automotive embedded software — vehicle communication protocols, ECU development, functional safety, and ADAS — following industry-standard SDLC and STLC frameworks.',
    topics: [
      'Automotive SDLC & STLC',
      'CAN (Controller Area Network) Protocol',
      'UDS (Unified Diagnostic Services — ISO 14229)',
      'CANoe & CANalyzer — Vector Tools',
      'CAPL Scripting for Test Automation',
      'LIN, FlexRay & Ethernet (DoIP) Protocols',
      'AUTOSAR Architecture (Classic & Adaptive)',
      'ECU Development & Diagnostics',
      'ISO 26262 Functional Safety (FuSa)',
      'ASPICE Process Framework',
      'Hardware-in-the-Loop (HiL) Testing',
      'ADAS & Autonomous Systems Fundamentals',
    ],
    category: 'Automotive',
  },
  {
    title: 'Networking & Infrastructure',
    desc: 'Build and manage enterprise-grade network and infrastructure systems.',
    topics: [
      'Cisco / CompTIA Prep (CCNA, Network+)',
      'Network Design & Routing Protocols',
      'Systems Administration (Windows & Linux)',
      'Virtualization (VMware, Hyper-V)',
      'Data Center & Cloud Networking',
    ],
    category: 'Infrastructure',
  },
  {
    title: 'Blockchain & Web3',
    desc: 'Explore decentralized technologies, Web3 development, and next-gen platforms.',
    topics: [
      'Blockchain Fundamentals & Consensus',
      'Smart Contracts (Solidity)',
      'Web3.js / Ethers.js',
      'NFT & DeFi Platforms',
      'AR/VR Integration Basics',
    ],
    category: 'Emerging Tech',
  },
  {
    title: 'Product & UX Design',
    desc: 'Design intuitive digital experiences and lead products from concept to launch.',
    topics: [
      'UX Research & Wireframing',
      'Figma & Prototyping',
      'Product Roadmapping',
      'Agile Product Management',
      'Design Systems',
    ],
    category: 'Design',
  },
  {
    title: 'Corporate IT Programs',
    desc: 'Customized enterprise-level IT training for teams and organizations at scale.',
    topics: [
      'Custom Curriculum Design',
      'Team Upskilling Programs',
      'ITSM & ITIL for Teams',
      'Security Awareness Training',
      'Digital Transformation Strategy',
    ],
    category: 'Corporate',
  },
];

const MGMT_TRAININGS = [
  { title: 'MBA Core Management',        desc: 'A comprehensive foundation in business strategy, operations, and leadership.',   topics: ['Business Strategy', 'Organizational Behavior', 'Financial Management', 'Marketing Fundamentals', 'Operations Management'],             category: 'MBA'              },
  { title: 'Business Analytics',         desc: 'Turn data into actionable business insights using modern analytics tools.',      topics: ['Excel & Power BI', 'SQL for Business', 'Data Storytelling', 'KPI Dashboards', 'Forecasting & Modeling'],                            category: 'Analytics'        },
  { title: 'Marketing & Sales',          desc: 'Drive revenue growth with modern digital marketing and sales strategies.',       topics: ['Digital Marketing (SEO/SEM)', 'CRM & Sales Funnels', 'Brand Strategy', 'Performance Marketing', 'Customer Experience'],             category: 'Marketing'        },
  { title: 'Finance & Investment',       desc: 'Master financial analysis, investment strategies, and corporate finance.',       topics: ['Financial Modeling', 'Investment Analysis', 'Corporate Finance', 'Risk Management', 'FinTech Essentials'],                          category: 'Finance'          },
  { title: 'Human Resources',            desc: 'Lead people, culture, and talent strategy in modern organizations.',            topics: ['Talent Acquisition', 'HR Business Partnering', 'L&D Strategy', 'People Analytics', 'Employer Branding'],                            category: 'HR'               },
  { title: 'Operations & Supply Chain',  desc: 'Optimize processes, supply chains, and logistics for maximum efficiency.',      topics: ['Supply Chain Management', 'Lean & Six Sigma', 'Procurement Strategies', 'Inventory Planning', 'Process Excellence'],                category: 'Operations'       },
  { title: 'Project Management',         desc: 'Deliver projects on time and on budget with proven PM methodologies.',          topics: ['PMP & Agile Prep', 'Scrum & Kanban', 'Risk Management', 'Stakeholder Management', 'MS Project / Jira'],                             category: 'Project Mgmt'     },
  { title: 'Entrepreneurship & Startup', desc: 'Build and scale your startup with practical frameworks and investor insight.',  topics: ['Lean Startup Methodology', 'Business Model Canvas', 'Fundraising & Pitch Decks', 'Go-to-Market Strategy', 'Legal & Finance Basics'], category: 'Entrepreneurship' },
  { title: 'Digital Transformation',     desc: 'Lead organizational change through technology adoption and innovation.',        topics: ['Digital Strategy', 'Change Management', 'AI & Automation Adoption', 'Customer-Centric Design', 'Innovation Frameworks'],              category: 'Strategy'         },
  { title: 'Leadership & Executive',     desc: 'Develop the mindset, skills, and presence of an effective executive leader.',  topics: ['Executive Communication', 'Strategic Decision Making', 'High-Performance Teams', 'Emotional Intelligence', 'C-Suite Coaching'],      category: 'Leadership'       },
];

/* ─────────────────────────────────────────────────────────────
   INTERNSHIP DOMAINS
   Embedded domain now includes Automotive roles
   QA domain now includes all testing specialty roles
───────────────────────────────────────────────────────────── */
const IT_DOMAINS = [
  {
    id: 'cs', label: 'Computer Science & Software Engineering', color: '#1A3A5C',
    roles: [
      { title: 'Software Engineer Intern',          desc: 'Design and build production-grade software systems across the full stack.' },
      { title: 'Full Stack Developer Intern',        desc: 'Develop end-to-end web features across frontend and backend stacks.' },
      { title: 'Backend Developer Intern',           desc: 'Build scalable server-side logic, APIs, and data pipelines.' },
      { title: 'Frontend Developer Intern',          desc: 'Create responsive, accessible UI components using modern frameworks.' },
      { title: 'Mobile App Developer Intern',        desc: 'Build cross-platform mobile applications for iOS and Android.' },
      { title: 'DevOps Engineer Intern',             desc: 'Automate infrastructure provisioning and streamline CI/CD deployments.' },
      { title: 'Site Reliability Engineer Intern',   desc: 'Maintain service reliability, uptime, and performance at scale.' },
      { title: 'Cloud Application Developer Intern', desc: 'Develop cloud-native applications on AWS, Azure, or GCP.' },
      { title: 'QA Automation Engineer Intern',      desc: 'Build automated test suites to ensure software quality and release confidence.' },
      { title: 'Software Architect Intern',          desc: 'Assist in designing scalable and maintainable software architectures.' },
    ],
  },
  {
    id: 'data', label: 'Data Science, Analytics & Engineering', color: '#5B21B6',
    roles: [
      { title: 'Data Analyst Intern',                  desc: 'Analyse datasets and surface actionable insights for business teams.' },
      { title: 'Business Intelligence Analyst Intern',  desc: 'Build BI dashboards and reports to support strategic decisions.' },
      { title: 'Data Scientist Intern',                 desc: 'Apply statistical models and ML techniques to real-world problems.' },
      { title: 'Machine Learning Engineer Intern',      desc: 'Build, train, and deploy machine learning models at scale.' },
      { title: 'Data Engineer Intern',                  desc: 'Design and maintain robust data pipelines and warehouse architecture.' },
      { title: 'Analytics Engineer Intern',             desc: 'Transform raw data into clean, modelled datasets for analytics.' },
      { title: 'MLOps Engineer Intern',                 desc: 'Operationalise ML models from experimentation through to production.' },
    ],
  },
  {
    id: 'ai', label: 'Artificial Intelligence & Advanced AI', color: '#065F46',
    roles: [
      { title: 'AI Engineer Intern',               desc: 'Build intelligent systems leveraging state-of-the-art AI techniques.' },
      { title: 'Deep Learning Engineer Intern',     desc: 'Design and train deep neural networks for complex classification and generation tasks.' },
      { title: 'NLP Engineer Intern',               desc: 'Develop natural language processing pipelines and language models.' },
      { title: 'Computer Vision Engineer Intern',   desc: 'Build image and video analysis systems using computer vision algorithms.' },
      { title: 'Generative AI Engineer Intern',     desc: 'Build applications powered by generative AI and large language models.' },
      { title: 'Conversational AI Engineer Intern', desc: 'Design and develop intelligent chatbots and voice assistant systems.' },
    ],
  },
  {
    id: 'cyber', label: 'Cybersecurity & Information Security', color: '#C0392B',
    roles: [
      { title: 'Cybersecurity Analyst Intern', desc: 'Monitor, detect, and respond to cyber threats across the organisation.' },
      { title: 'SOC Analyst Intern',           desc: 'Analyse security events and alerts in a Security Operations Centre.' },
      { title: 'Ethical Hacker Intern',        desc: 'Conduct authorised penetration attacks to identify security vulnerabilities.' },
      { title: 'Penetration Testing Intern',   desc: 'Test applications and networks for exploitable security weaknesses.' },
      { title: 'Cloud Security Intern',        desc: 'Secure cloud environments and workloads across AWS, Azure, and GCP.' },
      { title: 'Incident Response Intern',     desc: 'Respond to, contain, and recover from security incidents and breaches.' },
    ],
  },
  {
    id: 'cloud', label: 'Cloud, DevOps & Platform Engineering', color: '#0D6B6B',
    roles: [
      { title: 'Cloud Engineer Intern',            desc: 'Build and manage scalable cloud infrastructure for modern applications.' },
      { title: 'Cloud Solutions Architect Intern', desc: 'Design cost-efficient, highly available cloud architectures.' },
      { title: 'DevOps Engineer Intern',           desc: 'Accelerate software delivery through automation and cross-team collaboration.' },
      { title: 'Kubernetes Engineer Intern',       desc: 'Deploy and manage containerised workloads on Kubernetes clusters.' },
      { title: 'Platform Engineer Intern',         desc: 'Build internal developer platforms that improve engineering productivity.' },
      { title: 'SRE Intern',                       desc: 'Apply software engineering principles to solve infrastructure reliability problems.' },
    ],
  },
  {
    id: 'network', label: 'Networking, Infrastructure & Systems', color: '#B45309',
    roles: [
      { title: 'Network Engineer Intern',      desc: 'Design, implement, and maintain enterprise network infrastructure.' },
      { title: 'NOC Intern',                   desc: 'Monitor network performance and resolve connectivity incidents in real time.' },
      { title: 'Systems Administrator Intern', desc: 'Manage and maintain servers, operating systems, and IT systems.' },
      { title: 'Linux Engineer Intern',        desc: 'Administer and automate Linux-based server environments using shell scripting.' },
    ],
  },
  {
    /* ════ EMBEDDED SYSTEMS & IoT — core domain only ════ */
    id: 'embedded', label: 'Embedded Systems & IoT', color: '#7C3AED',
    roles: [
      {
        title: 'Embedded Systems Engineer Intern',
        desc: 'Develop firmware and low-level software for microcontrollers and resource-constrained embedded hardware using C/C++ and RTOS.',
      },
      {
        title: 'Firmware Developer Intern',
        desc: 'Write, debug, and optimise firmware for ARM Cortex, STM32, and AVR microcontrollers in bare-metal and RTOS environments.',
      },
      {
        title: 'IoT Application Developer Intern',
        desc: 'Build end-to-end IoT solutions connecting physical devices to cloud platforms using MQTT, CoAP, BLE, and edge computing.',
      },
      {
        title: 'Robotics Systems Engineer Intern',
        desc: 'Develop control algorithms and communication systems for robotic platforms using ROS, C++, and sensor integration.',
      },
    ],
  },
  {
    /* ════ AUTOMOTIVE — its own domain in sidebar ════ */
    id: 'automotive', label: 'Automotive Engineering', color: '#B45309',
    roles: [
      {
        title: 'Automotive Software Engineer Intern',
        desc: 'Develop and validate automotive ECU software components following AUTOSAR architecture (Classic & Adaptive) and ISO 26262 functional safety standards.',
      },
      {
        title: 'CAN / Bus Protocol Engineer Intern',
        desc: 'Work hands-on with CAN, LIN, FlexRay, and DoIP vehicle network protocols using Vector CANoe and CANalyzer toolchains for communication analysis, testing, and diagnostics.',
      },
      {
        title: 'Automotive ECU Test Engineer Intern',
        desc: 'Design and execute ECU test cases using CAPL scripting, UDS (ISO 14229) diagnostics, and Hardware-in-the-Loop (HiL) simulation environments following automotive SDLC and STLC.',
      },
      {
        title: 'ADAS & Autonomous Systems Intern',
        desc: 'Support development and validation of Advanced Driver Assistance Systems — sensor fusion, lane detection, radar/LiDAR processing, and autonomous feature testing.',
      },
    ],
  },
  {
    id: 'blockchain', label: 'Blockchain, Web3 & Emerging Tech', color: '#92400E',
    roles: [
      { title: 'Blockchain Developer Intern',     desc: 'Build decentralised applications on public and private blockchain networks.' },
      { title: 'Web3 Developer Intern',           desc: 'Develop frontend applications that interact with Web3 protocols and wallets.' },
      { title: 'Smart Contract Developer Intern', desc: 'Write, test, and audit smart contracts in Solidity on Ethereum and beyond.' },
      { title: 'AR/VR Developer Intern',          desc: 'Create augmented and virtual reality applications for mobile and headset platforms.' },
    ],
  },
  {
    /* ════════════════════════════════════════════════════════
       QUALITY ENGINEERING & TESTING — FULLY EXPANDED
       Covers ALL major testing types and specializations
    ════════════════════════════════════════════════════════ */
    id: 'qa', label: 'Quality Engineering & Software Testing', color: '#0D9488',
    roles: [
      {
        title: 'QA Engineer Intern',
        desc: 'Own the complete Software Testing Life Cycle (STLC) — from test planning, test case design (based on SDLC phases), execution, defect reporting, and release sign-off using Jira, TestRail, and Zephyr.',
      },
      {
        title: 'Manual & Black/White Box Testing Intern',
        desc: 'Conduct structured manual testing including Black Box Testing, White Box Testing (statement/branch/path coverage), Grey Box, Exploratory, Sanity, Smoke, Regression, UAT, and Acceptance Testing (Alpha/Beta).',
      },
      {
        title: 'Test Automation Engineer Intern',
        desc: 'Build and maintain automated test frameworks using Selenium WebDriver, Cypress, Playwright, and REST Assured — covering unit testing (JUnit, pytest), integration testing, and end-to-end test suites.',
      },
      {
        title: 'Performance & Load Testing Intern',
        desc: 'Design and execute performance test scenarios — Load Testing, Stress Testing, Spike Testing, and Endurance (Soak) Testing — using Apache JMeter, Gatling, and k6 to validate scalability and identify bottlenecks.',
      },
      {
        title: 'Security & Penetration Testing Intern',
        desc: 'Perform vulnerability assessments, input validation testing, authentication testing, and integrate OWASP Top 10 security testing into the SDLC using Burp Suite and OWASP ZAP.',
      },
      {
        title: 'Mobile & Cross-Platform Testing Intern',
        desc: 'Test native and hybrid mobile applications on Android and iOS using Appium, XCUITest, and Espresso — covering functional, compatibility, usability, and device-specific testing on real devices and emulators.',
      },
    ],
  },
  {
    id: 'product', label: 'Product Management, UX & Digital Experience', color: '#BE185D',
    roles: [
      { title: 'Product Management Intern', desc: 'Shape product strategy across design, engineering, and business stakeholders.' },
      { title: 'UX/UI Designer Intern',     desc: 'Design user-centred interfaces and experiences for web and mobile products.' },
      { title: 'Design Research Intern',    desc: 'Conduct user research to uncover insights that drive product design decisions.' },
      { title: 'Product Analytics Intern',  desc: 'Analyse product usage data to guide roadmap priorities and feature decisions.' },
    ],
  },
  {
    id: 'itsupport', label: 'IT Operations, Support & Service Management', color: '#374151',
    roles: [
      { title: 'IT Support Engineer Intern',   desc: 'Provide technical support and resolve IT hardware and software issues for end users.' },
      { title: 'IT Service Management Intern', desc: 'Apply ITSM frameworks (ITIL) to improve IT service delivery and operations processes.' },
      { title: 'Operations Analyst Intern',    desc: 'Monitor IT operations dashboards and identify process improvement opportunities.' },
    ],
  },
];

const MGMT_DOMAINS = [
  { id: 'biz',    label: 'Business Analytics, Strategy & Consulting',   color: '#1A3A5C', roles: [{ title: 'Business Analyst Intern', desc: 'Bridge business needs and technical solutions through structured analysis.' }, { title: 'Strategy Analyst Intern', desc: 'Support senior leadership in developing and executing strategic plans.' }, { title: 'Management Consulting Intern', desc: 'Advise organisations on improving performance and solving complex problems.' }, { title: 'Corporate Strategy Intern', desc: 'Conduct competitive analysis and support long-term corporate planning.' }] },
  { id: 'mktg',   label: 'Marketing, Sales & Growth',                   color: '#C0392B', roles: [{ title: 'Digital Marketing Intern', desc: 'Execute digital campaigns across SEO, SEM, social media, and email channels.' }, { title: 'Growth Marketing Intern', desc: 'Run data-driven experiments to accelerate user acquisition and retention.' }, { title: 'Brand Strategy Intern', desc: 'Support brand positioning and communications across all customer touchpoints.' }, { title: 'Performance Marketing Intern', desc: 'Manage and optimise paid media campaigns for measurable ROI.' }] },
  { id: 'fin',    label: 'Finance, Accounting & FinTech',               color: '#065F46', roles: [{ title: 'Financial Analyst Intern', desc: 'Build financial models and analyse business performance metrics.' }, { title: 'Investment Analyst Intern', desc: 'Research investment opportunities and assess risk-return profiles.' }, { title: 'Corporate Finance Intern', desc: 'Support capital structure decisions, M&A analysis, and financial planning.' }, { title: 'FP&A Analyst Intern', desc: 'Support financial planning, budgeting, and quarterly forecasting processes.' }] },
  { id: 'hr',     label: 'Human Resources & Talent Management',         color: '#5B21B6', roles: [{ title: 'Talent Acquisition Intern', desc: 'Source, screen, and engage top candidates across multiple business functions.' }, { title: 'HR Business Partner Intern', desc: 'Partner with business leaders to align HR strategy with organisational goals.' }, { title: 'Learning & Development Intern', desc: 'Design and deliver learning programmes to upskill the workforce.' }, { title: 'People Analytics Intern', desc: 'Analyse workforce data to generate actionable HR insights and recommendations.' }] },
  { id: 'ops',    label: 'Operations, Supply Chain & Logistics',        color: '#B45309', roles: [{ title: 'Supply Chain Analyst Intern', desc: 'Optimise supply chain processes end-to-end from sourcing to last-mile delivery.' }, { title: 'Procurement Analyst Intern', desc: 'Support strategic procurement and vendor management processes.' }, { title: 'Logistics Operations Intern', desc: 'Coordinate logistics workflows and improve delivery efficiency and accuracy.' }] },
  { id: 'pm',     label: 'Project, Program & Delivery Management',      color: '#0D6B6B', roles: [{ title: 'Project Management Intern', desc: 'Coordinate project activities, timelines, budgets, and stakeholder communications.' }, { title: 'Agile / Scrum Intern', desc: 'Support agile ceremonies and help teams deliver iteratively and continuously.' }, { title: 'Program Management Intern', desc: 'Assist in managing interdependent projects and programmes across the organisation.' }] },
  { id: 'startup', label: 'Entrepreneurship, Innovation & Startup',     color: '#B45309', roles: [{ title: 'Startup Operations Intern', desc: 'Work across all functions in a fast-paced, high-growth startup environment.' }, { title: 'Venture Analyst Intern', desc: 'Evaluate startup investment opportunities, market potential, and founder teams.' }, { title: 'Innovation Strategy Intern', desc: 'Develop, prototype, and test new ideas to drive organisational innovation.' }] },
  { id: 'intl',   label: 'International Business, Policy & Governance', color: '#374151', roles: [{ title: 'International Business Analyst Intern', desc: 'Analyse cross-border business opportunities and market entry strategies.' }, { title: 'Global Strategy Intern', desc: 'Support international growth planning and expansion strategy development.' }, { title: 'Sustainability & ESG Intern', desc: 'Advance environmental, social, and governance initiatives and reporting.' }] },
];

const MORE_SERVICES = [
  { title: 'Career Programs',       desc: 'Structured end-to-end career development designed to fast-track your professional journey.',  points: ['Personalized career roadmap', 'Skill gap analysis & mentorship', 'Progress tracking dashboard', 'Industry networking access'] },
  { title: 'Placement Assistance',  desc: 'Dedicated placement support connecting you with top companies and opportunities globally.',    points: ['Resume & LinkedIn optimization', 'Mock interview coaching', 'Company referrals network', 'Offer negotiation support'] },
  { title: 'Corporate Solutions',   desc: 'Tailored enterprise training and talent solutions to upskill your workforce at scale.',        points: ['Custom training curriculum', 'Team upskilling sprints', 'L&D strategy consulting', 'ROI measurement & reporting'] },
  { title: 'Research & Innovation', desc: 'Cutting-edge applied research programs and innovation labs at the frontiers of technology.',  points: ['Industry research projects', 'Innovation hackathons', 'Patent & IP guidance', 'Academia-industry bridge'] },
  { title: 'Workshops & Bootcamps', desc: 'Intensive short-format learning experiences for rapid skill acquisition and practice.',       points: ['Weekend intensive formats', 'Live project bootcamps', 'Expert-led masterclasses', 'Certification on completion'] },
  { title: 'Knowledge Hub',         desc: 'A rich library of curated learning materials, guides, templates, and industry insights.',     points: ['Video lecture library', 'Case study repository', 'Industry report downloads', 'Community forums & Q&A'] },
];

const TABS = [
  { id: 'it',          label: 'IT Trainings',         badge: '12 Programs'  },
  { id: 'mgmt',        label: 'Management Trainings', badge: '10 Programs'  },
  { id: 'internships', label: 'Internships',          badge: '110+ Roles'   },
  { id: 'more',        label: 'More Services',        badge: '6 Services'   },
];

/* ─────────────────────────────────────────────────────────────
   SVG HELPERS
───────────────────────────────────────────────────────────── */
const IconSearch = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const IconCheck = () => (
  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.2">
    <polyline points="10 3 5 9 2 6"/>
  </svg>
);
const IconCheckOrange = () => (
  <svg className="fit__check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconChevron = ({ open }) => (
  <svg
    className={`fit__fr-chevron${open ? ' fit__fr-chevron--open' : ''}`}
    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
  >
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IconFilter = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   FILTER RAIL
───────────────────────────────────────────────────────────── */
function FitFilterRail({ categories, activeCategories, onToggle, search, onSearch, onClearAll }) {
  const [catOpen, setCatOpen] = useState(true);
  const hasFilters = activeCategories.length > 0 || search.trim().length > 0;
  return (
    <aside className="fit__filter-rail">
      <div className="fit__fr-topbar">
        <span className="fit__fr-title"><IconFilter /> Filters</span>
        <button className={`fit__fr-reset${hasFilters ? ' fit__fr-reset--show' : ''}`} onClick={onClearAll}>Reset</button>
      </div>
      <div className={`fit__fr-tags${activeCategories.length > 0 ? ' fit__fr-tags--show' : ''}`}>
        {activeCategories.map(cat => (
          <span key={cat} className="fit__fr-tag">
            {cat}<button className="fit__fr-tag-x" onClick={() => onToggle(cat)}>✕</button>
          </span>
        ))}
      </div>
      <div className="fit__fr-search-zone">
        <div className="fit__fr-search">
          <IconSearch />
          <input value={search} onChange={e => onSearch(e.target.value)} placeholder="Search programs…" />
          {search && <button className="fit__fr-search-x" onClick={() => onSearch('')}>✕</button>}
        </div>
      </div>
      <div className="fit__fr-group">
        <button className="fit__fr-group-btn" onClick={() => setCatOpen(o => !o)}>
          <span className="fit__fr-group-name">Category</span>
          <IconChevron open={catOpen} />
        </button>
        <div className={`fit__fr-options${catOpen ? '' : ' fit__fr-options--closed'}`}>
          {categories.map(cat => (
            <div key={cat} className="fit__fr-opt" onClick={() => onToggle(cat)}>
              <div className={`fit__fr-box${activeCategories.includes(cat) ? ' fit__fr-box--on' : ''}`}><IconCheck /></div>
              <span className="fit__fr-opt-label">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ─────────────────────────────────────────────────────────────
   TRAINING SECTION
───────────────────────────────────────────────────────────── */
function FitTrainingSection({ trainings, accentColor, eyebrow, title, subtitle }) {
  const [search, setSearch]                     = useState('');
  const [activeCategories, setActiveCategories] = useState([]);
  const categories = useMemo(() => [...new Set(trainings.map(t => t.category))], [trainings]);
  const toggle     = cat => setActiveCategories(p => p.includes(cat) ? p.filter(c => c !== cat) : [...p, cat]);
  const clearAll   = ()  => { setActiveCategories([]); setSearch(''); };
  const filtered   = useMemo(() => {
    let list = trainings;
    if (activeCategories.length) list = list.filter(t => activeCategories.includes(t.category));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q) ||
        t.topics.some(tp => tp.toLowerCase().includes(q))
      );
    }
    return list;
  }, [trainings, activeCategories, search]);

  return (
    <div className="fit__page-layout">
      <FitFilterRail categories={categories} activeCategories={activeCategories} onToggle={toggle} search={search} onSearch={setSearch} onClearAll={clearAll} />
      <div className="fit__main-area">
        <div className="fit__sec-head">
          <div className="fit__sec-eyebrow" style={{ color: accentColor }}>{eyebrow}</div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="fit__results-bar">
          <span className="fit__results-count">Showing <strong>{filtered.length}</strong> of {trainings.length} programs</span>
        </div>
        {filtered.length === 0 ? (
          <div className="fit__empty-state">
            <div className="fit__empty-icon">🔍</div>
            <p>No programs match your filters. Try adjusting your search or category.</p>
          </div>
        ) : (
          <div className="fit__training-grid">
            {filtered.map((card, i) => (
              <div key={i} className="fit__tc" style={{ animationDelay: `${i * 48}ms` }}>
                <div className="fit__tc-img-wrap">
                  <img
                    className="fit__tc-img"
                    src={IMG[card.title]}
                    alt={card.title}
                    loading="lazy"
                    onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=90&fit=crop'; }}
                  />
                  <div className="fit__tc-img-shade" />
                  <span className="fit__tc-cat">{card.category}</span>
                </div>
                <div className="fit__tc-body">
                  <h3 className="fit__tc-title">{card.title}</h3>
                  <p className="fit__tc-desc">{card.desc}</p>
                  <ul className="fit__tc-topics">
                    {card.topics.map((t, j) => (
                      <li key={j} style={t.startsWith('—') ? { fontWeight: 700, color: '#E85D04', borderBottom: 'none', paddingTop: '10px' } : {}}>
                        {!t.startsWith('—') && <span className="fit__tc-dot" />}
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact-us" className="fit__tc-btn" style={{ background: accentColor }}>Enquire Now</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   INTERNSHIPS SECTION
───────────────────────────────────────────────────────────── */
function FitInternshipsSection() {
  const [seg, setSeg]       = useState('it');
  const [activeDom, setDom] = useState('cs');
  const [search, setSearch] = useState('');
  const domains  = seg === 'it' ? IT_DOMAINS : MGMT_DOMAINS;
  const selected = domains.find(d => d.id === activeDom) || domains[0];
  const roles = useMemo(() => {
    if (!selected) return [];
    if (!search.trim()) return selected.roles;
    const q = search.toLowerCase();
    return selected.roles.filter(r => r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q));
  }, [selected, search]);
  const totalRoles = domains.reduce((a, d) => a + d.roles.length, 0);
  const switchSeg  = s => { setSeg(s); setDom(s === 'it' ? 'cs' : 'biz'); setSearch(''); };

  return (
    <div className="fit__int-wrap">
      <div className="fit__sec-head">
        <div className="fit__sec-eyebrow" style={{ color: '#E85D04' }}>Internship Opportunities</div>
        <h2>Launch Your Career Here</h2>
        <p>Over 110 internship roles across IT and Management — including dedicated Embedded Systems, Automotive Engineering, and Quality Engineering domains. Select a domain to explore.</p>
      </div>
      <div className="fit__int-top">
        <div className="fit__seg-toggle">
          <button className={`fit__seg-btn${seg === 'it' ? ' fit__seg-btn--on' : ''}`} onClick={() => switchSeg('it')}>IT Roles</button>
          <button className={`fit__seg-btn${seg === 'mgmt' ? ' fit__seg-btn--on' : ''}`} onClick={() => switchSeg('mgmt')}>Management Roles</button>
        </div>
        <span style={{ marginLeft: 'auto', fontSize: '.84rem', color: 'var(--fit-ink-50)', fontWeight: 500 }}>
          <strong style={{ color: 'var(--fit-ink)', fontFamily: "'Fraunces',serif", fontSize: '1.1rem' }}>{totalRoles}</strong>{' '}open roles · {domains.length} domains
        </span>
      </div>
      <div className="fit__int-body">
        <aside className="fit__int-sidebar">
          <div className="fit__int-sidebar-head">Domains</div>
          <div className="fit__int-sidebar-list">
            {domains.map(d => (
              <button
                key={d.id}
                className={`fit__int-dom-btn${activeDom === d.id ? ' fit__int-dom-btn--on' : ''}`}
                style={activeDom === d.id ? { background: `${d.color}12`, color: d.color } : {}}
                onClick={() => { setDom(d.id); setSearch(''); }}
              >
                <img
                  className="fit__int-dom-thumb"
                  src={DTHUMB[d.id]}
                  alt=""
                  onError={e => (e.target.style.display = 'none')}
                />
                <span className="fit__int-dom-lbl">{d.label}</span>
                <span className="fit__int-dom-cnt" style={activeDom === d.id ? { background: `${d.color}20`, color: d.color } : {}}>{d.roles.length}</span>
              </button>
            ))}
          </div>
        </aside>
        <div className="fit__int-main">
          <div className="fit__int-domain-banner" style={{ borderLeftColor: selected.color }}>
            <div className="fit__int-domain-banner-left">
              <img
                className="fit__int-domain-thumb"
                src={DIMG[selected.id]}
                alt={selected.label}
                onError={e => (e.target.style.display = 'none')}
              />
              <div>
                <div className="fit__int-domain-name">{selected.label}</div>
                <div className="fit__int-domain-meta">{selected.roles.length} internship roles available</div>
              </div>
            </div>
            <div className="fit__int-search">
              <IconSearch />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search roles…" />
              {search && <button className="fit__int-search-x" onClick={() => setSearch('')}>✕</button>}
            </div>
          </div>
          {roles.length === 0 ? (
            <div className="fit__int-empty"><div className="fit__int-empty-icon">🔍</div><p>No roles match your search.</p></div>
          ) : (
            <div className="fit__roles-grid">
              {roles.map((role, i) => (
                <div key={i} className="fit__role-card" style={{ animationDelay: `${i * 36}ms` }}>
                  <div className="fit__role-card-img-wrap">
                    <img
                      className="fit__role-card-img"
                      src={getRoleImg(role.title, selected.id)}
                      alt={role.title}
                      loading="lazy"
                      onError={e => { e.target.onerror = null; e.target.src = DIMG[selected.id]; }}
                    />
                  </div>
                  <div className="fit__role-card-body">
                    <span className="fit__role-domain-tag" style={{ background: `${selected.color}14`, color: selected.color }}>
                      {selected.label.split(',')[0].split('&')[0].trim()}
                    </span>
                    <h4 className="fit__role-title">{role.title}</h4>
                    <p className="fit__role-desc">{role.desc}</p>
                    <Link
                      to="/contact-us"
                      className="fit__role-cta"
                      style={{ background: selected.color, color: '#fff', borderColor: selected.color }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#d14e00'; e.currentTarget.style.borderColor = '#d14e00'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,93,4,.42)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = selected.color; e.currentTarget.style.borderColor = selected.color; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,.18)'; e.currentTarget.style.transform = 'none'; }}
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MORE SERVICES
───────────────────────────────────────────────────────────── */
function FitMoreSection() {
  return (
    <div className="fit__more-wrap">
      <div className="fit__sec-head">
        <div className="fit__sec-eyebrow" style={{ color: '#E85D04' }}>Additional Services</div>
        <h2>Beyond Training</h2>
        <p>Placement assistance, corporate solutions, intensive bootcamps, and a knowledge hub to support every stage of your career.</p>
      </div>
      <div className="fit__more-grid">
        {MORE_SERVICES.map((s, i) => (
          <div key={i} className="fit__more-card" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="fit__more-card-img-wrap">
              <img className="fit__more-card-img" src={MIMG[s.title]} alt={s.title} loading="lazy" onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=90&fit=crop'; }} />
            </div>
            <div className="fit__more-card-body">
              <h3 className="fit__more-card-title">{s.title}</h3>
              <p className="fit__more-card-desc">{s.desc}</p>
              <ul className="fit__more-list">{s.points.map((pt, j) => (<li key={j}><IconCheckOrange />{pt}</li>))}</ul>
              <Link to="/contact-us" className="fit__more-cta">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT COMPONENT
───────────────────────────────────────────────────────────── */
export default function TechServices() {
  const [activeTab, setActiveTab] = useState('it');
  const renderSection = () => {
    switch (activeTab) {
      case 'it':   return <FitTrainingSection key="it"   trainings={IT_TRAININGS}   accentColor="#E85D04" eyebrow="IT Training Programs"       title="Technology Mastery Programs"  subtitle="Industry-aligned programs from software engineering and AI to cloud, embedded systems, automotive, and emerging technologies." />;
      case 'mgmt': return <FitTrainingSection key="mgmt" trainings={MGMT_TRAININGS} accentColor="#E85D04" eyebrow="Management Programs"         title="Business Leadership Programs" subtitle="Strategic programmes covering MBA, analytics, finance, HR, leadership and digital transformation." />;
      case 'internships': return <FitInternshipsSection key="internships" />;
      case 'more':        return <FitMoreSection key="more" />;
      default: return null;
    }
  };
  return (
    <div className="fit__page">
      <header className="fit__hero">
        <div className="fit__hero-bg-img" />
        <div className="fit__hero-overlay" />
        <div className="fit__hero-glow-l" />
        <div className="fit__hero-glow-r" />
        <div className="fit__hero-inner">
          <div className="fit__hero-pill"><span className="fit__hero-pill-dot" />FlyInTake Global Consulting</div>
          <h1 className="fit__hero-h1">Your complete<br />career <em>ecosystem</em></h1>
          <p className="fit__hero-sub">World-class IT &amp; Management Trainings, Internships, Placement and Corporate Solutions — all in one place.</p>
        </div>
      </header>
      <nav className="fit__tab-nav">
        <div className="fit__tab-nav-inner">
          {TABS.map(tab => (
            <button key={tab.id} className={`fit__tab-btn${activeTab === tab.id ? ' fit__tab-active' : ''}`} onClick={() => setActiveTab(tab.id)}>
              {tab.label}<span className="fit__tab-badge">{tab.badge}</span>
            </button>
          ))}
        </div>
      </nav>
      <main className="fit__main-content">{renderSection()}</main>
    </div>
  );
}