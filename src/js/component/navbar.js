import React, {useContext} from "react";
import StarWars from "../../img/star-wars.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store,actions} = useContext(Context)

	const names = store.favorites;

	return (
		<nav className="navbar navbar-light bg-light me-3">
			<Link to="/">
			<img width="100" src={StarWars} />
			</Link>

			<div className="dropdown mx-5">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites {store.favorites.length}
        </button>
        <ul className="dropdown-menu">
          {names
            ? names.map((name) => (
                <li key={name} className="dropdown-item">
                  {name}
                  <a id="remove" onClick={() => actions.removeFavorite(name)}>
				  <i className="fas fa-trash me-3 pt-2"></i>
                  </a>
                </li>
              ))
            : null}
        </ul>
      </div>
			
	  <Link to="/demo">
					<button className="btn btn-primary">Home</button>
				</Link>
	  </nav>
			
				
			
		
	);
};



{/* <div className="ml-auto">
			<div className="dropdown border border-white rounded">
			<button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
   			 Favorites <span className="badge bg-warning">{store.favorites.length}</span>
  			</button> 
  			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{(store.favorites && store.favorites.length > 0 && store.favorites.map((item)=>(
					<li key ={item.uid} className="d-flex"><a className="dropdown-item px-0">{item.name}</a> <i className="fas fa-trash me-3 pt-2" onClick={()=>actions.deleteFavorites(item.uid)}></i></li>
				)))}
				
  			</ul>
			</div> */}