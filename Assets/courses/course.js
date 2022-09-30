function display_about() {
    document.getElementById("about_course").style.display = "block";
    document.getElementById("course_content_block").style.display = "none";
    document.getElementById("review_block").style.display = "none";

    document.getElementById("desc_content").style.height="2105px";
    document.getElementById("right_block").style.height="2105px";

    document.getElementById("bottom1").style.display = "block";
    document.getElementById("bottom2").style.display = "none";
    document.getElementById("bottom3").style.display = "none";
}

function display_content() {
    document.getElementById("about_course").style.display = "none";
    document.getElementById("course_content_block").style.display = "block";
    document.getElementById("review_block").style.display = "none";
    document.getElementById("desc_content").style.height="1180px";
    document.getElementById("right_block").style.height="1180px";

    document.getElementById("bottom1").style.display = "none";
    document.getElementById("bottom2").style.display = "block";
    document.getElementById("bottom3").style.display = "none";

}

function display_reviews() {
    document.getElementById("about_course").style.display = "none";
    document.getElementById("course_content_block").style.display = "none";
    document.getElementById("review_block").style.display = "block";
    document.getElementById("desc_content").style.height="1475px";
    document.getElementById("right_block").style.height="1475px";

    document.getElementById("bottom1").style.display = "none";
    document.getElementById("bottom2").style.display = "none";
    document.getElementById("bottom3").style.display = "block";
}
