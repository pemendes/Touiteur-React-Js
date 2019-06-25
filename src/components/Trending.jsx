import React, {Component} from 'react';

export default class Trending extends Component {

    constructor() {
         super();
         this.state = {
        trending: []
      }
     }

    componentDidMount () {
        fetch('http://touiteur.cefim-formation.org/trending')
            .then((response) => response.json())
            .then((response) => {
                    this.setState({trending: response})
                    console.log(response)
                
            })
    }
    
    

    render() {
        const tr = Object.keys(this.state.trending).sort((a,b) => b[1] - a[0])
        
          return (
              <ul>
                  {
                    tr.map((nom, index) => <li key={index}>{nom}</li>)
                  }
              </ul>
          );
        }
       }




