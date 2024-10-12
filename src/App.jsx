import { useState } from 'react'
import './App.css'
import Hello from './Hello';
import Login from './Login';
import Counter from './Counter';

function App() {

  function showImage() {
    document.getElementById('flowerImage').style.display = 'block'
  }

  return (
    <>
      <Counter />
    </>
  )
}

export default App
