# Portfolio Website Specification — Shahrooz Aghili

## 1. Purpose
Create a personal portfolio website that positions **Shahrooz Aghili** as a top-tier **Cloud Native Consultant**, **Senior Solutions Architect**, and **DevOps Technical Lead**, specializing in Kubernetes, Google Cloud, Cloud-Native Automation, and Platform Engineering.

The website should:
- Attract direct clients & high-value freelance projects
- Reinforce credibility for enterprise and ANÜ clients
- Serve as an authoritative content hub (tutorials, training labs, videos)

---

## 2. Target Audience
- Engineering managers / CTOs / Product Owners in large enterprises
- Google Cloud partners & consulting firms
- Recruiters for DevOps / Cloud Native freelancing
- ANÜ companies and project vendors
- Cloud developers seeking technical content and training

---

## 3. Main Pages & Structure

### **1. Home**
Purpose: High-impact, consultant-focused hero section.
Content:
- Name, headline, short value proposition:
  - “Cloud Native Consultant & Architect — Kubernetes, GCP, Platform Engineering”
- Quick CTA buttons:
  - **Book a Consultation**
  - **Download CV**
  - **LinkedIn / YouTube / KillerCoda**
- Trusted-by section with logos of companies you've worked with:  
  Deloitte, VW, AUDI, Commerzbank, CARIAD, Google Alliance

---

### **2. About**
Content:
- Short professional biography written in first person, conversational tone
- 16 years: started in backend development, moved to cloud and infrastructure, now architect and team lead
- Specific clients: VW, Audi, Commerzbank, CARIAD, Google Cloud
- Currently leading 12 people at Deloitte across two workstreams
- Certifications that matter: CKA, CKS, Google Cloud Professional Architect
- Community: organize Cloud Native Frankfurt (CNCF community group)
- Teaching: YouTube tutorials and KillerCoda interactive labs
- Languages (EN/DE/FA)
- Avoid generic "passionate leader" language. Use concrete details instead.
---
### **3. Services**
What I actually do for clients. No fluff. Each service includes a real example.

**Kubernetes Platform Engineering**
- Design, build, and run production Kubernetes clusters (EKS, GKE, Anthos, vanilla)
- Example: Built the container platform for VW's factory software at Deloitte

**CI/CD Pipeline Design**
- Tekton, GitHub Actions, GitLab CI, ArgoCD
- Example: Migrated CARIAD's infotainment build pipeline from DevStack to GitHub Enterprise

**Observability and Monitoring**
- OpenTelemetry instrumentation, Elastic Stack, Prometheus, Grafana
- Example: Designed the observability strategy for VW's entire Agile Release Train (metrics, logs, traces, business KPIs)

**Cloud Architecture (GCP, AWS, Azure)**
- Multi-cloud design, FinOps, Well-Architected reviews
- Example: Ran the Google Cloud Manufacturing Data Engine PoC for Deloitte x Google Alliance

**Cloud Migration**
- Moving workloads from on-prem to cloud, or between cloud providers
- Example: Migrated Commerzbank microservices to multi-regional Google Anthos

**Infrastructure as Code**
- Terraform, AWS CDK, Helm charts
- Example: Built a self-service CDK library compliant with VW's AWS Vanguard framework

**Team Leadership and Mentoring**
- I've led teams of 3 to 12 engineers. I do technical interviews, rollout planning, and hands-on architecture.
- Not a manager who stopped coding. I still write Helm charts and debug pods.

For each service page:
- What the problem looks like
- How I approach it
- What the client gets

---

### **4. Portfolio / Case Studies**
3–6 detailed case studies from your real work.

Examples to include:
- **Deloitte – DevOps Technical Lead**
  - Infra automation, Tekton, system/load testing pipelines, team leadership
- **Google Cloud Manufacturing Data Engine PoC**
  - GCP optimization, presales architecture, node scheduling pipelines
- **Commerzbank – Multi-regional Anthos Migration**
- **CARIAD – CI/CD Migration to GitHub Enterprise**
- **Main Incubator – GCP Cloud-Native App Development**

Each case study should include:
- Context  
- Challenges  
- Your approach  
- Technologies used  
- Measurable results

---

### **5. Speaking & Community**
Content:
- CNCF Community Group Organizer — Cloud Native Frankfurt
- Workshops, meetups, public training sessions
- Links to recordings or slides (if available)

---

### **6. Content Hub**
Sections:
- YouTube Tutorials
- KillerCoda Interactive Labs
- Blog posts (Markdown-based)
- Cloud Native deep dives
- DevOps best practices
- Kubernetes troubleshooting guides

---

### **7. Contact**
Features:
- Contact form
- Email (public): info@aghili.dev
- LinkedIn link
- Optional Calendly integration (for future)

---

## 4. Technical Requirements for Website

### **Tech Stack Recommendation**
- **Static site** (fast, secure, cheap):
  - Astro **or** Next.js (static export)
- **Markdown-driven** blog
- **Dark mode + light mode**
- Responsive mobile-first design

### **Deployment**
- GitHub Pages, Vercel, or Netlify
- CI/CD for auto-deployment on commit

### **Analytics**
- Privacy-friendly (Plausible or Umami)

### **SEO**
- Schema.org “Person” + “ProfessionalService”
- JSON-LD structured data
- Open Graph + Twitter card support

---

## 5. Visual Design

### **Theme Style**
- Clean, minimal, premium consulting aesthetic
- Inspiration: Stripe, Linear, Vercel
- Colors: Black, white, gray, slight blue accent
- Typography: Inter, Fira Code for code blocks

### **Must Include**
- Professional portrait (can be added later)
- Iconography for cloud & DevOps tools
- Company logos (monochrome)

---

## 6. Additional Future Features (Optional)
- Newsletter signup
- “Client Portal” for sharing files securely
- “Book Me” scheduling with rate card
- Microblog/TIL section
- JSON resume export

---

## 7. Content You Must Transfer From Current Profiles

### From LinkedIn:
- Work history (condensed & reformatted)
- Achievements
- Certifications

### From KillerCoda:
- Lab titles + descriptions

### From YouTube:
- Playlist of Cloud Native tutorials

---

## 8. Deliverables for the Developer / Coding Assistant
1. Complete functioning website template  
2. Markdown structure for all pages  
3. CMS-like system (Markdown-based)  
4. Instructions for adding case studies and blog posts  
5. Deployment setup  
6. SEO + Analytics installed  

---

# End of file.

