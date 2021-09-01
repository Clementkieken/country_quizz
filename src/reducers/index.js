import { CHANGE_INDEX } from '../actions';

const initialState = {
  quiz: [
    {
      title: 'Quel est le premier pays producteur de bananes en Europe continentale ?',
      answers: [
        'France', 'Islande', 'Espagne', 'Italie',
      ],
      goodAnswer: 'Islande',
    },
    {
      title: "Quel est l'animal officiel de l'Ecosse ?",
      answers: [
        'Licorne', 'Loch Ness', 'Mouton', 'Whisky',
      ],
      goodAnswer: 'Licorne',
    },
    {
      title: 'Combien de mètre les soleil perd chaque heure ?',
      answers: [
        '0', '1', '5', '10',
      ],
      goodAnswer: '1',
    },
  ],
  index: 0,
  score: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INDEX:
      return {
        ...state,
        index: state.index + 1,
      };
    default:
      return state;
  }
};
