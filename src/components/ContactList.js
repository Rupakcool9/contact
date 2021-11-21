import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const e=useRef(null);

  const deleteConactHandler = (id) => {
    console.log('myid',id)
    props.getContactId(id);
  };
  const edithandler=(arg)=>{
    console.log('myid',arg)
    props.history.push("/Editcontact");
  }
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        edithandler={edithandler}
        key={contact.id}
      />
    );
  });
  const getsearch=()=>{
    props.serachkeyword(e.current.value);

  };
  return( <>
   <div className="ui search">
    <div className="ui icon input">
      <br/>
    <h2>contactlist <Link to='/AddContact'> 
    <button className="ui button blue right"> AddContact</button></Link></h2>
    <input ref={e} type="text"placeholder="search contact" 
   value={props.term} onChange={getsearch}/>
   <i className="search icon"></i>
    
 </div>
</div>
   <div className="ui celled list">{renderContactList.length>0 ? renderContactList:"no contact available"}
  </div></>
)};

export default ContactList;
