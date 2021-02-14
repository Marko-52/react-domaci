import {Link} from "react-router-dom";

function CarListItem({car}) {
	return (
		<li className="collection-item avatar red lighten-2 white-text">
			<img src={car.image} alt="Car" className="circle"/>
			<p>
				Make: {car.make} <br/>
				Model: {car.model} <br/>
				Seats: {car.seats} <br/>
				Price: {car.price} <br/>
				{car.rented ? "Rented" : ""}
			</p>
			<Link to={`/cars/${car.id}`} className="secondary-content white-text"><i className="material-icons">edit</i></Link>
		</li>);
}

export default CarListItem;
