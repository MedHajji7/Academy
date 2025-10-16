import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">الأكاديمية الدولية</h3>
                <p className="text-sm text-gray-500">AMJD-PRO</p>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed">
              مؤسسة تعليمية رائدة معتمدة دولياً، نقدم أفضل برامج التكوين والتدريب المهني المستمر
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {['الرئيسية', 'عن الأكاديمية', 'الدورات', 'المميزات', 'تواصل معنا'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-gray-500 hover:text-primary hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">الدورات الشائعة</h4>
            <ul className="space-y-3">
              {[
                'دبلوم الإدارة والقيادة',
                'شهادة التسويق الرقمي',
                'المحاسبة الإلكترونية',
                'دبلوم الموارد البشرية',
                'إدارة المشاريع'
              ].map((course) => (
                <li key={course}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">معلومات الاتصال</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>شارع الجيش الملكي، إقامة كوروكو، الطابق الثالث، الناظور</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone className="w-5 h-5 text-primary/70 flex-shrink-0" />
                <span dir="ltr">+212 536 XX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail className="w-5 h-5 text-primary/50 flex-shrink-0" />
                <span>info@centreamjd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-right">
              جميع الحقوق محفوظة © {currentYear} الأكاديمية الدولية AMJD-PRO
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
