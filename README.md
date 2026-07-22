# AI Expense Automation 💰🤖

An intelligent expense processing workflow that uses **Google Gemini AI**, **n8n**, and **Google Sheets** to automate expense analysis and record keeping.

The workflow receives expense information, uses AI to analyze the expense, determines whether managerial approval is required based on company policy, and automatically stores the processed data in Google Sheets.

---

## 📌 Problem Statement

Many organizations still process employee expenses manually. Employees submit receipts and expense details, while finance teams manually review submissions, determine whether approval is needed, and record everything in spreadsheets.

This manual process is:

- Time-consuming
- Error-prone
- Difficult to scale
- Inconsistent across departments

This project automates the entire process using AI-powered decision making and workflow automation.

---

# 🚀 Solution

AI Expense Automation automatically:

1. Receives employee expense information.
2. Uses Google Gemini AI to analyze the expense.
3. Extracts structured expense information.
4. Determines whether approval is required.
5. Saves the processed expense into Google Sheets.

This reduces manual work while improving consistency and speed.

---

# 🏗️ Workflow Architecture

```
Manual Trigger
        │
        ▼
Edit Fields
        │
        ▼
Google Gemini AI
        │
        ▼
Code (JSON Parser)
        │
        ▼
Google Sheets
```

---

# ✨ Features

- AI-powered expense analysis
- Automatic extraction of expense details
- Automatic approval decision
- Google Sheets integration
- Structured JSON processing
- Low-code workflow using n8n

---

# 🛠️ Technologies Used

- n8n
- Google Gemini AI
- Google Sheets API
- OAuth2 Authentication
- JavaScript
- JSON

---

# 📂 Project Structure

```
AI-Expense-Automation
│
├── assets/
│
├── docs/
│   ├── presentation.md
│   ├── problem.md
│   └── workflow.md
│
├── screenshots/
│
├── workflow/
│   └── expense-automation.json
│
├── .gitignore
│
└── README.md
```

---

# ⚙️ Workflow Process

### Step 1 — Manual Trigger

Starts the workflow for testing and development.

---

### Step 2 — Edit Fields

Captures expense information including:

- Employee Name
- Employee Email
- Vendor
- Amount
- Category
- Expense Date

---

### Step 3 — Google Gemini AI

Gemini analyzes the submitted expense and returns structured JSON in the format:

```json
{
  "employee_name": "",
  "employee_email": "",
  "vendor": "",
  "amount": 0,
  "category": "",
  "expense_date": "",
  "approval_required": true
}
```

Business Rule:

- Amount > 20,000 → Approval Required
- Amount ≤ 20,000 → No Approval Required

---

### Step 4 — JavaScript Code Node

The Code node converts Gemini's JSON text response into structured JSON that n8n can use.

```javascript
const text = $json.content.parts[0].text;

const parsed = JSON.parse(text);

return {
  json: parsed,
};
```

---

### Step 5 — Google Sheets

The workflow appends a new row containing:

- Employee Name
- Employee Email
- Vendor
- Amount
- Category
- Expense Date
- Approval Required

---

# 📊 Example Output

| Employee | Vendor | Amount | Category | Approval |
|----------|---------|--------|----------|----------|
| Faith Kerubo | Naivas Supermarket | 25,000 | Office Supplies | ✅ True |

---

# 🔐 Authentication

Google OAuth2 was configured for:

- Google Sheets API
- Google Drive API

The workflow securely authenticates using OAuth credentials.

---

# ▶️ How to Run

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Open n8n.

3. Import:

```
workflow/expense-automation.json
```

4. Configure:

- Google Gemini credentials
- Google Sheets credentials

5. Execute the workflow.

6. Verify that a new expense record is added to Google Sheets.

---

# 🎯 Future Improvements

- Gmail integration for automatic expense submission
- Receipt OCR processing
- PDF report generation
- Slack notifications
- Approval dashboard
- Database storage
- Finance analytics dashboard

---

# 👩‍💻 Author

**Faith Kerubo**

Software Engineer | AI Enthusiast | Economist

GitHub: https://github.com/faith-kerry

---

# 📄 License

This project was developed for educational purposes and hackathon participation.