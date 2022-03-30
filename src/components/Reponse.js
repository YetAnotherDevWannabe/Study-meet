import React from 'react';
import { Image, Text, View, TouchableHighlight, StyleSheet, FlatList} from "react-native";
import { Container, Card, UserInfo, UserImgWrapper, UserImg, UserInfoText, UserName, PostTime, TextAnswer,	MessageText } from "../styles/MessageStyle";

const Reponse = (props) => {
    return (
        <UserInfo>
            <UserImgWrapper>
                <UserImg source={props.userImg}/>
            </UserImgWrapper>
            <TextAnswer>
                <UserInfoText>
                    <UserName>{props.userName}</UserName>
                    <PostTime>{props.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{props.questionText}</MessageText>
            </TextAnswer>
        </UserInfo>
    );
}

export default Reponse;