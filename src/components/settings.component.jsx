import React from 'react';
import './settings.styles.scss';

class Settings extends React.Component{


    render(){
        return(
            
            <div className="settings">
                <h2>Profile Info</h2>
                <form className="setting__form">
                <div className="settings__fields">
                    <label>Name</label>
                    <input type='text' placeholder='Name' maxLength='30' required  pattern="[A-Za-z]"/>
                </div>
                <div className="settings__fields">
                    <label>DOB</label>
                    <input type='date' placeholder='DOB' required/>
                </div>
                <div className="settings__fields">
                    <label>Profession</label>
                    <input type='text' placeholder='Profession' required pattern="[A-Za-z]"/>
                </div>
                <div className="settings__fields">
                    <label>Designation</label>
                    <input type='text' placeholder='Designation'required pattern="[A-Za-z]"/>
                </div>
                <div className='settings__button-box'>
                    <button className='settings__button --cancel'>Cancel</button>
                    <button className='settings__button --submit'>Submit</button>
                </div>  

                </form>  

            </div>
        );
    }
}

export default Settings;