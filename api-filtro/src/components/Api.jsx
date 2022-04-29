import { useState, useEffect } from 'react'

const Api = () => {
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setPersonagens(data.results))
  }, [])

  console.log(personagens)
  return (
    <>
     {personagens.map(personagem => 
        <div key={personagem.id}>
          <p>{personagem.name}</p>
          <img src={personagem.image} alt={personagem.name}/>
        </div>
      )}
    </>
  )
}

export default Api