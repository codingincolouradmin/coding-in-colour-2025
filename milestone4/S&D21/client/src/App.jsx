import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const fetchFeedback = async () => {
    const res = await fetch("http://localhost:4000/feedback");
    const data = await res.json();
    //console.log(data);
    setFeedbacks(data);
    
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/feedback/sending" , {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name,message}),
    });
    setName("");
    setMessage("");
    fetchFeedback();
  }
  useEffect(() => {
    fetchFeedback();
  }, []);

  console.log(feedbacks);
  

  return (
    <>
    <div className='container'>
      <h1>Student Feedback Board</h1>

      <form onSubmit={handleSubmit}>
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Your Name'
        required
        />
        <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Your Feedback'
        required
        rows={4}
        />
        <button type='submit'>Submit</button>

      </form>

      <ul>
        {feedbacks.map((fb) => {
           return <li key={fb.id}>
                  <strong>{fb.name}:</strong> {fb.message}
                </li>
        })}
      </ul>

    </div>
      
    </>
  )
}

export default App
