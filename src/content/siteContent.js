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
    contact: { number: '04', title: 'Contact' },
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
    items: [
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
