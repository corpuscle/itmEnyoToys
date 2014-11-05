enyo.kind({
    name: "equivalents.SchoolYears",
    kind: "FittableRows",
    fit: true,
    components:[
	{kind: "onyx.Toolbar", content: "School Years"},
	{kind: "enyo.Scroller", fit: true, components: [
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "School Year"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "year", kind: "onyx.Input", value: 1, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyDigits", onchange: "yearChanged"}
		]},
	    ]},
	    {content: "is equivalent to"},
	    {kind: "onyx.Groupbox", components: [
		{kind: "onyx.GroupboxHeader", content: "Age at Start of Year"},
		{kind: "onyx.InputDecorator", components: [
		    {name: "age", kind: "onyx.Input", value: 5, type: "number", selectOnFocus: true, placeholder: "Number", onkeypress: "acceptOnlyDigits", onchange: "ageChanged"}
		]},
	    ]}
	]}
    ],
    acceptOnlyDigits: function(inSender, inEvent) {
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
	    break;
	default:
	    inEvent.returnValue = false;
	}
    },
    yearChanged: function(inSender, inEvent) {
	var y = inSender.getValue();
	if (y) {
	    var a = +y + 4;
	    this.$.age.setValue(a);
	}
    },
    ageChanged: function(inSender, inEvent) {
	var a = inSender.getValue();
	if (a) {
	    var y = +a - 4;
	    this.$.year.setValue(y);
	}
    }
});
