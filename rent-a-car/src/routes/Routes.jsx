import {Route, Switch} from "react-router";
import CarsEditPage from "../pages/CarsEditPage";
import CarsPage from "../pages/CarsPage";
import RentPage from "../pages/RentPage";

/**
 * Objasnjenje:
 * U sustini komponenta koja na osnovu url-a u browseru prikazuje ili ne prikazuje komponente.
 * Pravila za prikazivanje su prosta: po default-u matchuje pocetak pathname-a url-a iz browsera
 * sa specificiranim `path` prop-om komponente `Route` ili samo ako je tacno takav url u slucaju da smo dodali
 * prop `exact`.
 * Ako je zadovoljen uslov prikazace se sve nested(children) komponente odgovarajuce `Route` komponente.
 */
function Routes() {
	return (
		<Switch>
			<Route path="/cars/:id">
				<CarsEditPage/>
			</Route>
			<Route exact path="/rent">
				<RentPage/>
			</Route>
			<Route exact path="/cars">
				<CarsPage/>
			</Route>
			<Route>
				<CarsPage/>
			</Route>
		</Switch>
	);
};

export default Routes;
