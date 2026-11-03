# 🎬 CinemaHub - Modern Movie Discovery App

A sleek and modern React application for discovering and managing your favorite movies. Built with Vite, React Router, and featuring a beautiful, responsive UI with dark theme and stunning visual effects.


## ✨ Features

### 🎨 **Enhanced UI/UX**
- **Modern Dark Theme** - Beautiful gradient backgrounds and glassmorphism effects
- **Responsive Design** - Optimized for all screen sizes
- **Smooth Animations** - Hover effects, loading spinners, and transitions
- **Custom Scrollbars** - Styled scrollbars with gradient colors

### 🎬 **Movie Features**
- **Movie Search** - Search for movies by title
- **Popular Movies** - Discover trending and popular movies
- **Detailed Movie Cards** - Display ratings, release dates, and overviews
- **Favorites System** - Save and manage your favorite movies
- **Rating Display** - See movie ratings with star indicators

### 🚀 **Technical Features**
- **React 18** with modern hooks and context
- **React Router** for seamless navigation
- **TMDB API Integration** for movie data
- **Responsive Grid Layout** with auto-fit columns
- **Loading States** with elegant spinners
- **Error Handling** with user-friendly messages

## 🎯 UI Enhancements

### Navigation Bar
- **Gradient Background** with backdrop blur effect
- **Brand Identity** - "CinemaHub" with movie icon
- **Hover Effects** - Smooth animations and glow effects
- **Responsive** - Adapts to mobile screens

### Home Page
- **Hero Section** - Eye-catching title and subtitle
- **Advanced Search** - Enhanced search bar with icons
- **Movie Grid** - Beautiful card layout with hover effects
- **Loading States** - Animated loading spinner

### Movie Cards
- **Glassmorphism Design** - Translucent cards with blur effects
- **Rating Badges** - Prominent rating display
- **Favorite Hearts** - Animated heart icons for favorites
- **Hover Animations** - Scale and glow effects
- **Movie Overview** - Truncated descriptions with full text on hover

### Favorites Page
- **Empty State** - Beautiful empty state with call-to-action
- **Statistics** - Movie count display
- **Enhanced Layout** - Consistent with home page styling

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie_app_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure TMDB**
   Create `.env.local` in the project root with `VITE_TMDB_API_KEY=your_tmdb_api_key`.
   Restart the development server after changing it. Vite includes this key in the
   browser bundle, so it is visible to visitors; use a backend if it must remain secret.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📱 Responsive Design

The app is fully responsive and works great on:
- 📱 **Mobile devices** (320px and up)
- 📱 **Tablets** (768px and up)
- 💻 **Desktop** (1024px and up)
- 🖥️ **Large screens** (1400px and up)

## 🎨 Color Scheme

- **Primary Gradient**: `#64ffda` → `#448aff`
- **Background**: `#0c0c0c` → `#1a1a2e` → `#16213e`
- **Accent Colors**: Cyan, Blue, Pink gradients
- **Text**: White with various opacity levels

## 🚀 Performance Features

- **Optimized Images** - Efficient poster loading from TMDB
- **Smooth Animations** - 60fps animations with CSS transforms
- **Lazy Loading** - Efficient resource loading
- **Modern CSS** - Backdrop filters and advanced effects

## 📦 Dependencies

- **React** 18.3.1 - UI library
- **React Router DOM** 6.28.0 - Client-side routing
- **Vite** 5.4.10 - Build tool and dev server
- **ESLint** - Code linting and formatting

## 🎬 API Integration

The app uses The Movie Database (TMDB) API for:
- Fetching popular movies
- Movie search functionality
- Movie details and ratings
- High-quality poster images

## 🔧 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MovieCard.jsx   # Enhanced movie card component
│   └── NavBar.jsx      # Modern navigation bar
├── pages/              # Page components
│   ├── Home.jsx        # Home page with search
│   └── Favorites.jsx   # Favorites management
├── contexts/           # React context providers
│   └── MovieContext.jsx
├── services/           # API services
│   └── api.js
└── css/               # Stylesheets
    ├── App.css
    ├── Home.css
    ├── Navbar.css
    ├── MovieCard.css
    ├── Favorites.css
    └── index.css
```

## 🎯 Future Enhancements

- 🔍 **Advanced Filters** - Genre, year, rating filters
- 📺 **TV Shows** - Support for TV show discovery
- 👤 **User Profiles** - Personal movie recommendations
- 🎭 **Movie Details** - Dedicated movie detail pages
- 📱 **PWA Support** - Progressive web app features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Enjoy discovering amazing movies with CinemaHub! 🎬✨**
