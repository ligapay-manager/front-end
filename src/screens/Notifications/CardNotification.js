import React, { Component } from 'react';
import styled from 'styled-components';


export const CardNotification = styled.TouchableOpacity`
  height: null;
  width: null;
  margin-left: 15px;
  margin-right: 15px;
  align-items: stretch;
  border-bottom-width: 1px;
  border-bottom-color: #e9e9e9;
`;

export const NotificationContainer = styled.View`
margin-top: 10;px;
margin-bottom: 5px;
`;

export const NotificationContainerTime = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
`;

export const NotificationTextInfo = styled.Text`
  font-size: 16px;
`;

export const NotificationTextTime = styled.Text`
  font-size: 11px;
`;

export default class CardNotificationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { notification } = this.props;

    return (
      <CardNotification>
        <NotificationContainer>
          <NotificationTextInfo>{notification.description}</NotificationTextInfo>
          <NotificationContainerTime>
            <NotificationTextTime>{notification.time}</NotificationTextTime>
          </NotificationContainerTime>
        </NotificationContainer>
      </CardNotification>
    );
  }
}
