import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
        <div class= "text-center bg-slate-500">ItemListContainer {greeting}</div>
            <div class="h-screen w-screen py-6 bg-yellow-50 flex items-center justify-center flex-wrap">
                

                <div class="bg-white w-72 h-96 shadow-md rounded m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/1796698/pexels-photo-1796698.jpeg?cs=srgb&dl=pexels-helena-lopes-1796698.jpg&fm=jpg" alt="piña"
                        /></div>
                    <div class="w-full h-1/4 p-3">
                        <a href="#" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-semibold uppercase tracking-wide ">STOUT</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div class="bg-white w-72 h-96 shadow-md rounded m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/1267305/pexels-photo-1267305.jpeg?cs=srgb&dl=pexels-elevate-1267305.jpg&fm=jpg" alt="piña"/>
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="#" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-semibold uppercase tracking-wide ">IPA</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div class="bg-white w-72 h-96 shadow-md rounded m-3">
                    <div class="h-3/4 w-full">
                        <img class="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/1267306/pexels-photo-1267306.jpeg?cs=srgb&dl=pexels-elevate-1267306.jpg&fm=jpg" alt="piña"
                        />
                    </div>
                    <div class="w-full h-1/4 p-3">
                        <a href="#" class=" hover:text-yellow-600 text-gray-700">
                            <span class="text-lg font-semibold uppercase tracking-wide ">PALE ALE</span>
                        </a>
                        <p class="text-gray-600 text-sm leading-5 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                
            </div></>
    )
}

export default ItemListContainer