import React, {useReducer} from 'react'
import InputNumberContext from './InputNumberContext'
import InputNumberReducer  from './InputNumberReducer'
import axios from 'axios'
import { SET_LOADING, SET_TEXT, SET_PRIMES, CLEAR_PRIMES, SET_LEN} from '../Types'

const InputNumberState = props => {
    const initialState = {
        text: '',
        loading: false,
        primes: [],
        len: 0
    }

    const [state, dispatch] = useReducer(InputNumberReducer, initialState);   
    
    const setText = (txt) => {
        dispatch({
            type: SET_TEXT,
            searchText: txt
        });
    }

    const setLen = (txt) => {
        dispatch({
            type: SET_LEN,
            len: parseInt(txt)+(parseInt(txt)%4)
        });
    }

    const setPrimesTable = async text =>{
        setLoading();
        const res = await axios.get(`https://4cxxhvafzh.execute-api.us-east-1.amazonaws.com/v2/check-prime/number?start=2&end=${text}`);
        const primesArr = (res.data.primes).map(a => a.p);
        dispatch({
            type: SET_PRIMES,
            payload: primesArr
        });
    }
    

    const setLoading = () => dispatch({ type: SET_LOADING});

    const clearPrimes = () => dispatch({type: CLEAR_PRIMES});


    return <InputNumberContext.Provider
        value={{
            loading: state.loading,
            text: state.text,
            len: state.len,
            primes: state.primes, 
            setText,
            clearPrimes,
            setLen,
            setPrimesTable
        }}>
            {props.children}
        </InputNumberContext.Provider>
}

export default InputNumberState