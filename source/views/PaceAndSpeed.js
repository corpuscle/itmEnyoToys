enyo.kind({
    name: "equivalents.PaceAndSpeed",
    kind: "FittableRows",
    fit: true,
    components:[
	{kind: "onyx.Toolbar", content: "Pace and Speed"},
	{kind: "enyo.Scroller", fit: true, components: [
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Pace (minutes per mile)"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "pace", kind: "onyx.Input", value: 3, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "paceChanged"}
		]},
	    ]},
	    {content: "is equivalent to"},
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Speed (miles per hour)"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "mph", kind: "onyx.Input", value: 20, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "mphChanged"}
		]},
	    ]},
	    {content: "is equivalent to"},
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Speed (km per s)"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "kps", kind: "onyx.Input", value: 0.0089408, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "kpsChanged"}
		]},
	    ]}
	]}
    ],
    acceptOnlyNumbers: function(inSender, inEvent) {
	switch (inEvent.keyCode) {
	case 48: // 0
	case 49:
	case 50:
	case 51:
	case 52:
	case 53:
	case 54:
	case 55:
	case 56:
	case 57: // 9
	case 46: // .
	    break;
	default:
	    inEvent.returnValue = false;
	}
    },
    paceChanged: function(inSender, inEvent) {
	var p = inSender.getValue();
	if (p) {
	    var mph = 60 / p;
	    var kps = mph * (2.54 * 12 * 3 * 1760) / (60 * 60 * 1000 * 100);
	    this.$.mph.setValue(mph);
	    this.$.kps.setValue(kps);
	}
    },
    mphChanged: function(inSender, inEvent) {
	var mph = inSender.getValue();
	if (mph) {
	    var p = 60 / mph;
	    var kps = mph * (2.54 * 12 * 3 * 1760) / (60 * 60 * 1000 * 100);
	    this.$.pace.setValue(p);
	    this.$.kps.setValue(kps);
	}
    },
    kpsChanged: function(inSender, inEvent) {
	var kps = inSender.getValue();
	if (kps) {
	    var mph = kps * (60 * 60 * 1000 * 100) / (2.54 * 12 * 3 * 1760);
	    var p = 60 / mph;
	    this.$.pace.setValue(p);
	    this.$.mph.setValue(mph);
	}
    }
});
