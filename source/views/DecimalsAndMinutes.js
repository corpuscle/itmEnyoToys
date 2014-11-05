enyo.kind({
    name: "equivalents.DecimalsAndMinutes",
    kind: "FittableRows",
    fit: true,
    components:[
	{kind: "onyx.Toolbar", content: "Decimals and Minutes"},
	{kind: "enyo.Scroller", fit: true, components: [
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Decimal Degrees (or Hours)"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "decimal", kind: "onyx.Input", value: 1, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "decimalChanged"}
		]},
	    ]},
	    {content: "is equivalent to"},
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Minutes"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "minutes", kind: "onyx.Input", value: 60, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "minutesChanged"}
		]},
	    ]},
	    {content: "is equivalent to"},
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Seconds"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "seconds", kind: "onyx.Input", value: 3600, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "secondsChanged"}
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
    decimalChanged: function(inSender, inEvent) {
	var d = inSender.getValue();
	if (d) {
	    var m = d * 60;
	    var s = d * 3600;

	    this.$.minutes.setValue(m);
	    this.$.seconds.setValue(s);
	}
    },
    minutesChanged: function(inSender, inEvent) {
	var m = inSender.getValue();
	if (m) {
	    var d = m / 60;
	    var s = m * 60;

	    this.$.decimal.setValue(d);
	    this.$.seconds.setValue(s);
	}
    },
    secondsChanged: function(inSender, inEvent) {
	var s = inSender.getValue();
	if (s) {
	    var m = s / 60;
	    var d = s / 3600;

	    this.$.minutes.setValue(m);
	    this.$.decimal.setValue(d);
	}
    }
});
