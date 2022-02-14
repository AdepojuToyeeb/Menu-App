import react from "react";

const Category = ({category, filterItems}) =>{
    return(
         <div>
             {category.map((cat,index)=>{
                 return <button type="button" key={index} onClick={()=> filterItems(cat)}>{cat}</button>
             })}
         </div>
    )
}

export default Category