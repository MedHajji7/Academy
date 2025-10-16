import { Play } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Video() {
  // Place your MP4 in the project's public folder as /video.mp4
  // Example: public/video.mp4 -> referenced below as "/video.mp4"
  const videoSrc = '/video.mp4';
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 px-4 bg-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            تعرف على أكاديميتنا
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            شاهد فيديو تعريفي عن الأكاديمية ومرافقها ونظام التدريب المتبع
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            {!playing ? (
              <div className="aspect-video bg-white flex items-center justify-center relative">
                <img
                  src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="الأكاديمية"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl transition-all duration-200">
                    <Play className="w-10 h-10 text-white" />
                  </motion.div>
                </button>
              </div>
            ) : (
              <div className="aspect-video bg-black">
                <video className="w-full h-full" controls autoPlay>
                  <source src={videoSrc} type="video/mp4" />
                  متصفحك لا يدعم عرض الفيديو.
                </video>
              </div>
            )}

            {!playing && (
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/80">
                <h3 className="text-primary text-2xl font-bold mb-2">
                  جولة داخل الأكاديمية الدولية AMJD-PRO
                </h3>
                <p className="text-gray-700">
                  اكتشف مرافقنا الحديثة وتعرف على منهجيتنا في التدريب والتكوين
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { number: '15+', label: 'قاعات تدريب حديثة' },
              { number: '50+', label: 'دورة متخصصة' },
              { number: '5000+', label: 'خريج ناجح' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center border border-primary/10 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
