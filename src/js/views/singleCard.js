import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCard = () => {

	const { store, actions } = useContext(Context);

  const {id} = useParams ();

	useEffect (() => {
		actions.getSinglePeople(id)
		console.log(id)

	},[]);

	return (
		
				<div className="container-fluid">
						<div className="container text-center">
							<div className="row align-items-start">
								<div className="col">
									<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
									     className="card-img-top" 
										 style={{ maxWidth: "400px" }}
										 alt="..." />
								</div>
								<div className="col">
									<h1 className="card-title">{store.person.name}</h1>
									<hr className="hr" />
						<div className="row justify-content-center">
									<div className="col-12">
									<b>Name: </b>{store.person.name}
									</div>
									<div className="col-12">
									<b>Birth Year: </b>{store.person.birth_year}
									</div>
									<div className="col-12">
									<b>Gender: </b>{store.person.gender}
									</div>
									<div className="col-12">
									<b>Height: </b>{store.person.height}
									</div>
									<div className="col-12">
									<b>Skin color: </b>{store.person.skin_color}
									</div>
									<div className="col-12">
									<b>Eye color: </b>{store.person.eye_color}
									</div>
									<hr className="hr" />
									<div className="col-12">
									<b>Homeworld: </b>{store.person.homeworld}
									</div>
  						</div>
								</div>
								
							</div>
							
				
				</div> 
				</div>
					

            );

            
          };

