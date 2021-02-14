import M from "materialize-css/dist/js/materialize.min";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import * as service from "../services/cars.service";

/**
 * Stranica za editovanje elemenata. Svako input polje ima bind-ovanu funkciju koja se poziva
 * kada se vrednost polja izmeni `handleInput`. U toj funkciji se uzima vrednost `name` atributa
 * i na osnovu njega azurira postojeci objekat koristeci ... operator. Pri prvom renderovanju
 * komponente(prvi useEffect) iz url parametara uzimamo potencijalni id objekta koji menjamo.
 * ako objekat sa tim id-om nije nadnjen podrazumevamo da je u pitanju kreiranje novog objekta.
 * `handleSubmit` funkcija proverava prvo da li postojeci objekat ima `id` od cega zavisi da
 * li ce se pozvati update ili save funkcija.
 */
function CarsPage() {
	const {id} = useParams();
	const history = useHistory();
	const [car, setCar] = useState({});

	useEffect(() => {
		service.getById(id)
			.then(setCar)
			.catch(() => {
				if (id !== "new"){
					history.replace("/cars/new");
				}
				setCar({})
			});
	}, []);

	useEffect(() => {
		M.updateTextFields();
	}, [car]);

	const handleInput = ({currentTarget: input}) => {
		setCar({...car, [input.name]: input.value});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (car.id) {
			service.update(car)
				.then(_car => {
					setCar(_car);
					alert("Updated");
				});
		} else {
			service.save(car)
				.then(_car => {
					setCar(_car);
					alert("Saved");
					history.replace("/cars");
				});
		}
	};

	const handleDelete = () => {
		service.deleteById(car.id)
			.then(()=> history.replace("/cars"));
	}

	return <div className="container">
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="input-field col s12">
					<img style={{height: 200}} src={car.image}/>
					<input value={car.image}
					       onChange={handleInput}
					       name="image"
					       placeholder="image"
					       id="image"
					       type="text"/>
					<label htmlFor="image">Image</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={car.make}
					       onChange={handleInput}
					       name="make"
					       placeholder="Eg. Ford"
					       id="make"
					       type="text"/>
					<label htmlFor="make">Make</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={car.model}
					       onChange={handleInput}
					       name="model"
					       placeholder="Eg. Focus"
					       id="model"
					       type="text"/>
					<label htmlFor="model">Model</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={car.price}
					       onChange={handleInput}
					       name="price"
					       placeholder="Price"
					       id="price"
					       type="text"/>
					<label htmlFor="price">Price/day</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={car.seats}
					       onChange={handleInput}
					       name="seats"
					       placeholder="Eg. 4"
					       id="seats"
					       type="text"/>
					<label htmlFor="seats">Seats</label>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<button className="btn">Save</button>
					<br/>
					<button className="btn red" type="button" onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</form>
	</div>;
}

export default CarsPage;
