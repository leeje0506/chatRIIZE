function ChoiceButtons({ choices }) {
  return (
      <div style={{ padding: "10px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {choices.map((choice, i) => (
            <button
                key={i}
                onClick={choice.onClick}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  textAlign: "left",
                  transition: "background 0.2s",
                }}
            >
              {choice.text}
            </button>
        ))}
      </div>
  );
}

export default ChoiceButtons;
