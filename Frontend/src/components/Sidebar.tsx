import React from 'react';
import { motion } from 'framer-motion';
import { Question } from '../questions';

interface SidebarProps {
  questions: Question[];
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
  closeSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  questions,
  currentQuestion,
  setCurrentQuestion,
  closeSidebar,
}) => {
  const handleQuestionClick = (index: number) => {
    setCurrentQuestion(index);
    if (closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Questions</h2>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-2 custom-scrollbar">
        {questions.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleQuestionClick(index)}
            className={`w-full p-3 rounded-lg text-left transition-colors ${
              currentQuestion === index
                ? 'bg-indigo-600'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Question {index + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;