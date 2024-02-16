import { IoMdSend } from "react-icons/io";
import './Chat.css'

export const Chat = (id) => {
    return (
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
    )

}