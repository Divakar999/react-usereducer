import React from 'react';

export const reducer = (stateInitialValue, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...stateInitialValue, count: stateInitialValue.count + 1 };
    case 'DECREMENT':
      return { ...stateInitialValue, count: stateInitialValue.count - 1 };
    case 'RESET':
      return { ...stateInitialValue, count: 5 };
    default:
      return stateInitialValue;
  }
};
