function showCareer(career) {
    alert("You selected: " + career);
}


function getSuggestion() {

    let name = document.getElementById("name").value;
    let interest = document.getElementById("interest").value;
    let strength = document.getElementById("strength").value;

    let career = "";

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (interest === "" || strength === "") {
        alert("Please answer all questions.");
        return;
    }

    if (interest === "technology") {
        career = "💻 Technology — Software Development, Web Development, AI or Cyber Security";
    }

    else if (interest === "government") {
        career = "🏛️ Government Services — MPSC, UPSC, Banking or other competitive careers";
    }

    else if (interest === "medical") {
        career = "🩺 Medical & Healthcare — Medicine, Nursing, Pharmacy or Healthcare";
    }

    else if (interest === "business") {
        career = "📊 Business & Management — Marketing, Finance, HR or Entrepreneurship";
    }

    else if (interest === "creative") {
        career = "🎨 Creative Field — UI/UX, Graphic Design, Animation or Content Creation";
    }

    document.getElementById("result").innerHTML =
        "Hello <b>" + name + "</b>!<br><br>" +
        "Based on your interest, you can explore:<br><br>" +
        "<b>" + career + "</b>";
}


function sendMessage() {

    let name = document.getElementById("contactName").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    alert("Thank you " + name + "! Your message has been submitted.");
}