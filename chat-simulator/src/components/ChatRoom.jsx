import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChoiceButtons from "./ChoiceButtons";
import scenarioSC from "../data/scenario-sc.json";
import scenarioES from "../data/scenario-es.json";
import scenarioAT from "../data/scenario-at.json";

const scenarioMap = {
    성찬: scenarioSC,
    은석: scenarioES,
    앤톤: scenarioAT,
};

function ChatRoom() {
    const { character } = useParams();
    const scenario = scenarioMap[character];
    const [delayedSceneId, setDelayedSceneId] = useState("start");
    const [history, setHistory] = useState([]);
    const [loadingBubble, setLoadingBubble] = useState(false);
    const chatContainerRef = useRef(null);

    const currentScene = scenario[delayedSceneId];
    const isEnd = !currentScene.choices;

    const playSound = () => {
        try {
            const audio = new Audio("/sound/message.mp3");
            audio.play();
        } catch (e) {
            console.warn("🔇 사운드 재생 실패:", e);
        }
    };

    const handleChoice = (nextId, choiceText) => {
        setHistory(prev => [...prev, {
            sceneId: delayedSceneId,
            choice: choiceText
        }]);

        setLoadingBubble(true);

        setTimeout(() => {
            setDelayedSceneId(nextId);
            setLoadingBubble(false);
            playSound();
        }, 1200);
    };

    const resetChat = () => {
        setDelayedSceneId("start");
        setHistory([]);
        setLoadingBubble(false);
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [history, delayedSceneId, loadingBubble]);

    return (
        <div style={{
            maxWidth: "500px",
            margin: "0 auto",
            minHeight: "100vh",
            background: "#fff",
            display: "flex",
            flexDirection: "column"
        }}>
            <h2>{character}와의 대화</h2>

            <div
                ref={chatContainerRef}
                style={{
                    flexGrow: 1,
                    overflowY: "auto",
                    maxHeight: "calc(100vh - 200px)",
                    paddingBottom: "20px"
                }}
            >
                {/* 첫 메시지 */}
                {history.length === 0 && (
                    <MessageBubble
                        sender={currentScene.character}
                        text={currentScene.message}
                        animated={true}
                    />
                )}

                {/* 대화 기록 */}
                {history.map((h, index) => (
                    <div key={index}>
                        <MessageBubble
                            sender={scenario[h.sceneId].character}
                            text={scenario[h.sceneId].message}
                            animated={false}
                            image={scenario[h.sceneId].image}
                        />
                        <MessageBubble sender="나" text={h.choice} isUser animated={false} />
                    </div>
                ))}

                {/* 로딩 중 */}
                {loadingBubble && history.length > 0 && (
                    <MessageBubble sender={currentScene.character} text="..." animated={true} />
                )}

                {/* 다음 메시지 (로딩 후) */}
                {!loadingBubble && history.length > 0 && (
                    <MessageBubble
                        sender={currentScene.character}
                        text={currentScene.message}
                        animated={true}
                        image={currentScene.image}
                    />
                )}

                {/* 회상 */}
                {/*{isEnd && history.length > 0 && (*/}
                {/*    <div style={{ padding: "0 20px", marginTop: "20px" }}>*/}
                {/*        <h4 style={{ margin: "10px 0" }}>📜 당신의 대화 기록</h4>*/}
                {/*        <ul style={{ fontSize: "14px", color: "#444" }}>*/}
                {/*            {history.map((h, i) => (*/}
                {/*                <li key={i}>*/}
                {/*                    <strong>{scenario[h.sceneId].character}</strong>:*/}
                {/*                    {scenario[h.sceneId].message}<br />*/}
                {/*                    ➤ <em>{h.choice}</em>*/}
                {/*                </li>*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*        <button*/}
                {/*            onClick={resetChat}*/}
                {/*            style={{*/}
                {/*                marginTop: "10px",*/}
                {/*                padding: "8px 12px",*/}
                {/*                background: "#eee",*/}
                {/*                border: "none",*/}
                {/*                borderRadius: "8px",*/}
                {/*                cursor: "pointer"*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            🔁 다시하기*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*)}*/}
                {isEnd && (
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <button
                            onClick={resetChat}
                            style={{
                                padding: "10px 16px",
                                background: "#eee",
                                border: "none",
                                borderRadius: "8px",
                                fontSize: "16px",
                                cursor: "pointer"
                            }}
                        >
                            🔁 다시하기
                        </button>
                    </div>
                )}
            </div>

            {/* 선택지 버튼 */}
            {!isEnd && currentScene.choices && !loadingBubble && (
                <div style={{ marginTop: "20px", marginBottom: "40px" }}>
                    <ChoiceButtons
                        choices={currentScene.choices.map(choice => ({
                            ...choice,
                            onClick: () => handleChoice(choice.next, choice.text)
                        }))}
                    />
                </div>
            )}
        </div>
    );
}

export default ChatRoom;
