import React,{useState} from 'react'
import ItemList from './ItemList'
const RestuarantCategory = ({data,showItems,setShowIndex}) => {
   const handleClick=()=>{
    setShowIndex();
   }
  return (
    <div>
        <div className="w-8/12 mx-auto my-4 bg-gray-50 shadaw-lg p-4 " >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                
                    <span className="font-bold text-red-700 ">{data?.title} </span>


                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-square-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6z"/>
                        </svg>
                    </span>
                    
            
                </div>
                   
                   {showItems && <ItemList items={data?.itemCards}/>}
                  

        </div>
  
    </div>
  )
}
export default RestuarantCategory;
