import React from 'react';

// using children allows this component to wrap around other components 
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );

};

export default Scroll;