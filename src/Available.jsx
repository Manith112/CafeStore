import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Available(){
    const BaseUrl = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

    const [datas, setDatas] = useState([]);

    const getFetch = () => {
        fetch(BaseUrl)
        .then(resp => resp.json())
        .then(resp => {
            setDatas(resp)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log("in use effect")
        getFetch()
    }, [])


    return(
        <body>
        <div class="intro">
            <div class="first-column">
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <NavLink className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          } to={"/popular"}>All Products</NavLink>
            <button class="active-text">Available Now</button>
        </div>
        {/* <!-- card  --> */}
        {datas?.map(data => (
          <>
          {data.available === false ? "" : 
        <div class="container">
            
            <div class="card">
                <img src={data.image} alt="" />
                {data.popular === true ? 
                <button class="label">Popular</button> : 
                ""}
                <div class="card-body">
                    <div class="title">
                    <h2 class="name">{data.name}</h2>
                    <button class="price">{data.price}</button>
                </div>
               
                <div class="rate">
                {data.rating === null ? <p><i class="fa-regular fa-star none"/>No ratings <span>({data.votes})</span></p> 
                    
                    :
                    <p><i class="fa-solid fa-star get"/>{data.rating} <span>({data.votes} votes)</span></p>}
                </div>
            </div>
            </div>
        </div>
}
        </>  
        ))}
    </div>
    </body> 
    )
}
export default Available;