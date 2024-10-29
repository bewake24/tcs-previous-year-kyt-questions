import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../questions';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Reset selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

  const handleOptionClick = (optionText: string) => {
    if (selectedOption === null) {
      setSelectedOption(optionText);
    }
  };

  const getOptionClassName = (optionText: string) => {
    if (selectedOption === null) {
      return 'bg-gray-700 hover:bg-gray-600';
    }
    
    if (selectedOption === optionText) {
      return optionText === question.correctAnswers 
        ? 'bg-green-600' 
        : 'bg-red-600';
    }
    
    return 'bg-gray-700';
  };

  return (
    <motion.div
      key={questionNumber}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-6">
        {questionNumber}. {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: selectedOption === null ? 1.01 : 1 }}
            whileTap={{ scale: selectedOption === null ? 0.99 : 1 }}
            onClick={() => handleOptionClick(option.text)}
            disabled={selectedOption !== null}
            className={`w-full text-left p-4 rounded-lg transition-colors ${getOptionClassName(option.text)}`}
          >
            <span className="font-medium">
              {option.id.toUpperCase()}. {option.text}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-gray-700 rounded-lg"
          >
            <p className="font-medium">
              {selectedOption === question.correctAnswers
                ? '✅ Correct!'
                : `❌ Incorrect. The correct answer is: ${question.correctAnswers}`}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionCard;