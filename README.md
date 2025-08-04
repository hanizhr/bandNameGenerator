# 🎸 Band Name Generator

A simple web app built with **Node.js**, **Express**, and **EJS** that generates random band names at the click of a button.

---

## 🚀 Features

- Generates random band names from predefined lists.
- Stylish UI with responsive and clean design.
- Built with Express and EJS templating.
- Easy to customize and extend.

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- HTML + CSS (custom styling)

---

## 📁 Project Structure

project-root/
├── app.js # Main Express server
├── public/
│ └── style.css # Styling for the app
├── views/
│ ├── index.ejs # Main template
│ └── footer.ejs # Included footer template
└── README.md # This file


---

## 💡 How It Works

1. On initial load (`/` route), a default message is shown.
2. Clicking the **"generate name"** button sends a request to `/submit`.
3. The server responds with a new randomly generated name using a combination of predefined first and last names.

---

## 🧑‍💻 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/band-name-generator.git
   cd band-name-generator
