import { useState } from 'react';
import "./NameCardStyles.css";
import image from "./online-img.jpeg";


/*function RenderNameCard( {name, age, prof}){*/

function RenderNameCard( {user} ){

    return(
        <div class="card">
        <img src={image} alt="Avatar"></img>
        <div class="container">
            <h2>Top course 1</h2>
            <div>
            <h2><b>Teacher:{user.name}</b></h2>
            <h3><p>Price:{user.age}</p></h3>
            <h4><p>Ratings:{user.prof}</p></h4>
            </div>
        </div>
        </div>
    );
}
export default RenderNameCard