import React, { Component } from 'react';


class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {basicInfo} = this.props;

    return (
        <div>
            {basicInfo}
      </div>
    );
  }
}

export default Overview;