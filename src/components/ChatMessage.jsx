function ChatMessage({ sender, text }) {

    return (

        <p className={sender}>
            {text}
        </p>

    )

}

export default ChatMessage