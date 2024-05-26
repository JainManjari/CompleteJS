/**
 *
 * redux is used to share data across all components of react without passing it as props to
 * all its ancestors
 */

// Action creators

// person who is booking the ticket

const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

const cancelBooking = (name, refundAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};

// Reducers
const reservationHistory = (oldReservationHistory = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationHistory, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationHistory.filter((record) => {
      return record.name !== action.payload.name;
    });
  }
  return oldReservationHistory;
};

const cancellationHistory = (oldCancellationHistory = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [oldCancellationHistory, action.payload];
  }
  return oldCancellationHistory;
};

const accounting = (totalMoney = 100, action) => {
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
};

// Redux store
console.log(Redux);

const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
  reservationHistory:reservationHistory,
  cancellationHistory:cancellationHistory,
  accounting:accounting
});

const store = createStore(railwayCentralStore);

const action = newBooking("Manjari Jain", 20);
console.log(action);
store.dispatch(action);
store.dispatch(newBooking("Harry Potter", 12));
store.dispatch(newBooking("Hello world", 67));
store.dispatch(newBooking("Hermoine", 3997));
store.dispatch(cancelBooking("Harry Potter", 10));

console.log(store.getState());