import React from 'react';
import { Text, View, Image, StyleSheet, Alert, ScrollView, FlatList } from "react-native";
import { Container, Card, UserInfo, UserImgWrapper, UserImg, UserInfoText, UserName, PostTime, TextSection,	MessageText } from "../styles/MessageStyle";
import {wsc, hsc} from "../G";

//#region Message JSON
const Messages = [
	{
		id: "1",
		userName: "Jenny Doe",
		userImg: require("../../assets/userImg/user-1.jpg"),
		messageTime: "1min ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	},{
		id: "2",
		userName: "John Doe",
		userImg: require("../../assets/userImg/user-2.jpg"),
		messageTime: "4min ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	},{
		id: "3",
		userName: "Jean Doe",
		userImg: require("../../assets/userImg/user-3.jpg"),
		messageTime: "44min ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	}
	,{
		id: "4",
		userName: "Al Doe",
		userImg: require("../../assets/userImg/user-4.jpg"),
		messageTime: "17h ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	},{
		id: "5",
		userName: "Fre Doe",
		userImg: require("../../assets/userImg/user-5.jpg"),
		messageTime: "2d ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	},{
		id: "6",
		userName: "Mary Doe",
		userImg: require("../../assets/userImg/user-6.jpg"),
		messageTime: "3d ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	},{
		id: "7",
		userName: "Emma Doe",
		userImg: require("../../assets/userImg/user-7.jpg"),
		messageTime: "6d ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	},{
		id: "8",
		userName: "Marie Doe",
		userImg: require("../../assets/userImg/user-8.jpg"),
		messageTime: "8d ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	},{
		id: "9",
		userName: "Jena Doe",
		userImg: require("../../assets/userImg/user-9.jpg"),
		messageTime: "8d ago",
		messageText:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis pulvinar augue."
	}
];
//#endregion

// export default function ScreenMessages()
const ScreenMessages = ( { route, navigation } ) => {
	console.log("Route", route)
	return (
		<Container style={{marginTop: 30}}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={Messages}
				keyExtractor={item=>item.id}
				renderItem={({item}) => (
					<Card onPress={() => navigation.navigate('Conversation', {userName: item.userName})}>
						<UserInfo>
							<UserImgWrapper>
								<UserImg source={item.userImg}/>
							</UserImgWrapper>
							<TextSection>
								<UserInfoText>
									<UserName>{item.userName}</UserName>
									<PostTime>{item.messageTime}</PostTime>
								</UserInfoText>
								<MessageText>{item.messageText}</MessageText>
							</TextSection>
						</UserInfo>
					</Card>
				)}
			/>
		</Container>
	)
}

export default ScreenMessages;