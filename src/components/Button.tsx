import React from "react";
import { TouchableHighlight } from "react-native";

import styled from "styled-components/native";

const ButtonContainer = styled.View<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    padding: 5px 10px;
    border-radius: 4px;
    height: 38px;

    background-color: ${props => props.outline ? 'transparent' : '#034732'};
    border: ${props => props.outline ? '1px solid #034732;' : '0px'};
    elevation: ${props => props.outline ? '0px' : '2px'};
`

const ButtonText = styled.Text`
    color: #fff
`

const Button = (props: Props) => {
    const { onClick, outline, title } = props;

    return (
        <TouchableHighlight
            onPress={onClick}
            underlayColor={'#034732'}
            style={{ borderRadius: 4 }}>

            <ButtonContainer outline={outline}>
                <ButtonText> {title} </ButtonText>
            </ButtonContainer>

        </TouchableHighlight>
    )
}

interface Props {
    onClick?: (e: Event) => any,
    outline?: boolean,
    title?: string
}

export default Button