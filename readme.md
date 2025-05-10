# 🧠 VYB Smart Nutrition Estimator

A MERN stack app that estimates the nutritional values of Indian home-cooked dishes — even with missing or messy data.

---

## 🔄 How It Works

1. Input dish name (e.g., "Jeera Aloo")
2. System finds recipe (from mock DB)
3. Handles:
   - Unit conversions (e.g., 1 katori = 150g)
   - Synonyms/spellings (e.g., "aloo" → "potato")
   - Nutrition lookup per 100g
   - Per-serving estimate (180g)
4. Logs assumptions/fallbacks

---

## 📦 Tech Stack

- MongoDB (optional / data in JSON)
- Express (Node.js)
- React + Tailwind
- Axios

---

## 🚧 Assumptions + Edge Case Handling

See `debug-log.txt` — logs fallbacks for each dish:
- Missing ingredients
- Ambiguous units (e.g., "glass")
- Spelling variations
- No fixed recipe

---

## 🧪 Bonus: Manual Reasoning

### 🔸 Q1: Map "lightly roasted jeera powder"

Mapped to: **jeera (cumin seeds)**  
Justification: Minimal loss of nutritional content when lightly roasted. No significant transformation; retains core profile.

### 🔸 Q2: Loss Ratio Calculation

Raw: 950g, Cooked: 700g  
**Loss Ratio** = (950 - 700) / 950 = **~26.3%**

### 🔸 Adjusted Nutrition (for 180g)

If total cooked dish is 700g, and total nutrition is known:  
`Per 180g = Total Nutrition * (180 / 700)`

---

## ▶ To Run

```bash
# Backend
cd server
npm install
node server.js

# Frontend
cd client
npm install
npm start
```

---

## 📁 Output Sample

Each dish has a JSON in `/output/` like:

```json
{
  "dish": "Jeera Aloo (mild fried)",
  "dishType": "Dry Sabzi",
  "nutritionPer180g": {
    "calories": 210.55,
    "protein": 4.2,
    "fat": 3.5,
    "carbs": 39.8
  },
  "assumptions": [
    "Mapped 'aloo' → 'potato'",
    "Used default conversion for 'katori'"
  ]
}
```

---

## 📧 By

OpenAI-built solution for VYB.ai Assignment.