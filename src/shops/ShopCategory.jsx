import React from 'react'
import Data from '../products.json'
const ShopCategory = ({filterItem , setItem, menuItems ,setProducts , selectedCategory }) => {
    return (
    <>
        <div className="widget-header">
            <h2 className="ms-2">All Categories</h2>
            </div>
            
            
            <div>
            <button onClick={()=> setProducts(Data)} className="m-2 bg-warning">All</button>
                {
                    menuItems.map((val, id) => {
                        return (
                            <button className="m-2 bg-warning"
                                key={id}
                                onClick={() => filterItem(val)}
                            >
                                {val}
                            </button>
                        )
                    })
                }
            </div>
    </>
  )
}

export default ShopCategory