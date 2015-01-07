enyo.kind({
    name: "equivalents.MainView",
    kind: "FittableRows",
    components:[
	{kind: "Panels", fit: true, components: [
	     {name: "degreesAndMinutesView", kind: "equivalents.DecimalsAndMinutes"},
	     {name: "paceAndSpeedView", kind: "equivalents.PaceAndSpeed"},
	     {name: "altitude", kind: "equivalents.Altitude"},
	     {name: "schoolYears", kind: "equivalents.SchoolYears"},
	     {name: "aboutBox", kind: "equivalents.About"}
	]},
	{
	    kind: "enyo.AppMenu",
            style: "overflow: hidden;",
	    components: [
//		{ kind: "enyo.AppMenuItem", content: "Help", ontap: "" }
		{ content: "Help", ontap: "doNowt" }
	    ]
	}
    ],
    doNowt: function () {
    }
});
