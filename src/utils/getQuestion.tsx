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
const setJson: ArrayQuestion[] = [];
currentJson.forEach((question) => {
  // set all answers
  const prefix = ['a', 'b', 'c', 'd'];
  const answers = question.randomName.map((n, i) => {
    return {
      answer: n,
      value: false,
      lang: question.lang,
      id: prefix[i] + question.id,
    };
  });

  // randomize answers & set correct one
  const setAnswers = parseInt(((Math.random() * 100) % 4).toString(), 10);

  answers[setAnswers] = {
    answer: question.name,
    value: true,
    lang: question.lang,
    id: prefix[setAnswers] + question.id,
  };

  setJson.push({
    definition: question.definition,
    id: 'question id: ' + question.id,
    level: question.level,
    lang: question.lang,
    options: answers,
  });
});

export const getQuestion: ArrayQuestion[] = setJson;
