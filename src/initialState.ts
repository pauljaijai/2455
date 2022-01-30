interface IInitialState {
  username: string;
  user: boolean;
  isAuthOpen: boolean;
}

export const initialState: IInitialState = {
  username: "",
  user: false,
  isAuthOpen: false,
};
