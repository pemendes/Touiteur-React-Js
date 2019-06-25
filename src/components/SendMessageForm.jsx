import React, {Component} from 'react';
import TouitAPI from '../api/TouitAPI';


export default class SendMessageForm extends Component {
    constructor(props) {
      super(props);
      this.state = {name: '', message: ''};
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value});
      }
  
    handleSubmit(event) {
      event.preventDefault();
      TouitAPI(this.state.name, this.state.message, (resp) => console.log (resp))
      alert('Le message a été soumis : ' + this.state.value);
      this.setState({name: '', message: ''});  
    }
    
    render() {
      return (
          <div>
            <div onSubmit={this.handleSubmit} className="col-md-2">
            <label>
                Nom :
                <input className="form-control" type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="Votre nom"/>
            </label>
            </div>
            <div className="col-md-10">
            <label>
                Message :
                <input className="form-control" type="text" value={this.state.message} onChange={this.handleChangeMessage} placeholder="Votre message" />
            </label>
            </div>
            <div className="col-md-12">
            <input type="submit" value="Envoyer" className="button1"/>
            </div>
        </div>
      );
    }
  }


