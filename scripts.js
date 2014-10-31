/**
 * Created by Isi on 10/15/14.
 */
//
//var controller = new ScrollMagic({
//    globalSceneOptions: {
//        triggerHook: "onLeave"
//    }
//});
//var pinning = new TimelineMax()
//    .add(TweenMax.to("#this", 1, {transform: "translateY(0)"}))
//    .add(TweenMax.to("#is",  1, {transform: "translateY(0)"}))
//    .add(TweenMax.to("#how", 1, {transform: "translateY(0)"}))
//    .add(TweenMax.to("#you", 1, {transform: "translateY(0)"}))
//    .add(TweenMax.to("#tie", 1, {transform: "translateY(0)"}))
//    .add(TweenMax.to("#slide", 1, {top: "0%", ease: Bounce.easeOut, delay: 0.2}))
//    .add(TweenMax.to("#unpin",.5, {top: "100%"}));
//
//new ScrollScene({
//    triggerElement: "div#pin",
//    duration: 1100
//})
//    .setTween(pinning)
//    .setPin("#pin")
//    .addTo(controller);

$(document).ready(function($) {
    // define images

    var images = [];
    for (var i = 1; i < 64; i++){
        images.push("howtotie/htt-" + (i) + ".jpg");
    }

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};

    // create tween
    var tween = TweenMax.to(obj, 0.5,
        {
            curImg: images.length - 1,	    // animate property curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 0,							// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same amount of time
            onUpdate: function () {
                $("#shoe_seq").attr("src", images[obj.curImg]); // set the image source
            }
        }
    );

    // init controller
    var controller = new ScrollMagic();

    // build scene
    var scene = new ScrollScene({triggerElement: "#trigger", duration: 400})
        .setTween(tween)
        .addTo(controller)
        .duration(400);



    // show indicators (requires debug extension)
    scene.addIndicators();

});