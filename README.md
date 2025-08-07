# Portfolio Website - Fullstack Developer

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Showcasing fullstack development skills with a focus on backend expertise.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern Tech Stack**: React 19, Vite, Tailwind CSS, Framer Motion
- **Interactive Sections**: Hero, About, Skills, Projects, Experience, Certifications
- **Smooth Animations**: Professional micro-interactions and transitions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Error Handling**: Error boundaries and loading states
- **Analytics Ready**: Google Analytics integration setup

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Personal Information
1. Update `src/Components/portfolio/HeroSection.jsx` with your name
2. Replace placeholder photo in `src/Components/portfolio/AboutSection.jsx`
3. Update contact information in `src/Components/portfolio/ContactSection.jsx`
4. Modify `index.html` meta tags with your information

### Content
- **Projects**: Update `src/Components/portfolio/ProjectsSection.jsx` with your actual projects
- **Skills**: Modify `src/Components/portfolio/SkillsSection.jsx` with your tech stack
- **Experience**: Update `src/Components/portfolio/ExperienceSection.jsx` with your work history
- **Certifications**: Modify `src/Components/portfolio/CertificationsSection.jsx` with your certificates

### Analytics
1. Get your Google Analytics 4 measurement ID
2. Uncomment and update the GA initialization in `src/main.jsx`
3. Replace `'G-XXXXXXXXXX'` with your actual measurement ID

### Colors & Branding
The design uses a consistent color palette:
- Primary: `#FF6B6B` (Red)
- Secondary: `#FFB347` (Orange) 
- Accent: `#4ECDC4` (Teal)
- Background: `#F5F1EB` (Cream)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment

This project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

If you have any questions or suggestions, feel free to reach out!