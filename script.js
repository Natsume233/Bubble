
window.onload=function () {
    var go = document.getElementById("go"),
        box = document.getElementById("box");
    eventUtil.addHandler(box,"click",function () {
        alert("i am a box");
    });
    eventUtil.addHandler(go,"click",function (e) {
        e=eventUtil.getEvent(e);
        alert(eventUtil.getElement(e));
        eventUtil.preventDefault(e);
        eventUtil.stopPropagation(e);
    });

}