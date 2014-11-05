enyo.kind({
    name: "equivalents.Altitude",
    kind: "FittableRows",
    fit: true,
    components:[
	{kind: "onyx.Toolbar", content: "Altitude"},
	{kind: "enyo.Scroller", fit: true, components: [
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Feet"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "feet", kind: "onyx.Input", value: 0, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "feetChanged"}
		]},
	    ]},
	    {content: "is equivalent to"},
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Metres"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "metres", kind: "onyx.Input", value: 0, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "metresChanged"}
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
    feetChanged: function(inSender, inEvent) {
	var f = inSender.getValue();
	if (f) {
	    var m = f * 0.3048; // 12 * 0.0254
	    this.$.metres.setValue(m);
	}
    },
    metresChanged: function(inSender, inEvent) {
	var m = inSender.getValue();
	if (m) {
	    var f = m / 0.3048;
	    this.$.feet.setValue(f);
	}
    }
});
