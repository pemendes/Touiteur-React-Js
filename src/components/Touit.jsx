import React, {Component} from 'react';

export default class Touit extends Component {
    render() {
        const {name, message} = this.props
        return (
            <div>
                <p>{name}</p>
                <span>{message}</span>
            </div>
        );
    }
}