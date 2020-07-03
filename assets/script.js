alert(
  'Ayo kalahkan Komputer, pilih salah satu dari tombol dibawah. klik ok untuk memulai permainan.'
);

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}

//Generate Random Math untuk mengacak pilihan komputer
function playGame(pilih) {
  let player = pilih.target.innerText;
  let pilihanKomputer = Math.floor(Math.random() * 6) + 1;
  if (pilihanKomputer <= 2) {
    pilihanKomputer = 'Rock';
  } else if (pilihanKomputer > 2 && pilihanKomputer <= 4) {
    pilihanKomputer = 'Paper';
  } else {
    pilihanKomputer = 'Scissors';
  }
  return cekWInner(player, pilihanKomputer);
}
// Kondisi untuk mengecek pemenang
function cekWInner(us, kom) {
  var penentuan;
  // Kondisi jika player memilih Rock
  if (us === 'Rock') {
    if (kom === 'Scissors') {
      penentuan = 'Kamu Pemenangnya, Batu tidak dapat dihancurkan oleh gunting !!';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else if (kom === 'paper') {
      penentuan = 'Komputer pemenangnya, Kertas dapat menutup batu';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else {
      penentuan = 'Pilihan kalian sama. Ayo ulang lagi !!.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    }
  }

  // Kondisi jika player memilih Paper
  if (us === 'Paper') {
    if (kom === 'Rock') {
      penentuan = 'Kamu pemenang nya !! Kamu menutup batu dengan kertas.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else if (kom === 'scissors') {
      penentuan = 'Komputer Pemenangnya !! Kertas dapat dipotong oleh gunting';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else {
      penentuan = 'Pilihan kalian sama. Ayo ulang lagi !!.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    }
  }

  // Kondisi jika player memilih Scissors
  if (us === 'Scissors') {
    if (kom === 'Paper') {
      penentuan =
        'Kamu Pemenangnya !! Kertas dapat dipotong oleh gunting';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else if (kom === 'Rock') {
      penentuan =
        'Komputer Pemenangnya, Batu tidak dapat dihancurkan oleh gunting !!';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else {
      penentuan = 'Pilihan kalian sama. Ayo ulang lagi !!.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    }
  }
}

