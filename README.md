

# 🚗 Car Dealer App

This application allows users to fetch and display vehicle models for a specific `makeId` and `year` using the **VPIC API**.

## 🛠️ Features

- Dynamically fetch vehicle data based on user inputs (`makeId` and `year`).
- Display results in a well-structured table.
- Utilizes Next.js 13's `app` router for modern server and client-side rendering.
- Styled using Tailwind CSS for responsive design.

---

## 📂 Project Structure

```
.
├── app/
│   ├── result/
│   │   ├── [makeId]/
│   │   │   ├── [year]/
│   │   │   │   ├── page.tsx   # Dynamic route component
│   │   │   │   ├── types.ts   # Type definitions for data
├── components/
│   ├── Table.tsx               # Reusable table component
├── public/
├── styles/
│   ├── globals.css             # Tailwind configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
1. **Node.js** (>=16.x recommended)
2. **npm** or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Mer0rellana/car-dealer-app
cd car-dealer-app
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser.

---

## 🧩 Usage

1. Navigate to `/result/{makeId}/{year}` in your browser (e.g., `/result/443/2020`).
2. The app fetches data dynamically from the VPIC API for the given `makeId` and `year`.
3. View vehicle model data displayed in a responsive table.

---

## 🛠️ Built With

- [Next.js 13](https://nextjs.org/) - Modern framework for server and client-side rendering.
- [VPIC API](https://vpic.nhtsa.dot.gov/api/) - Vehicle data source.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙋‍♀️ Author

**Mercedes Pilar Orellana**  
[GitHub](https://github.com/Mer0rellana) | [LinkedIn](https://www.linkedin.com/in/m-orellana/)
