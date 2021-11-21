import React, { useState } from "react";
const AddContact=(props)=>{
  const [detail,setdetail]=useState({name:"",email:""});
  



// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };
const handlechange=(e)=>{
  console.log('target',e.target)
  const{name,value} = e.target;
  setdetail(prestate=>({...prestate,[name]:value}))
  console.log('adddddddddddd',detail)
}
  const add = (e) => {
    e.preventDefault();
    if (detail.name === "" || detail.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    console.log(setdetail,"hiii");
    props.addContactHandler(detail);
    setdetail({ name: "", email: "" });
    props.history.push("/");
  };
  // render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={detail.name}
              // onChange={(e) => setdetail({ name: e.target.value },console.log(e.target.value,"bye"))}
              onChange={handlechange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email or mobile no"
              value={detail.email}
              // onChange={(e) => setdetail({ email: e.target.value })}
              onChange={handlechange}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }


export default AddContact;
