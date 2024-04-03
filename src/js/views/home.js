import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SingleCard } from "./singleCard";

export const Home = () => { 
	const { store, actions } = useContext(Context);
	useEffect (() => {
		actions.getPeople()
		console.log()

	},[]);


	return (
		<div className="container">
			<h1 className="text-danger my-title">Characters</h1>
			<div className="my-carousel d-flex overflow-x-scroll">
				{store.people?.map((item, index) => {
					return (
						<div className="card" style={{"width": "18rem"}} key={index}>
							<img /* src={} */ className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<Link to="/singleCard">
									<button className="btn btn-primary">Learn More!</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
