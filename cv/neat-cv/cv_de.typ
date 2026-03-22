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
  == Über mich

  Multi-Domain Software Engineer mit über 16 Jahren Erfahrung in der Softwareentwicklung. Expertise in Cloud-Native-Technologien, Technischer Führung und Mentoring. Leidenschaftlicher Dozent und Innovationsbegeisterter.

  == Kontakt

  #contact-info()
  #social-links()

  == Fähigkeiten

  *Cloud & Plattformen*
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

  *Programmierung*
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
  #item-with-level("Techn. Interviews", 5)
  #item-with-level("Personalplanung", 5)
  #item-with-level("RfP Präsentationen", 5)
  #item-with-level("Community Org.", 5)

  == Sprachen

  #item-with-level("Persisch", 5)
  #item-with-level("Englisch", 4)
  #item-with-level("Deutsch", 4)

  == Zertifizierungen

  - #link("https://www.credly.com/badges/9e8f0200-9ade-4389-a70c-c6fa2e02deaa")[CNCF Community Organizer 2024]
  - #link("https://learn.deeplearning.ai/certificates/dadb2e3f-2e4d-45ac-8e8f-31e821930c88")[Agentic AI Zertifizierung]
  - #link("https://www.credly.com/badges/ac5b0e02-8780-482b-8f8f-d7d2f5e31199")[GCP Professional Cloud Architect]
  - #link("https://www.credly.com/badges/d371b221-adb9-4fea-b0fc-47d15d5daa39")[CKA: Kubernetes Administrator]
  - #link("https://www.credly.com/badges/b94af0df-1b06-4f43-91a0-123b884441cb")[CKS: Kubernetes Security]
]

== Berufserfahrung

#entry(
  title: "DevOps Squad Lead",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Deutschland",
  date: "Jan 2025 - Heute",
)[
  - Leitung von zwei Workstreams mit insgesamt 6 Consultants unterschiedlicher Senioritätsstufen
  - Technischer Lead und Platform Engineer für das DevOps Enabling Team von Volkswagen im ART FSS
  - Entwicklung einer Self-Service-CDK-Bibliothek, die vollständig dem AWS Vanguard Framework von Volkswagen entspricht
  - Automatisierung von CI/CD-Pipelines und Entwicklung skalierbarer EKS-basierter Deployment-Architekturen
  - Leitung der End-to-End-Implementierung der ART-weiten Observability-Strategie (Metriken, Logs, Traces, Business-KPIs)
  - Integration des Elastic Stack als zentrale Monitoring-Plattform mit OTLP-Pipelines und Helm-Chart-Erweiterungen
  - Implementierung von SonarQube-Scanning und SBOM-Generierung in CI-Pipelines für Microservices
  - Aufbau von FOSS-Lizenz-Compliance-Pipelines mit Black Duck Hub
]

#entry(
  title: "DevOps Tech Lead",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Deutschland",
  date: "Apr 2024 - Dez 2024",
)[
  - Leitung von Infrastruktur-Automatisierungsinitiativen und CI/CD-Pipeline-Entwicklung für Volkswagen und Audi
  - Mentoring und technische Führung eines Teams von drei Deloitte-Ingenieuren
  - Entwicklung und Implementierung von Release-Konzepten für Workloads auf OpenShift-Edge-Clustern
  - Entwicklung von Cloud-Native-System- und Lasttest-Automatisierung für die Data Capture Application (DCA)
  - Integration von Tekton-Pipelines mit XRAY und Jira zur Optimierung von Test-Workflows
]

#entry(
  title: "Senior Solutions Architect",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Deutschland",
  date: "Dez 2023 - Apr 2024",
)[
  - Leitung der Entwicklung eines PoC für Google Cloud's Manufacturing Data Engine für die Deloitte-Google-Allianz
  - Anwendung von FinOps-Prinzipien und GCP Well-Architected Framework Best Practices
  - Entwicklung fortschrittlicher Pipelines für Kubernetes-Node-Scheduling und On-Demand-Infrastrukturbereitstellung
  - Technische Präsentationen für potenzielle Deloitte-Kunden
]

#entry(
  title: "Community Group Organizer",
  institution: "Cloud Native Frankfurt",
  location: "Rhein-Main-Gebiet Frankfurt",
  date: "Feb 2025 - Heute",
)[
  - Organisation von Cloud Native Community-Events und Meetups in der Region Frankfurt
  - Aufbau einer lokalen CNCF-Community und Förderung des Wissensaustauschs
  - Vernetzung von Cloud-Native-Praktikern und -Enthusiasten
]

#entry(
  title: "Content Creator - Cloud-Native-Technologien",
  institution: "Selbständig",
  location: "Remote",
  date: "Apr 2024 - Heute",
)[
  - Entwicklung von praktischen Schulungsmaterialien und interaktiven Szenarien auf killercoda.com/aghilish
  - Erstellung und Verwaltung eines YouTube-Kanals mit Tutorials und praktischen Anleitungen
  - Themen umfassen Kubernetes, Containerisierung, Cloud-Plattformen und DevOps Best Practices
]

#entry(
  title: "Freelance Senior DevOps Engineer",
  institution: "CARIAD",
  location: "Remote",
  date: "Okt 2023 - Nov 2023",
)[
  - Erfolgreiche Migration der Infotainment-Software-Build-Pipeline von CARIAD DevStack zu GitHub Enterprise CI/CD
]

#entry(
  title: "Senior Platform Engineer",
  institution: "Commerzbank AG",
  location: "Frankfurt, Deutschland",
  date: "Feb 2023 - Sep 2023",
)[
  - Leitung des Engineering Backlogs zur Sicherstellung der kontinuierlichen Plattformentwicklung
  - Mentoring und Führung eines Teams von Junior Cloud-Native Engineers
  - Leitung der Migration von Microservices zu einem multi-regionalen Google Anthos Setup mit mTLS-Durchsetzung
  - Beratung des CCoE zu CVE-Behebung, Image-Härtung, OPA-Policies und Absicherung der Service-Grenzen
]

#entry(
  title: "Platform Engineer",
  institution: "Commerzbank AG",
  location: "Frankfurt, Deutschland",
  date: "Mär 2021 - Feb 2023",
)[
  - Entwicklung einer robusten Deployment-Pipeline für den KYC ETL-Prozess
  - Implementierung und Pflege von Infrastructure as Code (IaC)-Praktiken
  - Design und Verwaltung von CI/CD-Pipelines zur Optimierung von Entwicklungs-Workflows
  - Mitwirkung am Design und der Implementierung skalierbarer Microservices-basierter Lösungen
]

#entry(
  title: "Backend Engineer / DevOps",
  institution: "Main Incubator GmbH",
  location: "Frankfurt, Deutschland",
  date: "Jun 2019 - Feb 2021",
)[
  - Mitarbeit in einem kleinen agilen Inkubator-Team zur Entwicklung von Cloud-Native-Anwendungen auf GCP
  - Doppelrolle in Backend-Entwicklung und DevOps
  - Nutzung von Firebase, Node.js mit TypeScript und React.js
]

#entry(
  title: "Wissenschaftlicher Mitarbeiter - Promotion abgebrochen",
  institution: "Technische Universität Darmstadt",
  location: "Darmstadt, Deutschland",
  date: "Dez 2016 - Dez 2018",
)[
  - Mitarbeit an der Entwicklung und Optimierung von 5G-Millimeterwellen-Netzwerktechnologien
  - Einsatz von Python, C++ und MATLAB für Netzwerkdesign, Simulation und Implementierung
]

#entry(
  title: "Senior Software Engineer",
  institution: "Parham Co.",
  location: "Teheran, Iran",
  date: "Okt 2015 - Okt 2016",
)[
  - Bereitstellung umfassender Full-Stack-Lösungen mit Expertise in Front-End- und Back-End-Entwicklung
]

#entry(
  title: "Wissenschaftlicher Mitarbeiter",
  institution: "Sharif University of Technology",
  location: "Teheran, Iran",
  date: "Sep 2014 - Sep 2015",
)[
  - Fokus auf Software Defined Networks (SDN) mit innovativen Netzwerkarchitekturen
  - Masterarbeit: "Distributed Publisher-Subscriber Pattern for Content-Based Routing in SDN"
]

#entry(
  title: "Senior Software Developer",
  institution: "Solico Group",
  location: "Teheran, Iran",
  date: "Mär 2012 - Nov 2014",
)[
  - Spezialisierung auf robuste und skalierbare Back-End-Lösungen für Unternehmensanwendungen
]

#entry(
  title: "Software Developer",
  institution: "Telecomsoft",
  location: "Teheran, Iran",
  date: "Okt 2011 - Feb 2012",
)[
  - Design und Entwicklung eines Simulationstools für Routing und Bündelung in optischen Netzwerken
  - Im Auftrag des Iranian Telecommunication Research Center (ITRC)
]

== Ausbildung

#entry(
  title: "Promotion in Informatik (abgebrochen)",
  institution: "Technische Universität Darmstadt",
  location: "Deutschland",
  date: "2016 - 2018",
)[
  Forschungsschwerpunkt auf 5G-Millimeterwellen-Netzwerktechnologien
]

#entry(
  title: "Master of Science in Informationstechnologie",
  institution: "Sharif University of Technology",
  location: "Teheran, Iran",
  date: "2013 - 2015",
)[
  Masterarbeit über Software Defined Networks und Content-Based Routing
]

#entry(
  title: "Bachelor of Science in Informatik",
  institution: "Isfahan University of Technology",
  location: "Isfahan, Iran",
  date: "2007 - 2011",
)[]
