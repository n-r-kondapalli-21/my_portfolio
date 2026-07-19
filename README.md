# Narayana Rao Kondapalli - Portfolio Website

A modern, professional portfolio website showcasing my work as an AI Engineer, Python Developer, and Algorithmic Trading Engineer.

## 🌟 Features

- **Modern Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with preference persistence
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Animated hero section with typing effect
  - Scroll progress indicator
  - Smooth scrolling navigation
  - Hover effects on cards and buttons
  - Particle background animation
- **Sections**:
  - Hero with animated introduction
  - About Me with statistics
  - Technical Skills (categorized)
  - Experience & Education timeline
  - Featured Projects
  - AI & Trading Expertise
  - GitHub Statistics (live API integration)
  - Certificates
  - Contact form
- **GitHub Integration**: Live statistics fetching via GitHub API
- **SEO Optimized**: Meta tags for search engine visibility
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom CSS with CSS variables for theming
- **JavaScript**: Vanilla JS for interactivity
- **Libraries**:
  - AOS (Animate On Scroll) - Scroll animations
  - Typed.js - Typing effect
  - tsParticles - Particle background
  - Font Awesome - Icons
  - Google Fonts - Inter & Fira Code

## 📁 Project Structure

```
my-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── IMG_20250428_132256.jpg  # Profile photo
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. **Clone the repository** (if using Git)
   ```bash
   git clone https://github.com/n-r-kondapalli-21/my_portfolio.git
   cd my_portfolio
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience

### Using a Local Server

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option 3: VS Code Live Server Extension**
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Changing Theme Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #7c3aed;
    --accent-color: #f59e0b;
    /* ... more variables */
}
```

### Updating Content
- **Personal Info**: Edit the About section in `index.html`
- **Skills**: Update skill items in the Skills section
- **Projects**: Add/modify project cards in the Projects section
- **Experience**: Update timeline items in the Experience section
- **Contact**: Update email and social links in the Contact section

### GitHub Statistics
The GitHub username is set in `script.js`. To change it:

```javascript
async function fetchGitHubStats() {
    const username = 'your-username'; // Change this
    // ...
}
```

## 📱 Deployment

### GitHub Pages

1. Push the code to your GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Your site will be live at `https://your-username.github.io/repository-name`

### Netlify

1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Site will be deployed automatically

### Vercel

1. Import your GitHub repository
2. Configure build settings (if needed)
3. Deploy with one click

## 🌐 Live Demo

The portfolio is deployed at: [https://n-r-kondapalli-21.github.io/my_portfolio/](https://n-r-kondapalli-21.github.io/my_portfolio/)

## 📧 Contact

- **Email**: narayanakondapalli@gmail.com
- **GitHub**: [n-r-kondapalli-21](https://github.com/n-r-kondapalli-21)
- **LinkedIn**: [Narayana Rao Kondapalli](https://www.linkedin.com/in/narayana-rao-kondapalli-110810318/)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use!

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Animations by [AOS](https://michalsnik.github.io/aos/)
- Typing effect by [Typed.js](https://github.com/mattboldt/typed.js/)
- Particles by [tsParticles](https://particles.js.org/)

---

**Built with ❤️ by Narayana Rao Kondapalli**
