import { FC } from "react";
import { ICar } from "../../types/car.interface";
import CarItem from "../screens/home/car-item/CarItem";

interface ICatalog {
  data?: ICar[] | undefined;
}

const Catalog: FC<ICatalog> = ({ data = [] }) => {
  return (
    <div>
      {data.length ? (
        data.map((car) => <CarItem car={car} key={car.id} />)
      ) : (
        <div>There are no cars</div>
      )}
    </div>
  );
};

export default Catalog;
