import './index.css'
const Cart = ({food})=>{
    return(
        <>
            {food.map((carts,key)=>{
                const{id,names,price,image} = carts;
                return(
                    <article className="food" key={id}>
                    <div >
                    <img src={image} />
                    </div>
                    <div>
                        <h1>{names}</h1>
                        <p>{price}</p>
                    </div>
                    <div>
                    <p className="icon">icons</p>
                    </div>
                </article>
                )
            })}
        </>
        
    )

}

export default Cart;