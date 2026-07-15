document.addEventListener("DOMContentLoaded", () => {
    
    const greet = document.getElementById("greet");
    const aboutTxt = document.getElementById("about-txt");
    const toggle = document.getElementById("toggle");
    const links = document.querySelectorAll(".btn:not(#toggle)");
    const secs = document.querySelectorAll(".sec");
    
    const form = document.getElementById("msg-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const msgInput = document.getElementById("message");
    const nameErr = document.getElementById("name-err");
    const emailErr = document.getElementById("email-err");
    const msgErr = document.getElementById("msg-err");
    const okMsg = document.getElementById("ok-msg");

    const hour = new Date().getHours();
    let greetingTxt = "Good Morning";
    if (hour >= 12 && hour < 17) greetingTxt = "Good Afternoon";
    else if (hour >= 17 || hour < 4) greetingTxt = "Good Evening";
    greet.textContent = `${greetingTxt}, Recruiter!`;

    aboutTxt.style.color = "var(--primary)";
    aboutTxt.style.fontWeight = "bold";
    aboutTxt.textContent = "Welcome to my portfolio";

    toggle.addEventListener("click", () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.removeAttribute("data-theme");
            toggle.textContent = "Dark Mode";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            toggle.textContent = "Light Mode";
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            secs.forEach(s => s.classList.remove("active"));
            const target = link.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let ok = true;

        document.querySelectorAll(".err").forEach(el => el.textContent = "");
        okMsg.textContent = "";

        if (nameInput.value.trim() === "") {
            nameErr.textContent = "Name cannot be empty.";
            ok = false;
        }

       
    });
});