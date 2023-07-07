import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
    };
  }

  componentDidMount() {
    // Fetch data from the URL
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ details: data });
      })
      .catch((error) => {
        console.log('Error fetching details:', error);
      });
  }

  render() {
    const { details } = this.state;

    if (!details) {
      return <div>Loading...</div>;
    }

    // Render the fetched details
    return (
      <div>
        <p>Height: {details.height}</p>
        <p>Weight: {details.weight}</p>
        {/* Add more details as needed */}
      </div>
    );
  }
}

export default Details;