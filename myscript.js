function openPdf()
{
var Frame = document.getElementById("pdf");
Frame.style.display="block";
Frame.src = "pdf/OmkarReviewResume.pdf";
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