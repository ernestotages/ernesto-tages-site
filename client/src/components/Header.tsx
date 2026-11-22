import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/resources", label: t("nav.resources") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="select-none">
              <img
                src="/logo_ET.jpg"
                alt="Ernesto Tages"
                width={1269}
                height={507}
                className="h-12 w-auto cursor-pointer select-none"
                draggable="false"
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              className="flex items-center space-x-2 p-2 text-[#121212] hover:text-[#D9307E] transition-colors relative z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <>
                  <X size={28} />
                  <span className="text-lg font-medium">{t("nav.close")}</span>
                </>
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>

          {/* Dropdown Navigation Menu */}
          {menuOpen && (
            <div className="absolute right-4 sm:right-6 lg:right-8 top-20 bg-white border border-gray-200 rounded-lg shadow-lg py-4 px-6 min-w-[240px] z-50 animate-fadeInSlideDown">
              <div className="flex flex-col space-y-4">
                {/* Navigation Links */}
                {navItems.map((item, index) => (
                  <Link key={item.path} href={item.path}>
                    <span
                      className={`block text-lg font-medium transition-colors cursor-pointer animate-fadeInSlideRight ${
                        isActive(item.path)
                          ? "text-[#D9307E]"
                          : "text-[#121212] hover:text-[#D9307E]"
                      }`}
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
                
                {/* Language Selector at bottom */}
                <div className="pt-4 border-t border-gray-200">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
