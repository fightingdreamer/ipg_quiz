export interface OptionQuestion {
  answer: string;
  value: boolean;
  id: string;
  lang: string;
}

export interface ArrayQuestion {
  definition: string;
  id: string;
  level: string;
  lang: string;
  options: OptionQuestion[];
}

const currentJson = [
  {
    id: '0',
    name: 'correct answer',
    definition: 'The quick brown fox jumps over the lazy dog',
    level: 'easy',
    lang: 'en',
    randomName: ['wrong answer', 'quartz sphinx', '32charsTxt 32charsTxt 32charsTxt'],
  },
  {
    id: '1',
    name: 'dobra odpowiedź',
    definition: 'Zażółć gęślą jaźń',
    level: 'medium',
    lang: 'pl',
    randomName: ['nóż pędź bóść', 'txt32liter txt32liter txt32liter', 'zła odpowiedź'],
  },
  {
    id: '2',
    name: 'pravilen odgovor',
    definition: 'Šerif bo za domačo vajo spet kuhal žgance',
    level: 'hard',
    lang: 'si',
    randomName: ['fraza32črk fraza32črk fraza32črk', 'napačen odgovor', 'kožušček'],
  },
];

let setJson: ArrayQuestion[] = [];
currentJson.forEach((question) => {
  setJson.push({
    definition: question.definition,
    id: 'question id: ' + question.id,
    level: question.level,
    lang: question.lang,
    options: [
      { answer: question.name, value: true, lang: question.lang, id: question.id + '1' },
      { answer: question.randomName[0], value: false, lang: question.lang, id: question.id + '2' },
      { answer: question.randomName[1], value: false, lang: question.lang, id: question.id + '3' },
      { answer: question.randomName[2], value: false, lang: question.lang, id: question.id + '4' },
    ],
  });
});

export const getQuestion: ArrayQuestion[] = setJson;
