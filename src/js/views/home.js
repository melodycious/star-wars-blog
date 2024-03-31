import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	<div className="container">
			<div class="card" style={{"width": "18rem"}}>
					<img src="..." class="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Luke Skywalker</h5>
						<p className="card-text">Gender: </p>
						<p className="card-text">Hair-Color: </p>
						<p className="card-text">Eye-Color: </p>
						<a href="#" className="btn btn-primary">Learn More!</a>
					</div>
</div>
	</div>
	</>
);
