export const site = {
  name: "Subasini K",
  wordmark: "subasini.",
  title: "AI/ML Engineer",
  tagline:
    "I build production AI systems — RAG pipelines, voice agents, and explainable ML — that turn ambiguous business problems into deployed, measurable solutions.",
  location: "Sivakasi, Tamil Nadu, India",
  email: "saisubasini02@gmail.com",
  github: "https://github.com/subasinikarian",
  githubUser: "subasinikarian",
  linkedin: "https://linkedin.com/in/subasini-karian",
  resumeUrl: "/Subasini_K_Resume.pdf",
  // Update this once the custom domain is live (see DEPLOY.md)
  url: "https://subasinik.com",
};

export const about = {
  summary:
    "Analytics and Data Science professional with 2+ years of experience building data-driven decision support systems for operational and business planning. I specialize in Python-based analytics, SQL-driven data modeling, forecasting, and insight generation over large-scale transactional datasets — and in translating ambiguous business problems into analytical solutions deployed at scale on the cloud.",
  highlights: [
    { label: "Years of experience", value: "2+" },
    { label: "Production AI systems shipped", value: "4+" },
    { label: "Reporting efficiency gained", value: "60%" },
    { label: "Hallucination rate reduced", value: "40%" },
  ],
};

export const skills = [
  {
    category: "Programming & Data",
    items: ["Python", "SQL", "R", "Data Structures"],
  },
  {
    category: "Analytics & Modeling",
    items: [
      "Statistical Analysis",
      "Time-Series Forecasting",
      "Regression",
      "Classification",
      "Clustering",
      "Model Evaluation",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Tree-based Models",
      "Anomaly Detection",
      "Explainable AI (XAI)",
      "LLMs",
      "RAG",
      "Voice AI",
    ],
  },
  {
    category: "Data Engineering",
    items: ["Pandas", "NumPy", "Feature Engineering", "ETL Pipelines", "PySpark"],
  },
  {
    category: "Cloud & MLOps",
    items: [
      "GCP (Cloud Run, Vertex AI, Gemini API)",
      "AWS (S3, SageMaker, Lambda)",
      "Docker",
      "CI/CD",
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      "MySQL",
      "PostgreSQL",
      "Snowflake",
      "Pinecone",
      "Redis",
      "FastAPI",
      "Streamlit",
    ],
  },
];

export const experience = [
  {
    role: "Associate AIML Developer",
    company: "Brisque",
    period: { start: "2024-07", end: null },
    points: [
      "Engineered a production AI voice ordering system using the Gemini Live API and Twilio with Redis-cached session state for sub-200ms multi-turn conversations, with intent recognition and slot-filling for complex ordering dialogues.",
      "Designed RAG pipelines using the HyDE (Hypothetical Document Embeddings) approach for sparse or ambiguous queries, significantly improving retrieval accuracy over standard embedding search.",
      "Partnered with business, operations, and product stakeholders to translate problems into AI-driven solutions and LLM-based insight-generation systems that convert transactional data into actionable recommendations.",
      "Built Python and SQL ETL pipelines and forecasting/anomaly-detection logic to support operational planning and performance evaluation.",
      "Deployed scalable analytics on cloud infrastructure enabling real-time insight delivery through dashboards and APIs for non-technical stakeholders.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Brisque",
    period: { start: "2024-04", end: "2024-06" },
    points: [
      "Automated GenAI-based reporting workflows on GCP using the Gemini API, improving reporting efficiency by 60%.",
      "Built data-driven analytics for operational forecasting and trend analysis, and designed collaborative/content-based recommendation models to improve user engagement.",
      "Conducted data analysis, experimentation, and model evaluation to validate outcomes and ensure business relevance.",
    ],
  },
];

export const projects = [
  {
    title: "Intelligent Financial Document Analyst",
    period: { start: "2025-11", end: "2026-01" },
    description:
      "End-to-end RAG system using LangChain, Pinecone, and the Claude API for natural-language querying over financial documents — loan agreements, annual reports, insurance policies — with context-aware semantic retrieval.",
    points: [
      "GCP Cloud Run FastAPI backend with document chunking, embedding generation, and vector ingestion.",
      "Clause extraction, risk-flag detection, and document comparison, cutting review time by 65%.",
      "React frontend on Vercel with a real-time query interface for retail investors and finance professionals.",
    ],
    tags: ["LangChain", "Pinecone", "Claude API", "FastAPI", "React"],
    links: { repo: "https://github.com/subasinikarian" },
    featured: true,
  },
  {
    title: "Explainable ML Credit Scoring System",
    period: { start: "2026-02", end: "2026-04" },
    description:
      "XGBoost credit risk model trained on the LendingClub dataset, achieving 91% AUC-ROC and 88% F1-score, with SHAP for per-decision plain-language explanations meeting Explainable AI (XAI) standards.",
    points: [
      "Feature engineering and cross-validation for a robust risk model.",
      "Deployed on HuggingFace Spaces with an interactive Streamlit UI.",
      "Real-time score prediction with SHAP waterfall charts.",
    ],
    tags: ["XGBoost", "SHAP", "Streamlit", "HuggingFace"],
    links: { repo: "https://github.com/subasinikarian/credit-risk-scorer" },
    featured: true,
  },
  {
    title: "Empathetic Response AI — Conversational RAG Chatbot",
    period: { start: "2025-08", end: "2025-09" },
    description:
      "Production RAG conversational AI using MCP (Model Context Protocol) and Vertex AI, supporting multi-turn natural-language queries over operational databases via vector search and LLM reasoning.",
    points: [
      "Reduced manual data lookup time by 50%.",
      "Retrieval quality evaluation via cosine similarity scoring and human feedback loops.",
      "Cut hallucination rates by 40%.",
    ],
    tags: ["RAG", "MCP", "Vertex AI", "Claude API"],
    links: { repo: "https://github.com/subasinikarian/empathetic-rag-chatbot" },
    featured: true,
  },
  {
    title: "Multimodal Fingerprint Liveness Detection",
    period: { start: "2023-11", end: "2024-05" },
    description:
      "Multimodal deep learning pipeline fusing texture and frequency-domain features with OpenCV preprocessing to classify live fingers vs. spoofs.",
    points: [
      "SVC model improved detection accuracy by 98% and reduced FAR from 12% to under 1%.",
      "Multi-scale augmentation and cross-sensor generalization across optical, capacitive, and ultrasonic scanners.",
    ],
    tags: ["OpenCV", "SVC", "Deep Learning"],
    links: { repo: "https://github.com/subasinikarian/FLD-FALD" },
    featured: false,
  },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    school: "Mepco Schlenk Engineering College, Sivakasi, TN",
    period: "2020 – 2024",
    detail: "CGPA: 7.85 / 10.0",
  },
];

export const certifications = [
  {
    name: "Innovation Award — Q1 & Q2 2025",
    issuer: "Brisque",
    year: "2025",
  },
  {
    name: "Trainee Excellence Award — Q1 2024",
    issuer: "Brisque",
    year: "2024",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
