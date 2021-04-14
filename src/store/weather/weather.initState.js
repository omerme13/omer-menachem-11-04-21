export const weatherInitialState = {
	location: {
		city: "Tel Aviv",
		country: "Israel",
		key: "215854", // Tel Aviv,
	},
	today: {
		tempC: "",
		tempF: "",
		weatherIcon: "",
		weatherText: "",
	},
	dailyForecasts: [],
	favorites: {
		'215854': {
			city: "Tel Aviv",
			country: "Israel",
			key: "215854",
			tempC: "22",
			tempF: "",
			weatherText: "Cloudy",
		}
	},
	citiesFoundBySearch: [
		{
			Version: 1,
			Key: "215854",
			Type: "City",
			Rank: 31,
			LocalizedName: "Tel Aviv",
			Country: {
				ID: "IL",
				LocalizedName: "Israel",
			},
			AdministrativeArea: {
				ID: "TA",
				LocalizedName: "Tel Aviv",
			},
		}
	],
};
