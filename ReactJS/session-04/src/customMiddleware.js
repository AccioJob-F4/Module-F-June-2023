export const customMiddleware = (store) => (next) => (action) => {
  console.log("MiddleWare : ", action, store.getState());

  const updatedActionObj = { ...action, id: "JHFVJHVJH" };

  next(updatedActionObj);
};
