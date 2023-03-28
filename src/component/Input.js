import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

export default function Input(props){
  const [temp, setTemp] = useState('');
  const counter = useSelector(state => state.counter.counter);
  const texts = useSelector(state => state.texts.texts);
 
  return( 
    
    <div>
    {props.id+1}. Metin girişi:
    <input
     type="text" 
     value = {props.text}
     onChange = {e => props.onChange(props.id, e.target.value)}/>
    </div>

);
}