import React from 'react'
import ItemCount from './ItemCount.jsx';
import { Link } from "react-router-dom"
import '../styles/Item.css';

const Item = ({ name, thumbnail, price, id, stock }) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} cervezas 🍺`);
    };

      return (
        
          <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/cerveza/${id}`}>
                  <img class="object-cover p-2 rounded-t-lg imagenproductos"  src={thumbnail} alt="product image" />
              
              </Link>
              
              <div class="px-5 pb-5">
                  <a href="#">
                      <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                  </a>
                  
                  <div class="flex justify-center items-center text-center">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}k</span>
                      
                  </div>
                  <ItemCount stock={stock} onAdd={onAdd} initial={1} />
              </div>
          </div>

                /* <article class="bg-white w-72 h-full shadow-md rounded m-3">
                    <div class="h-3/4 w-full">
                        <img class="object-cover rounded-t" src={thumbnail} alt="" width="500" height="600"
                        />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="#" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-semibold uppercase tracking-wide ">{name}</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">${price}</p>
                        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
                    </div>
                </article> */
                
                

            
    )
}

export default Item