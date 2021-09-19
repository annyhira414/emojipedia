import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
// id: 1,
// emoji: "💪",
// name: "Tense Biceps",
// meaning:
  
function creatEntry(emojiItem){
  return(
    <Entry 
      key = {emojiItem.id}
      emoji = {emojiItem.emoji}
      name = {emojiItem.name}
      description = {emojiItem.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(creatEntry)}
      </dl>
    </div>
  );
}

export default App;
