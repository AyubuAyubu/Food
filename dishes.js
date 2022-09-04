console.log("working")
/*
document.addEventListener("DOMContentLoaded",()=>{
    fetchFood()
})
*/

/*
function fetchFood(){
    fetch("http://localhost:3000/dishes")
      .then(resp=>resp.json())
     // .then(data=>console.log(data))
      .then(data => data.forEach(food => getAllFood(food)))

}
*/

/*

function getAllFood(food ){
        const parentUl=document.getElementById("food-list")
        const li=document.createElement("li")
        li.className="our-dishes"
        li.innerHTML=`<h1>${food.name}</h1> <p>Ksh ${food.price}</p> <img src="${food.image}"/>`
        parentUl.appendChild(li) 
        
            
}
*/
