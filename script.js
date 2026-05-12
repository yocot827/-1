let results = [0, 0, 0];

function rollDice(index) {
    const value = Math.floor(Math.random() * 6) + 1;
    results[index - 1] = value;

    document.getElementById(`dice${index}`).textContent = value;

    updateTotal();
}

function updateTotal() {
    const total = results.reduce((a, b) => a + b, 0);
    document.getElementById('total').textContent = total;
}

function saveResult() {
    const studentId = document.getElementById('studentId').value.trim();
    const studentName = document.getElementById('studentName').value.trim();

    if (!studentId || !studentName) {
        alert('학번과 이름을 입력하세요!');
        return;
    }

    if (results.includes(0)) {
        alert('주사위 3개를 모두 굴려주세요!');
        return;
    }

    const total = results.reduce((a, b) => a + b, 0);

    const table = document.getElementById('resultTable');

    const row = table.insertRow();

    row.insertCell(0).textContent = studentId;
    row.insertCell(1).textContent = studentName;
    row.insertCell(2).textContent = results[0];
    row.insertCell(3).textContent = results[1];
    row.insertCell(4).textContent = results[2];
    row.insertCell(5).textContent = total;

    resetForm();
}

function resetForm() {
    results = [0, 0, 0];

    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';

    document.getElementById('dice1').textContent = '-';
    document.getElementById('dice2').textContent = '-';
    document.getElementById('dice3').textContent = '-';

    document.getElementById('total').textContent = '0';
}
