/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to enyo.ready().
*/

enyo.kind({
    name: "equivalents.Application",
    kind: "enyo.Application",
    view: "equivalents.MainView"
});

enyo.ready(function () {
    new equivalents.Application({name: "app"});
});
