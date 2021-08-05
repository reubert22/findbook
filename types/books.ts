export type State = {
  items: any[];
  totalItems: number;
};

export type Action = {
  type: string;
  item: State;
};

export type BookContextType = {
  state: {
    items: any[];
    totalItems: number;
  };
};
