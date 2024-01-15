import Card from "./Card";
import data from "../data/data";

function createCard(emojiEntry) {
  return (
    <Card
      id={emojiEntry.id}
      key={emojiEntry.id} 
      emoji={emojiEntry.emoji} 
      name={emojiEntry.name} 
      meaning={emojiEntry.meaning} 
    />
  );
}

function CardContainer() {
  return (
    <dl className="cardContainer">
      {/* <Card />
      <Card />
      <Card /> */}
      {data.map(createCard)}
    </dl>
  );
}

export default CardContainer;