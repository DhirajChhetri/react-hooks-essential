import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App( ){
  const [winner, setWinner] = useState('william');
  const [admin, setAdmin]= useState(false);
  useEffect(()=>{
    document.title=`congrats ${winner}`
    console.log(`The winner is  ${winner}`)
  }, [winner]);

  useEffect(()=>{
    console.log( `This is admin ${admin}`)
  },[admin])
  
  return (
  <>
      <section>
        <p> congratulations {winner}</p>
        <button onClick={()=> setWinner("Joe")}>change winner</button>

        <p>{admin?"logged in":"guest"}</p>
        <button onClick={()=>setAdmin(!admin)}> setAdmin</button>
      </section>

  </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

