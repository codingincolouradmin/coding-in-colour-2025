import * as React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const [clicked, setClicked] = React.useState(0);
  const quote = quotes[index];

  const handleClick = () => {
    console.log(`index is ${index}`);
    console.log(`current click is ${clicked}`)
    setIndex((index + 1) % quotes.length)
    setClicked(clicked + 1)
  }

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={handleClick}>Inspire me again</button>
      {children}
    </>
  );
}
