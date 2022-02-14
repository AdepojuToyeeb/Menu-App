import react from "react";

const Category = ({category, filterItems}) =>{
    return(
         <div className="btn-container">
             {category.map((cat,index)=>{
                 return <button type="button" className="filter-btn" key={index} onClick={()=> filterItems(cat)}>{cat}</button>
             })}
         </div>
    )
}

export default Category