import React from 'react';

type ExtendOfValueType = Record<string, any>;
type ExtendOfActionsType = Record<
  string,
  (...agr: any[]) => void | Promise<any>
>;
type ExtendOfCustomActionsType = Record<string, (...agr: any[]) => void>;

type ActionType<
  I extends ExtendOfValueType,
  A extends ExtendOfActionsType,
> = () => {
  [K in keyof A]: (state: I, ...payload: Parameters<A[K]>) => I;
};
type CustomActionType<A, CA, I = any> = (method: A, value: I) => CA;

type ContextReducerType<
  I extends ExtendOfValueType,
  A extends ExtendOfActionsType,
> = (state: I, action: { type: keyof A; payload: Parameters<A[keyof A]> }) => I;

export default function createContext<
  I extends ExtendOfValueType,
  A extends ExtendOfActionsType,
  CA extends ExtendOfCustomActionsType = {},
>(
  defaultValue: I,
  actions: ActionType<I, A>,
  customActions?: CustomActionType<A, CA, I>,
) {
  // @ts-ignore
  const Context = React.createContext<I & A & CA>(defaultValue);

  function useContextValue() {
    const mainActions = React.useMemo(() => ({ ...actions() }), []);
    const contextReducer: ContextReducerType<I, A> = React.useCallback(
      (state, action) => mainActions[action.type](state, ...action.payload),
      [mainActions],
    );
    const [value, dispatch] = React.useReducer(contextReducer, defaultValue);
    const actionList = React.useMemo(() => {
      const dispatchActions = Object.keys(mainActions).reduce(
        (obj, actionKey) => ({
          ...obj,
          [actionKey]: (...payload: any) => {
            dispatch?.({ type: actionKey, payload });
          },
        }),
        {},
      ) as A;
      const dispatchCustomActions = customActions
        ? (customActions(dispatchActions, value) as CA)
        : {};
      return { ...dispatchActions, ...dispatchCustomActions } as A & CA;
    }, [mainActions, value]);
    return React.useMemo(
      () => ({ ...value, ...actionList }),
      [value, actionList],
    );
  }

  function useContext() {
    return React.useContext(Context);
  }

  return {
    useContext,
    useContextValue,
    Provider: Context.Provider,
  };
}

/*
Example usage:

// 1. Define your state and actions
interface CounterState {
  count: number;
}
const defaultCounterState: CounterState = { count: 0 };
const counterActions = () => ({
  increment: (state: CounterState) => ({ ...state, count: state.count + 1 }),
  decrement: (state: CounterState) => ({ ...state, count: state.count - 1 }),
});

// 2. Create your context
const CounterContext = createContext(defaultCounterState, counterActions);

// 3. Use in your component tree
function CounterProvider({ children }: { children: React.ReactNode }) {
  const contextValue = CounterContext.useContextValue();
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}

// 4. Consume context in a component
function CounterDisplay() {
  const { count, increment, decrement } = CounterContext.useContext();
  return (
    <>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => increment()} />
      <Button title="-" onPress={() => decrement()} />
    </>
  );
}
*/
