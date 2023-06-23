// import styles from './Home.module.css';
import { useState, useEffect, useContext } from 'react';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';
import { cars as carsData } from './cars.data';
import { CarService } from '../../../services/car.service';
import { AuthContext } from '../../../providers/AuthProvider';

function App() {
    const [cars, setCars] = useState(carsData);

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll();

            setCars(data);
        }

        fetchData();
    }, [])

    const { user, setUser } = useContext(AuthContext)

    return (
        <div>
            <h1>Cars Catalog</h1>

            {user ? (
                <>
                    <h2>
                        Welcome, {user.name}!
                    </h2>
                    <button className='btn' onClick={() => setUser(null)}>Logout</button>
                </>
            ) : <button className='btn' onClick={() => setUser({name: 'Driver'})}>Login</button>
            }

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
