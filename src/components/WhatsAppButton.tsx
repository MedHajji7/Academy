import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/212XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 animate-bounce-slow group"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        تواصل معنا عبر واتساب
      </span>
    </motion.a>
  );
}
