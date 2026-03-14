// import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  Building2,
  DollarSign,
  Handshake,
  Newspaper,
  Sprout,
  Tractor,
  Users,
  Wrench,
} from "lucide-react";
import PublicLayout from "@/layouts/PublicLayout";

const LandingPage = () => {
  return (
    <PublicLayout>
      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-farmBg scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-farmDark leading-tight">
              Connecting Farmers <br /> and Companies
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Farmzy is a digital agriculture platform enabling transparent crop
              trading, labour hiring and equipment rental.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-farmGreen text-white px-6 py-3 rounded-lg hover:bg-farmDark transition">
                Explore Marketplace
              </button>

              <button className="border border-farmGreen text-farmGreen px-6 py-3 rounded-lg hover:bg-farmGreen hover:text-white transition">
                <a href="#download">Download App</a>
              </button>
            </div>
          </div>

          {/* VECTOR ILLUSTRATION */}

          <div className="flex justify-center">
            <div className="bg-white p-12 rounded-2xl shadow-xl">
              <Sprout size={120} className="text-farmGreen" />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section
        id="problem"
        className="min-h-screen flex items-center bg-white scroll-mt-19"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-farmDark">
            Challenges in Traditional Agriculture
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="bg-farmBg p-6 rounded-xl shadow">
              <AlertTriangle className="mx-auto text-farmGreen" />
              <p className="mt-3 text-sm">Middlemen Dependency</p>
            </div>

            <div className="bg-farmBg p-6 rounded-xl shadow">
              <DollarSign className="mx-auto text-farmGreen" />
              <p className="mt-3 text-sm">Unfair Pricing</p>
            </div>

            <div className="bg-farmBg p-6 rounded-xl shadow">
              <Handshake className="mx-auto text-farmGreen" />
              <p className="mt-3 text-sm">Labour Shortage</p>
            </div>

            <div className="bg-farmBg p-6 rounded-xl shadow">
              <Tractor className="mx-auto text-farmGreen" />
              <p className="mt-3 text-sm">Equipment Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section
        id="ecosystem"
        className="min-h-screen flex items-center bg-farmBg scroll-mt-19"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-farmDark">Farmzy Ecosystem</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            <div className="bg-white p-6 rounded-xl shadow">
              <Users className="mx-auto text-farmGreen" />
              <p className="mt-3 font-semibold">Farmers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Building2 className="mx-auto text-farmGreen" />
              <p className="mt-3 font-semibold">Companies</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Users className="mx-auto text-farmGreen" />
              <p className="mt-3 font-semibold">Labourers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Wrench className="mx-auto text-farmGreen" />
              <p className="mt-3 font-semibold">Equipment Owners</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section
        id="marketplace"
        className="min-h-screen flex items-center bg-white scroll-mt-19"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold text-farmDark">
              Direct Farmer-Company Marketplace
            </h2>

            <p className="mt-6 text-gray-600">
              Farmers can list crops and companies can purchase directly with
              transparent pricing and secure transactions.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Direct crop listing</li>
              <li>✔ Verified companies</li>
              <li>✔ Transparent pricing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="min-h-screen flex items-center bg-farmBg scroll-mt-19"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-farmDark">
            Agricultural Services Platform
          </h2>

          <p className="mt-4 text-gray-600">
            Farmzy provides multiple services that support farmers beyond crop
            trading.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="bg-white p-8 rounded-xl shadow">
              <Users className="mx-auto text-farmGreen" size={40} />
              <h3 className="mt-4 font-semibold">Labour Hiring</h3>
              <p className="text-sm text-gray-600 mt-2">
                Find nearby agricultural labour quickly and efficiently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <Tractor className="mx-auto text-farmGreen" size={40} />
              <h3 className="mt-4 font-semibold">Equipment Rental</h3>
              <p className="text-sm text-gray-600 mt-2">
                Rent tractors and farming equipment from local owners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <Wrench className="mx-auto text-farmGreen" size={40} />
              <h3 className="mt-4 font-semibold">Service Booking</h3>
              <p className="text-sm text-gray-600 mt-2">
                Book agricultural services with transparent scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section
        id="ai"
        className="min-h-screen flex items-center bg-white scroll-mt-19"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <Bot className="mx-auto text-farmGreen" size={60} />

          <h2 className="text-4xl font-bold text-farmDark mt-6">
            AI Multilingual Farming Assistant
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Farmers can ask questions related to crops, farming practices,
            equipment usage and government schemes in their local language.
          </p>
        </div>
      </section>

      {/* Agriculture Information HUB */}
      <section
        id="information-hub"
        className="min-h-screen flex items-center bg-farmBg scroll-mt-19"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-farmDark">
            Agricultural Information Hub
          </h2>

          <p className="mt-4 text-gray-600">
            Access reliable agricultural knowledge and updates.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="bg-white p-8 rounded-xl shadow">
              <Newspaper className="mx-auto text-farmGreen" />
              <p className="mt-3">Agriculture News</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <Newspaper className="mx-auto text-farmGreen" />
              <p className="mt-3">Government Schemes</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <Newspaper className="mx-auto text-farmGreen" />
              <p className="mt-3">Modern Farming Practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="min-h-screen flex items-center bg-white scroll-mt-19"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-farmDark">How Farmzy Works</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="bg-farmBg p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold">1</h3>
              <p className="mt-3">Farmers list crops</p>
            </div>

            <div className="bg-farmBg p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold">2</h3>
              <p className="mt-3">Companies place orders</p>
            </div>

            <div className="bg-farmBg p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold">3</h3>
              <p className="mt-3">Secure payment & delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        id="benefits"
        className="min-h-screen flex items-center bg-farmBg scroll-mt-19"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-farmGreen">
              Benefits for Farmers
            </h3>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Better crop pricing</li>
              <li>✔ Direct buyers</li>
              <li>✔ Access to labour & equipment</li>
              <li>✔ Transparent marketplace</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-farmGreen">
              Benefits for Companies
            </h3>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Verified farmers</li>
              <li>✔ Efficient procurement</li>
              <li>✔ Digital order management</li>
              <li>✔ Transparent transactions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section
        id="download"
        className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-19 px-6"
      >
        {/* GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2e8b57] via-[#2f9b62] to-[#3cb371]" />

        {/* SHAPE OVERLAY */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-[length:200px_200px]" />
        </div>

        {/* CONTENT */}
        <div className="relative max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Download the Farmzy App
          </h2>

          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Access the Farmzy agriculture marketplace anytime from your mobile
            device. Manage crops, book services and track orders easily.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/farmzy.apk"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium shadow hover:scale-105 hover:bg-gray-100 transition"
            >
              Download APK
            </a>

            <a
              href="#"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium shadow hover:scale-105 transition"
            >
              Get it on Play Store
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex items-center bg-white scroll-mt-19"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-farmDark">Contact Us</h2>

          <form className="mt-10 space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              rows={4}
              placeholder="Message"
              className="w-full p-3 border rounded-lg"
            />

            <button className="bg-farmGreen text-white px-6 py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
};

export default LandingPage;
