export interface OptionQuestion {
  answer: string;
  value: boolean;
  id: string;
}

export interface ArrayQuestion {
  definition: string;
  id: string;
  level: string;
  options: OptionQuestion[];
}

const currentJson = [
  {
    id: '0',
    name: 'correct answer',
    definition: 'mocked definition',
    level: 'medium',
    randomName: ['wrong answer', 'wrong answer', 'wrong answer'],
  },
  {
    id: '1',
    name: 'correct answer',
    definition: 'mocked definition',
    level: 'easy',
    randomName: ['wrong answer', 'wrong answer', 'wrong answer'],
  },
  {
    id: '2',
    name: 'correct answer',
    definition: 'mocked definition',
    level: 'hard',
    randomName: ['wrong answer', 'wrong answer', 'wrong answer'],
  },
];

let setJson: ArrayQuestion[] = [];
currentJson.forEach((question) => {
  setJson.push({
    definition: question.definition,
    id: 'question id: ' + question.id,
    level: question.level,
    options: [
      { answer: question.name, value: true, id: '1' },
      { answer: question.randomName[0], value: false, id: '2' },
      { answer: question.randomName[1], value: false, id: '3' },
      { answer: question.randomName[2], value: false, id: '4' },
    ],
  });
});

export const getQuestion: ArrayQuestion[] = setJson;
