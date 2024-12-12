function addTaskButtons(li) {
    var doneBtn = document.createElement("button");
    doneBtn.className = "doneBtn";
    var doneImg = document.createElement("img");
    doneImg.src = "images/done.png";
    doneImg.alt = "Done";
    doneBtn.appendChild(doneImg);
    li.appendChild(doneBtn);

    var removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    var removeImg = document.createElement("img");
    removeImg.src = "images/remove.png";
    removeImg.alt = "Remove";
    removeBtn.appendChild(removeImg);
    li.appendChild(removeBtn);

    doneBtn.onclick = function () {
        li.classList.add("checked");
        doneBtn.style.display = "none";
        removeBtn.style.display = "none";

        var completedImg = document.createElement("img");
        completedImg.src = "images/completed.png";
        completedImg.alt = "Completed";
        var completedText = document.createElement("span");
        completedText.className = "doneText";
        completedText.appendChild(completedImg);
        li.appendChild(completedText);

        var completedDate = document.createElement("span");
        completedDate.className = "completedDate";
        var now = new Date();
        completedDate.textContent = "Completed on - " + now.toLocaleString();
        li.appendChild(completedDate);

        triggerConfetti();
    };

    removeBtn.onclick = function () {
        li.remove();
    };
}

function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = inputValue;

    addTaskButtons(li);

    document.getElementById("myUL").appendChild(li);

    document.getElementById("myInput").value = "";
}

document.getElementById("myInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        newElement();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var initialTasks = document.querySelectorAll("#myUL li");
    initialTasks.forEach(function (li) {
        addTaskButtons(li);
    });
});

function triggerConfetti() {
    var confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti');

    var confettiImage = document.createElement('img');
    confettiImage.src = 'images/confetti.png';
    confettiImage.alt = 'Confetti';

    confettiContainer.appendChild(confettiImage);
    document.body.appendChild(confettiContainer);

    setTimeout(function() {
        confettiContainer.remove();
    }, 1800);
}
