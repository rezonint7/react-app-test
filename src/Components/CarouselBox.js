import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import firstImg from '../assets/one.jpg';
import twoImg from '../assets/two.jpg';

export default class CaruselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            width={520}
            height={520}
            className='d-block w-100'
            src={firstImg}
            alt='picture'
          />
          <Carousel.Caption>
            <h3>picture</h3>
            <p>
              Хуй залупа пенис
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={520}
            height={520}
            className='d-block w-100'
            src={twoImg}
            alt='picture'
          />
          <Carousel.Caption>
            <h3>picture</h3>
            <p>
              Хуй залупа пенис
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={520}
            height={520}
            className='d-block w-100'
            src={firstImg}
            alt='picture'
          />
          <Carousel.Caption>
            <h3>picture</h3>
            <p>
              Хуй залупа пенис
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
