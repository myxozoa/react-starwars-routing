import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InfoLink extends React.Component {
  state = {
    linkName: 'Loading...',
  }
  componentDidMount() {
    this.fetchName();
  }

  fetchName = () => {
    axios.get(this.props.link)
    .then(response => {
      const name = ( response.data.name ? response.data.name : response.data.title );
      this.setState({ linkName: name });
      console.log('set');
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    const linkInfo = {
      pathname: `/info/${this.state.linkName}`,
      state: {
          url: '',
      },
    };
    return (
      <Link to={linkInfo}>{this.state.linkName}</Link>
    );
  }
}

export default InfoLink;