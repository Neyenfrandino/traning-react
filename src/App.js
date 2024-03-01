import React, { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import useFetchUsers from './components/get-fetch/get-fetch-monsters.components';
import './App.css';

const App = () =>{

  const { users } = useFetchUsers();
  
  const [busqueda_filter, establecerCampoDeBúsqueda]  = useState('')
  const [monster, setFilterMonsters] = useState(users)

  const enLaBusqueda = (event) => {
    let busqueda_filter = event.target.value.toLocaleLowerCase()
    establecerCampoDeBúsqueda(busqueda_filter)
  }
  console.log('Render')

  useEffect(()=>{
    let newFilerMonsters = users.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(busqueda_filter)
    })

    setFilterMonsters(newFilerMonsters)
  },[users, busqueda_filter])
 
  
  return( 
    <div className="App">
      <h1 className='app-title'>Monters Rolodex</h1>
      <SearchBox onChangeHandler={enLaBusqueda} className='monsters-search-box' placeholder= 'Search monter'/>
      <CardList monsters={monster} />
    </div>
  )
}


export default App;
