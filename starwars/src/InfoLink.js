import React from 'react';

function InfoLink(props) {
  console.log(props.item);
  return (
    <div>
      { props.item[1].map((link, i) => {
      return <div key={i}>{link}</div>;
      }) }
    </div>
  );
}

export default InfoLink;