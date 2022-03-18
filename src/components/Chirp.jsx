import React from 'react';

const Chirp = (props) => {
    return ( //This will likely be it's own component
        <div className="chirp">
            <h2 id="chirpUser">{`@${props.user}`}</h2>
            <p id="chirpMsg">{props.msg}</p>
        </div>
    )    
}

export default Chirp;