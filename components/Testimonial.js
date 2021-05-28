import React, { Component } from "react";
import Title from "./Title";

export default class Testimonial extends Component {
  state = {
    Testimonial: [],
  };
  render() {
    return (
      <section className="testimonies">
        <Title title="Testimonies" />

        <div className="slider">
          <input
            type="radio"
            name="slider"
            title="slide1"
            defaultChecked="checked"
            className="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="slide2"
            className="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="slide3"
            className="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="s
  lide4"
            className="slider__nav"
          />
          <div className="slider__inner">
            <div className="slider__contents">
              <i className="slider__image" />
              <h2 className="slider__caption">Deneen</h2>
              <p className="slider__txt">
                I hired AW Painting to paint my living and kitchen with a couple
                of accent walls. The work they did was perfection. Very clean
                work, clean cut lines and turned out beautiful. I would 100%
                recommend AW Painting for your home or business.
              </p>
            </div>
            <div className="slider__contents">
              <i className="slider__image" />
              <h2 className="slider__caption">Steph</h2>
              <p className="slider__txt">
                AW Painting was recommended to me for painting my condo. Once
                hired, they were there right on time and I did a wonderful job
                with my condo. I was very impressed by how clean the work was. I
                would definitely hire AW Painting again.
              </p>
            </div>
            <div className="slider__contents">
              <i className="slider__image" />
              <h2 className="slider__caption">Carl</h2>
              <p className="slider__txt">
                I hired AW Painting to paint my living and kitchen with a couple
                of accent walls. The work they did was perfection. Very clean
                work, clean cut lines and turned out beautiful. I would 100%
                recommend AW Painting for your home or business.
              </p>
            </div>
            <div className="slider__contents">
              <i className="slider__image" />
              <h2 className="slider__caption">Frank</h2>
              <p className="slider__txt">
                I hired AW Painting to paint my living and kitchen with a couple
                of accent walls. The work they did was perfection. Very clean
                work, clean cut lines and turned out beautiful. I would 100%
                recommend AW Painting for your home or business.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
