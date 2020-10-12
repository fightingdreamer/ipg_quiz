export interface OptionQuestion {
  answer: string;
  value: boolean;
  id: string;
}

export interface ArrayQuestion {
  definitionQuestion: string;
  id: string;
  optionQuestion: OptionQuestion[];
}

export const getQuestion: ArrayQuestion[] = [
  {
    definitionQuestion: '1st item question definition placeholder',
    id: 'q1',
    optionQuestion: [
      { answer: '1st item answer placeholder 1', value: false, id: '1' },
      { answer: '1st item answer placeholder 2', value: true, id: '2' },
      { answer: '1st item answer placeholder 3', value: false, id: '3' },
      { answer: '1st item answer placeholder 4', value: false, id: '4' },
    ],
  },
  {
    definitionQuestion: '2nd item question definition placeholder',
    id: 'q2',
    optionQuestion: [
      { answer: '2nd item answer placeholder 1', value: false, id: '5' },
      { answer: '2nd item answer placeholder 2', value: false, id: '6' },
      { answer: '2nd item answer placeholder 3', value: false, id: '7' },
      { answer: '2nd item answer placeholder 4', value: true, id: '8' },
    ],
  },
];
