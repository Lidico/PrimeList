import { SET_LOADING, SET_TEXT, SET_PRIMES, CLEAR_PRIMES, SET_LEN} from '../Types'

export default (state, action) => {
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case SET_TEXT:
            return{
                ...state,
                text: action.searchText
            }
        case SET_PRIMES:
            return{
                ...state,
                primes: action.payload,
                loading: false
            }
        case CLEAR_PRIMES:
            return{
                ...state,
                primes: [],
                loading: false
            }
        case SET_LEN:
            return{
                ...state,
                len: action.len,
                loading: false
            }
        default:
            return state
        
    }
} 