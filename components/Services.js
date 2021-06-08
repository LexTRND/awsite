import React, { Component } from "react";
import { FaBrush, FaCalendarDay, FaFillDrip } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <BsFillHouseDoorFill />,
        title: "Residental",
        info: "Make your home feel warm and cozy. We do, walls, ceilings, trim, cabinets, built-in fixtures, stair rails, you name it. It'll feel like a place you never want to leave",
      },

      {
        icon: <FaCalendarDay />,
        title: "Commercial",
        info: "You only get one first impression. Present a professional image at your business with colorful and crisp paint. We partner with EB Color Consultants to help you decide what colors are best for the results you seek. ",
      },

      {
        icon: <FaFillDrip />,
        title: "Exterior",
        info: "Protect your home or business while taking your curb appeal to the next level",
      },

      {
        icon: <FaBrush />,
        title: "Speciality",
        info: "Did we forgot something? Dog house? Power washing? Schedule a consolation, we'll be glad to help",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <IconContext.Provider
                key={index}
                value={{ size: "1.5em", className: "react-icons-service" }}
              >
                <article key={index} className="services">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              </IconContext.Provider>
            );
          })}
        </div>
      </section>
    );
  }
}
