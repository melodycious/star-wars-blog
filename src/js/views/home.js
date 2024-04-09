import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SingleCard } from "./singleCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [randomOrderPeople, setRandomOrderPeople] = useState([]);

	useEffect(() => {
		actions.getPeople();
	}, []);

	useEffect(() => {
		if (store.people) {
			// Copiar el array original y luego ordenarlo aleatoriamente
			const copyPeople = [...store.people];
			copyPeople.sort(() => Math.random() - 0.5);
			setRandomOrderPeople(copyPeople);
		}
	}, [store.people]);

	return (
		<div className="container">
			<h1 className="text-danger my-title">Characters</h1>
			<div className="my-carousel d-flex overflow-x-scroll">
				{randomOrderPeople.map((item, index) => {
					return (
						<div
							className="card col-3 mb-3 me-2"
							style={{ width: "150px" }}
							key={index}
						>
							<img
								src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<div className="d-flex justify-content-between">
									<Link to={`/singleCard/${item.uid}`}>
										<button className="btn btn-primary">
											Learn More!
										</button>
									</Link>
									<a href="#" className="btn btn-outline-primary">
            <i
              className="fas fa-heart text-warning" 
              onClick={() => actions.favoriteCheck(item.name)}
            ></i>
          </a>
									{/* <a className="btn btn-light" onClick={()=>actions.getfavorites({name})}><i className={`fas fa-heart ${nombres.includes(name)? "like":""}`} ></i></a> */}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
