import './index.css'
import React,{useState} from "react";
import { Intro } from "./data";
import Cart from "./Cart";

function Try(){
    function clear(){
        setFood([])
    }
    function submit(){  
        setFood(Intro)
    }
    const [food,setFood] = useState(Intro);
    return(
        <main>
            <h1>Welcome to react</h1>
            <div className="home">
                <h3>There are {food.length} orders</h3>
                <Cart food={food}/>
                <div>
                    <button onClick={clear}>Clear Cart</button>
                    <button onClick={submit}>Refill</button>
                </div>
            </div>
        </main>
    )
}
export default Try;
