import React from 'react';

const Card = ({name, email, id}) => {
  return (
    //const {name, email, id} = props;
   <div className='bg-light-green dib br3 ma2 grow bw2 shadow'>
       <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
       <div>
           <h2>{name}</h2>
          <p>{email}</p>
       </div>
   </div>
);


}

export default Card;