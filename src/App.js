import Overview from './components/Overview';
import React, { Component } from 'react';
import uniqid from "uniqid";



class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask= this.onSubmitTask.bind(this);


    this.state={
      basicInfo:{
        Name:'Aingkaran',
        Email: "aingkaranjega@gmail.com",
        Phone: "647-462-0039"
      
    }
  }


  }

  handleChange=(e)=>{
    this.setState({
      basicInfo : {
        Name: e.target.value,
        Email: e.target.value,
        Phone: e.target.value
      }
    });
  }

  onSubmitTask=(e)=>{
    e.preventDefault();
    this.setState({
      basicInfo: { 
              Name: e.target.value,
              Email: e.target.value,
              Phone: e.target.value
            },
    });
  }

  render() {
    const {basicInfo}= this.state
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="basicInfo">Enter Basic Info</label>
          <input 
          onChange={this.handleChange}
          value={basicInfo.Name}
          type="text"
          id="basicInfo"
          />
          <button type="submit">
            Add Name
          </button>
        </form>
        <Overview basicInfo={basicInfo.Name} />

      </div>
    );
  }

}
export default App;
