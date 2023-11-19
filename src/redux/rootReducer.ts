import { api } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";

export const reducer = {
  user: userReducer,
  [api.reducerPath]: api.reducer,
};
