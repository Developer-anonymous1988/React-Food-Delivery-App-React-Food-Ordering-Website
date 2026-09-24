import './App.css'

const menuItems = [
  { label: 'Home', icon: 'home' },
  { label: 'Our Menu', icon: 'menu' },
  { label: 'Contact Us', icon: 'contact' },
  { label: 'Shop', icon: 'shop' },
  { label: 'Blog', icon: 'blog' },
  { label: 'About', icon: 'about' },
]

const iconMap = {
  home: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5h16M4 12h16M4 16.5h10" />
      <path d="M17.5 15.5l2.5 2.5 3-3" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v11A2.5 2.5 0 0 1 16.5 20h-9A2.5 2.5 0 0 1 5 17.5v-11Z" />
      <path d="M7 8.5h10M7 12h10M7 15.5h6" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.5 9.5h13l-1.2 9.5h-10.6l-1.2-9.5Z" />
      <path d="M9 9.5V7a3 3 0 0 1 6 0v2.5" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5h8.5L18.5 7v12.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Z" />
      <path d="M13.5 4.5V7h2.5" />
      <path d="M8 11h7M8 14.5h7" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 10.4V16M12 7.6h.01" />
    </svg>
  ),
}

function App() {
  return (
    <div className="page-shell">
      <header className="header">
        <div className="navbar">
          <div className="nav-spacer" aria-hidden="true" />
          <div className="welcome-text">Welcome to your website</div>
          <div className="nav-spacer" aria-hidden="true" />
        </div>

        <nav className="menu-bar" aria-label="Main menu">
          <ul className="menu-list">
            {menuItems.map(({ label, icon }) => (
              <li key={label} className="menu-item">
                <a href="#" className="menu-link">
                  <span className="menu-icon">{iconMap[icon]}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="hero-panel" aria-label="Featured hamburger image">
        <img
          src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96737.png"
          alt="Delicious hamburger"
          className="hero-burger-image"
        />
      </main>
    </div>
  )
}

export default App
