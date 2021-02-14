import {useEffect, useState} from "react";
import CarListItem from "../components/CarListItem";
import * as service from "../services/cars.service";

function CarsPage() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		service.getAll()
			.then(setCars);
	}, []);

	return <div className="container">
		<ul className="collection">
			{cars.map(car => <CarListItem car={car}/>)}
		</ul>
	</div>;
}

export default CarsPage;
