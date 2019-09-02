import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        //send to backend
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        
        this.props.previousStep();
    }
    render() {
        const {  firstname, lastname, email, bio, occupation, city  } = this.props.values;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Details"/>
                        <List>
                            <ListItem
                            primaryText= 'First Name'
                            secondaryText= { firstname}
                            />
                            <ListItem
                            primaryText= 'Last Name'
                            secondaryText= { lastname}
                            />
                            <ListItem
                            primaryText= 'Email'
                            secondaryText= { email}
                            />
                            <ListItem
                            primaryText= 'Occupation'
                            secondaryText= { occupation}
                            />        
                            <ListItem
                            primaryText= 'City'
                            secondaryText= { city}
                            />                     
                            <ListItem
                            primaryText= 'Bio'
                            secondaryText= { bio}
                            />
                        </List>
                    <br/>  
                    <RaisedButton
                    label="Previous"
                    primary = {false} //color
                    style={ styles.button}
                    onClick= { this.back }
                    />    
                    <RaisedButton
                    label="Submit"
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

export default Confirm
