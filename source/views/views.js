enyo.kind({
    name: "enyoToys.MainView",
    kind: "Panels",
    arrangerKind: "CollapsingArranger",
    components:[
	{kind: "enyo.AppMenu", style: "overflow: hidden;", components: [
	    { kind: "enyo.AppMenuItem", content: "About", ontap: "showAbout" }
	]},
	{name: "content", kind: "Panels", fit: true, components: [
	     {name: "audioView", kind: "enyoToys.AudioView"},
	     {name: "aboutBox", kind: "enyoToys.About"}
	]}
    ],
    showAbout: function () {
	this.$.content.selectPanelByName("aboutBox");
    }
});
