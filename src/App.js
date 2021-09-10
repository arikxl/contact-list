import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AppHeader from './cmps/AppHeader';
import AppFooter from './cmps/AppFooter';
import ContactList from './cmps/ContactList';
import './App.css';

const BASE_URL="https://dummyapi.io/data/v1/user?limit=10";
const APP_ID = "613bbc694d43543fcddee6a7";

function App() {
  const [contacts, setContacts] = useState({data:[]})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(`${BASE_URL}/user?limit=10`,{headers:{"app-id":APP_ID}})
    .then(({data})=>setContacts(data))
    .catch(console.error)
    .finally(()=>setLoading(false))
  }, [])


  return (
    <div className="App">
          <AppHeader />
          <ContactList loading={loading} contacts={contacts} />
          <AppFooter />
    </div>
  );
}

export default App;
