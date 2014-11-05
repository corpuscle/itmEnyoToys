enyo.kind({
    name: "equivalents.About",
    kind: "FittableRows",
    fit: true,
    components:[
//	{kind: "onyx.Toolbar", content: enyo.fetchAppInfo().title + " " + enyo.fetchAppInfo().version},
//	{content: "\251 Copyright 2011 " + enyo.fetchAppInfo().vendor}
	{kind: "onyx.Toolbar", content: "Equivalents"},
	{content: "\251 Copyright 2014 Ian Miller"}
    ]
});
