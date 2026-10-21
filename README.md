# Sivakarthi — Personal Developer Portfolio

A sleek, modern, accessible, and responsive developer portfolio website designed for **Sivakarthi**, a first-year Electronics and Communication Engineering (ECE) student at **Panimalar Engineering College, Chennai, India**.

Inspired by modern **GitHub** and **Vercel** design aesthetics, this portfolio highlights early programming fundamentals, hands-on coursework, foundational Embedded Systems & IoT experiments, and provides an authentic, professional foundation for internship applications.

---

## 🌟 Key Features

- **Dark / Light Theme**: Dark theme by default with a smooth toggle switch. Automatically saves user preference to `localStorage`.
- **Royal Color Palette**: Deep navy surfaces, royal blue accents, and refined gold highlights.
- **Profile Photo & Automatic Study Year**: Shows your photo and calculates your current ECE study year from the course start year and academic-year start month.
- **Developer-Themed Hero Visual**: Features an interactive C code terminal preview (`sivakarthi_profile.c`) with a functional simulated code execution drawer.
- **Categorized Technical Skills**: Filterable skills grid covering Programming Languages (C, Python, C++, Java), Web Fundamentals (HTML5, CSS3, JavaScript), and Hardware & Tools (Git/GitHub, Embedded Systems, IoT) with honest proficiency badges.
- **Expandable Project Gallery & Accessible Modal**: Add any number of projects in `js/data.js`; cards and in-depth project detail dialogs are generated automatically.
- **Certificate Gallery**: Add any number of earned certificates, including LinkedIn credential URLs or local certificate images, in `js/data.js`.
- **Resume Preview & Download**: Resume card with academic highlights and a direct download link for your resume PDF.
- **Transparent Contact Section**: Client-side input validation and an honest dispatch mechanism (opens user's mail client with pre-filled fields or connects to Formspree/Web3Forms).
- **Mobile-First & Fully Responsive**: Optimized for smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **Accessibility & Performance (WCAG Compliant)**: Keyboard navigation support (`Tab`, `Escape`), semantic HTML5 landmarks, ARIA dialog roles, focus trapping, and `prefers-reduced-motion` compliance.

---

## 📂 Project Directory Structure

```text
portfolio/
├── index.html                   # Main semantic HTML5 document
├── css/
│   └── style.css                # CSS variables, dark/light themes, animations & responsive styles
├── js/
│   ├── data.js                  # Centralized, easily editable portfolio data
│   └── main.js                  # Core interactions: theme switcher, modal, mobile drawer, validation
├── assets/
│   ├── favicon.svg              # Crisp SVG developer favicon
│   ├── og-preview.svg           # Social media Open Graph preview banner
│   ├── profile-photo.jpeg      # Profile photo
│   └── resume-placeholder.pdf   # Placeholder resume PDF
└── README.md                    # Complete setup and deployment documentation
```

---

## 🚀 How to Run Locally

You can run this website locally in several ways:

### Option 1: Direct File Launch (Simplest)
Double-click `index.html` or right-click `index.html` and choose **Open with Google Chrome** / **Microsoft Edge** / **Firefox**.

### Option 2: VS Code "Live Server" Extension (Recommended for Development)
1. Open the `portfolio` folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` in the file tree and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500`.

### Option 3: Using Node.js / `npx serve`
```bash
npx serve .
```

### Option 4: Using Python
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ✏️ How to Personalize Your Content

All data is structured so you do **not** need to search through complex HTML tags to make updates.

### 1. Update Profile & Social Links
Open `js/data.js` and locate `PORTFOLIO_DATA.profile`:
```javascript
profile: {
  name: "Sivakarthi",
  college: "Panimalar Engineering College, Chennai, India",
  github: "https://github.com/your-actual-username",
  linkedin: "https://www.linkedin.com/in/your-actual-profile",
  email: "your.real.email@gmail.com",
  photoPath: "assets/profile-photo.jpeg",
  studyStartYear: 2026,
  studyStartMonth: 6,
  studyDuration: 4,
  resumePath: "assets/resume-placeholder.pdf"
}
```
Copy a square or portrait image into `assets/` and update `photoPath` to its filename. The study year is calculated automatically using `studyStartYear`, `studyDuration`, and `studyStartMonth` (1 = January, 6 = June, and so on). The profile, contact, footer, and certificate-section LinkedIn links all use the `linkedin` value.

### 2. Replace the Resume PDF
1. Export your real resume as a PDF (e.g., `Sivakarthi_Resume.pdf`).
2. Copy the PDF into the `assets/` folder.
3. In `js/data.js`, update `resumePath: "assets/Sivakarthi_Resume.pdf"`.

### 3. Update Skills & Proficiency
In `js/data.js`, you can modify or add skills inside the `skills` array. Each skill supports levels: `"Beginner"`, `"Learning"`, or `"Exploring"`.

### 4. Add Projects & Repository URLs
Add another object to the `projects` array in `js/data.js`. The project gallery and details modal render from this list:
```javascript
{
  id: "my-new-project",
  title: "My New Project",
  shortDescription: "A short summary shown on the project card.",
  technologies: ["C", "Arduino"],
  status: "Completed",
  statusBadge: "status-active",
  githubUrl: "https://github.com/your-username/my-new-project",
  modalDetails: {
    problemStatement: "What the project is for.",
    keyFeatures: ["Feature one"],
    circuitOrArchitecture: "How it works.",
    keyLearnings: ["What I learned"],
    futureEnhancements: ["What I plan to add"]
  }
}
```
Use a unique `id`; set `githubUrl` to an empty string if the repository is not public yet.

### 5. Add Earned Certificates
Add an object for each earned credential to the `certificates` array. Use a LinkedIn credential URL or include a local image file in `assets/`:
```javascript
{
  id: "certificate-id",
  title: "Certificate title",
  issuer: "Issuing organization",
  date: "October 2026",
  description: "What the certificate covers.",
  credentialUrl: "https://www.linkedin.com/learning/certificates/your-id",
  imagePath: "assets/my-certificate.png"
}
```
`credentialUrl` and `imagePath` are optional; when either is provided, the certificate card includes a view button. You can add as many projects and certificates as you like.

---

## 📬 Connecting the Contact Form to a Free Email Backend

By default, the contact form validates input and opens your visitor's default email client (`mailto:`) with the message pre-filled.

If you prefer receiving emails directly without launching an email client, you can use **Formspree** or **Web3Forms** for free:

### Using Formspree (Free 50 submissions/month):
1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. Copy your form ID endpoint (e.g., `https://formspree.io/f/xyzabced`).
3. Open `index.html`, find `<form id="contact-form"...>`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🌐 Deployment Instructions

### 1. Publish to GitHub Pages
1. Use your existing public [`demo-portfolio` repository](https://github.com/Sivakarthi-24/demo-portfolio).
2. Install [Git for Windows](https://git-scm.com/download/win) if `git` is not available, then open a terminal in this project folder.
3. Initialize this local folder and connect it to your existing repository:
   ```bash
   git init -b main
   git add .
   git commit -m "Publish portfolio website"
   git remote add origin https://github.com/Sivakarthi-24/demo-portfolio.git
   git push -u origin main
   ```
   If Git says `remote origin already exists`, run `git remote set-url origin https://github.com/Sivakarthi-24/demo-portfolio.git` and then `git push -u origin main`.
4. On GitHub, open `Sivakarthi-24/demo-portfolio` → **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then select **Save**.
6. After deployment completes, your site will be available at [https://sivakarthi-24.github.io/demo-portfolio/](https://sivakarthi-24.github.io/demo-portfolio/).
7. To help Google find it, sign in to [Google Search Console](https://search.google.com/search-console/), add the deployed URL as a URL-prefix property, complete its ownership verification, submit `https://sivakarthi-24.github.io/demo-portfolio/sitemap.xml`, and use **URL inspection → Request indexing** for the homepage.

Google indexing can take days or weeks and is not guaranteed. The `robots.txt` and `sitemap.xml` files help search engines discover the published page; they do not guarantee a particular search ranking. The `.gitignore` excludes the local VS Code heap-profile file from the published repository.

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** -> **"Project"**.
3. Select your `portfolio` repository from GitHub.
4. Keep the default settings (Framework Preset: *Other*) and click **"Deploy"**.
5. Within 15 seconds, your site will be live at a free URL like: `https://portfolio-sivakarthi.vercel.app`!

---

### 3. Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com) and log in with GitHub.
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Choose your GitHub repository.
4. Leave build command empty and publish directory as `./` (root).
5. Click **"Deploy site"**.

---

### 4. Deploy to GitHub Pages
1. On GitHub, navigate to your `portfolio` repository.
2. Click **Settings** -> **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**.
5. Your portfolio will be live at `https://<YOUR_GITHUB_USERNAME>.github.io/portfolio/`.

---

## 🌍 Connecting a Custom Domain (Optional)

If you register a custom domain (e.g. `sivakarthi.dev` or `sivakarthi.me` from Namecheap, Porkbun, or Google Domains):

1. **On Vercel / Netlify**: Go to **Project Settings** -> **Domains**.
2. Type your domain name (e.g. `sivakarthi.dev`) and click **Add**.
3. Follow the DNS instructions:
   - For root domain (`sivakarthi.dev`): Add an **A record** pointing to the IP provided by Vercel (`76.76.21.21`).
   - For `www.sivakarthi.dev`: Add a **CNAME record** pointing to `cname.vercel-dns.com`.
4. DNS propagation typically takes between 5 minutes and 24 hours. SSL certificates (HTTPS) are provisioned automatically.

---

## 📄 License
This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to adapt and customize it for your personal career journey!
