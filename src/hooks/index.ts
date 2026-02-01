import { createAction, createContext, createEvent } from '@core/core';
export { createAction, createContext, createEvent };

export const envEvent = createEvent('envEvent');
export const uiTouchEvent = createEvent('UITouch');

export enum EventKeys {
  USER_TOUCH_SCREEN = 'USER_TOUCH_SCREEN',
}

export { default as useNavHeader } from './useNavHeader';
