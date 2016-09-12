Highcharts.createElement('link', {
	href: '"https://fonts.googleapis.com/css?family=Droid+Serif"',
	rel: 'stylesheet',
	type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
	colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: null,
		style: {
			fontFamily: "Droid, serif",
		}
	},
	title: {
		style: {
			fontSize: '16px',
			fontWeight: 'bold',
			textTransform: 'uppercase'
		}
	},
	legend: {
		itemStyle: {
			fontSize: '13px'
		}
	},

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
