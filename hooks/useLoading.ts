import { useReducer, useCallback } from "react";
import { loadingActionTypes } from "../constants";
import { loadingReducer, LoadingInitialState } from "../reducers/loading";

export const useLoading = () => {
  const [state, dispatch] = useReducer(loadingReducer, LoadingInitialState);

  const setLoading = useCallback(
    (item) =>
      dispatch({
        type: loadingActionTypes.SET_LOADING,
        item,
      }),
    []
  );

  return {
    state,
    setLoading,
  };
};
