import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
// import { decrement } from '../redux/features/counter/counterSlice';
// import { addText } from '../redux/features/texts/texts';

export default function Input(props){
  //const [texts, setTexts] = useState([]);
  const [temp, setTemp] = useState('');
  //const [id, setId] = useState(0);
  //const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const texts = useSelector(state => state.texts.texts);
 
  return( 
    
    <div>
    {props.id}. Metin girişi:
    <input
     type="text" 
     value = {props.text}
     onChange = {e => props.onChange(props.id, e.target.value)}/>
   
    {/* <button onClick = {() => {
      dispatch(decrement());
      dispatch(addText({id: counter, text: temp}))
      //setTexts([...texts, {id : id,  value : temp}]);
      //setId(id+1);
    }}>Ekle</button> */}

     <ul>
    {/* {texts.map(texts => (
      <li key={texts.id}>{texts.id} : {texts.text}</li>
    ))} */}
    </ul>
    </div>

);
}