import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          My Ecommerce
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-600 hover:text-black transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-600 hover:text-black transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-gray-600 hover:text-black transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-black transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-600 hover:text-black transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-600 hover:text-black transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-gray-600 hover:text-black transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors block py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
