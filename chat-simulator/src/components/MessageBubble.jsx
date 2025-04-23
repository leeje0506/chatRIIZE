function MessageBubble({ sender, text, isUser = false, animated = false, image }) {
    const profileMap = {
        성찬: "seongchan.jpg",
        은석: "eunseok.jpg",
        앤톤: "anton.jpg"
    };

    const colorMap = {
        성찬: "#ffecec",
        은석: "#fff7cc",
        앤톤: "#e0f7ff"
    };

    const profileUrl = `/images/${profileMap[sender] || "default.jpg"}`;
    const bubbleColor = isUser ? "#e6e6e6" : colorMap[sender] || "#ffffff";

    // 왼쪽 말풍선 구조
    const LeftBubble = () => (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
                src={profileUrl}
                alt={sender}
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                    marginTop: image ? "10px" : "0"
                }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        backgroundColor: bubbleColor,
                        border: "1px solid #ddd",
                        borderRadius: "15px",
                        padding: "10px 15px",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        maxWidth: "70%",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                        transition: animated ? "all 0.4s ease" : "none",
                        transform: animated ? "translateY(10px)" : "none",
                        opacity: animated ? 0 : 1,
                        animation: animated ? "fadeInUp 0.3s ease forwards" : "none",
                    }}
                >
                    <strong style={{ fontSize: "14px", color: "#555" }}>{sender}<br /></strong>
                    {text}
                </div>
                {image && (
                    <img
                        src={`/images/${image}`}
                        alt="엔딩 이미지"
                        style={{
                            marginTop: "10px",
                            borderRadius: "12px",
                            maxWidth: "100%",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                        }}
                    />
                )}
            </div>
        </div>
    );

    // 오른쪽 말풍선 구조
    const RightBubble = () => (
        <div
            style={{
                backgroundColor: bubbleColor,
                border: "1px solid #ddd",
                borderRadius: "15px",
                padding: "10px 15px",
                maxWidth: "70%",
                fontSize: "16px",
                lineHeight: "1.5",
                alignSelf: "flex-end",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                transition: animated ? "all 0.4s ease" : "none",
                transform: animated ? "translateY(10px)" : "none",
                opacity: animated ? 0 : 1,
                animation: animated ? "fadeInUp 0.3s ease forwards" : "none"
            }}
        >
            {text}
        </div>
    );

    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                padding: "10px 20px",
                justifyContent: isUser ? "flex-end" : "flex-start",
                flexDirection: "column"
            }}
        >
            {isUser ? <RightBubble /> : <LeftBubble />}
        </div>
    );
}

export default MessageBubble;
