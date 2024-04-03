import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCard = (props) => {

  const { store, actions } = useContext(Context);

	useEffect (() => {
		actions.getSinglePeople(1)
		console.log()

	},[]);

	return (

						<div className="card">
							
									<div className="card-body" style={{"width": "18rem"}} >
										<img /* src={} */ className="card-img-top" alt="..." />
									 <h5 className="card-title">{store.person.name}</h5>
										{/* <p className="card-text">{item.gender} </p>
										<p className="card-text">{item.hair_color}</p>
										<p className="card-text">{item.eye_color}</p>
										<p className="card-text">{item.height}</p>
										<p className="card-text">{item.skin_color}</p>  */}
									</div>
								
						</div>
					

            );

            
          };



							{/* <div className="card" style={{"width": "18rem"}}>
									<img src="..." className="card-img-top" alt="..." />
									<div className="card-body">
										
										<h5 className="card-title">{props.name}</h5>
										<p className="card-text">{props.gender} </p>
										<p className="card-text">{props.hair_color}</p>
										<p className="card-text">{props.eye_color}</p>
										<p className="card-text">{props.height}</p>
										<p className="card-text">{props.skin_color}</p>
										
									</div>
							</div> */}