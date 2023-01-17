alert("program cek bilangan ganjil & genap")
var bilangan = prompt("Masukan bilangan : ");

if(bilangan % 2 == 0){
    console.log("Bilangan genap");
}else{
    console.log("Bilangan ganjil");
}

//contoh kasus 2
var bilangan = prompt("Masukan bilangan 1-3 : ");

if(bilangan == 1){
    console.log("Bilangan yang anda masukan adalah 1");
}else if(bilangan == 2){
    console.log("Bilangan yang anda masukan adalah 2");
}else if(bilangan == 3){
    console.log("Bilangan yang anda masukan adalah 3");
}else{
    console.log("Angka yang anda masukan salah!!");
}