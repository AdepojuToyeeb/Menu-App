import react, {useState} from 'react';
import Menu from './Menu';
import Category from './Category';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [category, setCategory] = useState([]);
  
  const filterList = (category) =>{
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
        <Category filterItems={filterList} />
        <Menu menu={menu} />
      </section>
    </main>
    )
}

export default App;
