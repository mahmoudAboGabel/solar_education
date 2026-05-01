import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      {/* قسم الترحيب الرئيسي */}
      <section className="max-w-3xl space-y-8 animate-in fade-in duration-1000">
        <div className="relative inline-block">
          <span className="text-8xl mb-4 block animate-bounce">🌍</span>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
          مرحباً بك في <span className="text-blue-600">منصة الفضاء</span> التعليمية
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          رحلتنا اليوم تبدأ من الأرض لتصل إلى أبعد كواكب المجموعة الشمسية. 
          استكشف، تعلم، واختبر معلوماتك في بيئة تفاعلية ممتعة.
        </p>

        {/* أزرار الانتقال السريع */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link href="/units/solar_unit/solar">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all w-full sm:w-auto cursor-pointer">
              ابدأ رحلة التعلم الآن 🚀
            </button>
          </Link>
          
          <Link href="/units">
            <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all w-full sm:w-auto cursor-pointer">
              عرض قائمة الوحدات
            </button>
          </Link>
        </div>
      </section>

      {/* قسم مميزات المنصة (بطاقات صغيرة) */}
      <section className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">📖</div>
          <h3 className="font-bold text-lg mb-2">محتوى غني</h3>
          <p className="text-sm text-gray-500">شرح مفصل مدعوم بالصور والفيديوهات التعليمية.</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="font-bold text-lg mb-2">تفاعلية كاملة</h3>
          <p className="text-sm text-gray-500">واجهات سهلة الاستخدام صُممت خصيصاً لتناسب الطلاب.</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">🏆</div>
          <h3 className="font-bold text-lg mb-2">تقييم فوري</h3>
          <p className="text-sm text-gray-500">اختبارات اختيار من متعدد مع ظهور النتيجة مباشرة.</p>
        </div>
      </section>
    </div>
  );
}