Docker ready & ready with Development 
![alt text](https://github.com/permana-ang/iot-fullstack/blob/master/docker%20ps.png?raw=true) 


1.Clone Repository GitHub 
git clone https://github.com/permana-ang/iot-fullstack.git

2. Masuk ke folder project:
cd iot-fullstack

3.Pastikan strukturnya seperti ini:
iot-fullstack/
├── .env
├── docker-compose.yml
├── backend/
│   ├── .env
│   ├── Dockerfile
│   └── ...
└── frontend/
    ├── Dockerfile
    └── ...

4. buat file .env di root project (sejajar dengan docker-compose.yml):
      nano .env
   Isikan contoh isi (bisa disesuaikan):
  # General
  FRONTEND_PORT=80
  BACKEND_PORT=5000
  
  # Database
  MYSQL_ROOT_PASSWORD=pas
  MYSQL_DATABASE=trai
  MYSQL_USER=pes
  MYSQL_PASSWORD=pas


5. Siapkan File .env di Backend
     cd backend
     nano .env
   Isi contoh:
      PORT=5000
      DB_HOST=db
      DB_USER=pes
      DB_PASSWORD=pas
      DB_NAME=trai
      JWT_SECRET=supersecret
6. Build dan Jalankan Docker Compose > Kembali ke root project:
   docker compose build
   docker compose up -d
7. Cek container aktif:
     docker ps

8. Akses Aplikasi :
    Frontend: buka di browser → http://<ip-server>
    Backend API: http://<ip-server>:5000
    phpMyAdmin: http://<ip-server>:12345

9. Cek Log Kalau ada masalah:
    docker compose logs -f backend
    docker compose logs -f frontend
