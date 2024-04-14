import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateFullName(state, action) {
      state.fullName = action.payload;
    },
  },
});
export const { createCustomer, updateFullName } = customerSlice.actions;
export default customerSlice.reducer;
// const initailStateCustomer = {
//   fullName: "",
//   nationalID: "",
//   createdAt: "",
// };

// export default function customerReducer(state = initailStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateFullName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }
// export function updateFullName(fullName) {
//   return {
//     type: "customer/updateFullName",
//     payload: fullName,
//   };
// }
