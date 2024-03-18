import { useState } from "react";
import "./Lottery.css";
import { genNumbers, sum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genNumbers(3));
  let isWinning = sum(ticket) === 15;

  let newTicket = () => {
    setTicket(genNumbers(3));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <br />

      <div className="ticket">
        <span>Lottery Ticket =</span>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <h3>{isWinning && "Congratulations, you won!"}</h3>
      <div>
        <button onClick={newTicket}>Get New Ticket</button>
      </div>
    </div>
  );
}
