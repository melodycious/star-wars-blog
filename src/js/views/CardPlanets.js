import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = () => {

	const { store, actions } = useContext(Context);

  const {id} = useParams ();

	useEffect (() => {
		actions.getSinglePlanet(id)
		console.log(id)

	},[]);

	return (
		
				<div className="container-fluid">
						<div className="container text-center">
							<div className="row align-items-start">
								<div className="col">
									<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
									     className="card-img-top" 
										 style={{ maxWidth: "400px" }}
										 alt="..." />
								</div>
								<div className="col">
									<h1 className="card-title">{store.planet.name}</h1>
									<hr className="hr" />
						<div className="row justify-content-center">
									<div className="col-12">
									<b>Name: </b>{store.planet.name}
									</div>
									<div className="col-12">
									<b>Diameter: </b>{store.planet.diameter}
									</div>
									<div className="col-12">
									<b>Climate: </b>{store.planet.climate}
									</div>
									<div className="col-12">
									<b>Terrain: </b>{store.planet.terrain}
									</div>
									<div className="col-12">
									<b>Orbital Period: </b>{store.planet.orbital_period}
									</div>
									<div className="col-12">
									<b>Rotation Period: </b>{store.planet.rotation_period}
									</div>
									<hr className="hr" />
									
									<Link to="/">
										<button className="btn btn-dark">Back home</button>
									</Link>
  						</div>
								</div>
								
							</div>
							
				
				</div> 
				</div>
					

            );

            
          };



		  