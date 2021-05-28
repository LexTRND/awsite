import React, { Component } from 'react';
import {FaBrush,FaCalendarDay,FaFillDrip,} from 'react-icons/fa';
import {BsFillHouseDoorFill} from "react-icons/bs"
import { IconContext } from 'react-icons/lib';
import Title from './Title';




export default class Services extends Component {
    state={
        services:[
            {
                icon:<BsFillHouseDoorFill/>,
                title:"Residental",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec.'
            },

            {
                icon:<FaCalendarDay/>,
                title:"Commercial",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec.'
            },

            {
                icon:<FaBrush/>,
                title:"Interior",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec.'
            },

            

            {
                icon:<FaFillDrip/>,
                title:"Exterior",
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec.'
            },

          
            
        ]
    };
    
    render() {
        return (
            
            <section className="services">

                <Title title="services" />
                <div className="services-center">

                   {this.state.services.map((item, index) => {
                        return (
                            <IconContext.Provider key={index} value={{ size:'1.5em', className: 'react-icons-service' }}>
                        <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                           </article>
                           </IconContext.Provider>
                        );
                   }) }
                </div>
            </section>
        )
                }

            }