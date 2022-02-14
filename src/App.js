import react, {useState} from 'react';
import Menu from './Menu';
import Category from './Category';
import items from './data';

const allcategory = ['all', ...new Set (items.map((item)=>item.category))] ;

function App() {
  const [menu, setMenu] = useState(items);
  const [category, setCategory] = useState(allcategory);
  
  const filterList = (category) =>{

    if (category === "all"){
      setMenu(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category)
    setMenu(newItems)
  }
  return (
    <main>
      <section>
        <div>
          <h2>Adewale's menu</h2>
          <div className='underline'></div>        
        </div>
        <Category category={category} filterItems={filterList} />
        <Menu menu={menu} />
      </section>
    </main>
    )
}

export default App;
