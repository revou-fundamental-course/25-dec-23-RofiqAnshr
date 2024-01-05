function hitungluas(){
    const alas = document.getElementById('input-alas');
    const tinggi = document.getElementById('input-tinggi');
    const hasil = document.getElementById('hasil-luas');
    let a = alas.value;
    let t = tinggi.value;
    let l = 0.5*a*t;
    hasil.innerText += `Luasnya adalah ${l} cm2`;
}

function resetluas(){
    document.getElementById('formluas').reset();
    hitungluas().reset();
}

function hitungkeliling(){
    const sisi1 = document.getElementById('input-a');
    const sisi2 = document.getElementById('input-b');
    const sisi3 = document.getElementById('input-c');
    const hasil = document.getElementById('hasil-keliling');
    let s1 = sisi1.value;
    let s2 = sisi2.value;
    let s3 = sisi3.value;
    let k = parseInt(s1)+ parseInt(s2)+ parseInt(s3);
    hasil.innerText += `Keliling Segitiga tersebut adalah ${k} cm`;
}
        
function resetkeliling(){
    document.getElementById('formkeliling').reset();
    hitungkeliling().reset();
}