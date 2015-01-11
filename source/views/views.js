enyo.kind({
    name: "equivalents.MainView",
    kind: "Panels",
    arrangerKind: "CollapsingArranger",
    components:[
	{kind: "enyo.AppMenu", style: "overflow: hidden;", components: [
	    { kind: "enyo.AppMenuItem", content: "About", ontap: "showAbout" }
	]},
	{name: "content", kind: "Panels", fit: true, components: [
	     {name: "degreesAndMinutesView", kind: "equivalents.DecimalsAndMinutes"},
	     {name: "paceAndSpeedView", kind: "equivalents.PaceAndSpeed"},
	     {name: "altitude", kind: "equivalents.Altitude"},
	     {name: "schoolYears", kind: "equivalents.SchoolYears"},
	     {name: "aboutBox", kind: "equivalents.About"}
	]}
    ],
    showAbout: function () {
	this.$.content.selectPanelByName("aboutBox");
    }
});
