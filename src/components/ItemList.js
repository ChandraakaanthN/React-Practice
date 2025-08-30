import React from 'react'

const ItemList = ({items}) => {
    console.log(items);
  return (
    <div>
            {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b flex justify-between">
                
                <div className="w-9/12 flex flex-col justify-start items-start">
                    <div className="py-2 w-full text-left">          
                            <div className="text-xl mb-2">
                                    <div className="font-semibold text-left"> 
                                        {item.card.info.name}-
  
                                        ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
                                    </div>
                            </div>
                            <p className="text-sm text-gray-600 text-left leading-relaxed">
                                {item.card.info.description}
                            </p>
                    </div>
                 </div>
        
                <div className="w-3/12 p-4 flex justify-center relative">
                        <div className="relative">
                        {item.card.info.imageId && (
                        <img
                                className="w-50 h-40 object-cover rounded"
                                alt="item-logo"
                                src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                                item.card.info.imageId
                                }
                        />
                        )}
                        <button className={`${item.card.info.imageId ? 'absolute top-2 left-1/2 transform -translate-x-1/2' : ''} bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors`}>
                        Add+
                        </button>
                        </div>
                </div>

         </div>
            ))}
    </div>
  );
};

export default ItemList;
