# PROPS adalah cara kita berkomunikasi dengan componen

=> Props sebenernya kayak parameter biasa dalam function, cuman kita gak perlu define parameternya,
yang penting kita define props di dalam tanda kurung setelan nama function, lalu memanggil parameter yang akan di pass
ke dalam function

Lihat contoh di bawah ini untuk mengerti kalimat di atas: \
<img width="429" alt="Screenshot 2023-02-23 at 09 01 30" src="https://user-images.githubusercontent.com/49187517/220806707-d136500b-3965-4644-b1d5-0fc3705b9f92.png">


Dari contoh di atas, kita bisa melihat 2 point dari penjelasan sebelumnya.
* define props di dalam kurung function componen yang kita buat.
* gunakan props di dalam komponen untuk menempelkan value dari props yang sudah di definisikan.

Selanjutnya, tinggal bagaimana kita menggunakannya.
Balik lagi ke tempat kita menggunakan Componen Card didalam App.js

Lihat image berikut:
<img width="581" alt="Screenshot 2023-02-23 at 09 05 55" src="https://user-images.githubusercontent.com/49187517/220806745-5db462ac-9fe1-4048-9f26-6fcd2ba43fab.png">


Dari situ kita bisa lihat, dalam menggunakan Componen Cards, kita menambahkan value dalam label nama, dan pekerjaan sesuai
dengan props yang kita gunakan di dalam componen.

Kita run project, dan berikut hasil yang di tampilkan di browser.
<img width="1435" alt="Screenshot 2023-02-23 at 09 07 39" src="https://user-images.githubusercontent.com/49187517/220806781-31b2fb1c-2248-47c2-a451-050d0631ec5b.png">

