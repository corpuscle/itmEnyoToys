enyo.kind({
    name: "equivalents.About",
    kind: "FittableRows",
    fit: true,
    components:[
	// Fall-back content if we're not on webOS
	{name: "identity", kind: "onyx.Toolbar", content: "Equivalents in the browser"},
	{name: "copyright", content: "\251 Copyright 2015 Ian Miller"}
    ],
    create: function() {
	this.inherited(arguments);
	if (window.PalmSystem) {
	    this.$.identity.setContent(webOS.fetchAppInfo().title + " " + webOS.fetchAppInfo().version);
	    this.$.copyright.setContent("\251 Copyright 2015 " + webOS.fetchAppInfo().vendor);
	}
    }
});
