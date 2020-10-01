alert("Selamat datang di Binus Relawan Digital\nSilakan isi data diri anda");

function myFunction() {
    var name = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var hp = document.getElementById('hp').value;
    var link = document.getElementsByName('linktext').value;
    
    if(name ==''){
        alert("Nama harus di isi");
    }
    else if(alamat == ''){
        alert("Alamat harus di isi");
            return false;
    }
    else if(hp == ''){
        alert('nomo Handphone harus di isi');
            return false;
    }
    
    else if(link == ''){
        alert("Link sosmed harus di isi");
        return false;
    }
    else{

        alert("Terimakasi"+ " "+name+" "+"Sudah mendaftar");
        return true;
    }
}