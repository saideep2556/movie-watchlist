import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
<header className="nav nav-scrolled relative flex items-center px-4 py-4">
  <div className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-wider">
    <Link to="/" onClick={() => window.location.reload()} >MovieVault</Link>
  </div>

  <Link to='/watchlist' className="ml-auto products-link">
    Watchlist
  </Link>
</header>
  )
}

export default Header