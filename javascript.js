$(document).ready(function(){
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const subjectInput = document.getElementById("subjectInput");
    const messageInput = document.getElementById("messageInput");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        let errorMessage = "";
        if (!nameInput.value) {
            errorMessage += "Nama harus diisi.\n";
        }
        if (!emailInput.value) {
            errorMessage += "Email harus diisi.\n";
        } else {
            const emailRegex = /@gmail\.com$/;
            if (!emailRegex.test(emailInput.value)) {
                errorMessage += "Alamat email harus mengandung '@gmail.com'.\n";
            }
        }
        if (!subjectInput.value) {
            errorMessage += "Subjek harus diisi.\n";
        }
        if (!messageInput.value) {
            errorMessage += "Pesan harus diisi.\n";
        }
        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Pesan Anda terkirim!");
            nameInput.value = "";
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
        }
    });
});