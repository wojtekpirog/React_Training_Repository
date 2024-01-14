function Card({brand, model, imgUrl, yearOfProduction, horsePower, altText}) {
  return (
    <div className="card">
      <div className="top">
        <h3 className="name">🚗 {brand} {model} 🚗</h3>
        <img className="circle-img" src={imgUrl} alt={altText} title={altText} />
      </div>
      <div className="bottom">
        <p className="info">Year of production: {yearOfProduction}</p>
        <p className="info">Engine power: {horsePower}</p>
      </div>        
    </div>
  );
}

export default Card;