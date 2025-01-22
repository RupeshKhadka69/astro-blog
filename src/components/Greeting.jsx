import { useState } from "react";

const Greeting = ({ messages }) => {
  const randomMessage = () => {
    const randomMess = messages[Math.floor(Math.random() * messages.length)];
    setGreeting(randomMess);
  };
  const [greeting, setGreeting] = useState(messages[0]);
  return (
    <div>
      <h3>{greeting} thank you for visiting.</h3>
      <button onClick={randomMessage}>new greeting</button>
    </div>
  );
};

export default Greeting;
