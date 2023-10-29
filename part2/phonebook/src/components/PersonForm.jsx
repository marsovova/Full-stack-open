const PersonForm = ({onSubmit, onChange, name, number}) => {
    return (
        <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={(event) => onChange(event, 'name')} value={name}/>
        </div>
        <div>number: <input onChange={(event) => onChange(event, 'number')} value={number} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm