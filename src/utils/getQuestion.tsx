// types validation
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

// consume data
const currentJson = require(`${process.env.REACT_APP_TOKEN}`);

// update
let setJson: ArrayQuestion[] = [];
currentJson.forEach((question) => {
  setJson.push({
    definition: question.definition,
    id: 'question id: ' + question.id,
    level: question.level,
    lang: question.lang,
    options: [
      { answer: question.name, value: true, lang: question.lang, id: question.id + 'a' },
      { answer: question.randomName[0], value: false, lang: question.lang, id: question.id + 'b' },
      { answer: question.randomName[1], value: false, lang: question.lang, id: question.id + 'c' },
      { answer: question.randomName[2], value: false, lang: question.lang, id: question.id + 'd' },
    ],
  });
});

export const getQuestion: ArrayQuestion[] = setJson;
