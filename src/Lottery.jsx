import { useState } from "react";
import { genNumbers, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genNumbers(n));
  let isWinning = winCondition(ticket);

  let newTicket = () => {
    setTicket(genNumbers(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />

      <Button action={newTicket} />
      <br />
      <h3>
        <u>{isWinning && "Congratulations, you won!"}</u>
      </h3>
    </div>
  );
}
