import React, { useState, useEffect } from 'react';

const womenFAQs = {
  adolescents: [ // 10-19
    { question: "Is it normal to have irregular periods at first?", answer: "Yes, it is very normal for periods to be irregular for the first few years after menstruation starts as your body's hormones regulate." },
    { question: "How can I manage period pain and cramps?", answer: "Over-the-counter pain relievers, using a heating pad on your abdomen, and light exercise can all help manage cramps." }
  ],
  youngAdults: [ // 20-29
    { question: "How do I choose the right method of contraception?", answer: "The right method depends on your lifestyle, health, and personal preferences. It is best to discuss options like pills, IUDs, or condoms with a healthcare provider to find the best fit for you." },
    { question: "What are signs of reproductive infections (like yeast or UTIs)?", answer: "Common signs include unusual discharge, itching, a burning sensation during urination, and pelvic pain. If you experience these, it's important to see a doctor." }
  ],
  adults: [ // 30-39
    { question: "What are signs of PCOS or endometriosis?", answer: "Signs of PCOS can include irregular periods, acne, and excess hair growth. Endometriosis is often characterized by very painful periods and pelvic pain. A doctor can provide a proper diagnosis." },
    { question: "How can I prepare my body for pregnancy?", answer: "Preparing for pregnancy involves taking prenatal vitamins (especially folic acid), maintaining a healthy weight, eating a balanced diet, and stopping smoking or drinking alcohol." }
  ],
  mature: [ // 40-49
    { question: "What are signs of perimenopause?", answer: "Perimenopause is the transition to menopause. Common signs include changes in your menstrual cycle, hot flashes, sleep problems, and mood swings." },
    { question: "Can I still get pregnant during perimenopause?", answer: "Yes, pregnancy is still possible during perimenopause, although it becomes less likely. If you do not want to become pregnant, you should continue using contraception." }
  ],
  postMenopausal: [ // 50+
    { question: "How can I protect bone health and prevent osteoporosis?", answer: "After menopause, estrogen levels drop, which can lead to bone loss. Protecting your bones includes getting enough calcium and vitamin D, doing weight-bearing exercises, and avoiding smoking." },
    { question: "Is it normal to still have spotting or bleeding after menopause?", answer: "No, any bleeding after menopause is considered abnormal and should be evaluated by a doctor immediately to rule out serious conditions." }
  ]
};

const generalFAQs = [
  { question: "How does stress impact the menstrual cycle?", answer: "High levels of stress can disrupt your hormone balance, which can lead to delayed or missed periods, or even make premenstrual symptoms worse. Managing stress can help regulate your cycle." }
];

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const age = userProfile ? parseInt(userProfile.age, 10) : 0;

    if (age >= 10 && age <= 19) setFaqs(womenFAQs.adolescents);
    else if (age >= 20 && age <= 29) setFaqs(womenFAQs.youngAdults);
    else if (age >= 30 && age <= 39) setFaqs(womenFAQs.adults);
    else if (age >= 40 && age <= 49) setFaqs(womenFAQs.mature);
    else if (age >= 50) setFaqs(womenFAQs.postMenopausal);
    else setFaqs(generalFAQs);
    
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-brand-red mb-8 text-center">Curious About...?</h1>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-brand-dark-red mb-2">{item.question}</h2>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
