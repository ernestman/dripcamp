import React from "react";
// import {Link} from "react-router-dom";

const Greeting = (props) => {
    
    const {currentUser, signOut, openModal} = props;
    
    // nbsp = non breaking space
    const modalLinks = () => (
        <nav className="login-signup">
            <button onClick={ () => openModal("login")}>Log in</button>
            &nbsp;or&nbsp;
            <button onClick={ () => openModal("signup")}>Sign up</button>
        </nav>
    );
    
    const headGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name"> Welcome, {currentUser.first_name}</h2>
            <button className="header-button" onClick={signOut}>Log out</button>
        </hgroup>
    );
    
    return (
        currentUser ? headGreeting(currentUser, signOut) : modalLinks()
    );
}

    export default Greeting;


// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const {currentUser, signOut, openModal} = this.props;
//         const display = currentUser ? (
//             <div>
//                 <h3>Welcome, {currentUser.first_name}!</h3>
//                 <button onClick={signOut}>Sign Out</button>
//             </div>
//         ) : (
//             <div>
//                 <Link to="/signup">Sign Up</Link>
//                 <br/>
//                 <Link to="/login">Log In</Link>
//             </div>
//         );


//         return (
//             <div>
//                 {display}
//             </div>
//         )
//     }
// }
