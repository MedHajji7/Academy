import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Medal,
  BookOpen,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { itemVariants, containerVariants } from "./motionVariants";
import FadeInOnScroll from "./FadeInOnScroll";
import { courses, Course } from "../data/courses";

// Map of icon names to components
const IconMap = {
  BookOpen,
  GraduationCap,
  Users,
  Medal,
};

export default function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === Number(courseId));
    if (!foundCourse) {
      navigate("/");
      return;
    }
    setCourse(foundCourse);
  }, [courseId, navigate]);

  // Ensure the page loads scrolled to top when the details component mounts
  useEffect(() => {
    // immediate reset to top to avoid starting the view at the bottom
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0 });
      // Also reset any preserved scroll in html/body as a fallback
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { courseId, ...formData });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-lightbg pt-24 flex items-center justify-center">
        <div className="text-2xl text-gray-600">جاري التحميل...</div>
      </div>
    );
  }

  return (
    // add more top padding so content sits well below the navbar
    <div className="min-h-screen bg-lightbg pt-40 md:pt-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Column: Course Info */}
          <div className="w-full lg:w-7/12 space-y-6 mt-6 lg:mt-0">
            <FadeInOnScroll>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                {/* Course Header */}

                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  <motion.div
                    className="shrink-0 rounded-2xl overflow-hidden w-full md:w-72 lg:w-80 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={course.image}
                      alt={course.titleAr}
                      className="w-full h-40 md:h-48 lg:h-56 object-cover"
                    />
                  </motion.div>

                  <div className="text-right flex-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-1">
                      {course.titleAr}
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 mb-3">
                      {course.titleFr}
                    </p>

                    <div className="flex items-center justify-end gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="text-sm">{course.enrolled} مسجل</span>
                      </div>

                      <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-lg">
                        د.م {course.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Features */}
                <div className="pt-8">
                  <h2 className="text-3xl font-bold text-primary mb-8">
                    مميزات الدورة
                  </h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                  >
                    {course.features.map((feature, index) => {
                      const Icon = IconMap[feature.icon];
                      return (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                        >
                          <Icon className="w-12 h-12 text-primary mb-4" />
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {feature.titleAr}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.descriptionAr}
                          </p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Certification Badges */}
                <div className="flex flex-wrap justify-center gap-8 pt-8">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="/iso.png"
                    alt="ISO Certification"
                    className="h-24 w-auto"
                  />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="/germanboard.png"
                    alt="German Board"
                    className="h-24 w-auto"
                  />
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Right Column: Registration Form */}
          <div className="w-full lg:w-5/12">
            {/* increase sticky offset to account for navbar height */}
            <div className="sticky top-36 lg:top-32">
              <FadeInOnScroll>
                <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                    التسجيل في الدورة
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 mb-1 text-sm">
                          الاسم العائلي
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                          required
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label className="block text-gray-700 mb-1 text-sm">
                          الاسم الشخصي
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                          required
                        />
                      </motion.div>
                    </div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 mb-1 text-sm">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 mb-1 text-sm">
                        رسالة إضافية
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none text-sm"
                      ></textarea>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      className="flex justify-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow text-sm"
                      >
                        اضغط هنا للتسجيل
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
