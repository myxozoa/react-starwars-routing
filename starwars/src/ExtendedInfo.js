import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { isWebUri } from 'valid-url';

import InfoLinks from './InfoLinks';

class ExtendedInfo extends React.Component {
    state = {
      linkName: null,
    };
    componentWillMount() {
        if (!this.props.location.state) {
            throw new Error('Didnt click link');
        }

        axios
            .get(this.props.location.state.url)
            .then(response => {
                this.setState({ info: response.data });

            })
            .catch(err => {
                console.error('error in extendedinfo retrieval', err);
            });
    }



    render() {
        return (
            <div className="char-info-cont">
                <div className="char-name">
                    {this.props.match.params.name.replace(/_/g, ' ')}
                </div>
                {this.state.info ? (
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
