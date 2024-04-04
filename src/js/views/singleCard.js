import React, {useContext, useEffect} from "react";
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
									<img src="..." className="card-img-top" alt="..." />
								</div>
								<div className="col">
									<h1 className="card-title">{store.person.name}</h1>
									<p>
									Dolor enim nisi adipisicing minim laboris minim sint cupidatat sunt occaecat. Nisi consectetur sunt ipsum adipisicing ad in commodo quis dolore. Do proident pariatur reprehenderit magna reprehenderit occaecat cupidatat ut qui. In ullamco consequat Lorem adipisicing sunt officia fugiat dolor enim aliqua anim occaecat.
									</p>
								</div>
							</div>
							<hr className="hr" />
						<div className="row justify-content-center">
									<div className="col-2">
									{store.person.name}
									</div>
									<div className="col-2">
									{store.person.birth_year}
									</div>
									<div className="col-2">
									{store.person.gender}
									</div>
									<div className="col-2">
									{store.person.height}
									</div>
									<div className="col-2">
									{store.person.skin_color}
									</div>
									<div className="col-2">
									{store.person.eye_color}
									</div>
  						</div>
				
				</div> 
				</div>
					

            );

            
          };

