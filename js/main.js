const btn = document.getElementById('calculate');

btn.addEventListener('click', function () {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == '') {
        alert('Masukan angka');
        return;
    }
    height = height / 100;
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);
    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if (BMI < 18.5) {
        status = "Kurang Berat Badan"
    }
    if (BMI >= 18.5 && BMI < 25) {
        status = "Sehat"
    }
    if (BMI >= 25 && BMI < 30) {
        status = "Kegemukan"
    }
    if (BMI >= 30) {
        status = "Kegendutan"
    }

    document.querySelector(".comment").innerHTML = `<span id ="comment">Kamu ${status}</span>`;
});