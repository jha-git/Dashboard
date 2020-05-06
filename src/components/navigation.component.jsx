import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.styles.scss';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 

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
                    <Link to='/'>
                       <p>Settings</p>
                    </Link>
                </AccordionItemPanel>
                <AccordionItemPanel>
                    <Link to='notifications'>
                       <p>Notifications</p>
                    </Link>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        My Tasks
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Link to='/task1'>
                       <p>Task 1</p>
                    </Link>
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