import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const makeAPICall = async () => {
    try {
      let config = {
        url: 'http://localhost:8080/cors',
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };
    //const response = await fetch('http://localhost:8080/cors', {mode: 'cors'})
    const response = await fetch('http://localhost:8080/cors', {mode: 'cors'})
      const data = await response.json()
      console.log({data})
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, [])
  return (
    <div className='App'>
      <h1>React Cors Guide</h1>
    </div>
  );
}

export default App;
