import Link from 'next/link';

export default function SolarUnitDashboard() {
  const menuItems = [
    { title: 'شرح الدرس', path: '/units/solar_unit/solar', icon: '📖', color: 'bg-blue-500' },
    { title: 'الاختبار التفاعلي', path: '/units/solar_unit/exam', icon: '📝', color: 'bg-green-500' },
    { title: 'حول الوحدة', path: '/about', icon: 'ℹ️', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8" dir="rtl">
      <div className="max-w-3xl mx-auto text-center">
        <div className="grid gap-6">
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <div className="group flex items-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-yellow-400 transition-all cursor-pointer">
                <span className="text-4xl ml-6 group-hover:animate-bounce">{item.icon}</span>
                <div className="text-right flex-1">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}