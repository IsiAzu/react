/**
 * Created by Isi on 10/15/14.
 */

var controller = new ScrollMagic({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
});
var pinning = new TimelineMax()
    .add(TweenMax.to("#this", 1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#is",  1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#how", 1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#you", 1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#tie", 1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#slide", 1, {top: "0%", ease: Bounce.easeOut, delay: 0.2}))
    .add(TweenMax.to("#unpin",.5, {top: "100%"}));

new ScrollScene({
    triggerElement: "div#pin",
    duration: 1100
})
    .setTween(pinning)
    .setPin("#pin")
    .addTo(controller);