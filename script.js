const box = document.getElementById("form-box");
const title = document.getElementById("live-title");
const btn = document.getElementById("main-btn");
const fields = document.getElementById("field-list");
const listContainer = document.getElementById("list-container");
const errorBox = document.getElementById("form-errors");
const appState = {
    fields: []
};


box.style.transition = "all 0.4s ease";
title.style.transition = "all 0.3s ease";
btn.style.transition = "all 0.3s ease";

document.getElementById("c1").oninput = function () {
    box.style.backgroundColor = this.value;
};

document.getElementById("c2").oninput = function () {
    box.style.borderRadius = this.value + "px";
};

document.getElementById("c3").oninput = function () {
    box.style.paddingTop = this.value + "px";
};

document.getElementById("c4").oninput = function () {
    box.style.paddingBottom = this.value + "px";
};

document.getElementById("c5").oninput = function () {
    box.style.paddingLeft = this.value + "px";
};

document.getElementById("c6").oninput = function () {
    box.style.paddingRight = this.value + "px";
};

document.getElementById("c7").oninput = function () {
    box.style.borderWidth = this.value + "px";
};

document.getElementById("c8").oninput = function () {
    box.style.borderColor = this.value;
};

document.getElementById("c9").onchange = function () {
    box.style.borderStyle = this.value;
};

document.getElementById("c10").oninput = function () {
    title.innerText = this.value;
};

document.getElementById("c11").oninput = function () {
    title.style.color = this.value;
};

document.getElementById("c12").oninput = function () {
    title.style.fontSize = this.value + "px";
};

document.getElementById("c13").onchange = function () {
    title.style.textAlign = this.value;
};

document.getElementById("c14").onchange = function () {
    box.style.fontFamily = this.value;
};

document.getElementById("c15").oninput = function () {
    const labels = document.querySelectorAll(".live-label");
    labels.forEach(function (label) {
        label.style.color = this.value;
    }, this);
};

document.getElementById("c16").oninput = function () {
    const labels = document.querySelectorAll(".live-label");
    labels.forEach(function (label) {
        label.style.fontSize = this.value + "px";
    }, this);
};

document.getElementById("c17").oninput = function () {
    const inputs = document.querySelectorAll(".live-input");
    inputs.forEach(function (input) {
        input.style.backgroundColor = this.value;
    }, this);
};

document.getElementById("c18").oninput = function () {
    const inputs = document.querySelectorAll(".live-input");
    inputs.forEach(function (input) {
        input.style.borderColor = this.value;
    }, this);
};

document.getElementById("c19").oninput = function () {
    const inputs = document.querySelectorAll(".live-input");
    inputs.forEach(function (input) {
        input.style.color = this.value;
    }, this);
};

document.getElementById("c20").oninput = function () {
    const inputs = document.querySelectorAll(".live-input");
    inputs.forEach(function (input) {
        input.style.height = this.value + "px";
    }, this);
};

document.getElementById("c21").oninput = function () {
    btn.innerText = this.value;
};

document.getElementById("c22").oninput = function () {
    btn.style.backgroundColor = this.value;
};

document.getElementById("c23").oninput = function () {
    btn.style.color = this.value;
};

document.getElementById("c24").oninput = function () {
    btn.style.borderRadius = this.value + "px";
};

document.getElementById("c25").oninput = function () {
    btn.style.height = this.value + "px";
};

document.getElementById("c26").oninput = function () {
    let s = this.value;
    box.style.boxShadow = "0 " + s + "px " + s * 2 + "px rgba(0,0,0,0.5)";
};

document.getElementById("c28").oninput = function () {
    box.style.opacity = this.value / 100;
};

document.getElementById("c29").oninput = function () {
    box.style.transform = "rotate(" + this.value + "deg)";
};

document.getElementById("t1").onclick = function () {
    document.getElementById("p1").classList.add("active");
    document.getElementById("p2").classList.remove("active");
    document.getElementById("p3").classList.remove("active");
    this.classList.add("active");
    document.getElementById("t2").classList.remove("active");
    document.getElementById("t3").classList.remove("active");
};

document.getElementById("t2").onclick = function () {
    document.getElementById("p2").classList.add("active");
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p3").classList.remove("active");
    this.classList.add("active");
    document.getElementById("t1").classList.remove("active");
    document.getElementById("t3").classList.remove("active");
};

document.getElementById("t3").onclick = function () {
    document.getElementById("p3").classList.add("active");
    document.getElementById("p1").classList.remove("active");
    document.getElementById("p2").classList.remove("active");
    this.classList.add("active");
    document.getElementById("t1").classList.remove("active");
    document.getElementById("t2").classList.remove("active");
};

document.getElementById("add-field").onclick = function () {
    const labelVal = document.getElementById("new-el-label").value || "New Field";
    const dataVal = document.getElementById("new-el-data").value || "Type here...";
    const colorVal = document.getElementById("new-el-color").value;
    const sizeVal = document.getElementById("new-el-size").value;
    const bgVal = document.getElementById("new-el-bg").value;

    const newDiv = document.createElement("div");
    newDiv.className = "field";
    newDiv.style.opacity = "0";
    newDiv.style.transform = "translateY(10px)";
    newDiv.style.transition = "all 0.3s ease";

    const newLabel = document.createElement("label");
    newLabel.className = "live-label";
    newLabel.innerText = labelVal;
    newLabel.style.color = colorVal;
    newLabel.style.fontSize = sizeVal + "px";

    const newInput = document.createElement("input");
    newInput.className = "live-input";
    newInput.placeholder = dataVal;
    newInput.style.backgroundColor = bgVal;
    newInput.style.color = colorVal;

    appState.fields.push({
    label: labelVal,
    placeholder: dataVal,
    color: colorVal,
    size: sizeVal,
    bg: bgVal
});


    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    fields.appendChild(newDiv);

    requestAnimationFrame(function () {
        newDiv.style.opacity = "1";
        newDiv.style.transform = "translateY(0)";
    });
};

document.getElementById("add-h3").onclick = function () {
    const textVal = document.getElementById("h3-text").value || "New Sub-header";
    const colorVal = document.getElementById("h3-color").value;
    const sizeVal = document.getElementById("h3-size").value;

    const newH3 = document.createElement("h3");
    newH3.innerText = textVal;
    newH3.style.color = colorVal;
    newH3.style.fontSize = sizeVal + "px";
    newH3.style.marginTop = "15px";
    newH3.style.marginBottom = "10px";
    newH3.style.opacity = "0";
    newH3.style.transition = "opacity 0.3s ease";

    fields.appendChild(newH3);

    requestAnimationFrame(function () {
        newH3.style.opacity = "1";
    });
};

document.getElementById("add-list-item").onclick = function () {
    const type = document.getElementById("list-type").value;
    const text = document.getElementById("list-item-text").value || "Item";
    const colorVal = document.getElementById("new-el-color").value;
    const sizeVal = document.getElementById("new-el-size").value;

    let list = listContainer.querySelector(type);

    if (!list) {
        listContainer.innerHTML = "";
        list = document.createElement(type);
        list.style.transition = "all 0.3s ease";
        listContainer.appendChild(list);
    }

    const li = document.createElement("li");
    li.innerText = text;
    li.style.color = colorVal;
    li.style.fontSize = sizeVal + "px";
    li.style.opacity = "0";
    li.style.transition = "opacity 0.3s ease";

    list.appendChild(li);

    requestAnimationFrame(function () {
        li.style.opacity = "1";
    });
};

document.getElementById("reset-all").onclick = function () {
    window.location.reload();
};

function exportData() {

    const clonedForm = box.cloneNode(true);

    clonedForm.style.margin = "0 auto";
    clonedForm.style.maxWidth = "500px";

    const exportedInputs = clonedForm.querySelectorAll("input");
const exportedLabels = clonedForm.querySelectorAll("label");

exportedLabels.forEach(function (label) {
    label.style.display = "block";
    label.style.marginBottom = "6px";
});

exportedInputs.forEach(function (input) {
    input.style.display = "block";
    input.style.marginBottom = "20px";
});

    const allElements = clonedForm.querySelectorAll("*");

    allElements.forEach(function (el) {

        const computed = window.getComputedStyle(el);

        let styleString = "";

        for (let i = 0; i < computed.length; i++) {
            const prop = computed[i];
            const val = computed.getPropertyValue(prop);
            styleString += prop + ":" + val + ";";
        }

        el.style.cssText += ";" + styleString;

    });

    const finalHTML =
`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Exported Form</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:40px;display:flex;justify-content:center;background:#f4f4f4;">
${clonedForm.outerHTML}
</body>
</html>`;

    const blob = new Blob([finalHTML], { type: "text/html" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "form.html";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}


document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("live-label")) {
        const newText = prompt("Enter new label text:");
        if (newText) {
            e.target.innerText = newText;
        }
    }
});

title.addEventListener("click", function () {
    let val = prompt("Enter Title");
    if (val) {
        title.innerText = val;
    }
});

const feedbackInput = document.getElementById("feedback-input");
const feedbackBtn = document.getElementById("feedback-btn");
const feedbackList = document.getElementById("feedback-list");
const STORAGE_KEY = "formcraft_feedback";

function loadFeedback() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    feedbackList.innerHTML = "";

    data.forEach(function (item, index) {
        const div = document.createElement("div");
        div.style.padding = "8px";
        div.style.marginBottom = "6px";
        div.style.background = "#1e293b";
        div.style.borderRadius = "4px";
        div.style.opacity = "0";
        div.style.transition = "opacity 0.3s ease";
        div.innerText = index + 1 + ". " + item.text;
        feedbackList.appendChild(div);

        requestAnimationFrame(function () {
            div.style.opacity = "1";
        });
    });
}

feedbackBtn.addEventListener("click", function () {
    const text = feedbackInput.value.trim();
    if (!text) {
        return;
    }

    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    data.push({
        text: text,
        time: new Date().toISOString()
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    feedbackInput.value = "";
    loadFeedback();
});

loadFeedback();
