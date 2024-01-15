function Card({id, emoji, name, meaning}) {
  return (
    <div data-id={id} className="card">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps" style={{fontSize: "400%"}}>{emoji}</span>
        <span>{name}</span>
      </dt>
      <dd>{meaning}</dd>
    </div>
  );
}

export default Card;