import React, { useState } from "react";
const Editcontact=(props)=>{
  const [edit,setedit]=useState({name:"",email:""});



// class EditContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };
const handlechange=(e)=>{
  const{name,value} = e.target;
  setedit(prestate=>({...prestate,[name]:value}))
}

  const update = (e) => {
    e.preventDefault();
    if (edit.name === "" || edit.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    console.log(edit,"hiii");
    props.EditContactHandler(edit);
    // setedit({ name: "", email: "" });
    props.history.push("/");
  };
  // render() {
    return (
      <div className="ui main">
        <h2>edit Contact</h2>
        <form className="ui form" onSubmit={update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={edit.name}
              // onChange={(e) => setedit({ name: e.target.value },console.log(e.target.value,"bye"))}
              onChange={handlechange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email or mobile no"
              value={edit.email}
              // onChange={(e) => setedit({ email: e.target.value })}
              onChange={handlechange}
            />
          </div>
          <button className="ui button blue">update</button>
        </form>
      </div>
    );
  }


export default Editcontact;
