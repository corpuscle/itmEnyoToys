enyo.kind({
    name: "enyoToys.AudioView",
    components:[
	{kind: "onyx.Toolbar", content: "Audio"},
	{kind: "Audio", name: "myMP3", src: "assets/Flurry.mp3"},
	{kind: "Audio", name: "myWav", src: "assets/notification.wav"},
	{kind: "enyo.Button", content: "MP3", name: "mp3Button", ontap: "playMP3"},
	{kind: "enyo.Button", content: "wav", name: "wavButton", ontap: "playWav"}
    ],
    playMP3: function() {
	this.$.myMP3.play();
    },
    playWav: function() {
	this.$.myWav.play();
    }
});
