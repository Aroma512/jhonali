import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Jhonali Carpenter جهنالي النجار – Crafting Modern Interiors with Wood Elegance',
  description: 'Premium interior woodwork in UAE. Cupboards, kitchens, beds, saloons, and more. Modern, luxury, and custom woodwork.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fff9f2]">
        {/* Move Navbar outside of main content so it is always above hero/sections */}
        <div className="relative z-50">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );

// Pyramid-inspired, luxury navbar with WhatsApp button (same on all pages)
function Navbar() {
  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <nav
        className="relative max-w-5xl w-full mx-auto flex items-center justify-between px-6 py-3 rounded-t-3xl rounded-b-xl shadow-2xl border border-[#f5eee6] bg-gradient-to-r from-[#f5eee6]/90 via-[#fff9f2]/80 to-[#f5eee6]/90 backdrop-blur-lg animate-navbarBg overflow-visible"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #f5eee6 0%, #fff9f2 100%), url('/navbar-wood-bg.jpg')",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Light sweep animation */}
        <span className="pointer-events-none absolute inset-0 z-10 navbar-light-sweep"></span>
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/LOGO JA.png"
              alt="Jhonali Carpenter Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain rounded-full shadow"
              priority
            />
          </Link>
          <span className="hidden sm:block font-bold text-lg text-[#3e2c23] tracking-wide ml-2">
            Jhonali Carpenter <span dir="rtl" className="ml-1">نجار جون علي</span>
          </span>
        </div>
        <ul className="flex gap-2 md:gap-6 items-center font-medium text-[#3e2c23]">
          <li><Link href="/" className="hover:text-[#bfa181] transition">Home</Link></li>
          <li><Link href="/services" className="hover:text-[#bfa181] transition">Our Services</Link></li>
          <li className="relative group">
            <button
              className="hover:text-[#bfa181] transition flex items-center gap-1 focus:outline-none"
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Our Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div
              className="menu-dropdown absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg z-[999] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200"
            >
              <Link href="/categories/cupboard" className="block px-4 py-2 hover:bg-[#f5eee6]">Cupboard</Link>
              <Link href="/categories/launch" className="block px-4 py-2 hover:bg-[#f5eee6]">Launch</Link>
              <Link href="/categories/kitchen" className="block px-4 py-2 hover:bg-[#f5eee6]">Kitchen</Link>
              <Link href="/categories/beds" className="block px-4 py-2 hover:bg-[#f5eee6]">Beds</Link>
              <Link href="/categories/saloon" className="block px-4 py-2 hover:bg-[#f5eee6]">Salon</Link>
            </div>
          </li>
          <li><Link href="/work" className="hover:text-[#bfa181] transition">Our Work</Link></li>
          <li><Link href="/contact" className="hover:text-[#bfa181] transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// Luxury, pyramid-inspired footer (no map, beautiful style)
function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-[#3e2c23] via-[#bfa181] to-[#fff9f2] py-14 mt-24 rounded-t-3xl shadow-2xl overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#bfa181]/30 rounded-full blur-2xl z-0"></div>
      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/LOGO JA.png"
            alt="Jhonali Carpenter Logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain rounded-full shadow mb-2"
          />
          <div className="font-bold text-2xl text-[#fff9f2] drop-shadow">
            Jhonali Carpenter <span dir="rtl" className="ml-1">نجار جون علي</span>
          </div>
          <div className="text-[#fff9f2]/80">
            UAE, Al Ain, Al Saniya, Bengali Masjid<br />
            <span dir="rtl" className="block">الإمارات، العين، الصناعية، مسجد بنغالي</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://wa.me/971501524596?text=Hi%20Jhonali%20Carpenter"
            className="text-[#3e2c23] bg-[#25d366] px-5 py-2 rounded-full font-bold shadow hover:bg-[#128c7e] hover:text-white transition"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>
        {/* Location Map */}
        <div className="w-full md:w-[350px] h-48 rounded-xl overflow-hidden border mt-8 md:mt-0 shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Al+Saniya+Bengali+Masjid,+Al+Ain,+UAE&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jhonali Decor Master Location"
          ></iframe>
        </div>
      </div>
      <div className="text-center text-xs mt-10 text-[#fff9f2]/70 relative z-10">
        &copy; {new Date().getFullYear()} Jhonali Carpenter نجار جون علي. All rights reserved.
        <span className="absolute right-6 top-0 md:top-auto md:bottom-2 text-[#fff9f2]/80 text-xs md:text-sm">
          Powered by AroTech Vision
        </span>
      </div>
      {/* Pyramid shape at the bottom */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[40px] border-t-[#fff9f2]/60"></div>
    </footer>
  );
}
}
