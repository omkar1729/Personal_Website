function openPdf()
{
var Frame = document.getElementById("pdf");
Frame.style.display="block";
Frame.src = "pdf/Omkar_Muglikar_Resume.pdf";
}

function openPdf2()
{
var Frame = document.getElementById("pdf");
Frame.style.display="block";
Frame.src = "pdf/resume_Omkar_Muglikar.pdf";
}

function open(id,source)
{
var Frame = document.getElementById(id);
Frame.style.display="block";
Frame.src = source;
}




$(window).scroll(function(){
    $(".fade_out").css("opacity", 1 - $(window).scrollTop() / 750);
  });

