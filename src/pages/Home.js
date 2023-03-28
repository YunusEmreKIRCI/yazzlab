import Input from '../component/Input';
import Button from '../component/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';


function Home() {
  const navigate = useNavigate();
  const [components, setComponents] = useState([]); 
  const [counter, setCount] = useState(0);
  const [texts, setTexts] = useState({});
  const [response, setResponse] = useState("");
  const [combine, setCombine] = useState("");

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
    <br></br> 
    
    {components.map((item, i) => ( <Input id = {i} key = {i} text = {texts[i]} onChange = {changeText} /> ))} 
    <Button onClick={addComponent}/> 
    <br></br> 
    <br></br> 
    <button onClick = {async()=>{
        navigate('/list');
    }}>Görüntüle</button>

    <br></br>    
    <br></br> 
    
    <button onClick={async() =>{

      const data = await api
      .post("/combineTexts",{giris1:"asd",giris2:"test2"})
        //,{texts: texts}
      .catch(err => console.error(err));
      setCombine(data);

      console.log(data);
      }}>Birleştir</button>

    <br></br> 
    <br></br> 
    <button onClick = {async()=>{
        const data = await api
        .post("/addTexts",{giris1:"asd",giris2:"test2",cikti:"birlestirme"})
          //,{texts: texts}
        .catch(err => console.error(err));

        console.log(data);

    }}>Kaydet</button>
    
    <div>{combine.data}</div>
    
    </div>
    
  );
}

export default Home;