/*

# Gatcha

## Objectives
- Mengerti Cara Menggunakan `Switch-Case`
- Mengerti Logika `Switch-Case`
- Bisa menggunakan built in function Math dari Javascript

## Directions
Dalam permainan gacha ini jika seorang anak menekan sebuah tombol maka permainan akan mengacak angka 1 - 5.

Dimana jika mendapatkan angka, 

1: akan menampilkan "coba lagi ya" 

2: akan mendapatkan jumlah kupon/karcis sebanyak 5 dan menampilkan "selamat kamu mendapatkan kupon sebanyak 5" 

3: akan mendapatkan jumlah kupon/karcis sebanyak 15 dan menampilkan "selamat kamu mendapatkan kupon sebanyak 15" 

4: akan mendapatkan jumlah kupon/karcis sebanyak 50 dan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"

5: akan mendapatkan jumlah kupon/karcis sebanyak 100 dan menampilkan "WOW, kamu menang jackpot! Selamat!!"

Buatlah pseudocode dan implementasikan menggunakan SWITCH-CASE

## Hints
Untuk merandom angka 1-5 silakan menggunakan built in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll

**RESTRICTION**: Hanya boleh menggunakan built-in function Math seperti Math.random, Math.ceil, Math.round, Math.floor, dll

reference built in function Math

*/

// insert your code here
var gacha = Math.floor(Math.random() * 5 + 1);
// console.log(gacha); 

switch (gacha) {
    case 1:
        console.log(`Nilai ${gacha}. coba lagi ya`)
        break;
    case 2:
        console.log(`Nilai ${gacha}. selamat kamu mendapatkan kupon sebanyak 5`)
        break;
    case 3:
        console.log(`Nilai ${gacha}. selamat kamu mendapatkan kupon sebanyak 15`)
        break;
    case 4:
        console.log(`Nilai ${gacha}. selamat kamu mendapatkan kupon sebanyak 50`)
        break;
    case 5:
        console.log(`Nilai ${gacha}. WOW, kamu menang jackpot! Selamat!!`)
        break;
}