import Card from "./Card";
import data from "../data/data";

function Container() {
  return (
    <dl className="cardContainer">
      {data.map(emojiEntry => {
        return <Card 
          key={emojiEntry.id}
          emoji={emojiEntry.emoji}
          name={emojiEntry.name}
          meaning={emojiEntry.meaning}
        />
      })}
    </dl>
  );
}

export default Container;