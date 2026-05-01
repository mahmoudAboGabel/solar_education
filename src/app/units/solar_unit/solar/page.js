export default function page() {
  return (
    <main className="max-w-5xl mx-auto px-4 mt-10 space-y-16">

        {/* 2. عنوان الدرس الرئيسي */}
        <section className="relative  rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="/images/1.webp" 
            alt="النظام الشمسي" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  from-indigo-950/90 to-transparent flex flex-col justify-end p-12 text-white text-right">
            <p className=" font-bold text-xl mb-2">الوحدة الأولى: رحلة عبر الفضاء</p>
            <h2 className="text-5xl font-black mb-4">الأرض والنظام الشمسي</h2>
          </div>
        </section>

        {/* 3. المجموعة الشمسية وتصنيف الكواكب */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-md border-r-8 border-indigo-600">
          <h3 className="text-3xl font-black text-indigo-900 mb-8">أولاً: المجموعة الشمسية</h3>
          <div className="space-y-6 text-xl leading-relaxed">
            <p className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              تتكون المجموعة الشمسية من نجم واحد هو <strong className="text-orange-600">الشمس</strong>، وتدور حولها <strong>8 كواكب</strong> في مدارات بيضاوية الشكل.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100">
                <h4 className="font-black text-indigo-700 mb-4 underline">📍 ترتيب الكواكب حسب البعد:</h4>
                <p className="text-lg leading-loose">عطارد ← الزهرة ← الأرض ← المريخ ← المشترى ← زحل ← أورانوس ← نبتون.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100">
                <h4 className="font-black text-indigo-700 mb-4 underline">📏 ترتيب الكواكب حسب الحجم:</h4>
                <p className="text-lg leading-loose">عطارد ← المريخ ← الزهرة ← الأرض ← نبتون ← أورانوس ← زحل ← المشترى.</p>
              </div>
            </div>
          </div>
          <img 
            src="/images/صورة الكواكب.jpeg" 
            alt="النظام الشمسي" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* 4. خصائص الكواكب بالتفصيل */}
        <section className="grid gap-8">
          {/* الكواكب الداخلية */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-md border-r-8 border-orange-500">
            <h3 className="text-2xl font-black text-orange-800 mb-6 flex items-center gap-2">🚀 مجموعة الكواكب الداخلية (الصخرية):</h3>
            <p className="text-slate-600 mb-6 italic">هي الأقرب للشمس ولها قشرة صلبة وبراكين نشطة (عدا عطارد).</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed">
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 font-bold text-slate-700">
                🌑 عطارد: غلافه رقيق (هيدروجين وهليوم)، مليء بالحفر النيزكية.
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 font-bold text-slate-700">
                ☁️ الزهرة: غلافه كثيف جداً (ثاني أكسيد كربون)، يلقب بتوأم الأرض.
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 font-bold text-slate-700">
                🌍 الأرض: غلافه (نيتروجين وأكسجين)، الكوكب الوحيد الذي به حياة.
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 font-bold text-slate-700">
                🔴 المريخ: يلقب بالكوكب الأحمر لاحتواء تربته على أكاسيد الحديد.
              </div>
            </div>
          <img 
            src="/images/الكواكب-الداخلية-كل-ما-يهمك.jpg" 
            alt="النظام الشمسي" 
            className="w-full h-full object-cover"
          />
          </div>

          {/* الكواكب الخارجية */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-md border-r-8 border-blue-500">
            <h3 className="text-2xl font-black text-blue-800 mb-6 flex items-center gap-2">🪐 مجموعة الكواكب الخارجية (الغازية):</h3>
            <p className="text-slate-600 mb-6 italic">هي الأبعد عن الشمس، ضخمة الحجم وليس لها غلاف صخري.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 font-bold text-slate-700">
                👑 المشترى: أكبر كواكب المجموعة الشمسية حجماً.
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 font-bold text-slate-700">
                💍 زحل: يشتهر بالحلقات الصخرية والجليدية الملونة.
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 font-bold text-slate-700">
                ❄️ أورانوس: كوكب بارد جداً، لونه أخضر مائل للزرقة.
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 font-bold text-slate-700">
                🔵 نبتون: الكوكب الأزرق، أبعد الكواكب وأكثرها برودة.
              </div>
            </div>
           <img 
            src="/images/WhatsApp Image 2026-04-27 at 2.58.46 PM.jpeg" 
            alt="النظام الشمسي" 
            className="w-full h-full object-cover"
            style={{ height: '200px' }}
          />
          </div>

        </section>

        {/* 5. حركات الأرض وميل المحور */}
        <section className="bg-indigo-900 text-white p-12 rounded-[3rem] shadow-2xl space-y-10">
          <h3 className="text-3xl font-black italic border-b-2 border-indigo-400 pb-4">🔄 ثانياً: حركات الأرض</h3>
          
          <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
            <h4 className="text-xl font-bold text-yellow-400 mb-2 underline">📍 محور الأرض:</h4>
            <p className="text-lg leading-loose">هو خط وهمي يمتد من القطب الشمالي إلى الجنوبي ماراً بمركز الأرض، ويميل بزاوية ثابتة مقدارها <span className="text-2xl font-black">23.5 درجة</span>.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-indigo-300">1. دوران الأرض حول محورها (اليومية):</h4>
              <p className="text-sm opacity-90 leading-relaxed text-justify">
                تدور دورة كاملة كل <strong>24 ساعة</strong> من الغرب إلى الشرق. <br/> 
                <strong>النتائج:</strong> <br/>
                1- تعاقب الليل والنهار. <br/>
                2- الحركة الظاهرية للشمس (تظهر كأنها تتحرك من الشرق للغرب). <br/>
                3- اختلاف شدة الضوء الساقط على وحدة المساحات من الأرض.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-indigo-300">2. دوران الأرض حول الشمس (السنوية):</h4>
              <p className="text-sm opacity-90 leading-relaxed text-justify">
                تدور مرة كل <strong>365.25 يوم</strong>، مما يسبب تعاقب فصول السنة الأربعة: <br/>
                - 🌸 <strong>الربيع:</strong> 21 مارس. <br/>
                - ☀️ <strong>الصيف:</strong> 21 يونيو. <br/>
                - 🍂 <strong>الخريف:</strong> 23 سبتمبر. <br/>
                - ❄️ <strong>الشتاء:</strong> 21 ديسمبر.
              </p>
            </div>
          </div>
            <img 
              src="/images/صورة الاعتدال الشتوي والخريفي .jpeg" 
              alt="النظام الشمسي" 
              className="w-full h-full object-contain" 
            />
        </section>

        {/* 6. الحركة الظاهرية للشمس وطول الظل */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-md border-t-8 border-orange-500">
          <h3 className="text-2xl font-black text-indigo-900 mb-6 flex items-center gap-2">☀️ ثالثاً: الحركة الظاهرية وطول الظل</h3>
          <div className="space-y-6 text-lg text-slate-700 italic">
            <p>يختلف الارتفاع الظاهري للشمس نهاراً، ويتبعه اختلاف في طول الظل:</p>
            <div className="grid gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border-r-8 border-orange-200">
                1- من الشروق للظهيرة: يرتفع مستوى الشمس تدريجياً، ويصبح الظل <span className="text-indigo-700 font-black underline">أقصر ما يمكن</span> وقت الظهيرة.
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-r-8 border-indigo-200">
                2- من الظهيرة للغروب: ينخفض مستوى الشمس تدريجياً، ويصبح الظل <span className="text-indigo-700 font-black underline">أطول ما يمكن</span> وقت الغروب.
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border-r-8 border-orange-400">
                3- وقت الظهيرة: يصل فيها المستوى الظاهري للشمس إلى <span className="font-bold underline">أقصى ارتفاع له</span>.
              </div>
            </div>
          </div>
          <img 
            src="/images/الحركة الظاهرية للشمس.jpeg" 
            alt="النظام الشمسي" 
            className="w-full h-full object-cover"
          />
        </section>
        <section className="bg-white p-8 rounded-[2.5rem] shadow-md border-t-8 border-orange-500">
          <h3 className="text-2xl font-black text-indigo-900 mb-6 flex items-center gap-2">☀️ رابعا: الحركة الظاهرية وفصول السنة</h3>
          
          <div className="space-y-6 text-lg text-slate-700 italic">
            <p className="font-bold text-indigo-800 border-r-4 border-indigo-600 pr-2">أولاً: اختلاف طول الظل نهاراً</p>
            <div className="grid gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border-r-8 border-orange-200">
                1- من الشروق للظهيرة: يرتفع مستوى الشمس تدريجياً، ويصبح الظل <span className="text-indigo-700 font-black underline">أقصر ما يمكن</span> وقت الظهيرة.
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-r-8 border-indigo-200">
                2- من الظهيرة للغروب: ينخفض مستوى الشمس تدريجياً، ويصبح الظل <span className="text-indigo-700 font-black underline">أطول ما يمكن</span> وقت الغروب.
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border-r-8 border-orange-400">
                3- وقت الظهيرة: يصل فيها المستوى الظاهري للشمس إلى <span className="font-bold underline">أقصى ارتفاع له</span>.
              </div>
            </div>
          <img 
            src="/images/WhatsApp Image 2026-05-01 at 2.50.45 PM.jpeg" 
            alt="النظام الشمسي" 
            className="w-full h-full object-cover"
          />
            <p className="font-bold text-indigo-800 border-r-4 border-indigo-600 pr-2 mt-8">ثانياً: تعاقب فصول السنة الأربعة</p>
            <p className="text-base not-italic">تنتج عن دوران الأرض حول الشمس مرة كل <strong>365.25 يوم</strong>:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-italic">
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <span className="font-bold text-green-700">1. الاعتدال الربيعي (21 مارس):</span> يتساوى فيه الليل والنهار.
              </div>
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                <span className="font-bold text-yellow-700">2. الانقلاب الصيفي (21 يونيو):</span> أطول نهار وأقصر ليل.
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <span className="font-bold text-orange-700">3. الاعتدال الخريفي (23 سبتمبر):</span> يتساوى فيه الليل والنهار.
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-700">4. الانقلاب الشتوي (22 ديسمبر):</span> أقصر نهار وأطول ليل.
              </div>
            </div>

            <p className="font-bold text-indigo-800 border-r-4 border-indigo-600 pr-2 mt-8">ثالثاً: التكامل مع الزراعة في مصر</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-italic">
              <div className="p-4 bg-white border-2 border-orange-100 rounded-2xl">
                <h4 className="font-black text-orange-600 mb-2">🍉 محاصيل صيفية:</h4>
                <p className="text-sm">البطيخ، الخيار، الكوسة، البصل.</p>
              </div>
              <div className="p-4 bg-white border-2 border-blue-100 rounded-2xl">
                <h4 className="font-black text-blue-600 mb-2">🌾 محاصيل شتوية:</h4>
                <p className="text-sm">البرتقال، القمح، البرسيم، الخس.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full rounded-2xl overflow-hidden shadow-inner bg-slate-100" style={{ height: '300px' }}>
          <img 
            src="/images/WhatsApp Image 2026-05-01 at 2.52.53 PM.jpeg" 
            alt="النظام الشمسي" 
            className="w-full h-full object-cover"
          />
          </div>
        </section>
        <section className="bg-white p-8 rounded-[2.5rem] shadow-md border-t-8 border-indigo-500">
          <h3 className="text-2xl font-black text-indigo-900 mb-6 flex items-center gap-2">
            🎥 فيديو شرح النظام الشمسي
          </h3>

          <div className="w-full rounded-2xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8w1A2EcBNcU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
  );
}