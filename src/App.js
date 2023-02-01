import './index.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:2000/data')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error(error)
      }
    }
    const interval = setInterval(fetchData, 10000) // fetch data every 10 seconds

    return () => clearInterval(interval) // clear the interval when the component unmounts
  }, [])

  const { name, position, phone, address, website, linkedin, email, backgroundImage } = data

  return (
    <div className='App'>
      {data ? (
        <div className='card'>
          <img className='card-img' src={backgroundImage} alt="" />
          <h3>Name: {name}</h3>
          <h3>Position: {position}</h3>
          <h3>Phone: {phone}</h3>
          <h3>Email: {email}</h3>
          <h3>Website: {website}</h3>
          <h3>Address: {address}</h3>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default App
