import React from 'react'

const Variables = () => {
 let contador = 1
 const contarClicks = ()=> {
    contador+=1
    console.log(contador);
 }
  const sePuedeEscribir = true
  return (
    <div>
       Contador: {contador}
       <button onClick={ ()=> {contarClicks()}}>Click!</button>
    </div>
  )
}

export default Variables