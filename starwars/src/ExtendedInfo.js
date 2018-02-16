import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { isWebUri } from 'valid-url';

import InfoLinks from './InfoLinks';

class ExtendedInfo extends React.Component {
    state = {
      loading: true,
    };

    getInfo = () => {
      this.setState({ loading: true });
      axios
      .get(this.props.location.state.url)
      .then(response => {
        if (this.refs.ref) {
          this.setState({ info: response.data, loading: false });
        }
      })
      .catch(err => {
          console.error('error in extendedinfo retrieval', err);
      });
    }

    componentDidMount() {
        if (!this.props.location.state) {
            console.error('Didnt click link');
        }
          this.getInfo();
    }

    componentWillReceiveProps() {
        this.getInfo();
    }
    render() {
      console.log(this.state);
        return (
            <div ref='ref' className="char-info-cont">
                <Link to='/'>Back Home</Link>
                <div className="char-name">
                  {this.props.match.params.name.replace(/_/g, ' ')}
                </div>
                {( this.state.info && !this.state.loading ) ? (
                    <div className="char-info">
                        {Object.entries(this.state.info).map(item => {

                            return (
                                <div key={item[0]} className="attrib">
                                    <span>
                                        {item[0]
                                            .replace(/\b\w/g, l => l.toUpperCase())
                                            .replace(/_/g, ' ')}
                                        {':'}
                                    </span>
                                    <div>
                                      {}
                                      {Array.isArray(item[1]) ? <div><InfoLinks item={item}></InfoLinks></div> : <div>{item[1]}</div> }
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>loading...</div>
                )}
            </div>
        );
    }
}

export default ExtendedInfo;
