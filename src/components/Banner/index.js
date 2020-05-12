import React from 'react';

import {Container, Details, Img, Title, Description} from './styles';
import img13 from '../../img/13.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Bill a friend</Title>
        <Description>
          Keep your partnerships days, use the app to your charges.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
