import react from "react";

const Menu = ({menu}) =>{
return(
    <div>
        {menu.map((item)=>{
            const {id,title,img,desc,price} = item;
            return <article key={id}>
                <img src={img} alt={title}/>
                <div>
                    <header>
                        <h4>{title}</h4>
                        <h4>${price}</h4>
                    </header>
                    <p>{desc}</p>
                </div>

            </article>
        })}
    </div>
)
}

export default Menu