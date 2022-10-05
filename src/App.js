import React, { Component } from 'react';
import uniqid from "uniqid";
import Basicinfo from './components/Basicinfo';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitInfo= this.onSubmitInfo.bind(this);


    this.state={
      basicInfo:{
        Name:"",
        NameStore:"",
        Email: "",
        EmailStore:"",
        Phone: ""
      
    }
  }


  }



  handleChange=(e)=>{
    
    this.setState({
      basicInfo : {
        [e.target.name]: String(e.target.value),
    
      }
    });
  }



  onSubmitInfo=(e)=>{
    e.preventDefault();
    this.setState({
      basicInfo: { 
        NameStore: this.state.basicInfo.NameStore.concat(" ",this.state.basicInfo.Name),
        EmailStore:this.state.basicInfo.EmailStore.concat(" ",this.state.basicInfo.Email),
        PhoneStore:this.state.basicInfo.PhoneStore.concat(" ",this.state.basicInfo.Phone),
        Name: "",
        Email: "",
        Phone: "",


            },
    });
  }

  render() {
    const {basicInfo}= this.state
    return (
      <div className="Basic-Info-Form">
        <form onSubmit={this.onSubmitInfo}>
          <label htmlFor="basicInfo-Name">Name :</label>
          <input 
          onChange={this.handleChange}
          value={this.state.basicInfo.Name}
          name="Name"
          />

          <label htmlFor="basicInfo-Email">Email:  </label>
          <input 
          onChange={this.handleChange}
          value={this.state.basicInfo.Email}
          name="Email"
          />

          <label htmlFor="basicInfo-Phone">Phone: </label>
          <input 
          onChange={this.handleChange}
          value={this.state.basicInfo.Phone}
          name="Phone"
          />

          <button type="submit">
            Submit Basic Info
          </button>
        </form>
        <Basicinfo basicInfoName={basicInfo.NameStore} basicInfoEmail= {basicInfo.EmailStore} basicInfoPhone={basicInfo.PhoneStore}/>
        

      </div>
    );
  }

}
export default App;
