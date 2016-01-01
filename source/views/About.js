enyo.kind({
    name: "enyoToys.About",
    kind: "FittableRows",
    fit: true,
    components:[
	// Fall-back content if we're not on webOS
	{name: "identity", kind: "onyx.Toolbar", content: "Enyo Toys in the browser"},
	{name: "copyright", content: "\251 Copyright 2016 Ian Miller"}
    ],
    create: function() {
	this.inherited(arguments);
	if (window.PalmSystem) {
	    this.$.identity.setContent(webos.fetchAppInfo().title + " " + webos.fetchAppInfo().version);
	    this.$.copyright.setContent("\251 Copyright 2016 " + webos.fetchAppInfo().vendor);
	}
    }
});
