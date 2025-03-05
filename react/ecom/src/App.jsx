
// npm i axios 
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const App = () => {
  let [products, setproducts] = useState([])
  let fetchProducts = async () => {
    let response = await axios.post('https://dummyjson.com/products', { name:"jatin"})
    console.log(response.data.products);
    setproducts(response.data.products)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <div id="wrapper">
        {
          products.length ? (<>

            {
              products.map((x) => {
                return <>
                  <div className="product">
                    <img src={x.thumbnail} alt="" />
                    <h2>{x.title}</h2>
                  </div>
                </>
              })
            }
          </>) : (<><p>Loading...</p></>)

        }
      </div>
    </div>
  )
}

export default App
