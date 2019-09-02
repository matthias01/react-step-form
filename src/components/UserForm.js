import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstname : '',
        lastname : '',
        occupation : '',
        email : '',
        city : '',
        bio : ''
    }

    //proceed to next step
    nextStep = () => {
        //destructuring 
        const { step } = this.state; //get the current step from the state
        this.setState({
            step : step + 1 
        })
    }

     //go back to previous step
     previousStep = () => {
        const { step } = this.state; //get the current step from the state
        this.setState({
            step : step - 1 
        })
    }

    //hanles all field change
    handleChange = input => e =>{
        this.setState({
            [input] : e.target.value
        })
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, bio, occupation, city } = this.state;
        const values = { firstname, lastname, email, bio, occupation, city };

      switch (step){
          case 1:
              return (
                  <UserDetails
                  nextStep = { this.nextStep }
                  handleChange = { this.handleChange }
                  values = { values}
                  />
              );
        case 2:
            return  <PersonalDetails
            nextStep = { this.nextStep }
            previousStep = { this.previousStep }
            handleChange = { this.handleChange }
            values = { values}
            />
        case 3:
                return <Confirm
                nextStep = { this.nextStep }
                previousStep = { this.previousStep }    
                values = { values}
                />
        case 4:
                return <Success/>
      }
    }
}

export default UserForm
