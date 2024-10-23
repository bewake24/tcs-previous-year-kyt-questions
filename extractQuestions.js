// extractQuestions.js
const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

const inputFolder = './MCQ_SS';
const outputFile = './Questions.js';

// Helper function to parse OCR text into a question object
const parseQuestion = (text) => {
    console.log(text)
  const lines = text.split('\n').map(line => line.trim()).filter(line => line);

  let question = '';
  let options = [];
  let correctAnswers = [];
  let collectingOptions = false;

  lines.forEach((line) => {
    if (/^\d+\./.test(line)) {
      // Line starts with a number, it's a question
      question = line;
    } else if (/^[a-f]\./.test(line)) {
      // Line starts with a letter, it's an option
      collectingOptions = true;
      const optionId = line[0];
      const optionText = line.slice(2).trim();
      options.push({ id: optionId, text: optionText });
    } else if (/^Ans\s*[:-]\s*/i.test(line)) {
      // Line contains the answer
    //   correctAnswers = line.split(/[:-]\s*/)[1].split(',').map((ans) => ans.trim());
      correctAnswers = line.replace("Ans :- ", "");
    }
  });

  return {
    question,
    options,
    correctAnswers,
  };
};

// Function to perform OCR on a single image
const performOCR = (imagePath) => {
  return Tesseract.recognize(imagePath, 'eng', { logger: (m) => console.log(m) })
    .then(({ data: { text } }) => parseQuestion(text));
};

// Main function to process all images in the folder
const processImages = async () => {
  const files = fs.readdirSync(inputFolder);
  const questions = [];

  for (const file of files) {
    const filePath = path.join(inputFolder, file);
    console.log(`Processing ${filePath}...`);
    const question = await performOCR(filePath);
    questions.push(question);
  }

  // Write questions to questions.js
  const output = `export const questions = ${JSON.stringify(questions, null, 2)};`;
  fs.writeFileSync(outputFile, output);
  console.log('Questions saved to questions.js');
};

processImages().catch((err) => console.error('Error processing images:', err));
