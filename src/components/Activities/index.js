import React from 'react';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  DateLabel,
  Actions,
  Option,
  OptionLabel,
} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../../img/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Activities</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>You</Bold> paid to <Bold>@jrrealsolutions</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Junior Real</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>£ 13,00</Value>
            <Divider />

            <AntDesign name="lock" color="#fff" size={14} />
            <DateLabel>1 year ago</DateLabel>
          </Details>

          <Actions>
            <Option>
              <MaterialCIcons name="comment-outline" size={14} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
