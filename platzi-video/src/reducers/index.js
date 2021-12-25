/**
 * reducer used to manage state of all app
 * @param {*} state it is the initialState obtained of './utils/data'
 * @param {*} action.payload it is the value pass from e.g. mapDispatchToProps = { getVideoSource}
 * 
 * @returns 
 */
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
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            };
            break;
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            };
            break;
        case 'GET_VIDEO_SOURCE':

            let video = state.trends.find((element) => element.id === Number(action.payload)) || state.originals.find((element) => element.id === Number(action.payload))||[]
 

            return {
                ...state,
                playing: video
            };
            break;
        default:
            return state
    }
}

export default reducer
