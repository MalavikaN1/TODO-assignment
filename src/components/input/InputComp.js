import TextField from '@mui/material/TextField';
import './InputComp.css'
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ListComp from '../list/listComp';
import { useState } from 'react';
function InputComp()
{
    const [inputValue,setInputValue]=useState('');
    const [getLocal,setGetLocal]= useState(JSON.parse(localStorage.getItem("todo") || []));
    const addNewItem=()=>
    {
        let todo=getLocal.slice();
        if(todo.includes(inputValue))
        {
            alert("Item already exists");
        }
        else
        {
            todo.push(inputValue);
            setGetLocal(todo);
            localStorage.setItem("todo",JSON.stringify(todo));
            setInputValue('');
        }
        
    }

    return(
        <div className='container'>
            <div className='inputBox'>
                 <TextField value={inputValue} onChange={(e)=>setInputValue(e.target.value)} id="outlined-basic" label="Add new item" variant="outlined" />
                 <Button onClick={addNewItem} style={{borderRadius:50, margin:10, color:"black", border:"black"}} variant="outlined"><AddCircleOutlinedIcon/></Button>
            </div>
            <div>
                <ListComp getLocal={getLocal} setGetLocal={setGetLocal}/>
            </div>
        </div>
    )
}

export default InputComp;