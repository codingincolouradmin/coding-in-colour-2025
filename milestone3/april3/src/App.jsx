import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = [
    {id:1 , name: "Passport", isPacked: false},
    {id:2 , name: "Sunglasses", isPacked: true},
    {id:3 , name: "Phone Charger", isPacked: true},
    {id:4 , name: "Clothes", isPacked: false},
    {id:5 , name: "Medication", isPacked: false},
  ];
 

  return (
    <>
      <div className="app-container">
        <h1>Packing List</h1>
        {items.length === 0 ? (
          <p>No items to pack.</p>
          ) :(
            <ul>
              {items.map((item)=>(
                <li key={item.id}>
                  {item.name}
                  {item.isPacked ? (
                    <span className="packed">✔</span>
                  ) : (
                    <span className="not-packed">✘</span>
                  )}
                </li>

              ))}
            </ul>
          )
           }



      </div>


     
    </>
  )
}

export default App
