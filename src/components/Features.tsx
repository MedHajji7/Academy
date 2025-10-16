import { Globe, Award, Users, Clock, BookOpen, TrendingUp, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './motionVariants';

export default function Features() {
  const features = [
    {
      icon: Award,
      title: 'شهادات معتمدة دولياً',
      description: 'احصل على شهادات معترف بها من أرقى المؤسسات التعليمية العالمية',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'مدربون محترفون',
      description: 'نخبة من الأساتذة والخبراء المتخصصين في مختلف المجالات',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'مرونة في المواعيد',
      description: 'جداول زمنية مرنة تناسب مختلف الأوقات والظروف',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: BookOpen,
      title: 'محتوى تعليمي متميز',
      description: 'مناهج حديثة ومحدثة باستمرار لمواكبة التطورات',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'تدريب عن بُعد',
      description: 'إمكانية التعلم من أي مكان في العالم بتقنيات حديثة',
      gradient: 'from-sky-500 to-sky-600'
    },
    {
      icon: TrendingUp,
      title: 'تطوير مهني مستمر',
      description: 'برامج متكاملة لتطوير المهارات والكفاءات المهنية',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: 'التزام تام بأعلى معايير الجودة في التدريب والتعليم',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Star,
      title: 'دعم مستمر',
      description: 'مرافقة ودعم شامل للمتدربين طوال رحلتهم التعليمية',
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  return (
  <section id="features" className="py-20 px-4 bg-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-6 py-2 bg-white text-primary rounded-full text-sm font-semibold inline-block mb-4 border border-primary/20">
            مميزاتنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            لماذا <span className="text-primary">الأكاديمية الدولية</span>؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم تجربة تعليمية متكاملة تجمع بين الجودة والاحترافية
          </p>
        </div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" animate="visible">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.99 }}
              className="group relative p-6 bg-white rounded-2xl shadow-md transition-all duration-500 transform"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-3 bg-white rounded-3xl p-8 md:p-12 text-primary text-center shadow-2xl animate-fade-in border border-primary/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              انضم إلى آلاف المتدربين الناجحين
            </h3>
            <p className="text-xl mb-8 opacity-90 text-gray-700">
              ابدأ رحلتك التعليمية معنا اليوم واحصل على شهادة معتمدة دولياً
            </p>
            <button className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              سجل الآن واحصل على خصم 20%
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
