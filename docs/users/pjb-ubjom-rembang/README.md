# PT PJB UBJOM REMBANG

![An image](./img/home.png)

## Daftar Isi

[[toc]]

## Pengenalan Aplikasi

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Continuous Emission Monitoring System digunakan untuk memonitoring kadar buangan chimney secara realtime agar dapat mengendalikan pencemaran udara. Pengendalian pencemaran udara merupakan salah satu hal yang wajib dilakukan oleh industri sehingga pencemaran udara dapat terus dikurangi. Salah satu upaya dalam pengendalian pencemaran ini adalah dengan memantau kadar buangan melalui cerobong asap dari fasilitas industri. Continuous Emission Monitoring System digunakan untuk memantau kadar buangan dengan cara mengambil data dari pembacaan nilai analyzer dari PLC, lalu dikirimkan ke SIPLAH untuk dimonitor Kementrian Lingkungan Hidup & Kehutanan. Pada Continuous Emission Monitoring System webapps terdapat feature report untuk melaporkan kadar buangan dari cerobong asap yang dapat digunakan sebagai evaluasi.

## Mengakes Aplikasi

1. Akses alamat Continuous Emission Monitoring System.

2. Setelah aplikasi terbuka akan tampil halaman login. Pada halaman login ini menggunakan username / email dan password untuk mengakses aplikasi.
   Username dan password standar bawaan aplikasi adalah:

   | Username | Password |
   | -------- | -------- |
   | admin    | admin123 |
   | operator | operator |

![An image](./img/login.png)

### Home

Setelah proses login selesai akan menampilkan halaman HOME yang menampilkan informasi parameter untuk monitoring secara realtime. Pada halaman HOME terdapat beberapa menu yaitu :

**1. Unit 1**

Menu Unit 1 menampilkan parameter sebagai berikut :

- Normalized
- Process Parametes

![An image](./img/unit1.png)

**2. Unit 2**

Menu Unit 2 menampilkan parameter sebagai berikut :

- Normalized
- Process Parametes

![An image](./img/unit2.png)

### Alarm

Halaman “Alarm” berfungsi menampilkan realtime alarm dan history dari alarm.

Hal yang diperlu diperhatikan saat akan menampilkan alarm :

- **Refresh**\
  Berfungsi untuk memuat kembali halaman alarm yang telah ditampilkan.

- **Filter**\
  Menentukan rentang waktu history alarm yang ingin ditampilkan (Start time – End Time).

- **Ack**\
  Berfungsi untuk mematikan alarm.

- **Export**\
  Menyimpan data alarm dalam format excel.

  ![An image](./img/alarm.png)

### Historical data

Halaman “Historical Data” menampilkan record pembacaan parameter setiap menit, yang dapat digunakan sebagai bahan evaluasi.

Beberapa yang perlu di perhatikan yaitu :

1. Memilih cerobong, pilih cerobong yang ingin di lihat recordnya pada “Data logger”.
2. Menentukan rentang waktu record yang ingin ditampilkan pada “Time Range (From-To)”.
3. Klik “show” untuk menampilkan data record atau “export” untuk menyimpan sebagai excel.

![An image](./img/historical-data.png)

### Historical trend

Halaman “Historical Trend” menampilkan historical data dalam bentuk grafik untuk mendapatkan trending data parameter yang dimonitoring.
Beberapa yang perlu di perhatikan yaitu :

1. Memilih cerobong, pilih cerobong yang ingin di lihat recordnya pada “Data logger”.
2. Menentukan rentang waktu record yang ingin ditampilkan pada “Time Range (From-To)”.
3. Menentukan rata-rata tampilan pada pilihan “Average”.
4. Klik “show” untuk menampilkan data record atau “print” untuk mencetak langsung.

![An image](./img/historical-trend.png)

### Report

Halaman “Report” menampilkan informasi hasil rekap dari parameter monitoring Chimney dengan konsentrasi permenit.
Beberapa yang perlu di perhatikan yaitu :

1. Memilih cerobong, pilih cerobong yang akan dibuat laporannya pada pilihan “Chimney”.
2. Memilih jenis laporan, pilih jenis laporan yang akan dibuat pada pilihan “Template”.
3. Menentukan rentang waktu report yang ingin ditampilkan pada “Time Range (From-To)”.
4. Klik “generate” untuk menampilkan report atau “save as excel” untuk menyimpan sebagai excel.

![An image](./img/report.png)

### Sync Log

Halaman “Sync log” menampilkan riwayat dari sinkronisasi CEMS dengan SIPLAH. Pada menu ini, kita bisa melacak status pengiriman data ke SIPLAH sehingga jika terjadi kesalahan atau kegagalan bisa kita ketahui waktu dan penyebabnya.
Informasi yang dapat kita peroleh dari halaman ini diantaranya adalah :

1. “Server” merupakan sistem yang menerima dan mengelola data hasil pemantauan emisi dari CEMS.
2. “Chimney” merupakan nama cerobong dari data pengukuran yang dikirimkan ke SIPLAH.
3. “Measurement time” menujukkan waktu pengukuran emisi, jika pada measurement time tertulis “20 Apr 2021 - 08.00” itu berarti data yang dikirimkan adalah data pada tanggal 20 April tahun 2021 jam 08:00 sampai dengan jam 08:59.
4. “Message”, menunjukan status pengiriman, jika success berarti berhasil dan jika gagal akan ditunjukkan dengan status failed.

![An image](./img/sync-log.png)

## Pengaturan Aplikasi

Dalam menu settings terdapat beberapa submenu setting, diantaranya adalah :

### Company Profile

mengatur data profil perusahaan.

1. “Name”, nama perusahaan.
2. “Address”, alamat perusahaan.
3. “Telephone”, nomor telepon perusahaan.

Setelah mengisi data-data di atas, tekan tombol “save”.

![An image](./img/setting.png)

### SIPLAH

Memasukkan otentikasi ke SIPLAH dan untuk uji konektivitas dengan server.

1. “Base Url”, alamat server SIPLAH
2. “API Key”
   Kedua data di atas diperoleh dari KLHK setelah perusahaan terdaftar untuk sinkronisasi data.

Setelah mengisi data, klik “save”.

![An image](./img/setting-siplah.png)

**_Chimney_**, mengatur profil cerobong dan konfigurasi sinkronisasi dengan SIPLAH. 
Langkah – langkah setting chimney :
1)	Pilih cerobong yang akan dikonfigurasi.

![An image](./img/setting-siplah-1.png)

2)	Setelah memilih cerobong, akan muncul form editor seperti berikut :

![An image](./img/setting-siplah-2.png)

3)	Isikan data sesuai dengan kondisi aktual 
- _“Name”_, nama cerobong.
- _“UID”_
- _“Sync to SIPLAH”_, aktifkan pengiriman data ke SIPLAH berdasarkan jadwal.
- _“Synchron Schedule”_, jadwal pengiriman data ke SIPLAH
- _“Average Group”_
- _“Data Source”_, nama cerobong
- _“Time field alias”_
- _“Time Format”_, format waktu yang digunakan
- _“Retries”_
- _“Retry Interval”_, interval percobaan pengiriman ulang data yang gagal.
- _“Server Time Zone”_, zona waktu yang di gunakan data yang dikirimkan. 
- _“Sync success notif”_, aktifkan notifikasi telegram setiap kali berhasil mengirimkan data ke SIPLAH.
- _“Max resend count”_, batas maksimal percobaan pengiriman. Jika batas ini tercapai, maka data tidak akan dikirimkan lagi walaupun belum berhasil.

a.	SIPLAH Required Parameter\
	digunakan untuk mendapatkan informasi dari SIPLAH mengenai parameter  yang wajib dikirimkan ke SIPLAH. Klik “Get Required Parameters”.

![An image](./img/setting-siplah-3.png)

b.	SIPLAH Parameters Map\
mapping parameter yang akan dikirimkan ke SIPLAH.

![An image](./img/setting-siplah-4.png)

- _“Reset”_, untuk menghapus seluruh parameter.
- _“Add”_, untuk menambahkan parameter.
- _“Function”_ 
- Kolom _“source”_, diisi dengan nama parameter pada logger dan metode perhitungan datanya.
- _“Destination”_, harus diisi sesuai dengan penamaan parameter pada SIPLAH.

c.	Submit data to SIPLAH\
digunakan untuk mencoba mengirimkan data ke SIPLAH, seperti menguji mapping data dan otentikasi ke SIPLAH. 
- Atur tanggal dan jam data yang akan dicoba untuk dikirim.
- Klik _“Submit”_, jika berhasil maka akan ada pesan success.	

![An image](./img/setting-siplah-5.png)

### Settings Telegram
1)	Bot
- “name” diisi dengan nama pengirim notification.
- “token” diisi dengan token bot telegram.
2)	Channel
- “name” diisi dengan nama channel telegram.
- “chat id” diisi dengan id channel telegram.

![An image](./img/setting-telegram.png)

Klik _“save”_ untuk menyimpan dan isi kolom sending message lalu klik tombol _“send”_ untuk tes kirim notifikasi.

### Settings Report Template
mengatur format report sesuai dengan kebutuhan user. 

1)	Pilih template yang sudah ada atau klik “create” untuk membuat template baru.

![An image](./img/setting-report-template.png)

2)	Isikan data pada kolom untuk setting report.

![An image](./img/setting-report-template-1.png)

- “Name”, nama template.
- “Time Format”, format tanggal periode.
- “Data Group”, waktu untuk pengambilan rata-rata data.
- “Excel Template”, template file dengan format excel.
- “Sheet name”, nama sheet dalam template.
- “Time format 1”, format waktu dalam tabel report
- “Time format 2”, format waktu dalam tabel report
- “Field list”, daftar parameter yang di masukan ke template, klik “add” untuk menambah parameter :

![An image](./img/setting-report-template-2.png)


- > Kolom “Function”, pilih jenis kalkulasi data yang akan di tampilkan.
- >Kolom “Field”, masukan nama parameter pada logger / metode perhitungan datanya.
- >Kolom “Alias”, masukan nama data yang akan di gunakan pada template.
Klik “save” untuk menyimpan setting template.


### Settings Users

Mengubah atau menambahkan user yang dapat membuka aplikasi.

1)	Pilih user yang sudah ada atau klik “New user” untuk membuat user baru.

![An image](./img/setting-users.png)

2)	Isikan data pada kolom yang tersedia.

![An image](./img/setting-users-1.png)

- “Full name”, nama lengkap.
- “Email”, alamat email.
- “Username”, nama yang digunakan untuk login.
- “Password”, password yang digunakan untuk login.
- “Password verification”, pengulangan password.
- “Roles”, menentukan wewenang user.

### Logout

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Proses keluar dari aplikasi Continuous Emission Monitoring System dengan cara menekan icon user pada sebelah kanan kemudian menekan tombol logout maka akan menampilkan halaman login yang berarti telah keluar dari aplikasi.

![An image](./img/logout.png)

![An image](./img/logout-1.png)
 


