import React, {useContext} from 'react'
import InputNumberContext from '../context/inputNumber/InputNumberContext'

const Table = () => {
    const inputNumberContext = useContext(InputNumberContext); 
    const {len, primes} = inputNumberContext;
    const numberArray = Array.from(Array(len).keys());
    const onClassHandler = (number) =>{
        console.log('boom');
        if(primes!==[]){
            if(number===primes[0]){
                primes.shift();

                return "bg-primary text-light";
            }
            else{
                return "";
            } 
       
        }
        else {
            return "";
        }

    };

    return (
        <div className="container pt-3 pl-5 pr-5">
            <table className="table table-bordered h2 text-center">
                <tbody>
                { Array.from({ length: Math.ceil(numberArray.length / 4) }, (_, i) => (
                    <tr>
                        {
                            numberArray.slice(i * 4, (i + 1) * 4)
                            .map((c, i) => <td key={i} className={onClassHandler(c+2)}>{c+2}</td>)
                        }
                    </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}
export default Table
