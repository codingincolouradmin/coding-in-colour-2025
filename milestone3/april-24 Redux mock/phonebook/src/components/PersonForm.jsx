const PersonForm = (props) => {
  return (
    <form onSubmit={props.onAdd}>
        <div> 
          name: <input id="name" onChange={props.onNameChange} value={props.newName} /> 
        </div>
        <div> 
          number: <input id="number" onChange={props.onNumberChange} value={props.newNumber} /> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm