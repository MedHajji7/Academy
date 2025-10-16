import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './motionVariants';

export default function Contact() {
  return (
  <section id="contact" className="py-20 px-4 bg-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-6 py-2 bg-white text-primary rounded-full text-sm font-semibold inline-block mb-4 border border-primary/20">
            تواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            نحن في <span className="text-primary">خدمتك دائماً</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            للاستشارات والتسجيل أو لأي استفسارات، تواصل معنا الآن
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-right">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">معلومات الاتصال</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">العنوان</p>
                    <p className="text-gray-600">
                      شارع الجيش الملكي، إقامة كوروكو، الطابق الثالث
                      <br />
                      الناظور، المغرب
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">الهاتف</p>
                    <p className="text-gray-600" dir="ltr">+212 536 XX XX XX</p>
                    <p className="text-gray-600" dir="ltr">+212 6XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">البريد الإلكتروني</p>
                    <p className="text-gray-600">info@centreamjd.com</p>
                    <p className="text-gray-600">contact@centreamjd.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="font-semibold text-gray-800 mb-4">تابعنا على مواقع التواصل</p>
                <motion.div className="flex gap-4" variants={containerVariants} initial="hidden" animate="visible">
                  <motion.a href="#" variants={itemVariants} whileHover={{ scale: 1.08 }} className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
                    <Facebook className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a href="#" variants={itemVariants} whileHover={{ scale: 1.08 }} className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a href="#" variants={itemVariants} whileHover={{ scale: 1.08 }} className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
                    <Youtube className="w-6 h-6 text-white" />
                  </motion.a>
                </motion.div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-primary shadow-lg border border-primary/10">
              <h3 className="text-2xl font-bold mb-4 text-primary">ساعات العمل</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                  <span>الإثنين - الجمعة</span>
                  <span className="font-semibold text-primary">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-primary/10">
                  <span>السبت</span>
                  <span className="font-semibold text-primary">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>الأحد</span>
                  <span className="font-semibold text-primary">مغلق</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-left">
            <form className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    placeholder="+212 6XX XX XX XX"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">الموضوع</label>
                  <input
                    type="text"
                    placeholder="موضوع الرسالة"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">الرسالة</label>
                  <textarea
                    rows={4}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>إرسال الرسالة</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
