export const shapes = [
  {
    key: 0,
    id: "I",
    shape: [["I", 0], ["I", 0]],
    correct: [[0, 0], [1, 0]],
    color: "red"
  },
  {
    key: 1,
    id: "_",
    shape: [[0, "_"], [0, "_"]],
    correct: [[1, 0], [1, 1]],
    color: "red"
  },
  {
    key: 2,
    id: "O",
    shape: [["O", "O"], ["O", "O"]],
    correct: [[0, 0], [0, 1], [1, 0], [1, 1]],
    color: "yellow"
  },
  {
    key: 3,
    id: "J",
    shape: [[0, "J"], ["J", "J"]],
    correct: [[0, 1], [1, 0], [1, 1]],
    color: "blue"
  },
  {
    key: 4,
    id: "L",
    shape: [["L", 0], ["L", "L"]],
    correct: [[0, 0], [1, 0], [1, 1]],
    color: "green"
  }

  // {
  //   id: "T",
  //   shape: [["T", "T"], [0, "T"]],
  //   correct: [[0, 0], [0, 1], [1, 1]],
  //   color: "purple"
  // }
  // {
  //   id: ".",
  //   shape: [[0, "."], [0, "."]],
  //   correct: [[1, 0], [1, 1]],
  //   color: "green"
  // }
];

export const random = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
};
