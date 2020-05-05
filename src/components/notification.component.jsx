import React from 'react';
import './settings.styles.scss';
import './notification.styles.scss';

class Notification extends React.Component{


    render(){
        return(
            
            <div className="settings">
                <h2>Notification</h2>
                <form className="setting__form">
                    <div className="settings__fields">
                        <p>Send All Alerts</p>
                        <label className="switch" >
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="settings__fields">
                        <p>Alerts Only Task Success</p>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="settings__fields">
                        <p>Alerts Only For Failed Tasks</p>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="settings__fields">
                        <p>I Do Not Want Any Alerts</p>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
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

export default Notification;