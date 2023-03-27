import Input from '../component/Input';
import Button from '../component/Button';
import { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();
  const [components, setComponents] = useState([]); 
  const [counter, setCount] = useState(0);
  const [texts, setTexts] = useState({});
  const [response, setResponse] = useState("");
  console.log(texts);
  
  function addComponent(){ 
    setCount(counter + 1);
    setComponents([...components, counter]);
    setTexts({...texts, [counter] : ""});
  };
  function changeText(index, text){
        setTexts({...texts, [index] : text});
  }
  return (
    <div>
    
    
    {components.map((item, i) => ( <Input id = {i} key = {i} text = {texts[i]} onChange = {changeText} /> ))} 
    <Button onClick={addComponent}/> 
    <button onClick = {async()=>{
        navigate('/list');
        
    }}>Görüntüle</button>
    
    
    <button onClick={async() =>{
      const data = await axios
        .post("",{texts: texts})
        .then(function (res) {
          console.log("sds");
          //setResponse(res);
        })
        .catch(err => console.error(err));
      }}>Birleştir</button>
    
    
    <div>{response}</div>
    
    
    </div>
    
    
  );
}

export default Home;