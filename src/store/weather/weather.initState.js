export const weatherInitialState = {
	location: {
		city: "Tel Aviv",
		country: "Israel",
		key: "215854", // Tel Aviv,
	},
	today: {
		tempC: "22",
		tempF: "72",
		weatherIcon: "",
		weatherText: "Cloudy",
	},
	dailyForecasts: [],
	favorites: {
		'215854': {
			city: "Tel Aviv",
			country: "Israel",
			key: "215854",
			tempC: "22",
			tempF: "72",
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
