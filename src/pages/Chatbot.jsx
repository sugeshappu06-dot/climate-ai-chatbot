import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Chatbot() {

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const chatEndRef = useRef(null);

    const handleSend = async () => {

        if (!message.trim()) return;

        const userMessage = { sender: "user", text: message };

        setChat(prev => [...prev, userMessage]);

        const city = message
            .toLowerCase()
            .replace("climate", "")
            .replace("weather", "")
            .replace("temperature", "")
            .replace("in", "")
            .trim();

        try {

            // Get coordinates using Geocoding API
            const geo = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
            );

            if (!geo.data.results) {

                const botReply = { sender: "bot", text: "City not found." };

                setChat(prev => [...prev, botReply]);
                setMessage("");
                return;
            }

            const lat = geo.data.results[0].latitude;
            const lon = geo.data.results[0].longitude;

            // Get weather using coordinates
            const weather = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
            );

            const temp = weather.data.current_weather.temperature;
            const wind = weather.data.current_weather.windspeed;

            const botReply = {
                sender: "bot",
                text: `Temperature in ${city} is ${temp}°C and wind speed is ${wind} km/h`
            };

            setChat(prev => [...prev, botReply]);

        } catch (error) {

            const botReply = { sender: "bot", text: "Error fetching weather." };
            setChat(prev => [...prev, botReply]);

        }

        setMessage("");
    };


    useEffect(() => {

        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

    }, [chat]);


    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "85vh"
        }}>

            <h1>AI Climate Chatbot</h1>

            {/* Chat Area */}

            <div style={{
                width: "600px",
                height: "500px",
                overflowY: "auto",
                padding: "20px",
                border: "1px solid #444",
                borderRadius: "10px"
            }}>

                {chat.map((msg, index) => (

                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                            marginBottom: "15px"
                        }}
                    >

                        <div style={{
                            background: msg.sender === "user" ? "#4CAF50" : "#333",
                            color: "white",
                            padding: "10px 15px",
                            borderRadius: "10px",
                            maxWidth: "70%"
                        }}>

                            {msg.text}

                        </div>

                    </div>

                ))}

                <div ref={chatEndRef}></div>

            </div>


            {/* Input Area */}

            <div style={{
                width: "600px",
                display: "flex",
                marginTop: "10px"
            }}>

                <input
                    style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "8px"
                    }}
                    placeholder="Ask climate question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                />

                <button
                    style={{
                        marginLeft: "10px",
                        padding: "10px 20px"
                    }}
                    onClick={handleSend}
                >
                    Send
                </button>

            </div>

        </div>
    );
}

export default Chatbot;