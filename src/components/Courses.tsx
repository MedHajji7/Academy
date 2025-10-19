import { Clock, Users, Award, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { itemVariants, containerVariants } from './motionVariants';
import { courses } from '../data/courses';

export default function Courses() {

  const [showAll, setShowAll] = useState(false);

  const displayedCourses = showAll ? courses : courses.slice(0, 3);

  return (
  <section id="courses" className="py-20 px-4 bg-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-6 py-2 bg-white text-primary rounded-full text-sm font-semibold inline-block mb-4 border border-primary/20">
            دوراتنا التدريبية
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            اختر <span className="text-primary">دورتك المثالية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مجموعة متنوعة من الدورات المعتمدة في مختلف المجالات
          </p>
        </div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {displayedCourses.map((course) => (
            <motion.div key={course.id} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.995 }} className="group bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500">
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={course.image}
                  alt={course.titleAr}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.08 }}
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="absolute bottom-4 left-4 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold shadow-lg">
                  {course.duration}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                  {course.titleAr}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary/70" />
                    <span>{course.enrolled}+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary/50" />
                    <span>معتمد</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                  <span className="text-2xl font-bold text-primary">
                    {course.price} د.م
                  </span>
                  <Link to={`/course/${course.id}`}>
                    <motion.button 
                      whileHover={{ scale: 1.03 }} 
                      whileTap={{ scale: 0.98 }} 
                      className="px-6 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center gap-2 group"
                    >
                      تفاصيل الدورة
                      <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 animate-fade-in">
          <button
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {showAll ? 'إظهار أقل' : 'عرض جميع الدورات'}
          </button>
        </div>
      </div>
    </section>
  );
}
