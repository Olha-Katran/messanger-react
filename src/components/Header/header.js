import React from 'react';

const HeaderComponent = () => {
    return (
        <div className="header-container">
            <img
                src="https://picsum.photos/id/237/200/300"
                alt="Avatar"
                className="avatar header"
            />
            <h2 className="name-header">Tom Hold </h2>
        </div>
    )
};

export default HeaderComponent;