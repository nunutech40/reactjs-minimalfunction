# Functional Components

React JS App itu terbuat dari banyak component yang berbeda. Jadi penting untuk belajar component dalam React JS, supaya
kita bisa menggunakan component yang sudah ada, atau bahkan membuatnya sendiri component-component sesuai kebutuhan.


### Step by Step membuat component dalam React JS
* Tambahkan sebuah file .jsx ke dalam folder src, dengan nama component yang ingin anda buat.
* Import React from 'react'.
* Buat component dan export componen yang kita buat.
<img width="1038" alt="Screenshot 2023-02-22 at 23 04 24" src="https://user-images.githubusercontent.com/49187517/220687161-72d1d9e3-24e5-453e-b165-aa51d5612ff2.png">


### Cara menggunakan Component yang dibuat dan di export
* Pastikan componen sudah di export
* Import component yang kita ingin gunakan contoh:
```js
import { Card } from "./KartuNama";
```
* Gunakan componen yang sudah kita import di dalam componen lain yang akan kita tampilkan
<img width="522" alt="Screenshot 2023-02-22 at 23 11 09" src="https://user-images.githubusercontent.com/49187517/220687472-fc58d3a7-b533-446f-a03e-d67969753ffe.png">


Berikut hasil di browser: 
<img width="1437" alt="Screenshot 2023-02-22 at 23 06 03" src="https://user-images.githubusercontent.com/49187517/220687519-7a36a491-f3ed-4117-a591-4b6a16dea190.png">



Sangat simple, tapi harus di mengerti karena di pastikan kita akan selalu membuat dan menggunakan componen hampir dalam setiap
file js kita.
