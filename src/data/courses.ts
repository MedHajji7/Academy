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
    image: '/course1.png',
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
    ],
    // No schedule needed
  },
  // Add more courses here...
];