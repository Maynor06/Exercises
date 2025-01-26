import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([])
  const [news, setNews] = useState(false)
  const [usersFiltered, setUsersFiltered] = useState(null) 
  useEffect(() => {

    const fetch = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=20')
        console.log(response.data.results)
        setUsers(response.data.results)
      }
      catch (error) {
        console.log(error)
      }
    }

    fetch();

  }, [news, " "])

  const handleSearch = (e) => {
    const search = e.target.value
    console.log(search)

    const filterUsers = users.filter(user => {
      return user.name.first.toLowerCase().includes(search.toLowerCase())
    })

    setUsersFiltered(filterUsers) 
    console.log(filterUsers)

  }

  
  
  return (

    <>
            <div className='bg-gray-100 flex items-center justify-center'> 
              <div>
                <h2 className='text-6xl font-bold ' >Users generados</h2>
                <div className='my-6 flex justify-center' >
                  <input type="text" placeholder='Nombre para filtrar'  onChange={handleSearch} />
                </div>

                <ul className='' >
                  { usersFiltered === null ? users.map((user, index) => (
                    <li key={index} className='flex gap-4 my-5 h-20 ' >
                      <img className='rounded-full ' src={user.picture.thumbnail} alt={user.name.first} />
                      <div className=' ' >
                        <p>Nombre completo: {user.name.first} {user.name.last}</p>
                        <p>Email: {user.email}</p>
                        <p>Ciudad de residencia: {user.location.country}</p>  
                      </div>
                    </li>
                  )):usersFiltered.length === 0 ? <p>No se entontro nada</p>:  usersFiltered.map((user, index) => ( 
                    <li key={index} className='flex gap-4 my-5 h-20 ' >
                      <img className='rounded-full ' src={user.picture.thumbnail} alt={user.name.first} />
                      <div className=' ' >
                        <p>Nombre completo: {user.name.first} {user.name.last}</p>
                        <p>Email: {user.email}</p>
                        <p>Ciudad de residencia: {user.location.country}</p>  
                      </div>
                    </li>
                  )) } 
                </ul>
                <div className='flex justify-center' >
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => setNews(!news)} >Actualizar</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default App
