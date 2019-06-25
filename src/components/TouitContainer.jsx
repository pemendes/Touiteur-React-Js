import React, {Component} from 'react';
// import Touit from './components/Touit';

export default class TouitContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        touits: []
      }
    }
    
    componentDidMount () {
        fetch('http://touiteur.cefim-formation.org/list')
            .then((response) => response.json())
            .then((responseText) => {
                // setInterval(() => {
                    this.setState({touits: responseText.messages})
                    console.log(responseText.messages)
                // }, 1500);
                
            })
    }
    
    render() {
        const {touits } = this.state;
        
          return (
              <div id="affiche" className="container">
              {touits.map(touit => (
                <div key={touit.id} id="new">
                    <div className="test">
                    <p>{touit.name}</p>
                   <span>{touit.message}</span>
                    </div>
                    
                  </div>
              ))}
            </div>
          );
        }
      }
