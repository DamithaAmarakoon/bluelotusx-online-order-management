interface IRootState {
  auth: {
    user: {
      id: string;
      userName: string;
      fullName: string;
    };
  };
}

export default IRootState;
