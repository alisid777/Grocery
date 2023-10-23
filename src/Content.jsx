import React from 'react'

import ListItems from './ListItems';



const Content = (props) => {

  return (
    <main>
        {props.items.length ? (
        <ul>
            {props.items.map((item)=>(
                <ListItems item = {item} handleDelete={props.handleDelete} handleCheck={props.handleCheck}/>
            ))}
        </ul>
        ):(<p>Your list is empy</p>)}
    </main>
  )
}

export default Content