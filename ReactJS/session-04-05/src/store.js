import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { customMiddleware } from "./customMiddleware";

import { reducers } from "./reducers/reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(customMiddleware))
  //   applyMiddleware(customMiddleware)
);

export default store;
