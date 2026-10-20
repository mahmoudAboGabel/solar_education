import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-blue-50" dir="rtl">
      
      <div className="max-w-4xl bg-white p-10 rounded-3xl shadow-lg border border-blue-100">
        
        <h1 className="text-4xl font-bold text-blue-900 mb-6 border-b-2 pb-4">
          رحلتنا الكونية: الأرض والنظام الشمسي 🌌
        </h1>
        
        <div className="space-y-6 text-right">
          {/* مقدمة مشوقة */}
          <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
            <p className="text-xl text-gray-800 font-bold leading-relaxed">
              مرحباً بكم يا مستكشفي الفضاء! هذه المنصة هي رفيقكم في رحلة استكشاف "النظام الشمسي"، الذي يتكون من نجم واحد هو الشمس، وتدور حولها 8 كواكب في مدارات بيضاوية الشكل.
            </p>
          </div>

          {/* معلومات دسمة من الدرس */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">🪐 كواكب المجموعة</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                تنقسم الكواكب إلى **داخلية صخرية** (عطارد، الزهرة، الأرض، المريخ) و**خارجية غازية ضخمة** (المشتري، زحل، أورانوس، نبتون). الأرض هي الكوكب الوحيد النابض بالحياة بفضل الأكسجين والنيتروجين.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">🔄 حركات الأرض</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                نتعلم سر تعاقب الليل والنهار بدوران الأرض حول محورها كل 24 ساعة، وحدوث فصول السنة بدورانها حول الشمس كل 365.25 يوم، مع ميل محورها بزاوية ثابتة 23.5 درجة.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            نؤمن أن التعليم تجربة حية، ومن خلال منصتنا ستتمكن من فهم ظواهر الكون كأنك تلمس النجوم، بأسلوب تفاعلي يجمع بين العلم والتكنولوجيا الحديثة.
          </p>

          <div className="bg-indigo-900 text-white p-6 rounded-xl text-center shadow-md">
            <p className="text-lg italic font-medium">
              "هدفنا أن نكون جيلًا مبدعًا، يستخدم التكنولوجيا لفهم أسرار الكون لمستقبل أفضل."
            </p>
          </div>
        </div>

        {/* التوقيع */}
        <div className="mt-10 pt-6 border-t border-blue-100 flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm font-bold">إعداد المعلمة المبدعة:</p>
            <p className="text-xl font-bold text-blue-900 tracking-wide">سارة عطية ✨</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-xs font-bold mb-1">
              تكنولوجيا التعليم - الفرقة الرابعة شعبة معلم حاسب 2026/2027
            </span>
            <span className="text-[10px] text-gray-400">كلية التربية النوعية</span>
          </div>
        </div>

      </div>
      
    </div>
  );
}
