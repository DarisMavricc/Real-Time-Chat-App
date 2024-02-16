import { useState } from "react";
import "./Home.css"
import { Chat } from "../Chat/Chat";
import { IoMdSend } from "react-icons/io";

export const Home = () => {

    const [ChatId,SetChatId] = useState(undefined);

    const ShowChat = () => {
        SetChatId(2323);
    }

    return (
        <div className="chatter">
            <div className="sidebar">
                <div className="header">
                    <h1>Chatter</h1>
                </div>
                <div className="users">
                    <div className="user" onClick={() => ShowChat()}>
                        <p>Daris</p>
                    </div>
                    <div className="user">
                        <p>Daris</p>
                    </div>
                    <div className="user">
                        <p>Daris</p>
                    </div>
                    <div className="user">
                        <p>Daris</p>
                    </div>
                    <div className="user">
                        <p>Daris</p>
                    </div>
                    <div className="user">
                        <p>Daris</p>
                    </div>
                    <div className="user">
                        <p>Daris</p>
                    </div>
                    <div className="user">
                        <p>Daris</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="my-profile">
                        <p>Moje Ime</p>
                    </div>
                </div>
            </div>
            <div className="chat">
                {
                   ChatId === undefined ? (
                        <div className="no-chat">
                            <h1>Select a Contact and start Chatting</h1>
                        </div>
                   ) : (
                    <Chat id={ChatId}/>
                   )
                }
            </div>
        </div>
    )
}