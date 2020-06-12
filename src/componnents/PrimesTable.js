import React, {useContext} from 'react'
import SpinnerX from './SpinnerX'
import InputNumberContext from '../context/inputNumber/InputNumberContext'
import Table from './Table'


const PrimesTable = () => {
        const inputNumberContext = useContext(InputNumberContext);    
        const {loading} = inputNumberContext;

        if(loading){
            return(
                <SpinnerX/>
            )
        }   
        else{ 
            
            return(
                    <Table/>
                )
            }
        }


export default PrimesTable
