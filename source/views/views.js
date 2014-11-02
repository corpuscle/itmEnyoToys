/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "equivalents.MainView",
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
			    {name: "speed", kind: "onyx.Input", value: 20, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyNumbers", onchange: "speedChanged"}
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
	    var s = 60.0 / p;
	    this.$.speed.setValue(s);
	}
    },
    speedChanged: function(inSender, inEvent) {
	var s = inSender.getValue();
	if (s) {
	    var p = 60.0 / s;
	    this.$.pace.setValue(p);
	}
    }
});
