import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';

import Input from './Input';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

const [newItem, setNewItems] = useState('');

const addItem = (item)=>{
  const id = items.length + 1;
  const myNewItem = {id, checked :false, item}
  const listItems = [...items, myNewItem];
  setItems(listItems);
  localStorage.setItem('shoppingList', JSON.stringify(listItems));
}

const handleCheck = (id)=>{
  const listItems = items.map((item) => item.id === id ?
  {...item, checked: !item.checked} : item
  );
  setItems(listItems);
  localStorage.setItem('shoppingList', JSON.stringify(listItems));
}
const handleDelete = (id) =>{
  const listItems = items.filter((item)=>item.id !== id);
  setItems(listItems);
  localStorage.setItem('shoppingList', JSON.stringify(listItems));
}
const handleInput = (e)=>{
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setNewItems('');
}

  return (
    <div className="App">
      <Header/>
      
      <Input handleInput={handleInput} newItem={newItem} setNewItems={setNewItems}/>

      <Content handleCheck={handleCheck} handleDelete = {handleDelete} items={items} setItems = {setItems}/>
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;


//Use effect will only work when the items component/dependency will change
// useEffect(()=>{
// console.log('Hello WORLD')
// }, [items])



//Use effect will only work when the page loads

// useEffect(()=>{
// console.log('lOADING')
// }. [])




