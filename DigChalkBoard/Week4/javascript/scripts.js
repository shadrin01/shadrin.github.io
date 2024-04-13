function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let greeting
    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    alert(greeting);
}

function changeButtonTextAndClass() {
    let button = document.getElementById("changeButton")
    console.log("Before change:", button.textContent, button.className);

    button.textContent = "Done";
    button.className = "btn btn-success";

    console.log("After change:", button.textContent, button.className)
}

document.getElementById('greetingButton').addEventListener('click', greetUser);
document.getElementById('changeButton').addEventListener('click', changeButtonTextAndClass);