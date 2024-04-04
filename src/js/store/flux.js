const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			person: {},
			
			
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

			
		}
	};
};

export default getState;
