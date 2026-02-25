export const FAQ = () => {
  const faqs = [
    {
      question: 'What services does your agency offer?',
      answer: 'We specialize in web development, mobile apps, UI/UX design, and digital marketing. Our team can handle everything from MVP development to full-scale enterprise solutions.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline depends on complexity. A simple landing page takes 1-2 weeks, while a complex web application can take 4-8 weeks. We provide detailed timelines after project scoping.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing: fixed-price for defined projects, hourly rates for ongoing work, and retainer packages for long-term partnerships. Contact us for a custom quote.'
    },
    {
      question: 'Do you provide maintenance and support?',
      answer: 'Yes! We offer 3-month free maintenance post-launch, plus ongoing support packages for bug fixes, updates, and technical assistance.'
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! We can collaborate with your in-house developers, designers, or project managers. We adapt to your workflow and communication tools.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We work with modern tech stacks including React, Node.js, Python, PHP, WordPress, and mobile frameworks. We choose the best tools for each project.'
    }
  ];

  const toggleAnswer = (index: number) => {
    const answer = document.getElementById(`answer-${index}`);
    const arrow = document.getElementById(`arrow-${index}`);
    
    if (answer) {
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        if (arrow) arrow.classList.remove('rotate-180');
      } else {
        answer.style.display = 'block';
        if (arrow) arrow.classList.add('rotate-180');
      }
    }
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleAnswer(index)}
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <div className="faq-arrow">
                  <svg id={`arrow-${index}`} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div id={`answer-${index}`} className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;