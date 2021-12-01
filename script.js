$(function () {
	$("#map").vectorMap({
		map: "secondFloor",
		series: {
			regions: [
				{
					values: {
						"C2.12": "SPORTS & OUTDOOR",
					},
					scale: {
						FASHION: "#2761ad",
						"LINGERIE & UNDERWEAR": "#d58aa3",
						"BEAUTY & SPA": "#ee549f",
						"URBAN FAVORITES": "#15bbba",
						"SPORTS & OUTDOOR": "#8864ab",
						"KIDS STUFF": "#ef4e36",
						ENTERTAINMENT: "#e47325",
						"HOME DECOR": "#a2614f",
						LIFESTYLE: "#8a8934",
						DINING: "#73bb43",
						"REST ROOMS": "#6c260f",
						SERVICES: "#504d7c",
						OTHER: "#c7b789",
					},
				},
			],
		},
		labels: {
			regions: {
				render: function (code) {
					return regions[code] && jvm.Map.maps[map].paths[code].name;
				},
			},
		},
		onRegionTipShow: function (e, el) {
			el.html(el.html());
		},
	});
});
