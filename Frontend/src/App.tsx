import { useState } from 'react';
import { GrFormPrevious,  GrFormNext } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Sidebar from './components/Sidebar';
import QuestionCard from './components/QuestionCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { questions } from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex relative">
        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
          <div className={`absolute left-0 top-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute right-4 top-4 p-2 hover:bg-gray-700 rounded-full"
            >
              <IoMdCloseCircleOutline size={24} />
            </button>
            <Sidebar
              questions={questions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              closeSidebar={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-gray-800 h-[calc(100vh-4rem)] sticky top-16">
          <Sidebar
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </div>

        <main className="flex-1 flex flex-col min-h-[calc(100vh-4rem)]">
          <div className="flex-1 max-w-4xl mx-auto w-full p-4 lg:p-8">
            <QuestionCard
              question={questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
            />

            <div className="mt-8 mb-4 flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
              >
                <GrFormPrevious size={20} />
                Previous
              </button>

              <span className="text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
              >
                Next
                <GrFormNext size={20} />
              </button>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;