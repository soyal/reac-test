import React from 'react';

let C = (props, context) => {
  return (
    <div>
      <h3>C</h3>
      <p>username: {context.user.name}</p>
    </div>
  );
};

C.contextTypes = {
  user: React.PropTypes.object
};

export default C;