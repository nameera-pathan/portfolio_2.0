const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const sendBtn = document.getElementById("btn");

const fields = [nameField, emailField, messageField];

function checkFields() {
    const hasText = fields.every(field => field.value.trim() !== "");

    sendBtn.disabled = !hasText;
}

fields.forEach(field => {
    field.addEventListener("input", checkFields);
});

checkFields();