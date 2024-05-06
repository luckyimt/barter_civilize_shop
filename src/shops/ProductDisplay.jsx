import React,{useState} from 'react'
const ProductDisplay = ({ item }) => {
    const { name , id , price , seller , ratingsCount , quantity , img , desc} = item;
    const [preQuantity , setQuantity] = useState(quantity);
    const [coupon , setCoupon] = useState(" ");
    const [size , setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");
    
    // const handleSizeChange = (e) => {
    //     setSize(e.target.value)
    // }
    // const handleColorChange = (e) => {
    //     setColor(e.target.value)
    // }
    // const handleIncrease = (e) => {
    //     setQuantity(preQuantity + 1)
    // }
    // const handleDecrease = (e) => {
    //     if(preQuantity > 0)
    //     setQuantity(preQuantity - 1)
    // }

    const handleSubmit= (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: preQuantity,
            size: size,
            desc:desc,
            color: color,
            coupon: coupon,
            
        }

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id)
        
        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += preQuantity;
        } else {
            existingCart.push(product)
        }   
        localStorage.setItem("cart", JSON.stringify(existingCart));

        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }
    return (
        <div>
        <div>
      <h1>{name}</h1>
                <p className="rating">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h2>{price}</h2>
                <h2>{seller}</h2>
                <p>
                    {desc}
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    {/* <div className="select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Day</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                    </div>
                    <div className="select-product color">
                        <select value={color} onChange={handleColorChange}>
                        <option>Select Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div> */}

                    {/* <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box'
                            type="text"
                            name="qtybutton"
                            id="qtyButton"
                            value={preQuantity}
                            onChange={((e) => setQuantity(parseInt(e.target.value,10)))} />
                        <div className="inc qtybutton" onClick={handleIncrease}>+</div>
                    </div> */}

                    {/* <div className="discount-code mb-2">
                    <input type="text" placeholder="Enter Discount Code" onChange={(e)=>setCoupon(e.target.value)} />
                    </div> */}
                        {/* <button type="submit" className='lab-btn'>
                            <span>Add to cart</span>
                        </button>
                        
                        <Link to="/cart-page"  className='lab-btn bg-primary'>
                        <span>Check Out</span>
                        </Link> */}

                    </form>
            </div>
        </div>
  )
}

export default ProductDisplay