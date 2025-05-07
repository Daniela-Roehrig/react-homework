import { createSlice } from '@reduxjs/toolkit';

// In questionnaireSlice.js

const initialState = {
  questions: [
    {
      id: 1,
      text: "Question 1 -- What color is the sky on a clear day?",
      options: ["Blue", "Green"],
      correctAnswer: "Blue",
    },
    {
      id: 2,
      text: "Question 2 -- How many legs does a spider have?",
      options: ["8", "6"],
      correctAnswer: "8",
    },
    {
      id: 3,
      text: "Question 3 -- Which fruit is yellow and long?",
      options: ["Apple", "Banana"],
      correctAnswer: "Banana",
    },
    {
      id: 4,
      text: "Question 4 -- What is 5 + 3?",
      options: ["8", "9"],
      correctAnswer: "8",
    },
    {
      id: 5,
      text: "Question 5 -- Which animal barks?",
      options: ["Cat", "Dog"],
      correctAnswer: "Dog",
    },
  ],
  answers: {},
  result: null,
};


const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },

    submitAnswers: (state) => {
      let score = 0;
      state.questions.forEach((question) => {
        const userAnswer = state.answers[question.id];
        if (userAnswer === question.correctAnswer) {
          score += 1;
        }
      });

      state.result = {
        score,
      };
    },
    
    resetQuestionnaire: (state) => {
      state.answers = {};
      state.result = null;
    },
  },
});

export const { answerQuestion, submitAnswers, resetQuestionnaire } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
