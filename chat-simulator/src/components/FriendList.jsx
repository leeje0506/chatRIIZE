
import { useNavigate } from "react-router-dom";

function FriendList() {
  const navigate = useNavigate();
  const friends = ["성찬", "은석", "앤톤"];

  return (
    <div>
      <h2>친구 목록</h2>
      {friends.map((name) => (
        <div key={name} onClick={() => navigate(`/chat/${name}`)} style={{ cursor: "pointer", margin: "10px 0" }}>
          {name}
        </div>
      ))}
    </div>
  );
}

export default FriendList;
