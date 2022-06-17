import React, {useState} from 'react'

const Variables = () => {
 const [countClicks, setCountClick] = useState(0)
 const contarClicks = ()=> {
    setCountClick(countClicks + 1)
    console.log(countClicks);
 }
  return (
    <div>
       Contador: {countClicks}
       <button onClick={ ()=> {contarClicks()}}>Click!</button>
    </div>
  )
}

export default Variables