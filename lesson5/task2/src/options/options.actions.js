export const TOGGLE_OPTION = 'OPTIONS/TOGGLE_OPTION';

export const optionToggle = (optionId) => {
  return {
    type: TOGGLE_OPTION,
    payload: { optionId },
  };
};
