const isLogged = (state = true, action) => {
  switch(action.type){
    case "LOGGED":
      return true;
    default:
      return false;
  }
}

export default isLogged;