const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:{},
			planets:{},
			
		},
		actions: {

			getPeople: () => {

				fetch('https://www.swapi.tech/api/people/1/')
				.then(response => response.json())
				.then(data => {
					setStore({people: data.result.properties})
					console.log(data.result.properties)
				})
				.catch(error => console.log('Error: ', error));


			},

			
		}
	};
};

export default getState;
