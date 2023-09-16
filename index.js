function validasiForm() {
    //ini adalah untuk memanggil id inputUltah di js dari html
    const inputUltah = document.getElementById("inputUltah");
    const inputUltahValue = inputUltah.value 

    //perhitungan untuk tahun sekarang secara realtime
    const tahunSekarang = new Date().getFullYear()

    //perhitungan tahun sekarang dikurangi ulang tahun yang diinput oleh user
    const hasil = tahunSekarang - inputUltahValue

    //ini untuk memanggil hasil di dalam tag <p> lalu menambahkan value dari tag <p> menggunakan inner.html="value untuk tag <p>" ditambah hasil dari pengurangan di atas
    const hasilView = document.getElementById("hasil")
    hasilView.innerHTML = "umur anda sekarang adalah: " + hasil +" tahun"

    const peringatanView = document.getElementById("peringatan")
    peringatanView.innerHTML = "Mohon isi tahun kelahiran anda"
    //penggunaan css di dalam js
    peringatanView.style="color: red;"

    //logic ketika user menginput dengan nilai yang kosong
    if(inputUltahValue === "") {
        hasilView.style ="display: none"
    }
    else {
        peringatanView.style ="display: none"
    }
}

//validasi onkeydown di dalam input ketika user mengenter lalu memanggil logic yang ada di validasiform di dalam onclick tag button dengan value submit
function saatDiEnter(event) {
    if(event.key === "Enter"){validasiForm()}
}

function maksInput() {
    const inputUltah = document.getElementById("inputUltah");
    const inputUltahValue = inputUltah.value

    //syntax ini mengambil nilai dari inputUltah.value divalidasi menjadi user hanya memberikan value 4 angka saja
    inputUltah.value = inputUltahValue.slice(0,4)
}