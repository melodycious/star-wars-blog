import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SingleCard } from "./singleCard";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [randomOrderPeople, setRandomOrderPeople] = useState([]);
	const [randomOrderPlanets, setRandomOrderPlanets] = useState([]);

    useEffect(() => {
        actions.getPeople();
		actions.getPlanets();
    }, []);

    useEffect(() => {
        if (store.people) {
            // Copiar el array original y luego ordenarlo aleatoriamente
            const copyPeople = [...store.people];
            copyPeople.sort(() => Math.random() - 0.5);
            setRandomOrderPeople(copyPeople);
        }
    }, [store.people]);

	useEffect(() => {
        if (store.planets) {
            // Copiar el array original y luego ordenarlo aleatoriamente
            const copyPlanets = [...store.planets];
            copyPlanets.sort(() => Math.random() - 0.5);
            setRandomOrderPlanets(copyPlanets);
        }
    }, [store.planets]);

    return (
        <div className="container">

            <h1 className="text-danger my-title">Characters</h1>
            <div className="overflow-x-auto" style={{ maxWidth: "100%", overflowX: "scroll" }}>
                <div className="d-flex">
                    {randomOrderPeople.map((item, index) => {
                        return (
                            <div
                                className="card me-3 border border-dark rounded"
                                style={{ minWidth: "225px", flex: "0 0 auto" }}
                                key={index}
                            >
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                                    className="card-img-top"
                                    style={{ width: '14rem' }}
                                    alt="..."
								
                                />
                                <div className="card-body">
                                    <h5 className="mb-2 text-lg font-bold">{item.name}</h5>
                                    <div className="flex flex-row pt-2">
                                        <Link to={`/singleCard/${item.uid}`}>
                                            <button className="btn btn-dark">
                                                Learn More!
                                            </button>
                                        </Link>
                                        <a href="#" className="btn cursor-pointer">
                                            <i
                                                className="fas fa-heart"
                                                onClick={() => actions.favoriteCheck(item.name)}
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

			<h1 className="text-danger my-title">Planets</h1>
            <div className="overflow-x-auto" style={{ maxWidth: "100%", overflowX: "scroll" }}>
                <div className="d-flex">
                    {randomOrderPlanets.map((item, index) => {
                        return (
                            <div
                                className="card me-3 border border-dark rounded"
                                style={{ minWidth: "225px", flex: "0 0 auto" }}
                                key={index}
                            >
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                                    className="card-img-top"
                                    style={{ width: '14rem' }}
                                    alt="..."
								
                                />
                                <div className="card-body">
                                    <h5 className="mb-2 text-lg font-bold">{item.name}</h5>
                                    <div className="flex flex-row pt-2">
                                        <Link to={`/CardPlanets/${item.uid}`}>
                                            <button className="btn btn-dark">
                                                Learn More!
                                            </button>
                                        </Link>
                                        <a href="#" className="btn cursor-pointer">
                                            <i
                                                className="fas fa-heart"
                                                onClick={() => actions.favoriteCheck(item.name)}
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


        </div>
    );
};
