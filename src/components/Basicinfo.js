import React, { Component } from 'react';


class Basicinfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {basicInfoName} = this.props;
    const {basicInfoEmail} = this.props;
    const {basicInfoPhone} = this.props;

    return (
        <div>
          <div className="Name">{basicInfoName}</div>
          <div className="Email">{basicInfoEmail}</div>
          <div className = "Phone">{basicInfoPhone}</div>
      </div>
    );
  }
}

export default Basicinfo;