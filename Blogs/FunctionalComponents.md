# Functional Components

React JS App itu terbuat dari banyak component yang berbeda. Jadi penting untuk belajar component dalam React JS, supaya
kita bisa menggunakan component yang sudah ada, atau bahkan membuatnya sendiri component-component sesuai kebutuhan.


### Step by Step membuat component dalam React JS
* Tambahkan sebuah file .jsx ke dalam folder src, dengan nama component yang ingin anda buat.
* Import React from 'react'.
* Buat component dan export componen yang kita buat.

![Screenshot 2023-02-22 at 23.04.24.png](..%2F..%2F..%2F..%2F..%2F..%2FUsers%2Fnununugraha%2FDesktop%2FScreenshot%202023-02-22%20at%2023.04.24.png)

### Cara menggunakan Component yang dibuat dan di export
* Pastikan componen sudah di export
* Import component yang kita ingin gunakan contoh:
```js
import { Card } from "./KartuNama";
```
* Gunakan componen yang sudah kita import di dalam componen lain yang akan kita tampilkan
![Screenshot 2023-02-22 at 23.11.09.png](..%2F..%2F..%2F..%2F..%2F..%2FUsers%2Fnununugraha%2FDesktop%2FScreenshot%202023-02-22%20at%2023.11.09.png)

Berikut hasil di browser: 
![Screenshot 2023-02-22 at 23.06.03.png](..%2F..%2F..%2F..%2F..%2F..%2FUsers%2Fnununugraha%2FDesktop%2FScreenshot%202023-02-22%20at%2023.06.03.png)

Sangat simple, tapi harus di mengerti karena di pastikan kita akan selalu membuat dan menggunakan componen hampir dalam setiap
file js kita.