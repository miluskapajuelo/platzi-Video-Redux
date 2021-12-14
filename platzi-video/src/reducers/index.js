const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            const index = state.mylist.findIndex((item => item.id === action.payload.id))
            if (index < 0) {
                return {
                    ...state,
                    mylist: [...state.mylist, action.payload]
                }
            }
            else {
                return {
                    ...state,
                    mylist: state.mylist
                }
            };
            break;

        case 'REMOVE_FAVORITE':
            const newList = state.mylist.filter((item) => item.id !== action.payload.id)
            return {
                ...state,
                mylist: newList
            };
            break;
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            };
            break;
        default:
            return state
    }
}

export default reducer
