import React from 'react';

// import { Container } from './styles';

function UserBadge({user, alt, ...rest}) {
  return (
    <div className={`user ${alt ? 'alt' : ''}`}>
        <div className="info">
            <span className="name">
                <button type="button">{user.name}</button>
            </span>
            <span className="image">
                <img src="http://via.placeholder.com/100x100" alt=""/>
            </span>
        </div>
    
    </div>
  );
}

export default UserBadge;