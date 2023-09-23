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

    // logika untuk user ketika menginput setiap hasil umur anda sekarang adalah ditambah dengan konten text tambahan ( .innerHTML += ) berupa golongan
    if(hasil <= 3 && hasil >= 1) {
        hasilView.innerHTML += ' Anda balita'
    }

    else if(hasil <= 12 && hasil >= 3) {
        hasilView.innerHTML += ' anda masih anak-anak'
    }
    else if(hasil <= 20 && hasil >= 12) {
        hasilView.innerHTML += ' anda sudah remaja'
    }
    else if(hasil <= 40 && hasil >= 21) {
        hasilView.innerHTML += ' anda sudah dewasa'
    }
    else if(hasil <= 80 && hasil >= 40) {
        hasilView.innerHTML += ' anda sudah lansia'
    }
    else if(hasil <= 9999 && hasil >= 100) {
        hasilView.innerHTML += ' anda sudah terlalu tua, umurnya lebih dari nenek moyang gua'
    }

    else {
        hasilView.innerHTML += ' anda masih bayi'
    }

    // logika ketika user menginput sebuah angka (inputUltahValue) lebih dari > tahun saat ini secara (realtime) dan mengubah konten dari peringatanView menjadi tahun kelahiran tidak boleh lebih dari tahun sekarang
    if (inputUltahValue > tahunSekarang) {
        hasilView.style = 'display: none;'
        peringatanView.style ='display: block; color: red;'
        peringatanView.innerHTML = ' tahun kelahiran anda melebihi tahun sekarang'
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