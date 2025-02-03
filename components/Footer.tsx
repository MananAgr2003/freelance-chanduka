import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bgPrimary text-white py-10 px-5 md:px-20">
      <div className="md:w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
        {/* Logo and Description */}
        <div>
          <img src="/images/logo.png" alt="Logo" />
          <p className="mt-10 text-sm opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum viverra.
          </p>
          <h3 className="font-semibold mt-4">Download the App</h3>
          <div className="flex gap-3 mt-2">
            <button className="flex items-center gap-2 border rounded px-2 py-2 rounded text-sm">
                <img src="/icons/play-store.png" alt="Play store" className="w-4" />
                <span>Google Play</span>
            </button>
            <button className="flex items-center gap-2 border rounded px-2 py-2 rounded text-sm">
                <img src="/icons/apple.png" alt="Play store" className="w-4" />
                <span>Apple store</span>
            </button>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold">Useful Links</h3>
          <ul className="mt-2 space-y-1 text-sm opacity-80">
            <li>Trust & Safety</li>
            <li>Cookie Policy</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="mt-2 space-y-1 text-sm opacity-80">
            <li>Documentation</li>
            <li>FAQ</li>
            <li>Press</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className="font-semibold">Stay Updated</h3>
          <p className="text-sm opacity-80 mt-2">support@sacredthemes.net</p>
          <p className="text-sm opacity-80">+1 (234) 567-9801</p>
          <p className="text-sm opacity-80">49 Unique Square D, New York, NY 10003, USA</p>
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="cursor-pointer text-xl" />
            <FaLinkedinIn className="cursor-pointer text-xl" />
            <FaTwitter className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};


