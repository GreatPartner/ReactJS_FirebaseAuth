export default (
    state = {},
    action
) => {
    switch(action.type) {
        case "register":
            console.log("register", action.payload);
            return {...state, loggedIn: action.payload};
        case "login":
            console.log("login", action.payload);
            return { ...state, loggedIn: action.payload}
        default:
            return state;
    }
}