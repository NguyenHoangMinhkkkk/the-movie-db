import { createAction, createContext, createEvent } from '@core/core';
export { createAction, createContext, createEvent };

export const envEvent = createEvent('env');
export const uiTouchEvent = createEvent('UITouch');

export enum EventKeys {
  USER_TOUCH_SCREEN = 'USER_TOUCH_SCREEN',
}
