import { use, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [dataUsers, setDataUsers] = useState([])
  const [dataFilter, setDataFilter] = useState([])
  const [optionCity, setOptionCity] = useState([])
  const [filters, setFilters] = useState({word: "", city: "", email: false})

  const fetch = async () => {
    const response = await axios.get(" https://jsonplaceholder.typicode.com/users")
    setDataUsers(response.data);
    console.log(response.data);
    setOptionCity([...new Set(response.data.map(user => user.address.city))])
  }

  useEffect(() => {
    fetch();
  }, [])

  const aplyFilters = () => {
    let filterUsers = dataUsers.filter(user => (filters.word === "" || user.name.toLowerCase().includes(filters.word.toLowerCase())) && (filters.city === "" || user.address.city === filters.city) && (!filters.email || user.email.toLowerCase().includes("biz")) );
    setDataFilter(filterUsers);
  }

  const handleInput = (e) => {
    const {name, value, type, checked} = e.target;
    setFilters(prev => {
      const updateFilters = {...prev, [name]: type === "checkbox" ? checked: value};
      return updateFilters;
    })  
  }

  useEffect(() => {
    aplyFilters();
  }, [filters])

  return (
    <>
      <input type="text" name='word' placeholder='Buscar por nombre' onChange={handleInput}/>
      
      <select name="city" id="1"  onChange={handleInput} >
        <option value="">Seleccione...</option>
        {optionCity.map(city => (<option value={city}>{city}</option> )) }
      </select>

      <label>
        <input type="checkbox" name="email" onChange={handleInput} />
        Solo emails con "biz"
      </label>

      {dataFilter.length != 0 ? dataFilter.map((user) => (
        <div key={user.id} >
          <h2>Nombre: {user.name}</h2>
          <p>Email:  {user.email} </p>
          <p>City: {user.address.city}</p>
        </div>
      )): dataUsers.map((user) => (
        <div key={user.id} >
          <h2>Nombre: {user.name}</h2>
          <p>Email:  {user.email} </p>
          <p>City: {user.address.city}</p>
        </div>
      )) }

    </>
  )
}

export default App
