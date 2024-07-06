import { ExamItemEnglish, ExamItemProgram } from './types/ExamItem';

export const examItemJsData: ExamItemProgram[] = [
  {
    category: 'js',
    question: 'js 有哪些数据类型',
    answer: 'Number String Boolean Undefined Null Symbol BigInt Object',
  },
  {
    category: 'js',
    question: 'js的作用域是静态的吗?',
    answer:
      '是的，JavaScript的作用域是静态作用域（也称为词法作用域）。这意味着一个变量的作用域在代码编写时就已经确定，' +
      '而不是在代码运行时动态确定的。词法作用域在函数定义时确定，而不是在函数调用时确定。\n',
  },
];

export const examItemEnglishData: ExamItemEnglish[] = [
  {
    category: 'english',
    english: 'good good study',
    chinese: '好好学习',
  },
  {
    category: 'english',
    english: 'day day up',
    chinese: '天天向上',
  },
];
