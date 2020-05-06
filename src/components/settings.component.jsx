import React from 'react';
import './settings.styles.scss';

class Settings extends React.Component{

    constructor(){
        super();

        this.state = {
            name:'',
            dob:'',
            profession:'',
            designation:''
        }
    }

    handleSubmit = event =>{
        const {name, dob, profession,designation}=this.state;
        event.preventDefault();

        this.setState({
            name:'',
            dob:'',
            profession:'',
            designation:''
        })

        console.log({name,dob,profession,designation});
    }


    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }




    render(){
        const {name, dob, profession, designation} = this.state; 
        return(
            
            <div className="settings">
                <h2>Profile Info</h2>
                <form className="setting__form" onSubmit={this.handleSubmit} >
                <div className="settings__fields">
                    <label>Name</label>
                    <input  onChange={this.handleChange} name='name' value={name} type='text' placeholder='Name' maxLength='30'  pattern="[A-Za-z]{0,}" required/>
                </div>
                <div className="settings__fields">
                    <label>DOB</label>
                    <input  onChange={this.handleChange} name='dob' value={dob} type='date' placeholder='DOB' required/>
                </div>
                <div className="settings__fields">
                    <label>Profession</label>
                    <input  onChange={this.handleChange}  name='profession' value={profession} type='text' placeholder='Profession'  pattern="[A-Za-z]{0,}" required/>
                </div>
                <div className="settings__fields">
                    <label>Designation</label>
                    <input  onChange={this.handleChange} name='designation' value={designation} type='text' placeholder='Designation' pattern="[A-Za-z]{0,}" required/>
                </div>
                <div className='settings__button-box'>
                    <button type='reset' className='settings__button --cancel'>Cancel</button>
                    <button type='submit' className='settings__button --submit'>Submit</button>
                </div>  

                </form>  

            </div>
        );
    }
}

export default Settings;