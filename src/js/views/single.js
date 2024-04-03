import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FullCard = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid">
				<div className="container text-center">
					<div className="row align-items-start">
						<div className="col">
						<img src="..." className="card-img-top" alt="..." />
						</div>
						<div className="col">
						<h1 className="card-title">{props.name}</h1>
						<p>
							Dolor enim nisi adipisicing minim laboris minim sint cupidatat sunt occaecat. Nisi consectetur sunt ipsum adipisicing ad in commodo quis dolore. Do proident pariatur reprehenderit magna reprehenderit occaecat cupidatat ut qui. In ullamco consequat Lorem adipisicing sunt officia fugiat dolor enim aliqua anim occaecat.
						</p>
					</div>
				</div>
				<hr className="hr" />
				<div className="row justify-content-center">
						<div className="col-2">
						{props.name}
						</div>
						<div className="col-2">
						{props.birth_year}
						</div>
						<div className="col-2">
						{props.gender}
						</div>
						<div className="col-2">
						{props.height}
						</div>
						<div className="col-2">
						{props.skin_color}
						</div>
						<div className="col-2">
						{props.eye_color}
						</div>
  				</div>
				
		</div>
			{ /* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */ }
		</div>
	);
};

