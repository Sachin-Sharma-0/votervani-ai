"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const QUIZ_QUESTIONS = [
  {
    question: "What is the minimum age to vote in Indian elections?",
    options: ["16", "18", "21", "25"],
    answer: 1,
    explanation: "Article 326 of the Constitution of India provides that the elections to the House of the People and to the Legislative Assembly of every State shall be on the basis of adult suffrage; that is to say, every person who is a citizen of India and who is not less than eighteen years of age."
  },
  {
    question: "What does EVM stand for?",
    options: ["Electronic Voter Monitor", "Every Vote Matters", "Electronic Voting Machine", "Electoral Vote Management"],
    answer: 2,
    explanation: "EVM stands for Electronic Voting Machine, which has been used in all general and state assembly elections in India since 2004."
  },
  {
    question: "What is the normal term of a Lok Sabha member?",
    options: ["4 years", "5 years", "6 years", "No fixed term"],
    answer: 1,
    explanation: "The normal term of the Lok Sabha is five years from the date appointed for its first meeting."
  },
  {
    question: "Which constitutional body conducts elections in India?",
    options: ["Supreme Court", "Parliament", "Election Commission of India", "NITI Aayog"],
    answer: 2,
    explanation: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India."
  },
  {
    question: "What does VVPAT stand for?",
    options: ["Voter Verifiable Paper Audit Trail", "Voter Verify Paper Action Tool", "Virtual Vote Paper Account Tracker", "Visual Voter Paper Audit Task"],
    answer: 0,
    explanation: "VVPAT stands for Voter Verifiable Paper Audit Trail. It is an independent system attached with the EVMs that allows the voters to verify that their votes are cast as intended."
  },
  {
    question: "What is the maximum limit of candidates an EVM can support?",
    options: ["16", "32", "64", "256"],
    answer: 2,
    explanation: "A single Ballot Unit can cater to 16 candidates. Up to 4 Ballot Units can be cascaded together to accommodate 64 candidates (including NOTA)."
  },
  {
    question: "What does NOTA stand for?",
    options: ["None Of The Above", "New Option To All", "No One To Appoint", "National Option To Abstain"],
    answer: 0,
    explanation: "NOTA stands for 'None of the Above'. It allows voters to officially register a vote of rejection for all candidates who are contesting."
  },
  {
    question: "Which ink is used to mark the voter's finger?",
    options: ["Permanent Ink", "Indelible Ink", "Neon Ink", "Thermal Ink"],
    answer: 1,
    explanation: "Indelible ink (silver nitrate based) is used to mark the finger of a voter to prevent multiple voting and electoral fraud."
  },
  {
    question: "What is the EPIC number?",
    options: ["A phone number", "Voter ID card number", "A secret code", "Pincode of booth"],
    answer: 1,
    explanation: "EPIC stands for Electors Photo Identity Card. The EPIC number is the unique identification number printed on your Voter ID card."
  },
  {
    question: "Who was the first Chief Election Commissioner of India?",
    options: ["Sukumar Sen", "T.N. Seshan", "Sunil Arora", "Rajiv Kumar"],
    answer: 0,
    explanation: "Sukumar Sen was the first Chief Election Commissioner of India, serving from 1950 to 1958."
  }
];

export default function KnowledgeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === QUIZ_QUESTIONS[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <section className="glass p-8 rounded-3xl max-w-3xl mx-auto shadow-lg border-ashoka/10 border-2">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <HelpCircle className="text-saffron w-6 h-6" />
          Voter Knowledge Quiz
        </h2>
        {!showResult && (
          <span className="text-sm font-medium text-muted-foreground bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold leading-relaxed">
              {QUIZ_QUESTIONS[currentQuestion].question}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={isAnswered}
                  className={cn(
                    "p-4 text-left rounded-xl border-2 transition-all font-medium",
                    !isAnswered && "hover:border-saffron hover:bg-saffron/5",
                    isAnswered && index === QUIZ_QUESTIONS[currentQuestion].answer && "border-green-india bg-green-india/10",
                    isAnswered && selectedOption === index && index !== QUIZ_QUESTIONS[currentQuestion].answer && "border-red-500 bg-red-50",
                    isAnswered && index !== QUIZ_QUESTIONS[currentQuestion].answer && selectedOption !== index && "opacity-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && index === QUIZ_QUESTIONS[currentQuestion].answer && <CheckCircle2 className="text-green-india w-5 h-5" />}
                    {isAnswered && selectedOption === index && index !== QUIZ_QUESTIONS[currentQuestion].answer && <XCircle className="text-red-500 w-5 h-5" />}
                  </div>
                </button>
              ))}
            </div>

            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl"
              >
                <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-1">Explanation:</p>
                <p className="text-sm text-blue-700 dark:text-blue-400">{QUIZ_QUESTIONS[currentQuestion].explanation}</p>
                <button
                  onClick={nextQuestion}
                  className="mt-4 w-full bg-ashoka text-white py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                >
                  {currentQuestion === QUIZ_QUESTIONS.length - 1 ? "Show Results" : "Next Question"}
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 py-8"
          >
            <div className="flex justify-center">
              <div className="bg-saffron/10 p-6 rounded-full">
                <Trophy className="w-20 h-20 text-saffron animate-bounce" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold">Quiz Completed!</h3>
              <p className="text-xl mt-2">Your Score: <span className="text-saffron font-bold">{score}</span> / {QUIZ_QUESTIONS.length}</p>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              {score === QUIZ_QUESTIONS.length 
                ? "Perfect! You're a pro voter. Spread the knowledge!" 
                : "Great effort! Knowledge is power in a democracy."}
            </p>
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 bg-ashoka text-white px-8 py-3 rounded-xl font-bold mx-auto hover:shadow-lg transition-all"
            >
              <RotateCcw className="w-5 h-5" /> Retake Quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
