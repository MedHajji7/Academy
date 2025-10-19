import { Target, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './motionVariants';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'أن نكون الأكاديمية الرائدة في مجال التكوين المستمر والتطوير المهني على مستوى المنطقة',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'رسالتنا',
      description: 'نقدم تكويناً متميزاً يجمع بين الجودة العالية والاحترافية لتطوير مهارات المتدربين',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'قيمنا',
      description: 'الالتزام بالجودة، النزاهة، التطوير المستمر، واحترام جميع المتدربين والشركاء',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-6 py-2 bg-white text-primary rounded-full text-sm font-semibold inline-block mb-4 border border-primary/20">
            من نحن
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            الأكاديمية <span className="text-primary">Academy-Name</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مؤسسة تعليمية رائدة متخصصة في التكوين والتدريب المهني المستمر. نحن نعتمد أرقى المعايير الدولية في التدريب والاستشارات
          </p>
        </div>

        <motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={containerVariants} initial="hidden" animate="visible">
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="group relative p-8 bg-white rounded-3xl shadow-lg transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-white rounded-3xl p-12 text-gray-900 text-center shadow-2xl animate-fade-in border border-primary/10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            لماذا تختار الأكاديمية؟
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            نحن نقدم تجربة تعليمية فريدة تجمع بين الخبرة الأكاديمية العالية والتطبيق العملي، مع شهادات معترف بها دولياً من أفضل المؤسسات التعليمية
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-bold">20+</p>
              <p className="text-primary">سنة خبرة</p>
            </div>
            <div className="w-px bg-primary/10"></div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">95%</p>
              <p className="text-primary">نسبة رضا المتدربين</p>
            </div>
            <div className="w-px bg-primary/10"></div>
            <div className="space-y-2">
              <p className="text-5xl font-bold">100%</p>
              <p className="text-primary">شهادات معتمدة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
