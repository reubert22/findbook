import { loadingActionTypes } from "../constants";
import { State, Action } from "../types/loading";

export const LoadingInitialState: State = {
  loading: false,
};

export const loadingReducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case loadingActionTypes.SET_LOADING:
      return {
        ...prevState,
        loading: action.item,
      };
    default:
      return LoadingInitialState;
  }
};
