export interface Course {
  id: number;
  titleAr: string;
  titleFr: string;
  price: number;
  enrolled: number;
  duration: string;
  image: string;
  features: {
    icon: 'BookOpen' | 'GraduationCap' | 'Users' | 'Medal';
    titleAr: string;
    descriptionAr: string;
  }[];
}

export const courses: Course[] = [
  {
    id: 1,
    titleAr: 'تكوين مساعد(ة) اجتماعي(ة)',
    titleFr: 'FORMATION ASSISTANT(E) SOCIAL(E)',
    price: 500,
    enrolled: 73,
    duration: '4 أشهر',
    image: 'https://plus.unsplash.com/premium_photo-1723759233956-63db70b7a391?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    features: [
      {
        icon: 'BookOpen',
        titleAr: 'مجموعة من المهارات',
        descriptionAr: 'ستمكنك من معرفة مجموعة من المهارات في مجال الدعم النفسي و الإجتماعي'
      },
      {
        icon: 'GraduationCap',
        titleAr: 'شهادة دولية معتمدة',
        descriptionAr: 'تحصل على دبلوم دولي معتمد من السفارة'
      },
      {
        icon: 'Users',
        titleAr: 'فرص عمل',
        descriptionAr: 'تكوين يفتح آفاق العمل بمؤسسات الرعاية الإجتماعية ورعاية المسنين بدولة ألمانيا'
      },
      {
        icon: 'Medal',
        titleAr: 'مدة التكوين',
        descriptionAr: 'مدة التكوين 4 أشهر'
      }
    ]
  },
  {
    id: 2,
    titleAr: 'تكوين تمريض أساسي',
    titleFr: 'FORMATION INFIRMIER(E) DE BASE',
    price: 750,
    enrolled: 120,
    duration: '6 أشهر',
    image: 'https://plus.unsplash.com/premium_photo-1663050906605-faa2aa0e5ff8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    features: [
      { icon: 'BookOpen', titleAr: 'مناهج عملية', descriptionAr: 'مزيج من الجانب النظري والتدريب العملي بالمستشفيات' },
      { icon: 'GraduationCap', titleAr: 'اعتماد مهني', descriptionAr: 'شهادة معترف بها وطنياً ودولياً' },
      { icon: 'Users', titleAr: 'توظيف مضمون', descriptionAr: 'عروض عمل لدى مؤسسات صحية محلية ودولية' }
    ]
  },
  {
    id: 3,
    titleAr: 'تكوين تقني في تكنولوجيا المعلومات',
    titleFr: "FORMATION TECHNICIEN(NE) INFORMATIQUE",
    price: 900,
    enrolled: 89,
    duration: '5 أشهر',
    image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZPUk1BVElPTiUyMFRFQ0hOSUNJRU4lMjBJbmZvcm1hdGlxdWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
    features: [
      { icon: 'BookOpen', titleAr: 'مهارات برمجية', descriptionAr: 'أساسيات البرمجة، الشبكات، وصيانة الحواسيب' },
      { icon: 'GraduationCap', titleAr: 'مشاريع عملية', descriptionAr: 'إنجاز مشاريع حقيقية ضمن ورشات' },
      { icon: 'Users', titleAr: 'شبكة خريجين', descriptionAr: 'انضمام إلى شبكة مهنيين وخبراء في المجال' }
    ]
  },
  {
    id: 4,
    titleAr: 'تكوين تسويق إلكتروني',
    titleFr: 'FORMATION MARKETING DIGITAL',
    price: 650,
    enrolled: 200,
    duration: '3 أشهر',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFya2V0aW5nJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    features: [
      { icon: 'BookOpen', titleAr: 'أدوات حديثة', descriptionAr: 'تعلم استخدام أدوات التسويق الرقمي والتحليل' },
      { icon: 'Users', titleAr: 'حالات دراسية', descriptionAr: 'تحليل حملات ناجحة وتطبيق استراتيجيات' },
      { icon: 'Medal', titleAr: 'شهادة مهنية', descriptionAr: 'شهادة معتمدة لسوق العمل' }
    ]
  },
  {
    id: 5,
    titleAr: 'تكوين لغة فرنسية للمبتدئين',
    titleFr: 'FORMATION FRANÇAIS DÉBUTANT',
    price: 300,
    enrolled: 340,
    duration: '2 أشهر',
    image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZ3VhZ2UlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    features: [
      { icon: 'BookOpen', titleAr: 'مستوى أساسي', descriptionAr: 'قواعد ومفردات للتواصل اليومي' },
      { icon: 'Users', titleAr: 'مدرسون ناطقون', descriptionAr: 'دروس مباشرة مع مدرسين مؤهلين' },
      { icon: 'Medal', titleAr: 'شهادة حضور', descriptionAr: 'شهادة إتمام للمستوى المبتدئ' }
    ]
  },
  {
    id: 6,
    titleAr: 'تكوين طبخ احترافي',
    titleFr: 'FORMATION CUISINE PROFESSIONNELLE',
    price: 820,
    enrolled: 56,
    duration: '4 أشهر',
    image: 'https://plus.unsplash.com/premium_photo-1682097301631-902c29a12a21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZyUyMGNoZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
    features: [
      { icon: 'BookOpen', titleAr: 'تقنيات طبخ', descriptionAr: 'مهارات وتقنيات الطهي والتهييء' },
      { icon: 'Users', titleAr: 'تدريب عملي', descriptionAr: 'تدريب في مطابخ مجهزة ومحترفة' },
      { icon: 'Medal', titleAr: 'توظيف في المطاعم', descriptionAr: 'فرص لدى مطاعم وفنادق محلية وعالمية' }
    ]
  },
];