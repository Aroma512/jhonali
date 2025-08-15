import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {/* ...existing code... */}
        {/* Example dropdown for Our Categories */}
        <li className="relative group">
          <span className="text-[#3e2c23] font-semibold cursor-pointer">
            Our Categories
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded z-10 min-w-[180px]">
            {/* ...other categories... */}
            <li>
              <Link href="/categories/TV Lounge" className="block px-4 py-2 text-[#3e2c23] hover:bg-gray-100">
                TV Lounge
              </Link>
            </li>
            {/* ...other categories... */}
            <li>
              <Link href="/categories/saloon" className="block px-4 py-2 text-[#3e2c23] hover:bg-gray-100">
                Saloon
              </Link>
            </li>
            {/* ...other categories... */}
          </ul>
        </li>
        {/* ...existing code... */}
        {/* Remove or update any old Launch/Salon menu items if present */}
      </ul>
    </nav>
  );
};

export default Navbar;