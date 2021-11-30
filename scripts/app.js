


let ChangeBtnColor = document.getElementById('changeColor');

    let btnClicked = true;
    ChangeBtnColor.addEventListener('click',function(e){

    if(btnClicked)
    {
        ChangeBtnColor.classList.add("btn", "btn-success");
    }
    else
    {
        ChangeBtnColor.classList.remove("btn", "btn-success");
        ChangeBtnColor.classList.add("btn", "btn-primary");
    }
    btnClicked = !btnClicked;
});


let ChangeBtnText = document.getElementById('changeText');

   
    ChangeBtnText.addEventListener('click',function(e){

    if(btnClicked)
    {
        ChangeBtnText.classList.add("btn","btn-info","ChangeTxtColor");
        ChangeBtnText.textContent = "Hi There!";
    }
    else
    {
        ChangeBtnText.classList.remove("btn","btn-info","ChangeTxtColor");
        ChangeBtnText.classList.add("btn","btn-info");
        ChangeBtnText.textContent = "Change Button Text";
    }
    btnClicked = !btnClicked;
});


let ChangeTitleText = document.getElementById('changeTitle');
let title = document.getElementById('title');
    ChangeTitleText.addEventListener('click',function(e){

    if(btnClicked)
    {
     
        title.textContent = "The Title is Changed";
       
    }
    else
    {
        title.textContent = "Manipulating The DOM";
    }
    btnClicked = !btnClicked;
});


let PulseBtn = document.getElementById('pulseBtn');

   
PulseBtn.addEventListener('click',function(e){

    if(btnClicked)
    {
        PulseBtn.classList.add('pulse',"btn","btn-danger");
       
    }
    else
    {
        PulseBtn.classList.remove('pulse',"btn","btn-danger");
        PulseBtn.classList.add("btn","btn-info");
    }
    btnClicked = !btnClicked;
});


let SpinBtn = document.getElementById('spinBtn');

   
SpinBtn.addEventListener('click',function(e){

    if(btnClicked)
    {
        SpinBtn.classList.add('barrelRoll');
       
    }
    else
    {
        SpinBtn.classList.remove('barrelRoll');
       
    }
    btnClicked = !btnClicked;
});


let RotateBtn = document.getElementById('rotateBtn');

RotateBtn.addEventListener('click',function(e){

    if(btnClicked)
    {
        RotateBtn.classList.add('rotateInRight');
       
    }
    else
    {
        RotateBtn.classList.remove('rotateInRight');
       
    }
    btnClicked = !btnClicked;
});


let changePageColorBtn = document.getElementById('changePageColor');
let pageColor = document.getElementById('PageColor');

changePageColorBtn.addEventListener('click',function(e){

    if(btnClicked)
    {
        pageColor.classList.add("ChangePageColor");
       
    }
    else
    {
        pageColor.classList.remove("ChangePageColor");
       
    }
    btnClicked = !btnClicked;
});



let showImageBtn = document.getElementById('imageBtn');
let revealImage = document.getElementById('revealImage');
showImageBtn.addEventListener('click',function(e){

    if(btnClicked)
    {
        revealImage.classList.add('ImageBtn');
       
    }
    else
    {
        revealImage.classList.remove('ImageBtn');
       
    }
    btnClicked = !btnClicked;
});


let videoPlay = document.getElementById('video');
let showVideo = document.getElementById('showVideo');
videoPlay.addEventListener('click',function(e){

    if(btnClicked)
    {
        showVideo.innerHTML="<iframe width= \"560\" height=\"315\" src=\"https://www.youtube.com/embed/P3vvJq8QeZ8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
        showVideo.classList.add('rotateIn');
    }
    else
    {
        showVideo.innerHTML = "";
        showVideo.classList.remove('rotateIn');
    }
    btnClicked = !btnClicked;
});


let PlaySound = document.getElementById('PlaySound');

PlaySound .addEventListener('click',function(e){

    if(btnClicked)
    {
        PlaySound.innerHTML = "<audio controls> <source src='./music/scary-movie-wazzup (1).mp3' type='audio/mpeg'> </audio>";
    }
    else
    {
        PlaySound.innerHTML = "<button id = 'PlaySound'type='button' class='btn btn-dark'>Play a Sound Button</button>";
    }
    btnClicked = !btnClicked;
});


