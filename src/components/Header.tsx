import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './motionVariants';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const navLinks = [
    { name: 'الرئيسية', href: '/#home' },
    { name: 'عن الأكاديمية', href: '/#about' },
    { name: 'الدورات', href: '/#courses' },
    { name: 'المميزات', href: '/#features' },
    { name: 'تواصل معنا', href: '/#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-lightbg'
      }`}
    >
      {/* Accreditation banner */}
      {showBanner && (
        <div className="w-full bg-amber-400 text-amber-900 text-center py-2 px-4">
          <div className="container mx-auto flex items-center justify-center gap-4">
            <p className="text-sm font-semibold">يسرنا إعلامكم بحصول الأكاديمية الدولية أمجاد برو على اعتماد البورد الألماني للتدريب والاستشارات</p>
            <button
              aria-label="Close banner"
              onClick={() => setShowBanner(false)}
              className="ml-2 p-1 rounded-full bg-amber-200/60 hover:bg-amber-200 transition-colors"
            >
              <X className="w-4 h-4 text-amber-900" />
            </button>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">
                الأكاديمية الدولية
              </h1>
              <p className="text-xs text-gray-600">AMJD-PRO</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="text-gray-700 hover:text-primary font-medium transition-all duration-300 relative group"
                style={{
                  animation: `slideDown 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="hidden md:block px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-lg transform transition-all duration-300"
            style={{ animation: 'slideDown 0.5s ease-out 0.5s both' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            سجل الآن
          </motion.button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <motion.nav className="flex flex-col gap-4" variants={containerVariants} initial="hidden" animate="visible">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button variants={itemVariants} className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-lg mt-2">
                سجل الآن
              </motion.button>
            </motion.nav>
          </div>
        )}
      </div>
    </header>
  );
}
