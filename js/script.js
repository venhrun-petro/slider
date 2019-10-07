
window.onload = function(){
    var newprob = new venhrun({
        clas_prev: '#gallery .buttons .prev',
        clas_next: '#gallery .buttons .next',
        clas_hover: '.photos',
        clas_gallery_photo: '#gallery .photos img',
        dots_class: '.dots',
        timer: -200,
        hover: true,
        auto: false,
        touch: true
    });
    var newprob_2 = new venhrun({
        clas_prev: '.prev-2',
        clas_next: '.next-2',
        clas_hover: '.photos-2',
        clas_gallery_photo: '.photos-2 img',
        dots_class: '.dots-2',
        timer: 3000,
        hover: true,
        auto: true,
        touch: false
    });
}




function venhrun(v) {
    this.btn_prev = document.querySelector(v.clas_prev);
    this.btn_next = document.querySelector(v.clas_next);
    this.slider = document.querySelector(v.clas_hover);
    this.images = document.querySelectorAll(v.clas_gallery_photo);
    this.span = document.querySelectorAll(v.dots_class);
    var thisspan =  this.span
    var newthis = this.images;

    this.nex = mynext;
    var nextthis = this.nex;
    if (v.timer<=0){
        v.timer = 2000;
    }
    this.timer = v.timer|| 2000;
    var timerthis = this.timer;
    this.autoPlay = setInterval( this.nex, this.timer );
    var autthis = this.autoPlay;
    var thisstopstart = this.stopstart;
    var i = 0;
if (!v.auto){
    stop();
}
if (v.hover){
    this.slider.onmouseover = (function(){
        stop();
    });
    this.slider.onmouseout = (function(){
        start();
    });
}
    var stopstart = function () {
        stop();
            start();
    }
    function stop() {
        clearInterval(autthis);
    }
    function start() {
        autthis = setInterval( nextthis, timerthis );
    }
    function mynext() {
        newthis[i].classList.remove('showed');
        thisspan[i].classList.remove('showed-span');
        i++;
        if (i >= newthis.length) {
            i = 0;
        }
        newthis[i].classList.add('showed');
        thisspan[i].classList.add('showed-span');
    }



    function myprev() {
        newthis[i].classList.remove('showed');
        thisspan[i].classList.remove('showed-span');
        i--;
        if(i < 0){
            i = newthis.length - 1;
        }
        newthis[i].classList.add('showed');
        thisspan[i].classList.add('showed-span');
    }


    this.span[i].onclick=function () {
        newthis[i].classList.remove('showed');
        thisspan[i].classList.remove('showed-span');
        newthis[i].classList.add('showed');
        thisspan[i].classList.add('showed-span');
    }
    this.btn_prev.onclick = function(){
        if (!v.auto){
            stop();
        }else{
            stopstart();
        }
        myprev();
    }
    this.btn_next.onclick = function() {
        if (!v.auto){
            stop();
        }else{
            stopstart();
        }
        mynext();
    }
    if (v.touch){
        var box1 = document.getElementById('box1');
        var statusdiv = document.getElementById('statusdiv');
        var startx = 0;
        var dist = 0;
        this.slider.addEventListener('touchmove', function(e){
            var touchobj = e.changedTouches[0];
            var dist = parseInt(touchobj.clientX) - startx;
            if(touchobj.clientX<0){
                if (!v.auto){
                    stop();
                }else{
                    stopstart();
                }
                mynext();
            }else{
                if (!v.auto){
                    stop();
                }else{
                    stopstart();
                }
                myprev();
            }
            e.preventDefault();
        }, false)
    }

/*
for(  var b = 0; b<this.images.length; b++ )
    var div = document.querySelector('.divprob');

    var sp = '<span class="dots"></span>';
            sp = sp + sp;
            div.innerHTML = sp;



    $(function() {
        var main = document.querySelector('.dots');


        main[i].onclick = function(){
            newthis[i].classList.remove('showed');

            newthis[i].classList.add('showed');
        });
    });
*/
}





/*

window.onload = function(){

    var btn_prev = document.querySelector('#gallery .buttons .prev');
    var btn_next = document.querySelector('#gallery .buttons .next');
    var slider = document.querySelector('.photos');

    var images = document.querySelectorAll('#gallery .photos img');
    var i = 0;
    var timer;
    var t = timer|| 2000;
    var nex = mynext;
    var autoPlay = setInterval( mynext, 2000 );



    slider.onmouseover = (function(){
        stop();
    });
    slider.onmouseout = (function(){
        start();
    });





        function stopstart() {
            stop();

                start();

        }
        function stop() {
            clearInterval(autoPlay);
        }
        function start() {
            // var nex = mynext;
                autoPlay = setInterval( mynext, 2000 );
        }

    function mynext() {
        images[i].classList.remove('showed');
        i++;
    
        if (i >= images.length) {
            i = 0;
        }
        images[i].classList.add('showed');
    
}


    btn_prev.onclick = function(){
        stopstart();
        images[i].classList.remove('showed');
        i--;
        if(i < 0){
            i = images.length - 1;
        }
        images[i].classList.add('showed');
    }

    btn_next.onclick = function() {
        stopstart();
        mynext();
    }

}
*/