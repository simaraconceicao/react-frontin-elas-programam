import { useState, useEffect } from 'react'

const Busca = () => {
  const [repositories, setRepositories] = useState([])
  const [filteredRepos, setFilteredRepos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
      const data = await response.json()

      setRepositories(data)
    }
    getData()
  }, [])

  useEffect(() => {
    setFilteredRepos(repositories.filter(repo => 
      repo.name.includes(search)
    ))
  }, [repositories,search])
  return (
    <>
      <input 
        placeholder='nome do repo' 
        onChange={e => setSearch(e.target.value)}
      />
      {filteredRepos.map(repo => <li key={repo.id}>{repo.name}</li>)}
    </>
  )
}

export default Busca