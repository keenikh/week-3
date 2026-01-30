
function checkAge(age) {
    return age >= 18 ? "взрослый" : "ребёнок";
}

function runAgeCheck() {
    const input = document.getElementById('ageInput');
    const resultDisplay = document.getElementById('ageResult');

    const value = Number(input.value);
    resultDisplay.textContent = checkAge(value);
}


const students = [
    { name: "Алексей", age: 19, class: "Информатика" },
    { name: "Мария", age: 17, class: "Дизайн" },
    { name: "Иван", age: 21, class: "Экономика" }
];

function showStudents() {
    const container = document.getElementById('studentsList');
    container.innerHTML = "";

    students.forEach(student => {

        console.log(`Имя: ${student.name}, Возраст: ${student.age}, Класс: ${student.class}`);


        const div = document.createElement('div');
        div.textContent = `${student.name} — ${student.class}`;
        container.appendChild(div);
    });
}


function calculateGrade(points) {
    if (points >= 90) return "A";
    if (points >= 75) return "B";
    if (points >= 60) return "C";
    return "F";
}

function runGradeCalc() {
    const input = document.getElementById('pointsInput');
    const resultDisplay = document.getElementById('gradeResult');

    const value = Number(input.value);
    resultDisplay.textContent = calculateGrade(value);
}