import { useState } from 'react'

const ContaClick = () => {
  const [clique, setClique] = useState(0)

  const incrementa = () => {
    setClique(clique + 1)
  }
  return(
    <>
      <h1>Eu cliquei {clique} vezes</h1>
      <button onClick={incrementa}>clica aqui</button>
    </>
  )
}

export default ContaClick