
function ChoiceButtons({ choices, onChoose }) {
  return (
    <div style={{ padding: "0 20px", marginTop: "20px" }}>
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => onChoose(choice.next)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            backgroundColor: "#fefefe",
            border: "1px solid #ddd",
            borderRadius: "10px",
            fontSize: "15px",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            textAlign: "left"
          }}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default ChoiceButtons;
