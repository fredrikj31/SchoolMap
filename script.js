$(function () {
	$("#map").vectorMap({
		map: "secondFloor",
		series: {
			regions: [
				{
					scale: ["#C8EEFF", "#0071A4"],
					normalizeFunction: "polynomial",
				},
			],
		},
		onRegionTipShow: function (e, el) {
			el.html(el.html());
		},
	});
});
