import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ReduxProvider } from '../store/provider'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}