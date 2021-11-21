import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { Switch,Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Editcontact from "./Editcontact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const[search,setsearch]=useState('');
  const[searchresult,setsearchresult]=useState([]);

  const addContactHandler = (contact) => {
    console.log(contact,'contact');
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const EditContactHandler=(id)=>{
    console.log('hhhhhhhhh',id)
setContacts(contacts.map((contact)=>{
  return contact===id ;
}))

}

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  const searchhandeler=(search)=>{
   setsearch(search);
   if(search!==''){
     const newlist=contacts.filter((contact)=>{
      //  console.log(contact,"hiiii", Object.values(contact).join(''));
     return Object.values(contact).join('').toLowerCase().includes(search.toLowerCase())});
      
    setsearchresult(newlist);}
    else{setsearchresult(contacts);
  
  };
  };


  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header /><br/>

      <Switch>
        <Route exact path='/' render={(props)=>
        (<ContactList{...props} contacts={search.length < 1 ? contacts:searchresult}
           getContactId={removeContactHandler}term={search} serachkeyword={searchhandeler} />
      )}/>
        <Route path='/AddContact' render={(props)=>
          (<AddContact{...props} addContactHandler={addContactHandler}/> )}/>

<Route path='/Editcontact' render={(props)=>
          (<Editcontact{...props} EditContactHandler={EditContactHandler}/> )}/>
      </Switch>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={search.length < 1 ? contacts:searchresult} getContactId={removeContactHandler}term={search}
      serachkeyword={searchhandeler} /> */}
    </div>
  );
}

export default App;
