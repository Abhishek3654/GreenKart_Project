# 🧪 GreenKart Playwright Automation Framework

A production-ready **End-to-End (E2E) test automation framework** built using **Playwright + TypeScript**, following the **Page Object Model (POM)** design pattern with **data-driven testing**, **Allure reporting**, and **CI/CD readiness**.

---

## 🚀 Project Overview

This framework automates the complete user journey on the GreenKart application:

* 🔍 Search product
* ➕ Add quantity
* 🛒 Add to cart
* 💸 Apply promo code
* 🌍 Select country
* ✅ Place order & validate success

---

## 🏗️ Tech Stack

* **Playwright** (UI Automation)
* **TypeScript**
* **Page Object Model (POM)**
* **JSON-based Test Data**
* **Allure Reporting**
* **Git + CI/CD Ready**

---

## 📁 Project Structure

```
GreenKart_Project/
│
├── tests/
│   └── GreenKartPOM.spec.ts
│
├── pages/
│   ├── HomePage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── POManager.ts
│
├── utils/
│   └── testData.json
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/greenkart-playwright.git
cd greenkart-playwright
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Run specific test

```bash
npx playwright test tests/GreenKartPOM.spec.ts
```

---

## 📊 Allure Reporting

### Generate report

```bash
allure generate allure-results --clean -o allure-report
```

### Open report

```bash
allure open allure-report
```

---

## 🔁 Data-Driven Testing

Test data is stored in:

```
/utils/testData.json
```

Example:

```json
{
  "item": "Cucumber",
  "code": "rahulshettyacademy",
  "country": "India"
}
```

---

## 🧠 Framework Highlights

* ✅ Clean **Page Object Model**
* ✅ **Reusable methods** for scalability
* ✅ **Dynamic locators** (no hardcoding)
* ✅ **Auto-waits & stable assertions**
* ✅ **Parallel execution support**
* ✅ **Retry mechanism for flaky tests**
* ✅ **Allure reporting with screenshots & logs**

---

## ⚡ CI/CD Ready (Jenkins / GitHub Actions)

Example command for CI:

```bash
npm install
npx playwright install
npx playwright test
```

---

## 🛠️ Future Enhancements

* 🔹 Docker support
* 🔹 GitHub Actions pipeline
* 🔹 API + UI hybrid testing
* 🔹 Slack/Email notifications
* 🔹 Advanced reporting dashboards

---

## 👨‍💻 Author

**Abhishek (QA Engineer)**
Automation enthusiast focused on building scalable and maintainable test frameworks.

---

## ⭐ Contribution

Feel free to fork, improve, and raise PRs 🚀

---

## 📌 Note

This project demonstrates **real-world automation framework design**, suitable for interviews and production-level understanding.

---
