import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(10);

  const teamStyle = {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  
  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };

  return (
    <div style={teamStyle}>
      <h2>Players: {team}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
