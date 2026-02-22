import React, { useState, useMemo } from 'react';
import './TechServices.css';

/* ─────────────────────────────────────────────────────────────
   IMAGES — High-quality Unsplash URLs
───────────────────────────────────────────────────────────── */
const IMG = {
  'Full Stack Development':
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=95&fit=crop&auto=format',
  'Data Science & AI':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=95&fit=crop&auto=format',
  'Cybersecurity':
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=95&fit=crop&auto=format',
  'Cloud & DevOps':
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=95&fit=crop&auto=format',
  'Software Testing & QA':
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=95&fit=crop&auto=format',
  'Embedded Systems & IoT':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=95&fit=crop&auto=format',
  'Networking & Infrastructure':
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=95&fit=crop&auto=format',
  'Blockchain & Web3':
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=95&fit=crop&auto=format',
  'Product & UX Design':
    'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=95&fit=crop&auto=format',
  'Corporate IT Programs':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=95&fit=crop&auto=format',
  'MBA Core Management':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=95&fit=crop&auto=format',
  'Business Analytics':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=95&fit=crop&auto=format',
  'Marketing & Sales':
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=95&fit=crop&auto=format',
  'Finance & Investment':
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=95&fit=crop&auto=format',
  'Human Resources':
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=95&fit=crop&auto=format',
  'Operations & Supply Chain':
    'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&q=95&fit=crop&auto=format',
  'Project Management':
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=95&fit=crop&auto=format',
  'Entrepreneurship & Startup':
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=95&fit=crop&auto=format',
  'Digital Transformation':
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=95&fit=crop&auto=format',
  'Leadership & Executive':
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=95&fit=crop&auto=format',
};

/* ── Domain images — crisp, specific, high-resolution ── */
const DIMG = {
  cs:         'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=500&q=100&fit=crop&auto=format',
  data:       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&q=100&fit=crop&auto=format',
  ai:         'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&q=100&fit=crop&auto=format',
  cyber:      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&q=100&fit=crop&auto=format',
  cloud:      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&q=100&fit=crop&auto=format',
  network:    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&q=100&fit=crop&auto=format',
  embedded:   'https://images.unsplash.com/photo-1518770660439-d29c79bcf13a?w=800&h=500&q=100&fit=crop&auto=format',
  blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&q=100&fit=crop&auto=format',
  qa:         'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&q=100&fit=crop&auto=format',
  product:    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&q=100&fit=crop&auto=format',
  itsupport:  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&q=100&fit=crop&auto=format',
  biz:        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&q=100&fit=crop&auto=format',
  mktg:       'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=500&q=100&fit=crop&auto=format',
  fin:        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&q=100&fit=crop&auto=format',
  hr:         'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&q=100&fit=crop&auto=format',
  ops:        'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&h=500&q=100&fit=crop&auto=format',
  pm:         'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&q=100&fit=crop&auto=format',
  startup:    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=500&q=100&fit=crop&auto=format',
  intl:       'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&h=500&q=100&fit=crop&auto=format',
};

/* Sidebar thumbnails — small squares */
const DTHUMB = {
  cs:         'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=120&h=120&q=100&fit=crop&auto=format',
  data:       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&q=100&fit=crop&auto=format',
  ai:         'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=120&h=120&q=100&fit=crop&auto=format',
  cyber:      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=120&q=100&fit=crop&auto=format',
  cloud:      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=120&h=120&q=100&fit=crop&auto=format',
  network:    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=120&h=120&q=100&fit=crop&auto=format',
  embedded:   'https://images.unsplash.com/photo-1518770660439-d29c79bcf13a?w=120&h=120&q=100&fit=crop&auto=format',
  blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=120&q=100&fit=crop&auto=format',
  qa:         'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&q=100&fit=crop&auto=format',
  product:    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&q=100&fit=crop&auto=format',
  itsupport:  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=120&h=120&q=100&fit=crop&auto=format',
  biz:        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&q=100&fit=crop&auto=format',
  mktg:       'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=120&h=120&q=100&fit=crop&auto=format',
  fin:        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=120&h=120&q=100&fit=crop&auto=format',
  hr:         'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=120&h=120&q=100&fit=crop&auto=format',
  ops:        'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=120&h=120&q=100&fit=crop&auto=format',
  pm:         'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=120&h=120&q=100&fit=crop&auto=format',
  startup:    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=120&h=120&q=100&fit=crop&auto=format',
  intl:       'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=120&h=120&q=100&fit=crop&auto=format',
};

/* ─────────────────────────────────────────────────────────────
   ROLE-SPECIFIC IMAGES
   Each role title maps to a unique Unsplash image
───────────────────────────────────────────────────────────── */
const ROLE_IMG = {
  // ── Computer Science & Software Engineering ──
  'Software Engineer Intern':
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=360&q=90&fit=crop&auto=format',
  'Full Stack Developer Intern':
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=360&q=90&fit=crop&auto=format',
  'Backend Developer Intern':
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=360&q=90&fit=crop&auto=format',
  'Frontend Developer Intern':
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=360&q=90&fit=crop&auto=format',
  'Mobile App Developer Intern':
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=360&q=90&fit=crop&auto=format',
  'DevOps Engineer Intern':
    'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=360&q=90&fit=crop&auto=format',
  'Site Reliability Engineer Intern':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&q=90&fit=crop&auto=format',
  'Cloud Application Developer Intern':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&q=90&fit=crop&auto=format',
  'QA Automation Engineer Intern':
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=360&q=90&fit=crop&auto=format',
  'Software Architect Intern':
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Data Science, Analytics & Engineering ──
  'Data Analyst Intern':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&q=90&fit=crop&auto=format',
  'Business Intelligence Analyst Intern':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&q=90&fit=crop&auto=format',
  'Data Scientist Intern':
    'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=360&q=90&fit=crop&auto=format',
  'Machine Learning Engineer Intern':
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=360&q=90&fit=crop&auto=format',
  'Data Engineer Intern':
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=360&q=90&fit=crop&auto=format',
  'Analytics Engineer Intern':
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=360&q=90&fit=crop&auto=format',
  'MLOps Engineer Intern':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Artificial Intelligence ──
  'AI Engineer Intern':
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=360&q=90&fit=crop&auto=format',
  'Deep Learning Engineer Intern':
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=360&q=90&fit=crop&auto=format',
  'NLP Engineer Intern':
    'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&h=360&q=90&fit=crop&auto=format',
  'Computer Vision Engineer Intern':
    'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&h=360&q=90&fit=crop&auto=format',
  'Generative AI Engineer Intern':
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=360&q=90&fit=crop&auto=format',
  'Conversational AI Engineer Intern':
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Cybersecurity ──
  'Cybersecurity Analyst Intern':
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=360&q=90&fit=crop&auto=format',
  'SOC Analyst Intern':
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=360&q=90&fit=crop&auto=format',
  'Ethical Hacker Intern':
    'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&h=360&q=90&fit=crop&auto=format',
  'Penetration Testing Intern':
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=360&q=90&fit=crop&auto=format',
  'Cloud Security Intern':
    'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=360&q=90&fit=crop&auto=format',
  'Incident Response Intern':
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Cloud & DevOps ──
  'Cloud Engineer Intern':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&q=90&fit=crop&auto=format',
  'Cloud Solutions Architect Intern':
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=360&q=90&fit=crop&auto=format',
  'Kubernetes Engineer Intern':
    'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=360&q=90&fit=crop&auto=format',
  'Platform Engineer Intern':
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&q=90&fit=crop&auto=format',
  'SRE Intern':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Networking & Infrastructure ──
  'Network Engineer Intern':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&q=90&fit=crop&auto=format',
  'NOC Intern':
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=360&q=90&fit=crop&auto=format',
  'Systems Administrator Intern':
    'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=600&h=360&q=90&fit=crop&auto=format',
  'Linux Engineer Intern':
    'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Embedded Systems & IoT ──
  'Embedded Systems Engineer Intern':
    'https://images.unsplash.com/photo-1518770660439-d29c79bcf13a?w=600&h=360&q=90&fit=crop&auto=format',
  'Firmware Developer Intern':
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=360&q=90&fit=crop&auto=format',
  'IoT Application Developer Intern':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=360&q=90&fit=crop&auto=format',
  'Robotics Systems Engineer Intern':
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Blockchain & Web3 ──
  'Blockchain Developer Intern':
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=360&q=90&fit=crop&auto=format',
  'Web3 Developer Intern':
    'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=600&h=360&q=90&fit=crop&auto=format',
  'Smart Contract Developer Intern':
    'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&h=360&q=90&fit=crop&auto=format',
  'AR/VR Developer Intern':
    'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&h=360&q=90&fit=crop&auto=format',

  // ── QA & Testing ──
  'QA Engineer Intern':
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=360&q=90&fit=crop&auto=format',
  'Automation Testing Intern':
    'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=360&q=90&fit=crop&auto=format',
  'Performance Testing Intern':
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Product & UX ──
  'Product Management Intern':
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=360&q=90&fit=crop&auto=format',
  'UX/UI Designer Intern':
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=360&q=90&fit=crop&auto=format',
  'Design Research Intern':
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=360&q=90&fit=crop&auto=format',
  'Product Analytics Intern':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&q=90&fit=crop&auto=format',

  // ── IT Support ──
  'IT Support Engineer Intern':
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=360&q=90&fit=crop&auto=format',
  'IT Service Management Intern':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=360&q=90&fit=crop&auto=format',
  'Operations Analyst Intern':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Business Analytics & Strategy ──
  'Business Analyst Intern':
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=360&q=90&fit=crop&auto=format',
  'Strategy Analyst Intern':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&q=90&fit=crop&auto=format',
  'Management Consulting Intern':
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=360&q=90&fit=crop&auto=format',
  'Corporate Strategy Intern':
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Marketing & Sales ──
  'Digital Marketing Intern':
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=360&q=90&fit=crop&auto=format',
  'Growth Marketing Intern':
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=360&q=90&fit=crop&auto=format',
  'Brand Strategy Intern':
    'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&h=360&q=90&fit=crop&auto=format',
  'Performance Marketing Intern':
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Finance ──
  'Financial Analyst Intern':
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=360&q=90&fit=crop&auto=format',
  'Investment Analyst Intern':
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=360&q=90&fit=crop&auto=format',
  'Corporate Finance Intern':
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=360&q=90&fit=crop&auto=format',
  'FP&A Analyst Intern':
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=360&q=90&fit=crop&auto=format',

  // ── HR ──
  'Talent Acquisition Intern':
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=360&q=90&fit=crop&auto=format',
  'HR Business Partner Intern':
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=360&q=90&fit=crop&auto=format',
  'Learning & Development Intern':
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=360&q=90&fit=crop&auto=format',
  'People Analytics Intern':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Operations & Supply Chain ──
  'Supply Chain Analyst Intern':
    'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=600&h=360&q=90&fit=crop&auto=format',
  'Procurement Analyst Intern':
    'https://images.unsplash.com/photo-1664575602807-e002fc20892c?w=600&h=360&q=90&fit=crop&auto=format',
  'Logistics Operations Intern':
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Project Management ──
  'Project Management Intern':
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=360&q=90&fit=crop&auto=format',
  'Agile / Scrum Intern':
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=360&q=90&fit=crop&auto=format',
  'Program Management Intern':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&q=90&fit=crop&auto=format',

  // ── Startup & Innovation ──
  'Startup Operations Intern':
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=360&q=90&fit=crop&auto=format',
  'Venture Analyst Intern':
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=360&q=90&fit=crop&auto=format',
  'Innovation Strategy Intern':
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=360&q=90&fit=crop&auto=format',

  // ── International Business ──
  'International Business Analyst Intern':
    'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=600&h=360&q=90&fit=crop&auto=format',
  'Global Strategy Intern':
    'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&h=360&q=90&fit=crop&auto=format',
  'Sustainability & ESG Intern':
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=360&q=90&fit=crop&auto=format',
};

/* Fallback if a role title isn't in the map */
const getRoleImg = (roleTitle, domainId) =>
  ROLE_IMG[roleTitle] || DIMG[domainId];

const MIMG = {
  'Career Programs':
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=95&fit=crop&auto=format',
  'Placement Assistance':
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=95&fit=crop&auto=format',
  'Corporate Solutions':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=95&fit=crop&auto=format',
  'Research & Innovation':
    'https://images.unsplash.com/photo-1532094349884-543559244985?w=800&q=95&fit=crop&auto=format',
  'Workshops & Bootcamps':
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=95&fit=crop&auto=format',
  'Knowledge Hub':
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=95&fit=crop&auto=format',
};

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const IT_TRAININGS = [
  { title:'Full Stack Development',      desc:'Build end-to-end web apps with modern frontend and backend technologies.',       topics:['React / Angular / Vue','Node.js & Express','REST APIs & GraphQL','Databases (SQL & NoSQL)','Docker & Deployment'],              category:'Development'    },
  { title:'Data Science & AI',           desc:'Master data analysis, machine learning, and AI-powered solutions at scale.',     topics:['Python for Data Science','Machine Learning','Deep Learning & Neural Nets','NLP & Computer Vision','MLOps & Deployment'],       category:'AI & Data'      },
  { title:'Cybersecurity',               desc:'Protect systems, networks, and data with industry-standard security practices.', topics:['Ethical Hacking & Pen Testing','SOC & Threat Intelligence','Cloud Security','GRC & Compliance','Incident Response'],           category:'Security'       },
  { title:'Cloud & DevOps',              desc:'Design, deploy, and manage scalable cloud infrastructure and CI/CD pipelines.',  topics:['AWS / Azure / GCP','Kubernetes & Docker','Terraform & IaC','CI/CD Pipelines','SRE Practices'],                                category:'Cloud & DevOps' },
  { title:'Software Testing & QA',       desc:'Ensure software quality through manual and automated testing methodologies.',    topics:['Manual & Exploratory Testing','Selenium & Cypress','API Testing (Postman)','Performance Testing','ISTQB Prep'],                category:'Development'    },
  { title:'Embedded Systems & IoT',      desc:'Design firmware and connected IoT solutions for real-world hardware.',           topics:['C/C++ for Embedded','RTOS & Firmware','IoT Protocols (MQTT, BLE)','Raspberry Pi & Arduino','Industrial IoT'],                 category:'Embedded & IoT' },
  { title:'Networking & Infrastructure', desc:'Build and manage enterprise-grade network and infrastructure systems.',          topics:['Cisco / CompTIA Prep','Network Design & Routing','Systems Administration','Virtualization (VMware)','Data Center Ops'],          category:'Infrastructure' },
  { title:'Blockchain & Web3',           desc:'Explore decentralized technologies, Web3 development, and next-gen platforms.', topics:['Blockchain Fundamentals','Smart Contracts (Solidity)','Web3.js / Ethers.js','NFT & DeFi Platforms','AR/VR Basics'],             category:'Emerging Tech'  },
  { title:'Product & UX Design',         desc:'Design intuitive digital experiences and lead products from concept to launch.', topics:['UX Research & Wireframing','Figma & Prototyping','Product Roadmapping','Agile Product Management','Design Systems'],            category:'Design'         },
  { title:'Corporate IT Programs',       desc:'Customized enterprise-level IT training for teams and organizations at scale.',  topics:['Custom Curriculum Design','Team Upskilling Programs','ITSM & ITIL for Teams','Security Awareness','Digital Transformation'],     category:'Corporate'      },
];

const MGMT_TRAININGS = [
  { title:'MBA Core Management',         desc:'A comprehensive foundation in business strategy, operations, and leadership.',    topics:['Business Strategy','Organizational Behavior','Financial Management','Marketing Fundamentals','Operations Management'],          category:'MBA'              },
  { title:'Business Analytics',          desc:'Turn data into actionable business insights using modern analytics tools.',       topics:['Excel & Power BI','SQL for Business','Data Storytelling','KPI Dashboards','Forecasting & Modeling'],                          category:'Analytics'        },
  { title:'Marketing & Sales',           desc:'Drive revenue growth with modern digital marketing and sales strategies.',        topics:['Digital Marketing (SEO/SEM)','CRM & Sales Funnels','Brand Strategy','Performance Marketing','Customer Experience'],           category:'Marketing'        },
  { title:'Finance & Investment',        desc:'Master financial analysis, investment strategies, and corporate finance.',        topics:['Financial Modeling','Investment Analysis','Corporate Finance','Risk Management','FinTech Essentials'],                         category:'Finance'          },
  { title:'Human Resources',             desc:'Lead people, culture, and talent strategy in modern organizations.',             topics:['Talent Acquisition','HR Business Partnering','L&D Strategy','People Analytics','Employer Branding'],                          category:'HR'               },
  { title:'Operations & Supply Chain',   desc:'Optimize processes, supply chains, and logistics for maximum efficiency.',       topics:['Supply Chain Management','Lean & Six Sigma','Procurement Strategies','Inventory Planning','Process Excellence'],               category:'Operations'       },
  { title:'Project Management',          desc:'Deliver projects on time and on budget with proven PM methodologies.',           topics:['PMP & Agile Prep','Scrum & Kanban','Risk Management','Stakeholder Management','MS Project / Jira'],                          category:'Project Mgmt'     },
  { title:'Entrepreneurship & Startup',  desc:'Build and scale your startup with practical frameworks and investor insight.',   topics:['Lean Startup Methodology','Business Model Canvas','Fundraising & Pitch Decks','Go-to-Market Strategy','Legal & Finance Basics'], category:'Entrepreneurship' },
  { title:'Digital Transformation',      desc:'Lead organizational change through technology adoption and innovation.',         topics:['Digital Strategy','Change Management','AI & Automation Adoption','Customer-Centric Design','Innovation Frameworks'],             category:'Strategy'         },
  { title:'Leadership & Executive',      desc:'Develop the mindset, skills, and presence of an effective executive leader.',   topics:['Executive Communication','Strategic Decision Making','High-Performance Teams','Emotional Intelligence','C-Suite Coaching'],     category:'Leadership'       },
];

const IT_DOMAINS = [
  { id:'cs',         label:'Computer Science & Software Engineering',    color:'#1A3A5C', roles:[{title:'Software Engineer Intern',desc:'Design and build production-grade software systems.'},{title:'Full Stack Developer Intern',desc:'Develop end-to-end web features across frontend and backend stacks.'},{title:'Backend Developer Intern',desc:'Build scalable server-side logic, APIs, and data pipelines.'},{title:'Frontend Developer Intern',desc:'Create responsive, accessible UI components using modern frameworks.'},{title:'Mobile App Developer Intern',desc:'Build cross-platform mobile applications for iOS and Android.'},{title:'DevOps Engineer Intern',desc:'Automate infrastructure provisioning and streamline deployments.'},{title:'Site Reliability Engineer Intern',desc:'Maintain service reliability, uptime, and performance at scale.'},{title:'Cloud Application Developer Intern',desc:'Develop cloud-native applications on AWS, Azure, or GCP.'},{title:'QA Automation Engineer Intern',desc:'Build automated test suites to ensure software quality.'},{title:'Software Architect Intern',desc:'Assist in designing scalable and maintainable software architectures.'}] },
  { id:'data',       label:'Data Science, Analytics & Engineering',      color:'#5B21B6', roles:[{title:'Data Analyst Intern',desc:'Analyse datasets and surface actionable insights for business teams.'},{title:'Business Intelligence Analyst Intern',desc:'Build BI dashboards and reports to support strategic decisions.'},{title:'Data Scientist Intern',desc:'Apply statistical models and ML techniques to real-world problems.'},{title:'Machine Learning Engineer Intern',desc:'Build, train, and deploy machine learning models at scale.'},{title:'Data Engineer Intern',desc:'Design and maintain robust data pipelines and warehouse architecture.'},{title:'Analytics Engineer Intern',desc:'Transform raw data into clean, modelled datasets for analytics.'},{title:'MLOps Engineer Intern',desc:'Operationalise ML models from experimentation to production.'}] },
  { id:'ai',         label:'Artificial Intelligence & Advanced AI',       color:'#065F46', roles:[{title:'AI Engineer Intern',desc:'Build intelligent systems leveraging state-of-the-art AI techniques.'},{title:'Deep Learning Engineer Intern',desc:'Design and train deep neural networks for complex tasks.'},{title:'NLP Engineer Intern',desc:'Develop natural language processing pipelines and language models.'},{title:'Computer Vision Engineer Intern',desc:'Build image and video analysis systems using computer vision.'},{title:'Generative AI Engineer Intern',desc:'Build applications using generative AI technologies.'},{title:'Conversational AI Engineer Intern',desc:'Design and develop intelligent chatbots and voice assistants.'}] },
  { id:'cyber',      label:'Cybersecurity & Information Security',        color:'#C0392B', roles:[{title:'Cybersecurity Analyst Intern',desc:'Monitor, detect, and respond to cyber threats across the organisation.'},{title:'SOC Analyst Intern',desc:'Analyse security events in a Security Operations Centre.'},{title:'Ethical Hacker Intern',desc:'Conduct authorised attacks to identify security vulnerabilities.'},{title:'Penetration Testing Intern',desc:'Test applications and networks for exploitable security weaknesses.'},{title:'Cloud Security Intern',desc:'Secure cloud environments across AWS, Azure, and GCP.'},{title:'Incident Response Intern',desc:'Respond to and recover from security incidents and breaches.'}] },
  { id:'cloud',      label:'Cloud, DevOps & Platform Engineering',        color:'#0D6B6B', roles:[{title:'Cloud Engineer Intern',desc:'Build and manage cloud infrastructure for modern applications.'},{title:'Cloud Solutions Architect Intern',desc:'Design scalable, cost-efficient cloud architectures.'},{title:'DevOps Engineer Intern',desc:'Accelerate software delivery through automation and collaboration.'},{title:'Kubernetes Engineer Intern',desc:'Manage and orchestrate containerised workloads on Kubernetes.'},{title:'Platform Engineer Intern',desc:'Build internal platforms that improve developer productivity.'},{title:'SRE Intern',desc:'Apply software engineering to solve reliability problems.'}] },
  { id:'network',    label:'Networking, Infrastructure & Systems',        color:'#B45309', roles:[{title:'Network Engineer Intern',desc:'Design, implement, and maintain enterprise network infrastructure.'},{title:'NOC Intern',desc:'Monitor network performance and resolve connectivity incidents.'},{title:'Systems Administrator Intern',desc:'Manage and maintain servers, operating systems, and IT systems.'},{title:'Linux Engineer Intern',desc:'Administer and automate Linux-based server environments.'}] },
  { id:'embedded',   label:'Embedded Systems, IoT & Hardware',            color:'#7C3AED', roles:[{title:'Embedded Systems Engineer Intern',desc:'Develop firmware and software for resource-constrained hardware.'},{title:'Firmware Developer Intern',desc:'Write low-level firmware for microcontrollers and embedded devices.'},{title:'IoT Application Developer Intern',desc:'Build applications that connect physical devices to the internet.'},{title:'Robotics Systems Engineer Intern',desc:'Develop control and communication systems for robotic platforms.'}] },
  { id:'blockchain', label:'Blockchain, Web3 & Emerging Tech',            color:'#92400E', roles:[{title:'Blockchain Developer Intern',desc:'Build decentralised applications on public and private blockchains.'},{title:'Web3 Developer Intern',desc:'Develop applications that interact with Web3 protocols.'},{title:'Smart Contract Developer Intern',desc:'Write, test, and audit smart contracts on Ethereum and beyond.'},{title:'AR/VR Developer Intern',desc:'Create augmented and virtual reality applications.'}] },
  { id:'qa',         label:'Quality Engineering & Software Testing',      color:'#0D9488', roles:[{title:'QA Engineer Intern',desc:'Ensure software quality through structured QA processes and tools.'},{title:'Automation Testing Intern',desc:'Build and maintain automated test frameworks for software products.'},{title:'Performance Testing Intern',desc:'Test system behaviour under high load and identify bottlenecks.'}] },
  { id:'product',    label:'Product Management, UX & Digital Experience', color:'#BE185D', roles:[{title:'Product Management Intern',desc:'Shape product strategy across design, engineering, and business.'},{title:'UX/UI Designer Intern',desc:'Design user-centred interfaces and experiences for digital products.'},{title:'Design Research Intern',desc:'Conduct user research to uncover insights that drive product design.'},{title:'Product Analytics Intern',desc:'Analyse product usage data to guide roadmap and feature decisions.'}] },
  { id:'itsupport',  label:'IT Operations, Support & Service Management', color:'#374151', roles:[{title:'IT Support Engineer Intern',desc:'Provide technical support and resolve IT issues for end users.'},{title:'IT Service Management Intern',desc:'Apply ITSM frameworks to improve IT service delivery processes.'},{title:'Operations Analyst Intern',desc:'Monitor IT operations and identify areas for process improvement.'}] },
];

const MGMT_DOMAINS = [
  { id:'biz',    label:'Business Analytics, Strategy & Consulting',   color:'#1A3A5C', roles:[{title:'Business Analyst Intern',desc:'Bridge business needs and technical solutions through analysis.'},{title:'Strategy Analyst Intern',desc:'Support senior leadership in developing and executing strategic plans.'},{title:'Management Consulting Intern',desc:'Advise organisations on improving performance and solving problems.'},{title:'Corporate Strategy Intern',desc:'Conduct competitive analysis and support corporate planning.'}] },
  { id:'mktg',   label:'Marketing, Sales & Growth',                   color:'#C0392B', roles:[{title:'Digital Marketing Intern',desc:'Execute digital campaigns across SEO, SEM, social, and email channels.'},{title:'Growth Marketing Intern',desc:'Run experiments and growth hacks to accelerate user acquisition.'},{title:'Brand Strategy Intern',desc:'Support brand positioning and communications across all touchpoints.'},{title:'Performance Marketing Intern',desc:'Manage and optimise paid media campaigns for measurable ROI.'}] },
  { id:'fin',    label:'Finance, Accounting & FinTech',               color:'#065F46', roles:[{title:'Financial Analyst Intern',desc:'Build financial models and analyse business performance metrics.'},{title:'Investment Analyst Intern',desc:'Research investment opportunities and assess risk-return profiles.'},{title:'Corporate Finance Intern',desc:'Support capital structure, M&A analysis, and financial planning.'},{title:'FP&A Analyst Intern',desc:'Support financial planning, budgeting, and forecasting processes.'}] },
  { id:'hr',     label:'Human Resources & Talent Management',         color:'#5B21B6', roles:[{title:'Talent Acquisition Intern',desc:'Source, screen, and engage candidates across multiple business areas.'},{title:'HR Business Partner Intern',desc:'Partner with business leaders to align HR strategy with goals.'},{title:'Learning & Development Intern',desc:'Design and deliver training programmes to upskill the workforce.'},{title:'People Analytics Intern',desc:'Analyse workforce data to generate HR insights.'}] },
  { id:'ops',    label:'Operations, Supply Chain & Logistics',        color:'#B45309', roles:[{title:'Supply Chain Analyst Intern',desc:'Optimise supply chain processes from sourcing to delivery.'},{title:'Procurement Analyst Intern',desc:'Support strategic procurement and vendor management processes.'},{title:'Logistics Operations Intern',desc:'Coordinate logistics workflows and improve delivery efficiency.'}] },
  { id:'pm',     label:'Project, Program & Delivery Management',      color:'#0D6B6B', roles:[{title:'Project Management Intern',desc:'Coordinate project activities, timelines, and stakeholder communications.'},{title:'Agile / Scrum Intern',desc:'Support agile ceremonies and help teams deliver iteratively.'},{title:'Program Management Intern',desc:'Assist in managing interdependent projects across a programme.'}] },
  { id:'startup',label:'Entrepreneurship, Innovation & Startup',      color:'#B45309', roles:[{title:'Startup Operations Intern',desc:'Work across functions in a fast-paced startup environment.'},{title:'Venture Analyst Intern',desc:'Evaluate startup investment opportunities and market potential.'},{title:'Innovation Strategy Intern',desc:'Develop and test new ideas to drive organisational innovation.'}] },
  { id:'intl',   label:'International Business, Policy & Governance', color:'#374151', roles:[{title:'International Business Analyst Intern',desc:'Analyse cross-border business opportunities and market entry strategies.'},{title:'Global Strategy Intern',desc:'Support international growth and expansion strategy development.'},{title:'Sustainability & ESG Intern',desc:'Advance environmental, social, and governance initiatives.'}] },
];

const MORE_SERVICES = [
  { title:'Career Programs',       desc:'Structured end-to-end career development designed to fast-track your professional journey.',  points:['Personalized career roadmap','Skill gap analysis & mentorship','Progress tracking dashboard','Industry networking access'] },
  { title:'Placement Assistance',  desc:'Dedicated placement support connecting you with top companies and opportunities globally.',    points:['Resume & LinkedIn optimization','Mock interview coaching','Company referrals network','Offer negotiation support'] },
  { title:'Corporate Solutions',   desc:'Tailored enterprise training and talent solutions to upskill your workforce at scale.',        points:['Custom training curriculum','Team upskilling sprints','L&D strategy consulting','ROI measurement & reporting'] },
  { title:'Research & Innovation', desc:'Cutting-edge applied research programs and innovation labs at the frontiers of technology.',  points:['Industry research projects','Innovation hackathons','Patent & IP guidance','Academia-industry bridge'] },
  { title:'Workshops & Bootcamps', desc:'Intensive short-format learning experiences for rapid skill acquisition and practice.',       points:['Weekend intensive formats','Live project bootcamps','Expert-led masterclasses','Certification on completion'] },
  { title:'Knowledge Hub',         desc:'A rich library of curated learning materials, guides, templates, and industry insights.',     points:['Video lecture library','Case study repository','Industry report downloads','Community forums & Q&A'] },
];

const TABS = [
  { id:'it',          label:'IT Trainings',         badge:'10 Programs' },
  { id:'mgmt',        label:'Management Trainings', badge:'10 Programs' },
  { id:'internships', label:'Internships',          badge:'100+ Roles'  },
  { id:'more',        label:'More Services',        badge:'6 Services'  },
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
   FILTER RAIL COMPONENT
───────────────────────────────────────────────────────────── */
function FitFilterRail({ categories, activeCategories, onToggle, search, onSearch, onClearAll }) {
  const [catOpen, setCatOpen] = useState(true);
  const hasFilters = activeCategories.length > 0 || search.trim().length > 0;

  return (
    <aside className="fit__filter-rail">
      <div className="fit__fr-topbar">
        <span className="fit__fr-title">
          <IconFilter /> Filters
        </span>
        <button
          className={`fit__fr-reset${hasFilters ? ' fit__fr-reset--show' : ''}`}
          onClick={onClearAll}
        >
          Reset
        </button>
      </div>

      <div className={`fit__fr-tags${activeCategories.length > 0 ? ' fit__fr-tags--show' : ''}`}>
        {activeCategories.map(cat => (
          <span key={cat} className="fit__fr-tag">
            {cat}
            <button className="fit__fr-tag-x" onClick={() => onToggle(cat)}>✕</button>
          </span>
        ))}
      </div>

      <div className="fit__fr-search-zone">
        <div className="fit__fr-search">
          <IconSearch />
          <input
            value={search}
            onChange={e => onSearch(e.target.value)}
            placeholder="Search programs…"
          />
          {search && (
            <button className="fit__fr-search-x" onClick={() => onSearch('')}>✕</button>
          )}
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
              <div className={`fit__fr-box${activeCategories.includes(cat) ? ' fit__fr-box--on' : ''}`}>
                <IconCheck />
              </div>
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
  const [search, setSearch]                   = useState('');
  const [activeCategories, setActiveCategories] = useState([]);

  const categories = useMemo(() => [...new Set(trainings.map(t => t.category))], [trainings]);

  const toggle    = cat => setActiveCategories(p => p.includes(cat) ? p.filter(c => c !== cat) : [...p, cat]);
  const clearAll  = ()  => { setActiveCategories([]); setSearch(''); };

  const filtered = useMemo(() => {
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
      <FitFilterRail
        categories={categories}
        activeCategories={activeCategories}
        onToggle={toggle}
        search={search}
        onSearch={setSearch}
        onClearAll={clearAll}
      />

      <div className="fit__main-area">
        <div className="fit__sec-head">
          <div className="fit__sec-eyebrow" style={{ color: accentColor }}>{eyebrow}</div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="fit__results-bar">
          <span className="fit__results-count">
            Showing <strong>{filtered.length}</strong> of {trainings.length} programs
          </span>
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
                  />
                  <div className="fit__tc-img-shade" />
                  <span className="fit__tc-cat">{card.category}</span>
                </div>
                <div className="fit__tc-body">
                  <h3 className="fit__tc-title">{card.title}</h3>
                  <p className="fit__tc-desc">{card.desc}</p>
                  <ul className="fit__tc-topics">
                    {card.topics.map((t, j) => (
                      <li key={j}><span className="fit__tc-dot" />{t}</li>
                    ))}
                  </ul>
                  <button className="fit__tc-btn">Enrol Now</button>
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
  const [seg, setSeg]         = useState('it');
  const [activeDom, setDom]   = useState('cs');
  const [search, setSearch]   = useState('');

  const domains  = seg === 'it' ? IT_DOMAINS : MGMT_DOMAINS;
  const selected = domains.find(d => d.id === activeDom) || domains[0];

  const roles = useMemo(() => {
    if (!selected) return [];
    if (!search.trim()) return selected.roles;
    const q = search.toLowerCase();
    return selected.roles.filter(r =>
      r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q)
    );
  }, [selected, search]);

  const totalRoles = domains.reduce((a, d) => a + d.roles.length, 0);

  const switchSeg = s => { setSeg(s); setDom(s === 'it' ? 'cs' : 'biz'); setSearch(''); };

  return (
    <div className="fit__int-wrap">
      <div className="fit__sec-head">
        <div className="fit__sec-eyebrow" style={{ color:'#E85D04' }}>Internship Opportunities</div>
        <h2>Launch Your Career Here</h2>
        <p>Over 100 internship roles across IT and Management domains. Select a domain to explore available positions.</p>
      </div>

      <div className="fit__int-top">
        <div className="fit__seg-toggle">
          <button className={`fit__seg-btn${seg==='it'?' fit__seg-btn--on':''}`} onClick={() => switchSeg('it')}>IT Roles</button>
          <button className={`fit__seg-btn${seg==='mgmt'?' fit__seg-btn--on':''}`} onClick={() => switchSeg('mgmt')}>Management Roles</button>
        </div>
        <span style={{ marginLeft:'auto', fontSize:'.84rem', color:'var(--fit-ink-50)', fontWeight:500 }}>
          <strong style={{ color:'var(--fit-ink)', fontFamily:"'Fraunces',serif", fontSize:'1.1rem' }}>{totalRoles}</strong>
          {' '}open roles · {domains.length} domains
        </span>
      </div>

      <div className="fit__int-body">
        <aside className="fit__int-sidebar">
          <div className="fit__int-sidebar-head">Domains</div>
          <div className="fit__int-sidebar-list">
            {domains.map(d => (
              <button
                key={d.id}
                className={`fit__int-dom-btn${activeDom===d.id?' fit__int-dom-btn--on':''}`}
                style={activeDom===d.id ? { background:`${d.color}12`, color:d.color } : {}}
                onClick={() => { setDom(d.id); setSearch(''); }}
              >
                <img
                  className="fit__int-dom-thumb"
                  src={DTHUMB[d.id]}
                  alt=""
                  onError={e => e.target.style.display='none'}
                />
                <span className="fit__int-dom-lbl">{d.label}</span>
                <span
                  className="fit__int-dom-cnt"
                  style={activeDom===d.id ? { background:`${d.color}20`, color:d.color } : {}}
                >{d.roles.length}</span>
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
                onError={e => e.target.style.display='none'}
              />
              <div>
                <div className="fit__int-domain-name">{selected.label}</div>
                <div className="fit__int-domain-meta">{selected.roles.length} internship roles available</div>
              </div>
            </div>
            <div className="fit__int-search">
              <IconSearch />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search roles…"
              />
              {search && <button className="fit__int-search-x" onClick={() => setSearch('')}>✕</button>}
            </div>
          </div>

          {roles.length === 0 ? (
            <div className="fit__int-empty">
              <div className="fit__int-empty-icon">🔍</div>
              <p>No roles match your search.</p>
            </div>
          ) : (
            <div className="fit__roles-grid">
              {roles.map((role, i) => (
                <div key={i} className="fit__role-card" style={{ animationDelay:`${i*36}ms` }}>
                  <div className="fit__role-card-img-wrap">
                    <img
                      className="fit__role-card-img"
                      src={getRoleImg(role.title, selected.id)}
                      alt={role.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="fit__role-card-body">
                    <span
                      className="fit__role-domain-tag"
                      style={{ background:`${selected.color}14`, color:selected.color }}
                    >
                      {selected.label.split(',')[0].split('&')[0].trim()}
                    </span>
                    <h4 className="fit__role-title">{role.title}</h4>
                    <p className="fit__role-desc">{role.desc}</p>
                    <a
                      href="/contact"
                      className="fit__role-cta"
                      style={{ 
                        background: selected.color,
                        color: '#fff',
                        borderColor: selected.color
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#d14e00';
                        e.currentTarget.style.borderColor = '#d14e00';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,93,4,.42)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = selected.color;
                        e.currentTarget.style.borderColor = selected.color;
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,.18)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Enquire
                    </a>
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
        <div className="fit__sec-eyebrow" style={{ color:'#E85D04' }}>Additional Services</div>
        <h2>Beyond Training</h2>
        <p>Placement assistance, corporate training solutions, intensive bootcamps, and a knowledge hub to support every stage of your career.</p>
      </div>
      <div className="fit__more-grid">
        {MORE_SERVICES.map((s, i) => (
          <div key={i} className="fit__more-card" style={{ animationDelay:`${i*60}ms` }}>
            <div className="fit__more-card-img-wrap">
              <img
                className="fit__more-card-img"
                src={MIMG[s.title]}
                alt={s.title}
                loading="lazy"
              />
            </div>
            <div className="fit__more-card-body">
              <h3 className="fit__more-card-title">{s.title}</h3>
              <p className="fit__more-card-desc">{s.desc}</p>
              <ul className="fit__more-list">
                {s.points.map((pt, j) => (
                  <li key={j}><IconCheckOrange />{pt}</li>
                ))}
              </ul>
              <a href="/contact" className="fit__more-cta">Get in Touch</a>
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
      case 'it':          return <FitTrainingSection key="it"   trainings={IT_TRAININGS}   accentColor="#E85D04" eyebrow="IT Training Programs"       title="Technology Mastery Programs"  subtitle="Industry-aligned programs from software engineering and AI to cloud, security and emerging technologies." />;
      case 'mgmt':        return <FitTrainingSection key="mgmt" trainings={MGMT_TRAININGS} accentColor="#E85D04" eyebrow="Management Programs"         title="Business Leadership Programs" subtitle="Strategic programmes covering MBA, analytics, finance, HR, leadership and digital transformation." />;
      case 'internships': return <FitInternshipsSection key="internships" />;
      case 'more':        return <FitMoreSection key="more" />;
      default:            return null;
    }
  };

  return (
    <div className="fit__page">

      {/* HERO */}
      <header className="fit__hero">
        <div className="fit__hero-bg-img" />
        <div className="fit__hero-overlay" />
        <div className="fit__hero-glow-l" />
        <div className="fit__hero-glow-r" />
        <div className="fit__hero-inner">
          <div className="fit__hero-pill">
            <span className="fit__hero-pill-dot" />
            FlyInTake Global Consulting
          </div>
          <h1 className="fit__hero-h1">
            Your complete<br />
            career <em>ecosystem</em>
          </h1>
          <p className="fit__hero-sub">
            World-class IT &amp; Management Trainings, Internships, Placement
            and Corporate Solutions — all in one place.
          </p>
        </div>
      </header>

      {/* TABS */}
      <nav className="fit__tab-nav">
        <div className="fit__tab-nav-inner">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`fit__tab-btn${activeTab===tab.id?' fit__tab-active':''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <span className="fit__tab-badge">{tab.badge}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* CONTENT */}
      <main className="fit__main-content">
        {renderSection()}
      </main>

    </div>
  );
}