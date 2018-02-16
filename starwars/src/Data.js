import React from 'react';
import { Link } from 'react-router-dom';

class Data extends React.Component {
  render() {
    return (
      <div className='chars'>
      {this.props.data.map(char => {
        const characterInfo = {
          pathname: `/info/${char.name.replace(/ /g,"_")}`,
          state: {
            url: char.url,
          }
        }
        return (
          <div key={char.created} className='char'>
            <Link className='char-name' to={characterInfo}>{char.name}</Link>
            <div className='attrib'> <span>Birth Year:</span> {char.birth_year} </div>
            <div className='attrib'> <span>Gender:</span> {char.gender} </div>
            <div className='attrib'> <span>Hair Color:</span> {char.hair_color} </div>
            <div className='attrib'> <span>Height:</span> {char.height}{'cm'} </div>
            <div className='attrib'> <span>Mass:</span> {char.mass}{'kg'} </div>
            <div className='attrib'> <span>Skin Color:</span> {char.skin_color} </div>
          </div>
            );
      })}
      </div>
    );
  }
}

export default Data;