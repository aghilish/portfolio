#import "@preview/neat-cv:0.7.0": cv, side, entry, item-with-level, contact-info, social-links

#show: cv.with(
  author: (
    firstname: "Shahrooz",
    lastname: "Aghili",
    email: "info@aghili.dev",
    phone: "+49 162 733 54 09",
    position: "DevOps Team Lead & CNCF Community Group Organizer",
    address: "Frankfurt, Deutschland",
    github: "aghilish",
    linkedin: "aghilish",
    website: "https://aghili.dev",
  ),
  profile-picture: image("shahrooz.jpeg"),
  accent-color: rgb("#2563eb"),
  body-font-size: 9.5pt,
)

#side[
  == Über mich

  Multi-Domain Software Engineer mit über 16 Jahren Erfahrung in der Softwareentwicklung. Schwerpunkt auf Cloud Native Plattformen, technischer Führung und Mentoring. Deutscher Staatsangehöriger, wohnhaft in Frankfurt. Gibt sein Wissen regelmäßig in Workshops, Vorträgen und Video-Tutorials weiter.

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
  #item-with-level("RKE2 / Rancher", 4)

  *DevOps & CI/CD*
  #item-with-level("Helm", 5)
  #item-with-level("ArgoCD", 5)
  #item-with-level("GitOps", 5)
  #item-with-level("Tekton", 5)
  #item-with-level("GitHub Actions", 5)
  #item-with-level("GitLab CI", 5)

  *Developer Enablement & IDP*
  #item-with-level("Backstage", 3)
  #item-with-level("Internal Developer Platforms", 4)
  #item-with-level("Diátaxis-Dokumentation", 4)
  #item-with-level("Technische Content- & Videoproduktion", 5)
  #item-with-level("Developer Experience (DevEx)", 4)

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
  title: "Freelance Platform Enablement Specialist",
  institution: "Selbständig",
  location: "Frankfurt, Deutschland / Remote",
  date: "Aug 2026 - Heute",
)[
  - Unabhängiger Auftragnehmer für eine Energy Data Platform bei einem Kunden aus dem Bereich kritische Infrastruktur der Energiewirtschaft
  - Verantwortlich für Developer Enablement auf der internen Developer Plattform (IDP), senkt die kognitive Last für neue Teams und beschleunigt das Onboarding
  - Arbeitet eng mit dem Customer Success Team und dem Cloud Native Application Governance Team zusammen
  - Erstellt technischen Schulungscontent für die Entwicklerorganisation gemäß dem Operating Model der Cloud Native Application Governance
  - Unterstützt Tenants auf ihrer Onboarding Journey zur Plattform
  - Produziert Enablement Content von der Idee bis zur Veröffentlichung, darunter Video Tutorials, Hands-on Labs, Storyboards und Workshops nach dem Diátaxis Framework
  - Definiert und trackt Enablement KPIs wie Adoption, Self Service Nutzung und Entwicklerproduktivität über mehrere Plattform Teams hinweg
  - Baut Golden Path Templates und Self Service Workflows auf Backstage, um Service Scaffolding und Deployment zu standardisieren
  - Betreibt die Open Source Plattform Educates für Trainings auf einem Rancher RKE2 Cluster, mit Kyverno Policies zur Isolation der Workshop Teilnehmer, und überwacht die Infrastruktur mit Prometheus und Grafana
  - Etabliert GitOps basierte Delivery Patterns (ArgoCD, Helm) und CI/CD Best Practices als wiederverwendbare Referenz für andere Teams
]

#entry(
  title: "DevOps Squad Lead",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Deutschland",
  date: "Jan 2025 - Jul 2026",
)[
  - Leitete zwei Workstreams mit insgesamt 6 Consultants unterschiedlicher Senioritätsstufen
  - War technischer Lead und Platform Engineer für das DevOps Enabling Team von Volkswagen im ART FSS
  - Entwickelte eine Self Service CDK Bibliothek nach dem AWS Vanguard Framework von Volkswagen
  - Automatisierte CI/CD Pipelines und entwarf skalierbare Deployment Architekturen auf EKS
  - Verantwortete die durchgängige Umsetzung der ART weiten Observability Strategie (Metriken, Logs, Traces, Business KPIs)
  - Integrierte den Elastic Stack als zentrale Monitoring Plattform, inklusive OTLP Pipelines und Erweiterungen für Helm Charts
  - Implementierte SonarQube Scanning und SBOM Generierung in den CI Pipelines der Microservices
  - Baute Compliance Pipelines für FOSS Lizenzen mit Black Duck Hub auf
]

#entry(
  title: "DevOps Tech Lead",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Deutschland",
  date: "Apr 2024 - Dez 2024",
)[
  - Leitete Automatisierungsinitiativen für die Infrastruktur sowie die Entwicklung von CI/CD Pipelines für Volkswagen und Audi
  - Betreute und führte fachlich ein Team von drei Deloitte-Ingenieuren
  - Entwickelte Release Konzepte für Workloads auf Edge Clustern unter OpenShift
  - Baute automatisierte System- und Lasttests für Cloud Native Anwendungen der Data Capture Application (DCA)
  - Integrierte Tekton Pipelines mit XRAY und Jira zur Optimierung von Test Workflows
]

#entry(
  title: "Senior Solutions Architect",
  institution: "Deloitte Consulting",
  location: "Frankfurt, Deutschland",
  date: "Dez 2023 - Apr 2024",
)[
  - Leitete die Entwicklung eines PoC für Google Cloud's Manufacturing Data Engine im Rahmen der Deloitte-Google-Allianz
  - Wendete FinOps Prinzipien und Best Practices aus dem GCP Well-Architected Framework an
  - Entwickelte fortschrittliche Pipelines für Node Scheduling in Kubernetes und bedarfsgesteuerte Infrastrukturbereitstellung
  - Hielt technische Präsentationen für potenzielle Deloitte Kunden
]

#entry(
  title: "Community Group Organizer",
  institution: "Cloud Native Frankfurt",
  location: "Rhein-Main-Gebiet Frankfurt",
  date: "Feb 2025 - Heute",
)[
  - Organisiert Cloud Native Community Events und Meetups in der Region Frankfurt
  - Baut eine lokale CNCF Community auf und fördert den Wissensaustausch
  - Vernetzt Cloud Native Praktiker und Enthusiasten in der Region
]

#entry(
  title: "Content Creator - Cloud Native Technologien",
  institution: "Selbständig",
  location: "Remote",
  date: "Apr 2024 - Heute",
)[
  - Entwickelt praktische Schulungsmaterialien und interaktive Szenarien auf killercoda.com/aghilish
  - Erstellt und verwaltet einen YouTube Kanal mit Tutorials und praktischen Anleitungen
  - Deckt Themen wie Kubernetes, Containerisierung, Cloud Plattformen und DevOps Best Practices ab
]

#entry(
  title: "Freelance Senior DevOps Engineer",
  institution: "CARIAD",
  location: "Remote",
  date: "Okt 2023 - Nov 2023",
)[
  - Migrierte die Build Pipeline für die Infotainment Software von CARIAD DevStack zu GitHub Enterprise CI/CD
]

#entry(
  title: "Senior Platform Engineer",
  institution: "Commerzbank AG",
  location: "Frankfurt, Deutschland",
  date: "Feb 2023 - Sep 2023",
)[
  - Verantwortete den Engineering Backlog und sicherte die kontinuierliche Weiterentwicklung der Plattform
  - Betreute und führte ein Team von Junior Cloud Native Engineers
  - Leitete die Migration von Microservices auf ein multiregionales Google Anthos Setup mit mTLS Durchsetzung
  - Beriet das CCoE bei CVE Behebung und Image Härtung sowie beim Absichern von Service Grenzen mit OPA Policies
]

#entry(
  title: "Platform Engineer",
  institution: "Commerzbank AG",
  location: "Frankfurt, Deutschland",
  date: "Mär 2021 - Feb 2023",
)[
  - Entwickelte eine robuste Deployment Pipeline für den KYC ETL Prozess
  - Implementierte und pflegte Praktiken für Infrastructure as Code (IaC)
  - Entwarf und verwaltete CI/CD Pipelines zur Optimierung der Entwicklungsworkflows
  - Wirkte am Design und der Umsetzung skalierbarer, Microservices basierter Lösungen mit
]

#entry(
  title: "Backend Engineer / DevOps",
  institution: "Main Incubator GmbH",
  location: "Frankfurt, Deutschland",
  date: "Jun 2019 - Feb 2021",
)[
  - Arbeitete in einem kleinen agilen Inkubator-Team an der Entwicklung von Cloud Native Anwendungen auf GCP
  - Übernahm eine Doppelrolle in Backend-Entwicklung und DevOps
  - Nutzte Firebase, Node.js mit TypeScript und React.js
]

#entry(
  title: "Wissenschaftlicher Mitarbeiter - Promotion abgebrochen",
  institution: "Technische Universität Darmstadt",
  location: "Darmstadt, Deutschland",
  date: "Dez 2016 - Dez 2018",
)[
  - Arbeitete an Entwicklung und Optimierung von Netzwerktechnologien für 5G im Millimeterwellenbereich
  - Nutzte Python, C++ und MATLAB für Netzwerkdesign, Simulation und Implementierung
]

#entry(
  title: "Senior Software Engineer",
  institution: "Parham Co.",
  location: "Teheran, Iran",
  date: "Okt 2015 - Okt 2016",
)[
  - Lieferte umfassende Full Stack Lösungen mit Expertise in Frontend- und Backend-Entwicklung
]

#entry(
  title: "Wissenschaftlicher Mitarbeiter",
  institution: "Sharif University of Technology",
  location: "Teheran, Iran",
  date: "Sep 2014 - Sep 2015",
)[
  - Fokussierte auf Software Defined Networks (SDN) mit innovativen Netzwerkarchitekturen
  - Masterarbeit: "Distributed Publisher-Subscriber Pattern for Content-Based Routing in SDN"
]

#entry(
  title: "Senior Software Developer",
  institution: "Solico Group",
  location: "Teheran, Iran",
  date: "Mär 2012 - Nov 2014",
)[
  - Spezialisierte sich auf robuste, skalierbare Backend-Lösungen für Unternehmensanwendungen
]

#entry(
  title: "Software Developer",
  institution: "Telecomsoft",
  location: "Teheran, Iran",
  date: "Okt 2011 - Feb 2012",
)[
  - Entwarf und entwickelte ein Simulationstool für Routing und Bündelung in optischen Netzwerken
  - Im Auftrag des Iranian Telecommunication Research Center (ITRC)
]

== Ausbildung

#entry(
  title: "Promotion in Informatik (abgebrochen)",
  institution: "Technische Universität Darmstadt",
  location: "Deutschland",
  date: "2016 - 2018",
)[
  Forschungsschwerpunkt auf Netzwerktechnologien für 5G im Millimeterwellenbereich
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
