/**
 * Seseorang pengunjung bar direpresentasikan oleh JavaScript memiliki variable name, age, dan money.
 * Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:
 *
 * - Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai.
 *   Jika name tidak kosong, lanjut ke step ke 2.
 *
 * - Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice.
 *   Jika age 17 tahun keatas, ia hanya boleh memesan anggur.
 *
 * - Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000.
 *   Jika money/uang yang dimiliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.".
 *   Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]",
 *   dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.
 */

/**
 * _________________________________*PSEUDOCODE*______________________________________ 
 * 
 * STORE name AS STRING WITH ANY VALUE
 * STORE age AS NUMBER WITH ANY VALUE
 * STORE money AS NUMBER WITH ANY VALUE 
 * 
 * STORE juicePrice WITH 50000
 * STORE anggurPrice WITH 300000
 * 
 * 
 * IF name IS FALSY    
 *     DISPLAY "Anda tidak boleh masuk!"  
 * ELSE      
 *     IF age LESS THAN 17
 *         IF money LESS THAN juicePrice
 *             DISPLAY "Uang tidak cukup. Anda harus Pulang."
 *         ELSE IF money MORE THAN EQUQL TO juicePrice
 *             DISPLAY "Anda bisa pesan minum. Sisa uang anda: `money - juicePrice` "
 *         END IF      
 *      ELSE |
 *         IF money LESS THAN  anggurPrice
 *             DISPLAY "Uang tidak cukup. Anda harus Pulang."
 *         ELSE IF money MORE THAN EQUAL TO anggurPrice
 *             DISPLAY "Anda bisa pesan minum. Sisa uang anda: `money - anggurPrice` "
 *         END IF      
 *     END IF 
 * END IF
 * _______________________________________________________________________________________ 
 */

 let name = 'Juminten';
 let age = 18;
 let money = 2000000;
 
 let juicePrice = 50000;
 let angurPrice = 300000;
 
 if (!name) {
     console.log(`Anda tidak boleh masuk!`)
 } else {
     if (age < 17) {
         if (money < juicePrice) {
             console.log(`Uang tidak cukup. Anda harus pulang.`)
         } else if (money >= juicePrice) {
             console.log(`Anda bisa pesan minum. Sisa uang anda: ${money - juicePrice}`)
         }
     } else {
         if (money < angurPrice) {
             console.log(`Uang tidak cukup. Anda harus pulang!`)
         } else if (money >= angurPrice) {
             console.log(`Anda bisa pesan minum. Sisa uang anda: ${money - angurPrice}`)
         }
     }
 }