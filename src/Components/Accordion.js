import { useState } from "react";
import "./Accordion.css";

// Make sure keys start with lowercase to follow JS conventions
const faqData = [
  {
    question: "What is the only country that spans two continents?",
    answer: "Turkey (Europe and Asia).",
  },
  {
    question: "Which planet rains diamonds?",
    answer: "Saturn and Jupiter (due to immense pressure).",
  },
  {
    question: "What's the smallest bone in the human body?",
    answer: "The stapes in the ear.",
  },
  {
    question: "Which animal can hold its breath the longest underwater?",
    answer: "The Cuvier’s beaked whale (over 3 hours).",
  },
  {
    question: "Who invented the first email system?",
    answer: "Ray Tomlinson, in 1971.",
  },
  {
    question: "Which fruit has its seeds on the outside?",
    answer: "Strawberry.",
  },
  {
    question: "How many hearts does an octopus have?",
    answer: "Three.",
  },
  {
    question: "What was the original purpose of bubble wrap?",
    answer: "Wallpaper.",
  },
  {
    question: "Which is the only letter that doesn't appear in any U.S. state name?",
    answer: "Q.",
  },
  {
    question: "What does the word 'robot' mean in Czech?",
    answer: "Forced labor or drudgery.",
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-cont">
      <h2>FAQs</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className="faq-question"
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
          </div>
          {openIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
