
function openContents(evt, info) {
    var i, tabcontent, tablinks;
        tabcontent = document.getElementById("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementById("tablink");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(info).style.display = "block";
        evt.currentTarget.className += " active";
     }
document.getElementById("defaultOpen").click();
  