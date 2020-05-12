import React, {useState} from 'react';
import {Switch} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeBtn,
  Info,
  Actions,
  ActionBtn,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardInfo,
  CardTitle,
  ImgCC,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketBtn,
  UseTicketLabel,
} from './styles';

import creditcard from '../../img/credit-card.png';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  return (
    <Container>
      <Header
        colors={useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']}>
        <HeaderContainer>
          <Title>App Balance</Title>
          <BalanceContainer>
            <Value>
              £ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>
            <EyeBtn onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#FFF"
              />
            </EyeBtn>
          </BalanceContainer>

          <Info>Your balance is yielding 100% of the CDI</Info>
          <Actions>
            <ActionBtn>
              <MaterialCIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Add</ActionLabel>
            </ActionBtn>
            <ActionBtn>
              <MaterialCIcons name="bank" size={20} color="#fff" />
              <ActionLabel>Withdraw</ActionLabel>
            </ActionBtn>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Use balance to pay</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Payment methods</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Register your credit card</CardTitle>
              <CardInfo>Register your credit card to make payments</CardInfo>
            </CardDetails>

            <ImgCC source={creditcard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <Feather name="plus-circle" size={30} color="#0DB060" />
            <AddLabel>Add credit card</AddLabel>
          </AddButton>
        </Card>
        <UseTicketContainer>
          <UseTicketBtn>
            <MaterialCIcons name="ticket-outline" size={20} color="#0DB060" />
            <UseTicketLabel>Use promotional code</UseTicketLabel>
          </UseTicketBtn>
        </UseTicketContainer>
      </PaymentMethods>
    </Container>
  );
};

export default Wallet;
