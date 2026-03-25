# Portfolio Website
A portfolio website built with [11ty](https://www.11ty.dev/). Still under development.

## Features
<!-- - Responsive two-column layout (sidebar + main content) -->
<!-- - Tabbed interface for Resume and Blog sections -->
- Container with bio and socials
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Development
Run the development server with live reload:
```bash
npm start
```

Your site will be available at `http://localhost:8080`

### Build
For production- site:
```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
portfolio/
├── src/
│   ├── _includes/
│   │   └── base.njk          # Base layout template
│   ├── css/
│   │   └── style.css         # Styles
│   ├── images/
│   │   ├── background.png    # Background image
│   │   └── profile.jpg       # Profile picture
│   ├── index.njk             # Main page
│   └── favicon.ico           # Site favicon
├── .eleventy.js              # 11ty configuration
├── package.json
└── README.md
```

## Deployment

This site can be deployed to any static hosting service.

For GitHub Pages, you may need to adjust the build command in your deployment settings to `npx @11ty/eleventy`.

## License

MIT License

## Acknowledgments

Built with [11ty](https://www.11ty.dev/), a simpler static site generator.