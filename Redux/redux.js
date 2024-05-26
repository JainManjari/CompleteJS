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
  if (action == "NEW_BOOKING") {
    return [...oldReservationHistory, action.payload];
  } else if (action == "CANCEL_BOOKING") {
    return oldReservationHistory.filter((record) => {
      return record.name !== action.payload.name;
    });
  }
  return oldReservationHistory;
};

const cancellationHistory = (oldCancellationHistory = [], action) => {
  if (action == "CANCEL_BOOKING") {
    return [oldCancellationHistory, ...action.payload];
  }
  return oldCancellationHistory;
};

const accounting = (totalMoney = 100, action) => {
  if (action == "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action == "CANCEL_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
};

// Redux store
console.log(Redux);

const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers(
  reservationHistory,
  cancellationHistory,
  accounting
);

const store = createStore(railwayCentralStore);

console.log(store);
