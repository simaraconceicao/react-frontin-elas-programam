import { useState } from 'react'

const Contador = () => {
const [contador, setContador] = useState(0)

const decrementa = () => {
  setContador(contador - 1)
}

const incrementa = () => {
  setContador(contador + 1)
}
  return(
    <>
      <button onClick={decrementa}>-</button>
      <h1>{contador}</h1>
      <button onClick={incrementa}>+</button>
    </>
  )
}

export default Contador