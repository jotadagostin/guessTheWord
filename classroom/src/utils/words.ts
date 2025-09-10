export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Style language" },
  { id: 2, word: "REACT", tip: "Library for creating web interfaces" },
  { id: 3, word: "HTML", tip: "Markup language" },
  {
    id: 4,
    word: "Javascript",
    tip: "One of the most widely used programming languages ​​in the world",
  },
  { id: 5, word: "Typescript", tip: "To add typing in Javascript" },
];
