import {useState} from "react";
import * as service from "../services/cars.service";

function CarRentListItem(props) {
	const [car, setCar] = useState(props.car);
	const handleRent = () => {
		const rentedCar = {...car, rented: !car.rented};
		service.update(rentedCar)
			.then(setCar);
	};

	/**
	 * U renderu ove komponente kondicionalno dodajemo stilizaciju u zvisnosti od
	 * toga da li je kuca izdata ili ne.
	 */
	return (
		<li className={"collection-item avatar red lighten-2 white-text" + (car.rented ? " rented" : "")}>
			<img src={car.image} alt="Car" className="circle"/>
			<span style={car.rented ? {textDecoration: "line-through"} : {}} className="title">{car.make} {car.model}</span>
			<p>
				Seats: {car.seats} <br/>
				Price: {car.price} <br/>
				{car.rented ? "Rented" : "Available now"}
			</p>
			<p className="truncate">
				{car.description}
			</p>
			{!car.rented ?
				<button onClick={handleRent} className="btn secondary-content white black-text">
					Rent
				</button>
				:
				<button onClick={handleRent} className="btn secondary-content white black-text">
					Cancel
				</button>
			}
		</li>);
}

export default CarRentListItem;
