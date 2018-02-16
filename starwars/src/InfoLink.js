import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InfoLink extends React.Component {
  state = {
    linkName: 'Loading...',
  }

  fetchName = () => {
    axios.get(this.props.link)
    .then(response => {
      const name = ( response.data.name ? response.data.name : response.data.title );
      if (this.refs.ref) {
        this.setState({ linkName: name, linkUrl: response.data.url });
      }
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    this.fetchName();
    const linkInfo = {
      pathname: `/info/${this.state.linkName.replace(/ /g,"_")}`,
      state: {
          url: this.state.linkUrl,
      },
    };
    return (
      <Link ref='ref' to={linkInfo}>{this.state.linkName}</Link>
    );
  }
}

export default InfoLink;