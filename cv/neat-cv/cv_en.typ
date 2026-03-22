#import "@preview/neat-cv:0.7.0": cv, side, entry, item-with-level, contact-info, social-links

#show: cv.with(
  author: (
    firstname: "Shahrooz",
    lastname: "Aghili",
    email: "info@aghili.dev",
    phone: "+49 162 733 54 09",
    position: "DevOps Team Lead & CNCF Community Group Organizer",
    github: "aghilish",
    linkedin: "aghilish",
    website: "https://aghili.dev",
  ),
  profile-picture: image("shahrooz.jpeg"),
  accent-color: rgb("#2563eb"),
)

#side[
  == About Me

  Multi-Domain Software Engineer with 16+ years of experience in software engineering. Expertise in Cloud-Native Technologies, Technical Leadership, and Mentorship. Passionate Educator and Innovation Enthusiast.

  == Contact

  #contact-info()
  #social-links()

  == Skills

  *Cloud & Platforms*
  #item-with-level("Kubernetes", 5)
  #item-with-level("K8s Operator Dev", 5)
  #item-with-level("OpenShift", 5)
  #item-with-level("GCP", 4)
  #item-with-level("AWS", 4)
  #item-with-level("Anthos/Istio", 5)
  #item-with-level("EKS", 4)

  *DevOps & CI/CD*
  #item-with-level("Helm", 5)
  #item-with-level("ArgoCD", 5)
  #item-with-level("GitOps", 5)
  #item-with-level("Tekton", 5)
  #item-with-level("GitHub Actions", 5)
  #item-with-level("GitLab CI", 5)

  *Observability*
  #item-with-level("OpenTelemetry", 4)
  #item-with-level("Elastic Stack", 4)
  #item-with-level("Prometheus", 4)
  #item-with-level("Grafana", 4)

  *Programming*
  #item-with-level("Go", 5)
  #item-with-level("Python", 5)
  #item-with-level("Bash", 5)
  #item-with-level("C#/.NET", 4)
  #item-with-level("TypeScript", 4)

  *Infrastructure as Code*
  #item-with-level("Terraform", 5)
  #item-with-level("Crossplane", 5)
  #item-with-level("AWS CDK", 4)
  #item-with-level("Helm Charts", 5)

  *Policy & Governance*
  #item-with-level("OPA", 4)
  #item-with-level("Kyverno", 4)

  *Supply Chain Security*
  #item-with-level("SBOM", 4)
  #item-with-level("Black Duck", 4)
  #item-with-level("SonarQube", 4)

  *Soft Skills*
  #item-with-level("Stakeholder Mgmt", 5)
  #item-with-level("Technical Interviews", 5)
  #item-with-level("Staffing Decisions", 5)
  #item-with-level("RfP Presentations", 5)
  #item-with-level("Community Org.", 5)

  == Languages

  #item-with-level("Persian", 5)
  #item-with-level("English", 4)
  #item-with-level("German", 4)

  == Certifications

  - #link("https://www.credly.com/badges/9e8f0200-9ade-4389-a70c-c6fa2e02deaa")[CNCF Community Organizer 2024]
  - #link("https://learn.deeplearning.ai/certificates/dadb2e3f-2e4d-45ac-8e8f-31e821930c88")[Agentic AI Certification]
  - #link("https://www.credly.com/badges/ac5b0e02-8780-482b-8f8f-d7d2f5e31199")[GCP Professional Cloud Architect]
  - #link("https://www.credly.com/badges/d371b221-adb9-4fea-b0fc-47d15d5daa39")[CKA: Kubernetes Administrator]
  - #link("https://www.credly.com/badges/b94af0df-1b06-4f43-91a0-123b884441cb")[CKS: Kubernetes Security]
]

== Experience

#entry(
  title: "DevOps Squad Lead",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Germany",
  date: "Jan 2025 - Present",
)[
  - Leading two workstreams with a combined team of 6 consultants across multiple seniority levels
  - Technical lead and platform engineer for Volkswagen's DevOps Enabling Team within ART FSS
  - Developing self-service CDK library fully compliant with Volkswagen's AWS Vanguard framework
  - Automating CI/CD pipelines and designing scalable EKS-based deployment architectures
  - Driving end-to-end implementation of ART-wide observability strategy covering metrics, logs, traces, and business KPIs
  - Integrating Elastic Stack as central monitoring platform with OTLP pipelines and Helm chart extensions
  - Implementing SonarQube scanning and SBOM generation in CI pipelines for microservices
  - Building FOSS license compliance pipelines with Black Duck Hub
]

#entry(
  title: "DevOps Tech Lead",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Germany",
  date: "Apr 2024 - Dec 2024",
)[
  - Led infrastructure automation initiatives and CI/CD pipeline development for Volkswagen and Audi
  - Mentored and provided technical direction to a team of three Deloitte engineers
  - Designed and implemented release concepts for workloads on OpenShift edge clusters
  - Developed cloud-native system and load testing automation for Data Capture Application (DCA)
  - Integrated Tekton pipelines with XRAY and Jira to streamline testing workflows
]

#entry(
  title: "Senior Solutions Architect",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Germany",
  date: "Dec 2023 - Apr 2024",
)[
  - Directed development of PoC for Google Cloud's Manufacturing Data Engine for Deloitte-Google Alliance
  - Applied FinOps principles and GCP Well-Architected Framework best practices
  - Built advanced pipelines for Kubernetes node scheduling and on-demand infrastructure provisioning
  - Delivered technical presentations to prospective Deloitte clients
]

#entry(
  title: "Community Group Organizer",
  institution: "Cloud Native Frankfurt",
  location: "Frankfurt Rhine-Main Area",
  date: "Feb 2025 - Present",
)[
  - Organizing Cloud Native community events and meetups in Frankfurt region
  - Building local CNCF community and fostering knowledge sharing
  - Connecting cloud-native practitioners and enthusiasts
]

#entry(
  title: "Content Creator - Cloud-Native Technologies",
  institution: "Self-employed",
  location: "Remote",
  date: "Apr 2024 - Present",
)[
  - Developed hands-on training materials and interactive scenarios on killercoda.com/aghilish
  - Created and managed YouTube channel with tutorials and practical guides
  - Topics include Kubernetes, containerization, cloud platforms, and DevOps best practices
]

#entry(
  title: "Freelance Senior DevOps Engineer",
  institution: "CARIAD",
  location: "Remote",
  date: "Oct 2023 - Nov 2023",
)[
  - Successfully migrated Infotainment software build pipeline from CARIAD DevStack to GitHub Enterprise CI/CD
]

#entry(
  title: "Senior Platform Engineer",
  institution: "Commerzbank AG",
  location: "Frankfurt, Germany",
  date: "Feb 2023 - Sep 2023",
)[
  - Led engineering backlog ensuring platform's continuous development and team alignment
  - Guided and mentored team of junior cloud-native engineers
  - Spearheaded migration of microservices to multi-regional Google Anthos setup with mTLS enforcement
  - Consulted CCoE on CVE remediation, image hardening, OPA policies, and securing service boundaries
]

#entry(
  title: "Platform Engineer",
  institution: "Commerzbank AG",
  location: "Frankfurt, Germany",
  date: "Mar 2021 - Feb 2023",
)[
  - Engineered robust deployment pipeline for KYC ETL process
  - Implemented and maintained Infrastructure as Code (IaC) practices
  - Designed and managed CI/CD pipelines to streamline development workflows
  - Contributed to design and implementation of scalable microservices-based solutions
]

#entry(
  title: "Backend Engineer / DevOps",
  institution: "Main Incubator GmbH",
  location: "Frankfurt, Germany",
  date: "Jun 2019 - Feb 2021",
)[
  - Contributed to small agile incubator team developing cloud-native applications on GCP
  - Dual role in backend development and DevOps
  - Utilized Firebase, Node.js with TypeScript, and React.js
]

#entry(
  title: "Researcher - PhD Dropout",
  institution: "Technische Universität Darmstadt",
  location: "Darmstadt, Germany",
  date: "Dec 2016 - Dec 2018",
)[
  - Contributed to development and optimization of 5G mm-wave network technologies
  - Utilized Python, C++, and MATLAB for network design, simulation, and implementation
]

#entry(
  title: "Senior Software Engineer",
  institution: "Parham Co.",
  location: "Tehran, Iran",
  date: "Oct 2015 - Oct 2016",
)[
  - Delivered comprehensive full-stack solutions leveraging expertise in front-end and back-end development
]

#entry(
  title: "Research Assistant",
  institution: "Sharif University of Technology",
  location: "Tehran, Iran",
  date: "Sep 2014 - Sep 2015",
)[
  - Focused on Software Defined Networks (SDN) with innovative network architectures
  - Thesis: "Distributed Publisher-Subscriber Pattern for Content-Based Routing in SDN"
]

#entry(
  title: "Senior Software Developer",
  institution: "Solico Group",
  location: "Tehran, Iran",
  date: "Mar 2012 - Nov 2014",
)[
  - Specialized in creating robust and scalable back-end solutions for enterprise applications
]

#entry(
  title: "Software Developer",
  institution: "Telecomsoft",
  location: "Tehran, Iran",
  date: "Oct 2011 - Feb 2012",
)[
  - Designed and developed simulation tool for routing and bundling in optical networks
  - Commissioned by Iranian Telecommunication Research Center (ITRC)
]

== Education

#entry(
  title: "PhD in Computer Science (Dropout)",
  institution: "Technische Universität Darmstadt",
  location: "Germany",
  date: "2016 - 2018",
)[
  Research focus on 5G mm-wave network technologies
]

#entry(
  title: "Master of Science in Information Technology",
  institution: "Sharif University of Technology",
  location: "Tehran, Iran",
  date: "2013 - 2015",
)[
  Thesis on Software Defined Networks and Content-Based Routing
]

#entry(
  title: "Bachelor of Science in Computer Engineering",
  institution: "Isfahan University of Technology",
  location: "Isfahan, Iran",
  date: "2007 - 2011",
)[]
