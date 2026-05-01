import Link from 'next/link';

export default function UnitsPage() {
  const units = [
    {
      id: 'solar_unit/solar',
      title: 'وحدة النظام الشمسي',
      description: 'استكشف الكواكب، النجوم، وحركة الأرض وفصول السنة.',
      icon: '☀️',
      color: 'bg-yellow-100 border-yellow-500'
    },
    // يمكنك إضافة وحدات أخرى هنا مستقبلاً
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">الوحدات الدراسية</h1>
      
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {units.map((unit) => (
          <Link href={`/units/${unit.id}`} key={unit.id}>
            <div className={`p-6 rounded-2xl border-2 transition-transform hover:scale-105 cursor-pointer shadow-sm ${unit.color}`}>
              <div className="text-4xl mb-4">{unit.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{unit.title}</h2>
              <p className="text-gray-600">{unit.description}</p>
              <div className="mt-4 text-blue-600 font-semibold italic">اضغط لبدء التعلم ←</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}