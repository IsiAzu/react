/**
 * Created by Isi on 9/24/14.
 */
var images = [];

for (var i = 63; i > 0; i--){
    images.push("howtotie/htt-" + (i) + ".jpg");

};

$(document).ready(function() {

    //define images

    //this object will be used to cycle through the image array
    var object = {shoeImg:0};

    // create tween
    var tween = TweenMax.to(object,.5,
        {
            shoeImg: images.length - 1,  // animate property shoeImg to number of images in array
            roundProps: "shoeImg",       // only output integers so it can be aligned to array
            immediateRender: true,       // automatically load the first image
            ease: Linear.easeNone,       // show every image the same amount of time

            onUpdate: function(flipThrough(imgItemNumber){
//                $("#myimg").attr("src", images[object.shoeImg]); // set the image source
//                console.log(images[object.shoeImg]);
//                $(#pin:nth-child(images[object.shoeImg])).hasClass("show");
            }
        }
     );

    // initialize your controller
    var controller = new ScrollMagic();
//    var imgHeight = $("#myimg").height();
    var imgHeight = $("#pin").height();
    // build scene
    var scene = new ScrollScene({
        triggerElement: "#pin", duration: imgHeight, offset: 500})
        .setTween(tween)
        .setPin("#pin")

        .on("progress", function(o){
            var i=Math.round(o.progress.toFixed(3)*d);
            flipThrough(i);
        })

        .on("leave", function(o){

        })

        .addTo(controller);

    scene.addIndicators();


    function flipThrough(imgItemNumber){
        // hide all images
        $("#intro .col img").hide(),

            // show only imgItemNumber in image array
            $("#intro .col img").eq(imgItemNumber).show()
    }


    function imgResize(){
        var o = $(window).height()-l,
            i = $(window).width(),
            w_h_Result = i/o;

        // check window size, if size is greater than baseSize,
        // baseSize = baseSize;
        if (o >= baseHeight && i >= baseWidth) {
            $("#intro img").height(baseHeight),
                $("#intro img").width(baseWidth)
        }
        // else if baseWidth/baseHeight is greater than baseWidth/baseHeight
        // adjust window size to new calc

        else {
            if (w_h_Result > baseSize) {
                $("#intro img").height(o),
                    $("#intro img").width(o * baseSize)
            } else {
                $("#intro img").height($(window).width() / baseSize),
                    $("#intro img").width($(window).width())
            }
        }
    }

function selector(index){
    $("#intro .box img").hide(),
        $("#intro .box img").eq(index).show
}
    // window resize function


})
