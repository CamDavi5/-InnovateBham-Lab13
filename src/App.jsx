import React, { useState, setState } from 'react';
import Chirp from "./components/Chirp";

const App = () => {
    
    const [ username, changeUsername ] = useState('');
    const [ messenger, changeMsg ] = useState('');
    const [ chirps, changeChirp] = useState([
        {
            user: "Sora",
            msg: "Hanging out with Dolan and Gooby"
        }, 
        {
            user: "Little Miss Muffet",
            msg: "Sitting on a tuffet rn"
        }, 
        {
            user: "Strongbad",
            msg: "*Chirper has censored this message*"
        }]);

    const updateUsername = (e) => {
        changeUsername(e.target.value);
    }

    const updateMsg = (e) => {
        changeMsg(e.target.value);
    }

    const postNewMsg = (e) => {
        e.preventDefault()

        changeChirp([...chirps, {
            user: username,
            msg: messenger
        }]);
    }
    
    return (
        <div>
            <header class="text-success" id='chirpHead'>
                <h1>CHIRPER</h1>
            </header>
            <div id='msgContainer'>
                    {chirps.map((chirp) => <Chirp user={chirp.user} msg={chirp.msg}/>)}
            </div>
            <form id='msgForm'>
                <input id='writeUser' value={username} onChange={updateUsername} type="text" placeholder='Username' />
                <textarea class="form-control" id='writeChirp'value={messenger} onChange={updateMsg} type="textarea" placeholder='Write your chirp!' />
                <button class="btn btn-success" type="submit" onClick={postNewMsg} >Post Chirp</button>
            </form>
        </div>  
    );
}

export default App;