import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class PersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        
        this.props.previousStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Your Personal Details"/>
                    <TextField 
                        hintText ="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />   
                    <br/>   
                    <TextField 
                        hintText ="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />   
                    <br/>   
                    <TextField 
                        hintText ="Enter Your Bio"
                        floatingLabelText="bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />   
                    <br/>    
                    <RaisedButton
                    label="Previous"
                    primary = {false} //color
                    style={ styles.button}
                    onClick= { this.back }
                    />  
                    <RaisedButton
                    label="Continue"
                    primary = {true} //color
                    style={ styles.button}
                    onClick= { this.continue }
                    />        

                         
                </React.Fragment> 
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin:15
    }
}

export default PersonalDetails
