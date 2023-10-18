import React from 'react'

const name  = "Ali"
//On click function 

const handleClick = ()=>{
    console.log('You clicked me');
}

// pasing the parameter inside a function when clicked

const handleClick2 = (myname) =>{
    console.log(`You clicked on ${myname}`);
}

// event 
const handleClick3 = (e) =>{
    console.log(e.target); //return the element which is clicked you can access properties of this element like innerText / innerhtml, value or any property
    console.log(e.target.innerText);
}

const Content = () => {
  return (
    <div>
        <p>Hello {name}</p>
        <button onClick={handleClick}>Click Me</button>
        {/* Here we are defining a function with a parameter  */}
        <button onClick={()=>handleClick2('Mohammad Ali')}>Button with Parameter</button> 
        <button onClick={(e) => handleClick3(e)}>Click me</button>
    </div>
  )
}

export default Content