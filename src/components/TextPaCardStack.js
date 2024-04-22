import './TextPaCardStack.css';
import React, { useEffect, useState } from "react";
import TextPa from './TextPa';

function TextPaCardStack({isVisible, onVisibilityChange}) {
  const [cards, setCards] = useState([]);
  const [cardTracker, setCardTracker] = useState(0);
  const [canRemove, setCanRemove] = useState(false);
  let zIndex = 0;

  const handleNoCards = () => {
    // Toggle the value of the argument
    onVisibilityChange(!isVisible);
  };

  const addCard = () => {
    setCards([...cards, {}]); // Add an empty card to the cards array
    setCardTracker(cardTracker + 1);
    setCanRemove(true);
  };

  const removeCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1); // Remove the card at the specified index
    setCards(updatedCards);
  };

  useEffect(() => {
    if(canRemove && cards.length == 0){
        handleNoCards();
    }
  }, [cards]);

  return (
    <div className="Card-Container">
      <button className="CardButton" onClick={addCard}>Add Card</button>
      {cards.map((card, index) => {
        zIndex++; // Increment z-index for each card
        return (
          <div key={index} style={{ position: 'absolute', zIndex: zIndex, width: '100%' }}>
            <TextPa onComplete={() => removeCard(index)} stackSize={cards.length} textVersion={cardTracker}/>
          </div>
        );
      })}
    </div>
  );
}

export default TextPaCardStack;