import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = scrolled
    ? "bg-white shadow-md"
    : "bg-white/70 backdrop-blur-md";

  return (
    <nav className={`${navStyle} sticky top-0 z-50 h-16 flex items-center`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-farmGreen"
        >
          Farmzy
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">

          <li>
            <a href="#ecosystem" className="hover:text-farmGreen">
              Ecosystem
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-farmGreen">
              Services
            </a>
          </li>

          <li>
            <a href="#how-it-works" className="hover:text-farmGreen">
              How it works
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-farmGreen">
              Contact
            </a>
          </li>

        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">

          <Link
            to="/login"
            className="px-4 py-2 border border-farmGreen text-farmGreen rounded-lg hover:bg-farmGreen hover:text-white transition"
          >
            Login
          </Link>

          <a
            href="#download"
            className="px-4 py-2 bg-farmGreen text-white rounded-lg hover:bg-farmDark transition"
          >
            Download App
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-farmGreen"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden">

          <div className="absolute top-0 left-0 w-full bg-white shadow-lg p-6 space-y-6">

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-farmGreen">
                Menu
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-farmGreen"
              >
                <FaTimes />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-lg font-medium">

              <a href="#ecosystem" onClick={() => setMenuOpen(false)}>
                Ecosystem
              </a>

              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>

              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
                How it works
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

            </nav>

            <div className="flex flex-col gap-3 pt-4">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="border border-farmGreen text-farmGreen py-3 rounded-lg text-center"
              >
                Login
              </Link>

              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="bg-farmGreen text-white py-3 rounded-lg text-center"
              >
                Download App
              </a>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;