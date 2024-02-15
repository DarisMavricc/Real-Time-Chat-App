import "./Home.css"
import { IoMdSend } from "react-icons/io";

export const Home = () => {
    return (
        <div className="chatter">
            <div className="sidebar">
                <div className="header">
                    <h1>Chatter</h1>
                </div>
                <div className="users">
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
                <div className="no-chat">
                    <h1>Select a Contact and start Chatting</h1>
                </div>
                <div className="user-chat">
                    <div className="user-profile">
                        <h1>Daris</h1>
                    </div>
                    <div className="messages">
                        <div className="sender-message">
                            <p>Hi</p>
                        </div>
                        <div className="reciever-message">
                            <p>Hi</p>
                        </div>
                    </div>
                    <div className="send-message">
                        <input type="text" placeholder="type some message here"/>
                        <button><IoMdSend/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}