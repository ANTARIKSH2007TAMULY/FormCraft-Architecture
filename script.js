  const box = document.getElementById('form-box');
        const title = document.getElementById('live-title');
        const btn = document.getElementById('main-btn');
        const fields = document.getElementById('field-list');
        const listContainer = document.getElementById('list-container');

        document.getElementById('c1').oninput = function() { box.style.backgroundColor = this.value; };
        document.getElementById('c2').oninput = function() { box.style.borderRadius = this.value + 'px'; };
        document.getElementById('c3').oninput = function() { box.style.paddingTop = this.value + 'px'; };
        document.getElementById('c4').oninput = function() { box.style.paddingBottom = this.value + 'px'; };
        document.getElementById('c5').oninput = function() { box.style.paddingLeft = this.value + 'px'; };
        document.getElementById('c6').oninput = function() { box.style.paddingRight = this.value + 'px'; };
        document.getElementById('c7').oninput = function() { box.style.borderWidth = this.value + 'px'; };
        document.getElementById('c8').oninput = function() { box.style.borderColor = this.value; };
        document.getElementById('c9').onchange = function() { box.style.borderStyle = this.value; };
        document.getElementById('c10').oninput = function() { title.innerText = this.value; };
        document.getElementById('c11').oninput = function() { title.style.color = this.value; };
        document.getElementById('c12').oninput = function() { title.style.fontSize = this.value + 'px'; };
        document.getElementById('c13').onchange = function() { title.style.textAlign = this.value; };
        document.getElementById('c14').onchange = function() { box.style.fontFamily = this.value; };

        document.getElementById('c15').oninput = function() {
            const ls = document.querySelectorAll('.live-label');
            ls.forEach(l => l.style.color = this.value);
        };

        document.getElementById('c16').oninput = function() {
            const ls = document.querySelectorAll('.live-label');
            ls.forEach(l => l.style.fontSize = this.value + 'px');
        };

        document.getElementById('c17').oninput = function() {
            const ins = document.querySelectorAll('.live-input');
            ins.forEach(i => i.style.backgroundColor = this.value);
        };

        document.getElementById('c18').oninput = function() {
            const ins = document.querySelectorAll('.live-input');
            ins.forEach(i => i.style.borderColor = this.value);
        };

        document.getElementById('c19').oninput = function() {
            const ins = document.querySelectorAll('.live-input');
            ins.forEach(i => i.style.color = this.value);
        };

        document.getElementById('c20').oninput = function() {
            const ins = document.querySelectorAll('.live-input');
            ins.forEach(i => i.style.height = this.value + 'px');
        };

        document.getElementById('c21').oninput = function() { btn.innerText = this.value; };
        document.getElementById('c22').oninput = function() { btn.style.backgroundColor = this.value; };
        document.getElementById('c23').oninput = function() { btn.style.color = this.value; };
        document.getElementById('c24').oninput = function() { btn.style.borderRadius = this.value + 'px'; };
        document.getElementById('c25').oninput = function() { btn.style.height = this.value + 'px'; };

        document.getElementById('c26').oninput = function() {
            let s = this.value;
            box.style.boxShadow = `0 ${s}px ${s*2}px rgba(0,0,0,0.5)`;
        };

        document.getElementById('c28').oninput = function() { box.style.opacity = this.value / 100; };
        document.getElementById('c29').oninput = function() { box.style.transform = `rotate(${this.value}deg)`; };

        document.getElementById('t1').onclick = function() {
            document.getElementById('p1').classList.add('active');
            document.getElementById('p2').classList.remove('active');
            document.getElementById('p3').classList.remove('active');
            this.classList.add('active');
            document.getElementById('t2').classList.remove('active');
            document.getElementById('t3').classList.remove('active');
        };

        document.getElementById('t2').onclick = function() {
            document.getElementById('p2').classList.add('active');
            document.getElementById('p1').classList.remove('active');
            document.getElementById('p3').classList.remove('active');
            this.classList.add('active');
            document.getElementById('t1').classList.remove('active');
            document.getElementById('t3').classList.remove('active');
        };

        document.getElementById('t3').onclick = function() {
            document.getElementById('p3').classList.add('active');
            document.getElementById('p1').classList.remove('active');
            document.getElementById('p2').classList.remove('active');
            this.classList.add('active');
            document.getElementById('t1').classList.remove('active');
            document.getElementById('t2').classList.remove('active');
        };

        document.getElementById('add-field').onclick = function() {
            const labelVal = document.getElementById('new-el-label').value || 'New Field';
            const dataVal = document.getElementById('new-el-data').value || 'Type here...';
            const colorVal = document.getElementById('new-el-color').value;
            const sizeVal = document.getElementById('new-el-size').value;
            const bgVal = document.getElementById('new-el-bg').value;

            const newDiv = document.createElement('div');
            newDiv.className = 'field';
            
            const newLabel = document.createElement('label');
            newLabel.className = 'live-label';
            newLabel.innerText = labelVal;
            newLabel.style.color = colorVal;
            newLabel.style.fontSize = sizeVal + 'px';
            
            const newInput = document.createElement('input');
            newInput.className = 'live-input';
            newInput.placeholder = dataVal;
            newInput.style.backgroundColor = bgVal;
            newInput.style.color = colorVal;
            
            newDiv.appendChild(newLabel);
            newDiv.appendChild(newInput);
            fields.appendChild(newDiv);
        };

    document.getElementById('add-h3').onclick = function() {
    const textVal = document.getElementById('h3-text').value || 'New Sub-header';
    const colorVal = document.getElementById('h3-color').value;
    const sizeVal = document.getElementById('h3-size').value;

    const newH3 = document.createElement('h3');
    newH3.innerText = textVal;
    newH3.style.color = colorVal;
    newH3.style.fontSize = sizeVal + 'px';
    newH3.style.marginTop = '15px';
    newH3.style.marginBottom = '10px';
    
    document.getElementById('field-list').appendChild(newH3);
};

        document.getElementById('add-list-item').onclick = function() {
            const type = document.getElementById('list-type').value;
            const text = document.getElementById('list-item-text').value || 'Item';
            const colorVal = document.getElementById('new-el-color').value;
            const sizeVal = document.getElementById('new-el-size').value;

            let list = listContainer.querySelector(type);
            if (!list) {
                listContainer.innerHTML = ''; 
                list = document.createElement(type);
                listContainer.appendChild(list);
            }
            
            const li = document.createElement('li');
            li.innerText = text;
            li.style.color = colorVal;
            li.style.fontSize = sizeVal + 'px';
            list.appendChild(li);
        };

        document.getElementById('reset-all').onclick = function() {
            window.location.reload();
        };

        function exportData() {
            const html = box.outerHTML;
            const blob = new Blob([html], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'form.html';
            link.click();
        }

        const extraGroup = document.createElement('div');
        extraGroup.className = 'group';
        extraGroup.innerHTML = '<h3>Advanced Spacing</h3>';
        const m1 = document.createElement('div');
        m1.className = 'item';
        m1.innerHTML = '<label>Margin Top</label><input type="range" id="m1" min="0" max="100" value="0">';
        extraGroup.appendChild(m1);
        const m2 = document.createElement('div');
        m2.className = 'item';
        m2.innerHTML = '<label>Margin Bottom</label><input type="range" id="m2" min="0" max="100" value="0">';
        extraGroup.appendChild(m2);
        document.getElementById('p1').appendChild(extraGroup);
        document.getElementById('m1').oninput = function() { box.style.marginTop = this.value + 'px'; };
        document.getElementById('m2').oninput = function() { box.style.marginBottom = this.value + 'px'; };

        const typoGroup = document.createElement('div');
        typoGroup.className = 'group';
        typoGroup.innerHTML = '<h3>Deep Typography</h3>';
        const d1 = document.createElement('div');
        d1.className = 'item';
        d1.innerHTML = '<label>Letter Spacing</label><input type="range" id="d1" min="0" max="10" value="0">';
        typoGroup.appendChild(d1);
        const d2 = document.createElement('div');
        d2.className = 'item';
        d2.innerHTML = '<label>Line Height</label><input type="range" id="d2" min="1" max="3" step="0.1" value="1.2">';
        typoGroup.appendChild(d2);
        document.getElementById('p1').appendChild(typoGroup);
        document.getElementById('d1').oninput = function() { box.style.letterSpacing = this.value + 'px'; };
        document.getElementById('d2').oninput = function() { box.style.lineHeight = this.value; };

        const fieldExtra = document.createElement('div');
        fieldExtra.className = 'group';
        fieldExtra.innerHTML = '<h3>Input Advanced</h3>';
        const f1 = document.createElement('div');
        f1.className = 'item';
        f1.innerHTML = '<label>Input Padding</label><input type="range" id="f1" min="0" max="30" value="10">';
        fieldExtra.appendChild(f1);
        document.getElementById('p2').appendChild(fieldExtra);
        document.getElementById('f1').oninput = function() {
            const ins = document.querySelectorAll('.live-input');
            ins.forEach(i => i.style.padding = this.value + 'px');
        };

        document.body.addEventListener('click', function(e) {
            if(e.target.classList.contains('live-label')) {
                const newText = prompt("Enter new label text:");
                if(newText) e.target.innerText = newText;
            }
        });

        const footer = document.createElement('div');
        footer.style.padding = '20px';
        footer.style.fontSize = '10px';
        footer.innerText = 'FORMCRAFT V1.0 - BUILD 2026';
        document.querySelector('.a').appendChild(footer);

        let formtitle = document.querySelector("#live-title");

        formtitle.addEventListener("click",()=>{
            let val=prompt("Enter Title");
            formtitle.innerText=val;

        });

        const feedbackInput = document.getElementById("feedback-input");
const feedbackBtn = document.getElementById("feedback-btn");
const feedbackList = document.getElementById("feedback-list");

const STORAGE_KEY = "formcraft_feedback";


function loadFeedback() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    feedbackList.innerHTML = "";

    data.forEach((item, index) => {
        const div = document.createElement("div");
        div.style.padding = "8px";
        div.style.marginBottom = "6px";
        div.style.background = "#1e293b";
        div.style.borderRadius = "4px";
        div.innerText = `${index + 1}. ${item.text}`;
        feedbackList.appendChild(div);
    });
}


feedbackBtn.addEventListener("click", () => {
    const text = feedbackInput.value.trim();
    if (!text) return;

    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    data.push({
        text,
        time: new Date().toISOString()
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    feedbackInput.value = "";
    loadFeedback();
});


loadFeedback();
