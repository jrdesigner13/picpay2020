import React from 'react';

import {Container, Option, Title, Img} from './styles';
import img8 from '../../img/08.png';
import img9 from '../../img/09.png';
import img10 from '../../img/10.png';
import img11 from '../../img/11.png';
import img12 from '../../img/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pay your bills without leaving home',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Pay your bills without leaving home',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Pay your bills without leaving home',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pay your bills without leaving home',
    bgColor: '#00ab4b',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Pay your bills without leaving home',
    bgColor: '#ba2f76',
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
