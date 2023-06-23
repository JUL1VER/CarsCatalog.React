// import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';
import { cars as carsData } from './cars.data';
import { CarService } from '../../../services/car.service';

function App() {
    const [cars, setCars] = useState(carsData);

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll();

            setCars(data);
        }

        fetchData();
    }, [])

    return (
        <div>
            <h1>Cars Catalog</h1>
            <CreateCarForm setCars={setCars}/>
            <div>
                {cars.length ?
                    (cars.map(car => (
                        <CarItem car={car} key={car.id}/>
                    ))) : (
                        <div>
                            There are no cars
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App
