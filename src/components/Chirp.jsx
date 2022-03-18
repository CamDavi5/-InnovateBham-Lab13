

const Chirp = (props) => {
    return (
        <div className="chirp">
            <h2 id="chirpUser">{`@${props.user}`}</h2>
            <p id="chirpMsg">{props.msg}</p>
        </div>
    )    
}

export default Chirp;