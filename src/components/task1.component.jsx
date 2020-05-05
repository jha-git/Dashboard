import React from 'react';
import './settings.styles.scss';
import './task1.styles.scss';

class Task1 extends React.Component{


    render(){
        return(
            
            <div className="settings">
                <h2>Task 1</h2>
                <form className="setting__form">
                <div className="settings__fields">
                    <label>Source Name</label>
                    <select>
                        <option  value=''>Source 1</option>
                        <option  value=''>Source 2</option>
                        <option value=''>Source 3</option>
                        <option value=''>Source 4</option>
                    </select>
                </div>
                <div className="settings__fields">
                    <label>Enable Logging</label>
                    <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                </div>
                <div className="settings__fields">
                    <label>Provide SQL</label>
                    <textarea id='message' rows='6' cols='50'  className='customtext'/>
                </div>
                <div className="settings__fields">
                    <label>Target Result</label>
                    <select>
                        <option value=''>Result 1</option>
                        <option value=''>Result 2</option>
                        <option value=''>Result 3</option>
                        <option value=''>Result 4</option>
                    </select>
                </div>
                <div className='settings__button-box'>
                    <button className='settings__button --cancel'>Cancel</button>
                    <button className='settings__button --submit'>Submit</button>
                    <button className='settings__button --submit'>Validate</button>
                </div>  

                </form>  

            </div>
        );
    }
}

export default Task1;