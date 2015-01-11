enyo.kind({
    name: "equivalents.MainView",
    kind: "Panels",
    arrangerKind: "CollapsingArranger",
    components:[
	{kind: "enyo.AppMenu", style: "overflow: hidden;", components: [
	    { kind: "enyo.AppMenuItem", content: "Help", ontap: "doNowt" }
	]},
	{kind: "Panels", fit: true, components: [
	     {name: "degreesAndMinutesView", kind: "equivalents.DecimalsAndMinutes"},
	     {name: "paceAndSpeedView", kind: "equivalents.PaceAndSpeed"},
	     {name: "altitude", kind: "equivalents.Altitude"},
	     {name: "schoolYears", kind: "equivalents.SchoolYears"},
	     {name: "aboutBox", kind: "equivalents.About"}
	]}
    ],
    doNowt: function () {
    }
});
