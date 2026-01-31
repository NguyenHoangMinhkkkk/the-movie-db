type EmitType<T> = (...params: T[]) => void;
type AddEventListenerType<T> = (callback: (...args: T[]) => void) => {
  remove: () => void;
};

export default function createEvent<T extends any>(
  logName: string = 'not_set',
) {
  const eventHandlers = new Set();
  const emit: EmitType<T> = (...params) => {
    if (__DEV__) {
      let logParams = params;
      const LOG_MAX_LENGTH = 120;
      logParams = [...params].map((paramItem: any) => {
        if (typeof paramItem === 'function') {
          return 'Function';
        }
        if (typeof paramItem === 'object') {
          return (
            (Array.isArray(paramItem)
              ? `Array[${paramItem.length}]`
              : `Object[${Object.keys(paramItem).length}]`) +
            JSON.stringify(paramItem).substr(0, LOG_MAX_LENGTH)
          );
        }
        return paramItem;
      });
      console.log(`========🌏 EVENT - [${logName}]`, logParams);
    }
    eventHandlers.forEach(handle => {
      if (typeof handle === 'function') {
        handle(...params);
      }
    });
  };

  const addEventListener: AddEventListenerType<T> = callBack => {
    if (typeof callBack !== 'function') {
      throw new Error(
        `Core/Event➖ [${logName}] ➖ callBack is not a function`,
      );
    }
    if (eventHandlers.has(callBack)) {
      throw new Error(`Core/Event➖ [${logName}] ➖ callBack is exist`);
    }
    eventHandlers.add(callBack);
    return {
      remove: () => {
        eventHandlers.delete(callBack);
      },
    };
  };

  return { emit, addEventListener };
}
