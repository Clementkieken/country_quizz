export const CHANGE_INDEX = 'CHANGE_INDEX';
export const changeIndex = () => ({
  type: CHANGE_INDEX,
});

export const UPDATE_SELECTED_ANSWER = 'UPDATE_SELECTED_ANSWER';
export const updateSelectedAnswer = (value) => ({
  type: UPDATE_SELECTED_ANSWER,
  value: value,
});
