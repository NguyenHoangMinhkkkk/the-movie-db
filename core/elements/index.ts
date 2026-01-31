import { colors } from '../themes';

import createTextElement from './createTextElement';
import createTextInputElement from './createTextInputElement';
import createTouchableElement from './createTouchableElement';

export const SText = createTextElement(undefined, undefined, undefined);
export const STouchable = createTouchableElement();
export const STextInput = createTextInputElement(
  colors.black,
  colors.gray.x5(),
);

export { default as SIcon } from './SIcon';
export { default as Spacing } from './Spacing';
