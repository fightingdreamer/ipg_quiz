export interface OptionQuestion {
  answerQuestion: string;
  valueQuestion: boolean;
}

export interface ArrayQuestion {
  definitionQuestion: string;
  optionQuestion: OptionQuestion[];
}

export const getQuestion: ArrayQuestion[] = [
  {
    definitionQuestion: '1st item question definition placeholder',
    optionQuestion: [
      { answerQuestion: '1st item answer placeholder 1', valueQuestion: false },
      { answerQuestion: '1st item answer placeholder 2', valueQuestion: true },
      { answerQuestion: '1st item answer placeholder 3', valueQuestion: false },
      { answerQuestion: '1st item answer placeholder 4', valueQuestion: false },
    ],
  },
  {
    definitionQuestion: '2nd item question definition placeholder',
    optionQuestion: [
      { answerQuestion: '2nd item answer placeholder 1', valueQuestion: false },
      { answerQuestion: '2nd item answer placeholder 2', valueQuestion: false },
      { answerQuestion: '2nd item answer placeholder 3', valueQuestion: false },
      { answerQuestion: '2nd item answer placeholder 4', valueQuestion: true },
    ],
  },
];
