import CarItem from "../screens/home/car-item/CarItem";

const Catalog = ({ data }) => {
  return (
    <div>
      {data.length ?
        (data.map(car => (
          <CarItem car={car} key={car.id}/>
        ))) : (
          <div>
            There are no cars
          </div>
        )
      }
    </div>
  );
};

export default Catalog;
