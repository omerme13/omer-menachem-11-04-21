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
		},
		{
			Version: 1,
			Key: "3431644",
			Type: "City",
			Rank: 45,
			LocalizedName: "Telanaipura",
			Country: {
				ID: "ID",
				LocalizedName: "Indonesia",
			},
			AdministrativeArea: {
				ID: "JA",
				LocalizedName: "Jambi",
			},
		},
		{
			Version: 1,
			Key: "300558",
			Type: "City",
			Rank: 45,
			LocalizedName: "Telok Blangah New Town",
			Country: {
				ID: "SG",
				LocalizedName: "Singapore",
			},
			AdministrativeArea: {
				ID: "05",
				LocalizedName: "South West",
			},
		},
		{
			Version: 1,
			Key: "325876",
			Type: "City",
			Rank: 51,
			LocalizedName: "Telford",
			Country: {
				ID: "GB",
				LocalizedName: "United Kingdom",
			},
			AdministrativeArea: {
				ID: "TFW",
				LocalizedName: "Telford and Wrekin",
			},
		},
		{
			Version: 1,
			Key: "169072",
			Type: "City",
			Rank: 51,
			LocalizedName: "Telavi",
			Country: {
				ID: "GE",
				LocalizedName: "Georgia",
			},
			AdministrativeArea: {
				ID: "KA",
				LocalizedName: "Kakheti",
			},
		},
		{
			Version: 1,
			Key: "230611",
			Type: "City",
			Rank: 51,
			LocalizedName: "Telsiai",
			Country: {
				ID: "LT",
				LocalizedName: "Lithuania",
			},
			AdministrativeArea: {
				ID: "TE",
				LocalizedName: "Telšiai",
			},
		},
		{
			Version: 1,
			Key: "2723742",
			Type: "City",
			Rank: 55,
			LocalizedName: "Telégrafo",
			Country: {
				ID: "BR",
				LocalizedName: "Brazil",
			},
			AdministrativeArea: {
				ID: "PA",
				LocalizedName: "Pará",
			},
		},
	],
};
