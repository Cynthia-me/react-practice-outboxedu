import React from 'react'
import './FooterLanding.css'


class FooterLanding extends React.Component{
    constructor() {
        super();
        this.state = {
          username: '',
          age: null,
          errormessage: '',
          description : "text message"
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
          if (val !="" && !Number(val)) {
            err = <strong>Your age must be a number</strong>;
          }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
      }
      render() {
        return (
          <div className = "footer__landing">
          <form className = "footer__landing__form">
          <label>
          <p style = {{margin:"1em"}}>NAME</p>
          <input
          height = '5'
          width = '20' 
          type='text'
          name='username'
          onChange={this.myChangeHandler}
          />
          </label>
          
          <label>
            <p style = {{margin:"1em"}}>AGE</p>
            <input
            height = '5'
            width = '20' 
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />
          </label>
          {this.state.errormessage}
          
          <label>
          <textarea  
            rows="6" cols="30" value = {this.state.description}></textarea>
          </label>
          
          </form>
          </div>
        )
      }
} 

export default FooterLanding