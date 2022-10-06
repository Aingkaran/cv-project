import React, { Component } from 'react';
import Basicinfo from './components/Basicinfo';
import './styles/App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
    this.onEditInfo = this.onEditInfo.bind(this);


    this.state={
    
        Name:"",
        NameStore:"",
        Email: "",
        EmailStore:"",
        Phone: "",
        PhoneStore:"",
      
    }
  }

  



  handleChange=(e)=>{
    
    this.setState({
        [e.target.name]: String(e.target.value)
    
      
    });
  }

  onSubmitInfo=(e)=>{
    e.preventDefault();
    this.setState({
        NameStore: this.state.Name,
        EmailStore: this.state.Email,
        PhoneStore:this.state.Phone,
        Name: "",
        Email: "",
        Phone: "",
      
    });
  }

  onEditInfo=(e)=>{
    e.preventDefault();
    this.setState({
        Name: this.state.NameStore,
        Email: this.state.EmailStore,
        Phone:this.state.PhoneStore,
      
    });
  }



  render() {
    const {Name,Email,Phone, NameStore, PhoneStore, EmailStore}= this.state

  
    return (
      <div className="Basic-Info-Form">
        <form className="basicForm" onSubmit={this.onSubmitInfo} >
          <label htmlFor="basicInfo-Name">Name :</label>
          <input 
          type="text"
          onChange={this.handleChange}
          value={Name}
          name="Name"
    
          />

          <label htmlFor="basicInfo-Email">Email:  </label>
          <input 
          type="text"
          onChange={this.handleChange}
          value={Email}
          name="Email"
          />

          <label htmlFor="basicInfo-Phone">Phone: </label>
          <input 
          type="text"
          onChange={this.handleChange}
          value={Phone}
          name="Phone"
          />
          

          <button type="submit">
            Submit 
          </button>
          <button className="editbutton" onClick= {this.onEditInfo}>Edit</button>

        </form>

        <Basicinfo basicInfoName={NameStore} basicInfoEmail= {EmailStore} basicInfoPhone={PhoneStore}/>
        

      </div>
    );
  }

}
export default App;
