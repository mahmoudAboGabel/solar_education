"use client";
import React, { useState } from 'react';

export default function SolarQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    { q: "ما هو الكوكب الذي يلقب بالكوكب الأحمر؟", options: ["الأرض", "المريخ", "زحل"], ans: 1 },
    { q: "كم عدد كواكب المجموعة الشمسية؟", options: ["7", "9", "8"], ans: 2 },
    { q: "أي الكواكب التالية كوكب غازي؟", options: ["عطارد", "المشترى", "الزهرة"], ans: 1 },
    { q: "ميل محور الأرض يبلغ كَم درجة؟", options: ["23.5", "25.3", "13.5"], ans: 0 },
    { q: "ماذا ينتج عن دوران الأرض حول محورها؟", options: ["الفصول الأربعة", "تعاقب الليل والنهار", "الكسوف"], ans: 1 },
    { q: "أكبر كواكب المجموعة الشمسية حجماً هو:", options: ["زحل", "المشترى", "نبتون"], ans: 1 },
    { q: "كوكب لونه أخضر مزرق ويتكون من غازات وجليد:", options: ["أورانوس", "الزهرة", "المريخ"], ans: 0 },
    { q: "متى يحدث الاعتدال الربيعي؟", options: ["21 يونيو", "21 مارس", "23 سبتمبر"], ans: 1 },
    { q: "أي من المحاصيل التالية شتوي؟", options: ["البطيخ", "الخيار", "القمح"], ans: 2 },
    { q: "أقصر نهار وأطول ليل يكون في:", options: ["الانقلاب الشتوي", "الاعتدال الخريفي", "الانقلاب الصيفي"], ans: 0 },
  ];

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].ans) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 font-sans" dir="rtl">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">انتهى الاختبار!</h2>
            <p className="text-xl mb-6">لقد أجبت على <span className="text-green-400 font-bold">{score}</span> من أصل <span className="font-bold">{questions.length}</span> أسئلة بشكل صحيح.</p>
            <button 
              onClick={restartQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 w-full"
            >
              إعادة الاختبار
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm bg-blue-900 text-blue-200 px-3 py-1 rounded-full">
                  السؤال {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm text-gray-400">المجموعة الشمسية</span>
              </div>
              <h2 className="text-xl font-semibold leading-relaxed">
                {questions[currentQuestion].q}
              </h2>
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full text-right p-4 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-xl transition duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}