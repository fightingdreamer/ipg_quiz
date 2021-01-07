// types validation
export interface OptionQuestion {
  answer: string;
  value: boolean;
  id: string;
  lang: string;
  type: number;
}

export interface ArrayQuestion {
  definition: string;
  id: string;
  level: string;
  lang: string;
  type: number;
  options: OptionQuestion[];
  position: number;
}

// consume data
const currentJson = require(`${process.env.REACT_APP_TOKEN}`);

// auxiliary arrays
const setJson: ArrayQuestion[] = [];
const trackedId: any = [];

// update
currentJson.forEach((question) => {
  const questionLength = currentJson.length + 1;
  let randomId: number = 0;
  let newId = false;

  while (!newId) {
    // randomize questions
    randomId = parseInt(((Math.random() * 100) % questionLength).toString(), 10);
    if (randomId !== 0) {
      if (trackedId) {
        // eslint-disable-next-line
        if (!trackedId.find((id) => id === randomId)) {
          trackedId.push(randomId);
          newId = true;
        }
      } else {
        trackedId.push(randomId);
        newId = true;
      }
    }
  }

  // set all answers
  const prefix: Array<string> = ['a', 'b', 'c', 'd'];
  const answers = question.randomName.map((n, i) => {
    return {
      answer: n,
      value: false,
      lang: question.lang,
      type: question.type,
      id: prefix[i] + question.id,
    };
  });

  // randomize answers & set correct one
  const setAnswers: number = parseInt(((Math.random() * 100) % 4).toString(), 10);

  answers[setAnswers] = {
    answer: question.name,
    value: true,
    lang: question.lang,
    type: question.type,
    id: prefix[setAnswers] + question.id,
  };

  setJson.push({
    definition: question.definition,
    id: 'question id: ' + question.id,
    level: question.level,
    lang: question.lang,
    type: question.type,
    options: answers,
    position: randomId,
  });
});

export const getQuestion: ArrayQuestion[] = setJson;
export const trackQuestion: any = (findId) => setJson.find((x) => x.position === findId);
