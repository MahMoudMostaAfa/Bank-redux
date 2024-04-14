import { type } from "@testing-library/user-event/dist/type";
import { combineReducers, createStore } from "redux";
const initailStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initailStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
function accountReducer(state = initailStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}
function customerReducer(state = initailStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateFullName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}
function updateFullName(fullName) {
  return {
    type: "customer/updateFullName",
    payload: fullName,
  };
}
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
store.dispatch(deposit(200));
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 200, purpose: "hkon" },
});
store.dispatch(createCustomer("mahmoud", "3020123"));
console.log(store.getState());
