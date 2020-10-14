export interface OptionQuestion {
  answer: string;
  value: boolean;
  id: string;
}

export interface ArrayQuestion {
  definition: string;
  id: string;
  options: OptionQuestion[];
}

export const getQuestion: ArrayQuestion[] = [
  {
    definition: 'definition placeholder',
    id: 'q1',
    options: [
      { answer: 'answer placeholder', value: false, id: '1' },
      { answer: 'answer placeholder', value: true, id: '2' },
      { answer: 'answer placeholder', value: false, id: '3' },
      { answer: 'answer placeholder', value: false, id: '4' },
    ],
  },
  {
    definition: 'definition placeholder',
    id: 'q2',
    options: [
      { answer: 'answer placeholder', value: false, id: '5' },
      { answer: 'answer placeholder', value: false, id: '6' },
      { answer: 'answer placeholder', value: false, id: '7' },
      { answer: 'answer placeholder', value: true, id: '8' },
    ],
  },
];
