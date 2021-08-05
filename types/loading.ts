export type State = {
  loading: boolean;
};

export type Action = {
  type: string;
  item: boolean;
};

export type LoadingContextType = {
  state: {
    loading: boolean;
  };
};
