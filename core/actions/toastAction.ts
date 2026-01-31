import {createAction} from '../core';

const createToastAction = () => {
  const ac = createAction('ToastAction');
  return {
    addListener: ac.addActionListener,
    toastAction: (params: {
      type: 'success' | 'error' | 'warning';
      title?: string;
      message?: string;
      duration?: number;
      isTab?: boolean;
    }) => ac.dispatch('showToastAction', params),
  };
};

export const globalToastAction = createToastAction();
