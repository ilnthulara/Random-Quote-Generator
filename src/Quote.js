import React from "react";
import quotes from "./quotes";

const Quote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="quote">
      <p>{randomQuote.text}</p>
      <p>- {randomQuote.author}</p>
    </div>
  );
};

export default Quote;
