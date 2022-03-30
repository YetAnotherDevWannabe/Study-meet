import React from 'react';
import { Image, Text, View, TouchableHighlight, StyleSheet, FlatList} from "react-native";
import { Container, Card, UserInfo, UserImgWrapper, UserImg, UserInfoText, UserName, PostTime, TextSection,	MessageText } from "../styles/MessageStyle";

const Question = (props) => {
    return (
        <UserInfo>
            <UserImgWrapper>
                <UserImg source={props.userImg}/>
            </UserImgWrapper>
            <TextSection>
                <UserInfoText>
                    <UserName>{props.userName}</UserName>
                    <PostTime>{props.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{props.questionText}</MessageText>
            </TextSection>
        </UserInfo>
    );
}

export default Question;