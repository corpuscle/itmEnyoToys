enyo.kind({
    name: "enyoToys.AudioView",
    components:[
	{kind: "onyx.Toolbar", content: "Audio"},
	{kind: "Audio", name: "mySound", src: "assets/Flurry.mp3"},
	{kind: "enyo.Button", content: "Play", name: "button", ontap: "playSound"}
    ],
    playSound: function() {
	this.$.mySound.play();
    }
});
