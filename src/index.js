import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(props){
  const [checked, setChecked] = useState(false)
  return (
    <>
    <input type="checkbox" value ={checked} onChange = {()=> setChecked(!checked)} />
    <p> {checked ?"checked":"not checked"}</p>
    
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

