import { createAction } from '../core';

const createBottomSheetAction = <T>() => {
  const ac = createAction('BottomSheetAction');
  return {
    addListener: ac.addActionListener,
    sheetAction: (params: T) => ac.dispatch('sheetAction', params),
  };
};

export default createBottomSheetAction;
