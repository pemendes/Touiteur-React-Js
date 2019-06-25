import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        const {title, para} = this.props
        return (
            <div className="heading">
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
        );
    }
}

// import React, { Component } from 'react';

// class Header extends Component {

//     render() {
//         return (
//             <div className="Header">
//                 <header>
//                     <h1>Touiteur</h1>
//                     <small>A small useless subheader goes here!</small>
//                 </header>
//             </div>
//         )
//     }
// }

// export default Header;
