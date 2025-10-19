import { ChevronLeft, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './motionVariants';

export default function Hero() {
  return (
  <section id="home" className="pt-24 pb-20 px-4 overflow-hidden bg-lightbg">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-right">
            <div className="inline-block">
              <span className="px-6 py-2 bg-white text-primary rounded-full text-sm font-semibold animate-bounce-slow shadow-md border border-primary/20">
                معتمدة دولياً للتدريب والاستشارات
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-primary">
                الأكاديمية الدولية
              </span>
              <br />
              <span className="text-gray-800">للتكوين المستمر</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              ننطلق معك في رحلة علمية استثنائية متكاملة بشهادات معترف بها دولياً. نوفر تكويناً متميزاً يجمع بين الجودة والاحترافية
            </p>

            <motion.div className="flex flex-wrap gap-4" variants={containerVariants} initial="hidden" animate="visible">
              <motion.button variants={itemVariants} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 flex items-center gap-2 group">
                ابدأ رحلتك التعليمية
                <ChevronLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 border-2 border-primary/20">
                تعرف علينا أكثر
              </motion.button>
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-6 pt-8" variants={containerVariants} initial="hidden" animate="visible">
              {[
                { icon: Award, label: 'شهادات معتمدة', value: '100+' },
                { icon: Users, label: 'طالب متميز', value: '5000+' },
                { icon: BookOpen, label: 'دورة تدريبية', value: '50+' }
              ].map((stat) => (
                <motion.div key={stat.label} variants={itemVariants} className="text-center space-y-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary mx-auto" />
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative animate-slide-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img
                src='../../hero.jpg'
                alt="طالبة متخرجة"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 z-20 rounded-b-3xl">
                <h3 className="text-primary text-2xl font-bold mb-2">
                  شهادات معترف بها دولياً
                </h3>
                <p className="text-gray-700">
                  احصل على شهادة معتمدة تفتح لك آفاق النجاح
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
