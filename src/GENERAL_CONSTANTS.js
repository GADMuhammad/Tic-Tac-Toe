export const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const WINNING_COMBINATIONS = [
  [
    { row: 0, element: 0 },
    { row: 0, element: 1 },
    { row: 0, element: 2 },
  ],
  [
    { row: 1, element: 0 },
    { row: 1, element: 1 },
    { row: 1, element: 2 },
  ],
  [
    { row: 2, element: 0 },
    { row: 2, element: 1 },
    { row: 2, element: 2 },
  ],
  [
    { row: 0, element: 2 },
    { row: 1, element: 1 },
    { row: 2, element: 0 },
  ],
  [
    { row: 0, element: 0 },
    { row: 1, element: 1 },
    { row: 2, element: 2 },
  ],
  [
    { row: 0, element: 0 },
    { row: 1, element: 0 },
    { row: 2, element: 0 },
  ],
  [
    { row: 0, element: 1 },
    { row: 1, element: 1 },
    { row: 2, element: 1 },
  ],
  [
    { row: 0, element: 2 },
    { row: 1, element: 2 },
    { row: 2, element: 2 },
  ],
];
