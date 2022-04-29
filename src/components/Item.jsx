import React from 'react'

const Item = ({ name, thumbnail, price, id, stock }) => {
  return (
    
                

                <article class="bg-white w-72 h-96 shadow-md rounded m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src={thumbnail} alt=""
                        />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="#" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-semibold uppercase tracking-wide ">{name}</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">${price}</p>
                    </div>
                </article>

            
    )
}

export default Item