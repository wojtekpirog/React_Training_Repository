import Card from "./Card";
import cars from "../data/cars";

function Main() {
  return (
    <main>
      {cars.map((car, index) => (
        <Card
          key={index}
          brand={car.brand}
          model={car.model}
          imgUrl={car.imgUrl}
          yearOfProduction={car.yearOfProduction}
          horsePower={car.horsePower}
          altText={car.altText}
        />
      ))}
    </main>
  );
}

export default Main;