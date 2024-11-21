// The correct flag (example: encoded in Base64)
const correctFlag = "bXlzdGVyeV9jdGYzNDtzeXM="; // Base64 for "mystery_ctf34;sys"

function checkFlag() {
    const userFlag = document.getElementById("userInput").value;
    const result = document.getElementById("result");
    
    // Encode the user input to Base64
    const encodedInput = btoa(userFlag);
    
    if (encodedInput === correctFlag) {
        result.style.color = "green";
        result.textContent = "Congratulations! You've found the flag.";
    } else {
        result.style.color = "red";
        result.textContent = "Incorrect flag. Try again!";
    }
}
