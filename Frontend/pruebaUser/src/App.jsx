import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState(null)


  const fetch = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users"); 
      setData(response.data); 
      console.log(response.data);
      
  }

  useEffect(() => {
   fetch(); 
  }, [])
  
  const handleSearch = (e) => {
    const wordFilter = e.target.value;
    console.log(wordFilter);
    

    const usersFilter = data.filter(user => {return user.name.toLowerCase().includes(wordFilter.toLowerCase())})
    console.log(usersFilter);
    
    setDataFilter(usersFilter);
  }

  return (
    <>
      <div>
        <input type="text" placeholder='Busca un usuario' onChange={handleSearch} />
        { dataFilter != null ?
        dataFilter.map((user) => (
          <div key={user.id} >
            <p>{user.id}</p>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        ) ) 
        :data.map((user) => (
          <div key={user.id} className='' >
            <p>{user.id}</p>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        )) }
      </div>
    </>
  )
}

export default App
