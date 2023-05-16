import React, { useState } from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import FaqSectionStyles from '../styles/components/FaqSection.module.scss'
import Header from './Header';

import { serifPro, leagueSpartan } from '@/util/fonts'

const FaqSection = ({ questionsData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="component">
      <Header 
        title="Frequently Asked Questions"
      />
      <div className={FaqSectionStyles.container}>
        {questionsData.map((question, index) => (
          <div key={index} className={FaqSectionStyles.faqItem}>
            <button className={`${leagueSpartan.className} ${FaqSectionStyles.question}`} onClick={() => handleClick(index)}>
              {question.question}
              {activeIndex === index ? (
                <AiOutlineMinus className={FaqSectionStyles.icon} />
              ) : (
                <AiOutlinePlus className={FaqSectionStyles.icon} />
              )}
            </button>
            <div className={activeIndex === index ? (`${FaqSectionStyles.answer} ${FaqSectionStyles.answerActive}`) : (FaqSectionStyles.answer)}>
              <p className={serifPro.className}>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;