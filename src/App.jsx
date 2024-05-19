
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment } from './redux/CounterSlice.jsx'
function App() {
  
  const dispatch=useDispatch()
  
  const data=useSelector((state)=>{ return state.counter.value})

const handle=()=>{
  
  dispatch(increment())
}



  return (


    <>{ console.log("value is ",data)}
    <p>counter value is {data}</p>
    <button onClick={handle}>increment</button>
    </>


  )
}

export default App
