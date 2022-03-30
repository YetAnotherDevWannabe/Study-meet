import React, { useState, useEffect, useCallback } from "react";
import { Text, View } from "react-native";
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScreenConversation = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
        {
            _id: 1,
            text: 'Un céréale killer…',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
        {
            _id: 2,
            text: 'Qu’est-ce qu’un homme avec une mitraillette dans un champ de blé ?',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                <MaterialCommunityIcons
                    name="send-circle"
                    style={{marginBottom: 5, marginRight: 5}}
                    size={32}
                    color="#2e64e5"
                />
                </View>
            </Send>
        );
    };

    const renderBubble = (props) => {
        return (
            <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#e1aa78',
                },
                left: {
                    backgroundColor: '#e178c6',
                }
            }}
            textStyle={{
                right: {
                    color: '#fff',
                },
                left: {
                    color: '#fff',
                }
            }}
            timeTextStyle={{
                left: { color: 'white' }
              }}
            />
            );
        };
  
    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 2,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
        />
    )
}

export default ScreenConversation;