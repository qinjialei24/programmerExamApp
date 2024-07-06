export type ExamItemProgram = {
  category: 'vue' | 'react' | 'js';
  question: string;
  answer: string;
};

export type ExamItemEnglish = {
  category: 'english';
  chinese: string;
  english: string;
};

export type ExamItem = ExamItemProgram | ExamItemEnglish;

export function isExamItemProgram(item: ExamItem): item is ExamItemProgram {
  return (item as ExamItemProgram).question !== undefined;
}

export function isExamItemEnglish(item: ExamItem): item is ExamItemEnglish {
  return (item as ExamItemEnglish).chinese !== undefined;
}
