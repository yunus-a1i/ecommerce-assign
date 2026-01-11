import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#08305E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Filters</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">All</li>
              <li className="hover:text-white cursor-pointer">Electronics</li>
              <li className="hover:text-white cursor-pointer">clothing</li>
              <li className="hover:text-white cursor-pointer">home</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">About Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 transition">
                <Facebook size={16} fill="white"/>
              </a>
              <a className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 transition">
                <Twitter size={16} fill="white"/>
              </a>
              <a className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 transition">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-white/70">© 2024 American</div>
      </div>
    </footer>
  );
}
