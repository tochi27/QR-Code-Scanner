# QR Code Movie Generator

This is a dynamic NestJS application that generates a new QR code every 10 seconds. Each QR code links to a unique page displaying 10 random movies (with titles, posters, and details). It's built with:

- NestJS (for backend logic and routing)
- EJS (for dynamic server-side rendering)
- Movie Data Source (Local static JSON file used as a mock database for retrieving movie information)
- QRCode (to generate QR codes in base64 format)

---

## Features

- Generates a fresh QR code every 10 seconds
- Each QR code links to a dynamic page with 10 random movies
- Movies display with fallback images for broken posters
- Clean EJS-rendered UI with auto-refresh logic

---

## Folder Structure

src/
  main.ts
  app.module.ts
  views/
    qrcode.ejs
    movies.ejs
  public/
    default.jpg
  root/
    root.controller.ts
    root.module.ts
  qrcode/
    qrcode.module.ts
    qrcode.controller.ts
    qrcode.service.ts
  movies/
    movies.module.ts
    movies.controller.ts
    movies.service.ts

I intentionally adopted this structure for its efficiency and scalability—particularly beneficial for long-term projects or repositories with a large folder hierarchy.
By organizing features into self-contained directories (like the qr-code folder), it becomes much easier to work within a specific area of concern.
For instance, if updates are needed for the QR code functionality, I can simply navigate to the qr-code folder where all related modules, services, and controllers are grouped together.
This modular approach greatly enhances code readability, streamlines debugging, and improves the overall maintainability and transferability of the codebase.


---

## Setup Instructions

1. Clone the repo
   git clone https://github.com/tochi27/qr-code-movie-generator.git
   cd qr-code-movie-generator
   Install dependencies
   npm install
   Environment Variables

2. Create a .env file in the root directory:

BASE_URL=http://192.xxx.x.x:3000
PORT=3000
Replace 192.xxx.x.x with your machine’s local IP address so your phone can access the server over LAN.

3. Run the app

npm run dev
Visit: http://192.xxx.x.x:3000/qr

Scan the QR code with your phone to test on mobile.

4. Movie Data
Currently, movie data is served randomly through a mock service. You can replace this with a real API like OMDb or TMDb if needed.

5. Testing
To test QR refresh and movie rendering:
Watch the QR code regenerate every 10 seconds
Scan the code with a phone — each page should show a fresh set of 10 movies
Broken image posters will be replaced with a default placeholder

6. Notes
This project doesn’t use a database. Movie data is stored temporarily in memory and expires after 10 minutes.
