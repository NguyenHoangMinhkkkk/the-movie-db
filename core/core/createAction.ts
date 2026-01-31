type AddActionListenerType<T> = (
  actionName: string,
  callback: (...args: T[]) => void,
) => { remove: () => void };
type DispatchType<T> = (actionName: string, ...params: T[]) => void;

export default function createAction<T extends any>(
  logName: string = 'not_set',
) {
  const actionHandlers = new Map();

  const addActionListener: AddActionListenerType<T> = (
    actionName,
    callback,
  ) => {
    if (__DEV__ && typeof callback !== 'function') {
      throw new Error(`Core/Action [${logName}] ➖ callBack is not a function`);
    }

    const handleSet = actionHandlers.has(actionName)
      ? actionHandlers.get(actionName)
      : new Set();
    handleSet.add(callback);
    actionHandlers.set(actionName, handleSet);

    return {
      remove: () => {
        handleSet.delete(callback);
        if (handleSet.size === 0) {
          actionHandlers.delete(actionName);
        }
      },
    };
  };

  const dispatch: DispatchType<T> = (actionName, ...params) => {
    if (actionHandlers.has(actionName)) {
      if (__DEV__) {
        console.log(
          `          🔥 ACTION ➖ [${logName}: ${actionName}] ➖`,
          params,
        );
      }
      actionHandlers.get(actionName).forEach((handle: Function) => {
        handle(...params);
      });
    } else if (__DEV__) {
      console.log(
        `          🔥 ACTION ➖ [${logName}: ${actionName}] ➖ is not exist`,
      );
    }
  };

  const removeActionListener = (actionName: string): void => {
    if (actionHandlers.has(actionName)) {
      if (__DEV__) {
        console.log(`          🔥 ACTION ➖ [${logName}: clear]`);
      }
      actionHandlers.delete(actionName);
    } else if (__DEV__) {
      console.log(
        `          🔥 ACTION ➖ [${logName}: ${actionName}] ➖ is not exist`,
      );
    }
  };

  const destroy = (): void => {
    if (__DEV__) {
      console.log(`          🔥 ACTION ➖ [${logName}: destroy]`);
    }
    actionHandlers.clear();
  };

  return {
    dispatch,
    addActionListener,
    removeActionListener,
    destroy,
  };
}
