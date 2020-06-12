import React, {useContext} from 'react'
import Alert from './Alert'
import AlertContext from '../context/alert/AlertContext';
import InputNumberContext from '../context/inputNumber/InputNumberContext';
import PrimesTable from './PrimesTable';

const Home = () => {
    const alertContext = useContext(AlertContext);
    const inputNumberContext = useContext(InputNumberContext);
    const {text, setText, clearPrimes, setLen} = inputNumberContext;

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '' || isNaN(text)) {
            alertContext.setAlert('Please enter a Number', 'warning');
        }
        else if(parseInt(text) < 0) {
            alertContext.setAlert('Please enter a positive Number', 'warning');
        }
        else if(parseInt(text) < 2) {
            alertContext.setAlert('Please enter a Number geater then 1', 'warning');
        }
        else{
            inputNumberContext.setPrimesTable(text);
            if(!isNaN(text)){
                setLen(text);
           }
            alertContext.removeAlert();
            setText('');
        }
    };

    const onChangeHandler = (e) => setText(e.target.value);

    return (
            <div className="container">
                    <div className="container bg-light mt-5 rounded p-3">
                        <h1 className="h1 text-center p-2"><i className="fa fa-angle-double-right mr-2"></i>Prime List</h1>
                        <h5 className="h5 text-center">Please enter a Number:</h5>
                        <div className="container">
                            <Alert/>
                            <form onSubmit={onSubmit}>
                                <input className="form-control box" type="text" name="text" placeholder="Enter a Number..." value={text} onChange={onChangeHandler}/>
                                <small id="emailHelp" className="mb-1 form-text text-muted">Only Positive numbers will work</small>
                                <input type="submit" value="Search" className='box btn btn-dark text-light btn-block' />
                            </form>
                            { inputNumberContext.primes.length > 0 && (
                        <div>
                                <button className="mt-2 box btn btn-white text-dark btn-block" onClick={clearPrimes}>Clear</button>
                                <PrimesTable/>
                        </div>
                )}
                        </div>
                        
                    </div>
                    
            </div>
    )
}

export default Home
