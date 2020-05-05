import React from 'react';
import './navigation.styles.scss';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';
 const params ={
    "allowMultipleExpanded" : false
 }

const Navigation = () =>{
    return(
        <div className="navigation">
            <div className='navigation__accordion'>
             <Accordion params={params} >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Profile
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div>
                       <p>Settings</p>
                    </div>
                </AccordionItemPanel>
                <AccordionItemPanel>
                    <div>
                       <p>Notifications</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        My Tasks
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div>
                       <p>Task 1</p>
                    </div>
                </AccordionItemPanel>
                <AccordionItemPanel>
                    <div>
                       <p>Task 2</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </div>
            <div className='navigation__copyright'>
                Designed by Gobind Jha
                </div>
        </div>
    );
}

export default Navigation;