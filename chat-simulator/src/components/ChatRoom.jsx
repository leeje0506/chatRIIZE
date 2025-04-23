
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChoiceButtons from "./ChoiceButtons";

// 캐릭터별 시나리오 import
import scenarioSC from "../data/scenario-sc.json";
import scenarioES from "../data/scenario-es.json";
import scenarioAT from "../data/scenario-at.json";

// 캐릭터 이름과 시나리오 파일 매핑
const scenarioMap = {
    성찬: scenarioSC,
    은석: scenarioES,
    앤톤: scenarioAT
};


function ChatRoom() {
  const { character } = useParams();
  const [sceneId, setSceneId] = useState("start");
  const [showLoading, setShowLoading] = useState(false);
  const [delayedSceneId, setDelayedSceneId] = useState("start");
  const chatContainerRef = useRef(null);

    const scenario = scenarioMap[character];
    const currentScene = scenario[delayedSceneId];

  const playSound = () => {
    const audio = new Audio("/sound/message.mp3");
    audio.play();
  };

  const handleChoice = (nextId) => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setDelayedSceneId(nextId);
      playSound();
    }, 1200);
  };

  useEffect(() => {
    if (!showLoading && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [delayedSceneId, showLoading]);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <h2>{character}와의 대화</h2>
      <div
        ref={chatContainerRef}
        style={{
          flexGrow: 1,
          overflowY: "auto",
          maxHeight: "calc(100vh - 150px)",
          paddingBottom: "20px",
        }}
      >
        {showLoading ? (
          <div style={{ padding: "10px 20px", fontSize: "20px", color: "#999" }}>
            <span className="dot-typing">...</span>
          </div>
        ) : (
          <>
            <MessageBubble sender={currentScene.character} text={currentScene.message} />
            {currentScene.choices && (
              <ChoiceButtons choices={currentScene.choices} onChoose={handleChoice} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ChatRoom;
