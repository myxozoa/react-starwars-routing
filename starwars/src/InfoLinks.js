import React from 'react';

import InfoLink from './InfoLink';

class InfoLinks extends React.Component {

  render() {
  return (
      <div>
          {this.props.item[1].map((link, i) => {
              return (
                  <div key={i}>
                      <InfoLink link={link} />
                  </div>
              );
          })}
      </div>
  );
  }
}

export default InfoLinks;
