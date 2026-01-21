# 🧩 FormCraft Architecture

FormCraft Architecture is a **visual form builder** that allows users to design, customize, and export HTML forms **without writing code**.  
It provides real-time styling controls, dynamic field creation, and persistent feedback storage using LocalStorage.

---

## 🚀 Features

### 🎨 Design Customization
- Background color, border, radius, padding, margin
- Typography controls (font, size, alignment, spacing)
- Box shadows, opacity, rotation

### 🧱 Form Builder
- Add unlimited input fields dynamically
- Custom labels, placeholders, font size, and colors
- Header (H3) builder
- Ordered & unordered list builder

### 🧠 Live Editing
- Click-to-edit form title
- Click labels to rename instantly
- Changes reflect in real time

### 💾 Export & Persistence
- Download generated form as HTML
- Feedback stored in **LocalStorage (JSON)**
- Feedback persists after page refresh

### 🗂 Tabs System
- Design
- Content
- Advanced controls

---

## 🖥️ Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **LocalStorage API**

No frameworks. No dependencies. Pure frontend.

---

## 📁 Project Structure

FormCraft/
│── index.html
│── style.css
│── README.md
│── FORMCRAFT-ARCHITECTURE.pdf




---

## 🛠️ How to Use

1. Open `index.html` in a browser  
2. Use the **left panel** to customize the form  
3. Add fields, headers, and lists dynamically  
4. Click **Download Form HTML** to export  
5. Submit feedback below the form  
6. Refresh — feedback remains saved 🎉

---

## 💬 Feedback System

- Users can submit feedback after the form
- Stored using `localStorage` as JSON
- Automatically loaded on page refresh

Example stored data:
```json
[
  {
    "text": "Great form builder!",
    "time": "2026-01-21T10:30:00.000Z"
  }
]
