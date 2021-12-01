var data = {"C2.07": 10, "C2.03": 20,};
var occupied = "#dc3545";
var free = "#198754";

$(function () {
	$("#map").vectorMap({
		map: "secondFloor",
		series: {
			regions: [
				{
					values: {
						"C2.12": "FREE",
						"C2.03": "OCCUPIED",
					},
					scale: {
						"FREE": free,
						"OCCUPIED": occupied,
					},
				},
			],
		},
		labels: {
			regions: {
				render: function (code) {
					console.log(code);
					return data[code];
				},
			},
		},
		onRegionTipShow: function (e, el) {
			el.html(el.html());
		},
	});
});
