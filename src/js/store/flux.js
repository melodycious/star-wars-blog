const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			person: {},
			planets:[],
			planet: {},
			favorites: [],
			
			
		},
		actions: {

			getPeople: () => {

				fetch('https://www.swapi.tech/api/people/')
				.then(response => response.json())
				.then(data => {
					setStore({ people: data.results });
					console.log(data.results)
				})
				.catch(error => console.log('Error: ', error));


			},

			getSinglePeople: (uid) => {

				fetch("https://www.swapi.tech/api/people/"+uid)
				.then(response => response.json())
				.then(data => {
					setStore({ person: data.result.properties });
					console.log(data)
				})
				.catch(error => console.log('Error: ', error));


			},

			getPlanets: () => {

				fetch('https://www.swapi.tech/api/planets/')
				.then(response => response.json())
				.then(data => {
					setStore({ planets: data.results });
					console.log(data.results)
				})
				.catch(error => console.log('Error: ', error));


			},

			getSinglePlanet: (uid) => {

				fetch("https://www.swapi.tech/api/planets/"+uid)
				.then(response => response.json())
				.then(data => {
					setStore({ planet: data.result.properties });
					console.log(data)
				})
				.catch(error => console.log('Error: ', error));


			},

			// boton para añadir a favoritos

			favoriteCheck: (name) => {
				const favorites = getStore().favorites;
				if (favorites.indexOf(name) !== -1) {
				  getActions().removeFavorite(name);
				}
				getActions().addFavorite(name);
			  },
			
			addFavorite: (name) => {
				setStore({ favorites: getStore().favorites.concat(name) });
			  },
			  
			  removeFavorite: (name) => {
				setStore({
					favorites: getStore().favorites.filter((element) => element !== name),
				});
			},
		},
		};
	};

	export default getState;


		
