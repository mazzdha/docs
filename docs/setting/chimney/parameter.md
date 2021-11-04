# Parameter

### Menambahkan parameter

1. Pada hawa, buka menu `settings > Chimney`, maka akan tampil seperti berikut :

![An Image](./img/chimney.png)

2. Pilih chimney yang akan disetting parameternya.
3. Klik _Add new parameter_ untuk menambahkan parameter pada tampilan berikut

![An Image](./img/setting-parameter.png)

4. Isikan data pada kolom yang tersedia.

![An Image](./img/setting-parameter-1.png)
* _Name_, nama parameter.

::: warning CATATAN
Jika nama parameter diubah maka akan berpengaruh pada tampilan historical trend.
:::

* _Engineering Unit_, rumus dari parameter.
* _Status_, status dari chimney untuk setiap parameter.

Appearance
* Color, pemilihan warna parameter untuk tampilan grafik pada historical trend.
* HTML name, nama satuan dari parameter.
* HTML enginnering unit
* Decimal precision, jumlah digit di belakang koma dari nilai pembacaan parameter.
* Minimum, nilai y terendah.
* Maximum, nilai y tertinggi.\
Minimum dan maximum merupakan nilai y yang akan muncul pada historical trend 

Regulary Standards\
Merupakan standar nilai bakumutu untuk setiap parameter.
* Enabled, jika diaktifkan maka otomatis akan mengenerate alarm apabila nilai melebihi bakumutu
* Standar value, nilai standar bakumutu parameter.

Alarm\
Pengaturan alarm 
* Limit
* Enabled, jika enabled aktifkan maka otomatis akan muncul alarm jika nilai melebihi bakumutu.
* Notif, diaktifkan untuk menerima notif alarm di telegram 

::: tip CATATAN
Notif telegram hanya akan berfungsi jika enabled diaktifkan.
:::

Data Source
* Device, sumber data yang digunakan untuk setiap parameter.
* Address, alamat dari device yang digunakan
* Data Type, jenis data dari device yang digunakan.

Compulation

Step 1
* Enable, jika diaktifkan maka perhitungan pada step 1 yang akan digunakan.
* Clamp, untuk mengaktifkan limit scaling.
* Input minimum, nilai terendah pada device yang digunakan.
* Input maximum, nilai tertinggi pada device yang digunakan.
* Output minimum, nilai terendah yang discaling pada Hawa
* Output maximum, nilai maksimal yang discaling pada hawa 

Step 2
* Value, rumus yang digunakan untuk mencari nilai yang discaling pada Hawa. Jika hanya menuliskan angka tanpa rumus maka nilai yang muncul adalah konstan (tidak berubah)
Contoh rumus : this * NOX - 7


3. Langkah terakhir klik *save* untuk menyimpan.

