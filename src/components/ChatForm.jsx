import { useRef } from "react";


const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        inputRef.current.value = ""

        if(!userMessage) return;

        //update chat history with user message
        setChatHistory(history => [...history, {role: "user", text: userMessage}]);

        //update chat to show bot thinking...
        setTimeout(() => {
        setChatHistory(history => [...history, {role: "model", text: "Soch raha hu...."}]); 
        generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
        },600);

        
    }
    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
          <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
          <button className="material-symbols-rounded">arrow_upward
</button>
        </form>
    )
}

export default ChatForm