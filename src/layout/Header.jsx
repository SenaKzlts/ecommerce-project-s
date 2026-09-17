
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          My Ecommerce
        </Link>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="text-gray-600 hover:text-black">
                Products
              </Link>
            </li>

            <li>
              <Link to="/about" className="text-gray-600 hover:text-black">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
