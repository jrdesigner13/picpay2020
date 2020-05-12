import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <AntDesign name="qrcode" size={30} color="#10c86e" />
          <BalanceContainer>
            <BalanceTitle>My balance</BalanceTitle>
            <Balance>£ 100,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;
