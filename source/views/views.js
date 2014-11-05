enyo.kind({
    name: "equivalents.MainView",
    kind: "Panels",
    fit: true,
    components:[
	{name: "degreesAndMinutesView", kind: "equivalents.DecimalsAndMinutes"},
	{name: "paceAndSpeedView", kind: "equivalents.PaceAndSpeed"},
	{name: "aboutBox", kind: "equivalents.About"}
    ]
});
