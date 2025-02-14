import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [dataProducts, setDataProducts] = useState([])
  const [pagAnterior, setPagAnterior] = useState(0)
  const [pagSiguiente, setPagSiguiente] = useState(5)

  const fetch = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setDataProducts(response.data)
    console.log(response.data);
    
  }

  useEffect(() => {
    fetch();
  }, [])

  const handlePagAnterior = () => {
    if(pagAnterior > 0 && pagSiguiente > 5){
      setPagAnterior(pagAnterior -5)
      setPagSiguiente(pagSiguiente -5)
    }
  }

  const handlePagSiguiente = () => {
    if(pagAnterior < 15 && pagSiguiente <20){
      setPagAnterior(pagAnterior +5);
      setPagSiguiente(pagSiguiente +5);
    }
  }
  return (
    <>
      {dataProducts.map((product) => (
        product.id > pagAnterior && product.id <= pagSiguiente ?
        <div className='contProduct' >
          <img src={product.image} alt="imagen del producto" className='img' />
          <div className='content' >
            <h2 className='title' >{product.title}</h2>
            <p className='description' >{product.description}</p>
            <p className='price' >$ {product.price} </p>
          </div>
        </div>: <></>
      )) }
      <div className='botones' >
        <button onClick={handlePagAnterior}>Anterior</button>
        <button onClick={handlePagSiguiente}>Siguiente</button>  
      </div>
    </>
  )
}

export default App
