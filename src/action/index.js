export const increment = (nr) => {
  return {
    type: "INCREMENT", //action Name
    payload: nr, // action 參數
  }
}
export const decrement = () => {
  return {
    type: "DECREMENT", //action Name
  }
}