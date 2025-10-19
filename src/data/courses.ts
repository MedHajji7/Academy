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
    image: 'https://source.unsplash.com/800x600/?social,care',
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
    image: 'https://source.unsplash.com/800x600/?nurse,healthcare',
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
    image: 'https://source.unsplash.com/800x600/?computer,technology',
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
    image: 'https://source.unsplash.com/800x600/?marketing,digital',
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
    image: 'https://source.unsplash.com/800x600/?language,french',
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
    image: 'https://source.unsplash.com/800x600/?cooking,chef',
    features: [
      { icon: 'BookOpen', titleAr: 'تقنيات طبخ', descriptionAr: 'مهارات وتقنيات الطهي والتهييء' },
      { icon: 'Users', titleAr: 'تدريب عملي', descriptionAr: 'تدريب في مطابخ مجهزة ومحترفة' },
      { icon: 'Medal', titleAr: 'توظيف في المطاعم', descriptionAr: 'فرص لدى مطاعم وفنادق محلية وعالمية' }
    ]
  },
  {
    id: 7,
    titleAr: 'تكوين التصميم الجرافيكي',
    titleFr: 'FORMATION DESIGN GRAPHIQUE',
    price: 700,
    enrolled: 144,
    duration: '4 أشهر',
    image: 'https://source.unsplash.com/800x600/?graphic,design',
    features: [
      { icon: 'BookOpen', titleAr: 'برامج التصميم', descriptionAr: 'تدريب على Photoshop وIllustrator وFigma' },
      { icon: 'GraduationCap', titleAr: 'محفظة أعمال', descriptionAr: 'إنشاء مجموعة أعمال لعرض المهارات' },
      { icon: 'Users', titleAr: 'فرص حرة', descriptionAr: 'العمل كمصمم حر أو ضمن فرق إبداعية' }
    ]
  },
  {
    id: 8,
    titleAr: 'تكوين إدارة مشاريع صغيرة',
    titleFr: 'FORMATION GESTION DE PETITES ENTREPRISES',
    price: 480,
    enrolled: 95,
    duration: '3 أشهر',
    image: 'https://source.unsplash.com/800x600/?business,startup',
    features: [
      { icon: 'BookOpen', titleAr: 'مهارات إدارية', descriptionAr: 'أساسيات التخطيط، الموارد، والمالية' },
      { icon: 'Users', titleAr: 'ورش تطبيقية', descriptionAr: 'دراسة حالات وإنشاء خطط عمل عملية' },
      { icon: 'Medal', titleAr: 'دعم انطلاق', descriptionAr: 'نصائح للحصول على تمويل ودعم للمشروعات' }
    ]
  }
];