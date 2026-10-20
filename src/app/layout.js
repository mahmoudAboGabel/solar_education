import "./globals.css";

export const metadata = {
  title: "الموقع التعليمي - النظام الشمسي",
  description: "مشروع تعليمي لطلاب تكنولوجيا التعليم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        
        {/* Header - رأس الصفحة الثابت */}
          <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50  border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <h1 className="font-bold text-xl tracking-wide">
                <a href="/">منصة العلوم التفاعلية</a></h1>
            </div>
            
            <nav className="flex gap-6 font-medium text-blue-50">
              {/* استخدمت Link بدلاً من a لتحسين أداء التنقل في Next.js */}
              <a href="/" className="hover:text-yellow-400 transition-colors duration-300">الشاشة الرئيسية</a>
              <a href="/units" className="hover:text-yellow-400 transition-colors duration-300">عرض الدرس</a>
              <a href="/about" className="hover:text-yellow-400 transition-colors duration-300">معلومات حول المنصة</a>
              <a href="/units/solar_unit/exam" className="hover:text-yellow-400 transition-colors duration-300">الأختبار التفاعلي</a>
            </nav>
          </div>
        </header>

        {/* Content - محتوى الصفحات المتغير */}
        <main className="flex justify-center container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer - تذيل الصفحة الثابت */}
        <footer className="bg-gray-800 text-gray-300 py-8 border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="mb-4 flex justify-center gap-4 text-2xl">
              <span>🔭</span><span>🪐</span><span>☀️</span>
            </div>
            <p className="mb-2 font-semibold">إعداد الطالبة: سارة</p>
            <p className="text-sm text-gray-500">
              قسم تكنولوجيا التعليم - الفرقة الرابعة شعبة معلم حاسب 2026/2027 &copy; {new Date().getFullYear()}
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
