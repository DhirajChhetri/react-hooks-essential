import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App( ){
 const [data, setData]= useState([]);

 useEffect(()=>{
   fetch(`https://api.github.com/users`)
   .then((res)=> res.json())
   .then(setData);
 },[]);

 if(data){
    return (
      <>
      <ul>
        {data.map(({id, login})=>(
          <li key={id}>{login}</li>
    ))}
      </ul>
      <button onClick={()=> setData([])}>clear data</button>
      </>
    )
 }

 return (
   <>
   <div>No data </div>
   </>
 )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

