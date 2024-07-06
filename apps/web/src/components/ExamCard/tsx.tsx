import {
  ExamItem,
  isExamItemEnglish,
  isExamItemProgram,
} from '../../../types/ExamItem';

interface ExamCardProps {
  data: ExamItem;
}
export function ExamCard({ data }: ExamCardProps) {
  if (isExamItemProgram(data)) {
    return (
      <div>
        <h2>Programming Question</h2>
        <p>Category: {data.category}</p>
        <p>Question: {data.question}</p>
        <p>Answer: {data.answer}</p>
      </div>
    );
  } else if (isExamItemEnglish(data)) {
    return (
      <div>
        <h2>English Question</h2>
        <p>Category: {data.category}</p>
        <p>Chinese: {data.chinese}</p>
        <p>English: {data.english}</p>
      </div>
    );
  } else {
    return null;
  }
}
