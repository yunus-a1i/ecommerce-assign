'use client';

import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import { SearchBar } from '../ui/SearchBar';
import { CartIcon } from '../cart/CartIcon';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-primary-800 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="flex items-center ml-2 lg:ml-0">
                <span className="text-2xl font-bold text-white">
                  Logo
                </span>
              </Link>
            </div>


            <div className="flex items-center gap-4">
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <SearchBar />
            </div>
              <CartIcon />
              <button className="p-2 rounded-full hover:bg-primary-900">
                <User className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          <div className="md:hidden pb-4">
            <SearchBar />
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}