import resumePdf from '../assets/resume.pdf'

export const siteContent = {
  profile: {
    firstName: 'Adith Sreeram',
    lastName: 'Arjunan Sivakumar',
    fullName: 'Adith Sreeram Arjunan Sivakumar',
    logo: 'ASR',
    links: {
      email: 'mailto:aarjunansiva@umass.edu',
      phone: 'tel:+14132759015',
      github: 'https://github.com/ASR373',
      linkedin: 'https://www.linkedin.com/in/adithsreeram/',
      resume: resumePdf,
    },
  },

  sections: {
    about: { number: '01', title: 'About' },
    experience: { number: '02', title: 'Experience' },
    projects: { number: '03', title: 'Projects' },
    certifications: { number: '04', title: 'Certifications' },
    contact: { number: '05', title: 'Contact' },
  },

  navbar: {
    logoDot: '.',
    toggleLabel: 'Toggle menu',
    resumeButtonLabel: 'View Resume',
    resumeTitle: 'Adith Sreeram Resume',
    pdfCloseText: 'Close',
    pdfCloseAriaLabel: 'Close resume viewer',
    resumeFallbackLinkText: 'Open resume in a new tab',
    links: [
      { label: 'About', id: 'about' },
      { label: 'Experience', id: 'experience' },
      { label: 'Projects', id: 'projects' },
      { label: 'Certifications', id: 'certifications' },
      { label: 'Contact', id: 'contact' },
    ],
  },

  hero: {
    roleTags: ['ML Engineer', 'Analyst'],
    description:"Building usable tools and end to end ML pipelines, that you will actually want to use twice.",
    ctaText: 'Get in Touch',
    scrollLabel: 'Scroll',
    socialButtons: [
      { key: 'github', label: 'GitHub' },
      { key: 'linkedin', label: 'LinkedIn' },
    ],
  },

  about: {
    imageAlt: 'Adith Sreeram Arjunan Sivakumar',
    bioParagraphs: [
      [
        { text: 'Data Analyst and ML Engineer with a sharp focus on ' },
        { text: 'decision-ready insights', style: 'strong' },
        {
          text: '. I build data pipelines, models, and dashboards that turn messy data into reliable, actionable outcomes.',
        },
      ],
      [
        { text: 'Pursuing my MS in Computer Science at ' },
        { text: 'UMass Amherst', style: 'strong' },
        {
          text: ', with a focus on scalable analytics, ML workflows, and production-ready data systems.',
        },
      ],
    ],
    educationTitle: 'Education',
    education: [
      {
        degree: "Master's, Computer Science",
        school: 'University of Massachusetts Amherst',
        year: 'Aug 2024 — May 2026',
      },
      {
        degree: 'B.Tech, Computer Science',
        school: 'VIT University',
        year: 'Aug 2020 — May 2024',
      },
    ],
    skills: [
      'Python',
      'C++',
      'Java',
      'JavaScript',
      'SQL',
      'PyTorch',
      'TensorFlow',
      'CUDA',
      'OpenCV',
      'LangChain',
      'FastAPI',
      'React',
      'Docker',
      'Kubernetes',
      'AWS',
      'PostgreSQL',
      'Redis',
      'Git',
    ],
  },

  experience: {
    historyLabel: "Where I've Been",
    roles: [
      {
        role: 'Data Engineer Intern',
        company: 'Omdena',
        period: 'Dec 2025 — Feb 2026',
        highlights: [
          'Built an automated AWS document ingestion and embedding pipeline for 10k+ unstructured documents to enable semantic retrieval.',
          'Implemented and optimized RAG workflows (embeddings, vector indexing, prompt orchestration) improving search precision ~35%.',
        ],
      },
      {
        role: 'Data Analyst Intern',
        company: 'Team Yoga and Wellness Studio',
        period: 'Aug 2023 — Aug 2024',
        highlights: [
          'Built automated dashboards and weekly reports for attendance and customer engagement, improving KPI visibility by 25%.',
          'Analyzed marketing and ops performance using Python, SQL, and Power BI and recommended improvements that increased engagement by 15%.',
        ],
      },
      {
        role: 'Machine Learning Engineer',
        company: 'Evry',
        period: 'Mar 2023 — Aug 2023',
        highlights: [
          'Built ML models (XGBoost, Random Forest) for early-stage disease detection, improving diagnostic accuracy by 13%.',
          'Developed REST APIs with Flask to integrate predictions into business tools for real-time insights.',
        ],
      },
    ],
    pdfCloseText: 'Close',
    pdfCloseAriaLabel: 'Close recommendation letter viewer',
  },

  projects: {
    groupLabels: {
      mlDe: 'ML/Data Engineering Projects',
      analyst: 'Data Analyst Projects',
    },
    mlDeItems: [
      {
        id: '01',
        title: 'Banking Data Pipeline with CDC & Cloud Warehousing',
        desc: 'Real-time CDC pipeline moving banking transactions into Snowflake for analytics with sub-30s latency.',
        stack: ['Debezium', 'Kafka', 'PostgreSQL', 'Snowflake', 'dbt', 'Airflow', 'Python', 'Docker', 'GitHub Actions'],
        link: 'https://github.com/ASR373/banking',
      },
      {
        id: '02',
        title: 'End-to-End AWS Redshift Data Pipeline with dbt Transformations & Airflow Orchestration',
        desc: 'Automated ELT pipeline from S3 to Redshift for 10K+ daily e-commerce transactions with star schema modeling.',
        stack: ['AWS S3', 'Redshift (Serverless)', 'dbt', 'Airflow', 'Python', 'Terraform', 'PostgreSQL'],
        link: 'https://github.com/ASR373/redshift-project',
      },
      {
        id: '03',
        title: 'Scalable Data Engineering Pipeline for Enterprise Analytics',
        desc: 'Serverless, event-driven ETL pipeline on AWS transforming CSV to Parquet for near real-time analytics.',
        stack: ['AWS S3', 'Glue (PySpark)', 'Lambda', 'EventBridge', 'Glue Crawler', 'Athena', 'CloudWatch', 'SNS', 'IAM'],
        link: 'https://github.com/ASR373/aws-etl-pipeline-enterprise-analytics',
      },
      {
        id: '04',
        title: 'Health-Guard: Web-Based Early Detection System',
        desc: 'Streamlit app for early prediction of five diseases using supervised ML and ensemble models.',
        stack: ['Streamlit', 'Python', 'Boosting Ensembles', 'SAS', 'PCA', 'Normalization', 'One-Hot Encoding'],
        link: 'https://health-gaurd.onrender.com/',
      },
    ],
    analystItems: [
      {
        id: '01',
        title: 'SQL Data Warehouse (Medallion Architecture)',
        desc: 'Built an end-to-end SQL data warehouse using the Bronze/Silver/Gold pattern to ingest ERP + CRM CSV data, standardize schemas, apply cleansing/transformations, and publish analytics-ready fact/dimension tables.',
        stack: ['PostgreSQL', 'SQL', 'Python', 'Shell Scripting'],
        link: 'https://github.com/ASR373/sql-datawarehouse',
      },
      {
        id: '02',
        title: 'Credit Card Usage Analysis',
        desc: 'Analyzed 4,000 customers across 5 cities and built a 2-page interactive Power BI dashboard (DAX measures) to drive product + marketing recommendations for a new card launch.',
        stack: ['Excel', 'Power BI', 'DAX'],
        link: 'https://github.com/ASR373/Credit-Card-Usage-Analysis',
      },
      {
        id: '03',
        title: 'Coffee Brand Analysis',
        desc: 'Interactive Power BI report analyzing coffee brand reviews across quality, pricing, roast type, and origin; surfaced top brands using measures like Average Rating and Quality-to-Price Ratio (QPR).',
        stack: ['Power BI', 'Excel', 'DAX'],
        link: 'https://github.com/ASR373/Coffee-Brand-Analysis',
      },
      {
        id: '04',
        title: 'Data Vault (Data Bank) — Nodes & Transactions',
        desc: 'Generated management insights on customer growth, movement across regions/nodes, and transaction behavior trends using joined operational tables and SQL exploration.',
        stack: ['SQL'],
        link: 'https://narrow-taxi-1de.notion.site/Data-Vault-227e7042865d4b4a9525b8899f63b695',
      },
    ],
  },

  certifications: {
    items: [
      {
        id: '01',
        title: 'AWS Certified AI Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        link: 'https://www.credly.com/badges/6c5a020c-a2bb-4f19-ae8e-a46dd505e5bd/public_url',
      },
      {
        id: '02',
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        link: 'https://www.credly.com/badges/fe2bc215-79db-4dde-8758-82a2946c06b5/public_url',
      },
      {
        id: '03',
        title: 'More Coming Soon',
        issuer: 'Add your next certification',
        link: null,
      },
      {
        id: '04',
        title: 'More Coming Soon',
        issuer: 'Add your next certification',
        link: null,
      },
    ],
  },

  contact: {
  heading: {
  line1: "Good teams",
  line2: "need builders.",
  accent: "I build.",
},
    blurb:
      'I work on systems, models, and infrastructure that solve real problems. If you need someone who ships and thinks deeply, reach out.',
    channels: [
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { key: 'github', label: 'GitHub' },
      { key: 'linkedin', label: 'LinkedIn' },
    ],
    form: {
      honeypotLabel: "Don't fill this out:",
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Anything, really.',
      submitIdle: 'Send Message',
      submitSending: 'Sending...',
      submitSuccess: '✓ Sent!',
      submitError: 'Failed – try again',
    },
    footer: {
      builtWith: 'Built with React 19 + Three.js',
    },
  },
}
