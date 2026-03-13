const Footer = () => {
  return (
    <footer className="bg-farmDark text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>

          <h2 className="text-2xl font-bold text-farmLeaf">
            Farmzy
          </h2>

          <p className="mt-4 text-sm text-gray-300">
            Farmzy is a digital agriculture platform connecting
            farmers and companies through a transparent marketplace
            and agricultural service ecosystem.
          </p>

        </div>

        {/* Links */}
        <div>

          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li>
              <a href="#ecosystem" className="hover:text-white">
                Ecosystem
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>

            <li>
              <a href="#how-it-works" className="hover:text-white">
                How it works
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300 text-sm">
            Email: support@farmzy.com
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Phone: +91 7249408615
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-400 text-sm">

        © {new Date().getFullYear()} Farmzy. All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;