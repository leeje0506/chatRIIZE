
function MessageBubble({ sender, text }) {
    const nameMap = {
        성찬: "seongchan",
        은석: "eunseok",
        앤톤: "anton"
    };

    const profileUrl = `/images/${nameMap[sender]}.jpg`;


    return (
    <div style={{ display: "flex", alignItems: "flex-start", padding: "10px 20px" }}>
      <img src={profileUrl} alt={sender} style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "15px",
          padding: "10px 15px",
          maxWidth: "70%",
          fontSize: "16px",
          lineHeight: "1.5",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          animation: "fadeInUp 0.5s ease"
        }}
      >
        <strong style={{ fontSize: "14px", color: "#888" }}>{sender}</strong><br />
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;
