import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(props){
  const [status, setStatus] = useState("Not Delivered")
  return (
    <>
    <div> hello {status}</div>
    <button  onClick = {()=> setStatus("Delivered")}>change status</button>
    
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

