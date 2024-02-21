import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

//catfact.ninja/fact
//cataas

function App() {
  const [catImageUrl, setCatImagenUrl] = useState('')
  const [fact, setFact] = useState('')

  useEffect(() => {
    (
    async() => {
      try{
        const response = await fetch ('https://catfact.ninja/fact')
        const data = await response.json()
        const {fact} = data
        setFact(fact)
      }catch(error){
        console.log(error)
      }
    }
  )()
},[])

  useEffect(() =>{
    if(fact){
      (
        async() => {
          try{
          const firstWord = fact.split(' ',3).join(' ')
          const response = await fetch(`https://cataas.com/cat/says/${firstWord}`)
          const data = await response
          const {url} = data
          setCatImagenUrl(url)
        }catch(error){
        console.log(error)
        }
      }
      )()
  }
},[fact])

return(
  <>
  <h1>useState, useEffect example: Random cat</h1>
  {fact && <p> {fact}</p>}
  {catImageUrl && <img src={catImageUrl} alt='random'width={400} height={400}/>}
  </>
)
}

export default App
