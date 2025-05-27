 📚 School Management API

A Node.js and Express-based API that allows users to add and list schools. The listing is sorted by proximity to a user-specified location using MySQL as the database.

---

## 🚀 Features

* Add a new school with validation.
* List all schools sorted by geographical proximity.
* Input validation for both endpoints.
* Clean, modular codebase.
* Designed for scalability and ease of deployment.

---

## 📁 Project Structure

```
.
├── controllers/
│   └── school.controllers.js
├── routes/
│   └── school.routes.js
├── db/
│   └── db.js
├── app.js
├── server.js
├── .env
└── README.md
```

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* MySQL
* dotenv
* Postman (for API testing)

---

## 🧩 Database Schema

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
PORT=3000
```

4. **Start the server**

```bash
npm start
```

---

## 📌 API Endpoints

### ➕ Add School

* **Endpoint**: `/addSchool`
* **Method**: `POST`
* **Description**: Adds a new school with name, address, latitude, and longitude.

#### 📥 Request Body

```json
{
  "name": "Greenwood High",
  "address": "123 Main Street, Springfield",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

#### ✅ Validations

* All fields must be provided
* Latitude and longitude must be valid numbers

#### 📤 Response

```json
{
  "message": "School added successfully",
  "schoolId": 1
}
```

---

### 📍 List Schools (Sorted by Proximity)

* **Endpoint**: `/listSchools`
* **Method**: `GET`
* **Query Parameters**:

  * `latitude` (required)
  * `longitude` (required)

#### 📥 Example Request

```
GET /listSchools?latitude=40.7128&longitude=-74.0060
```

#### 📤 Response

```json
[
  {
    "id": 3,
    "name": "Central High",
    "address": "456 Broadway Ave",
    "distance_km": 1.2
  },
  {
    "id": 1,
    "name": "Greenwood High",
    "address": "123 Main Street",
    "distance_km": 3.5
  }
]


📝 License

MIT License. See `LICENSE` for more information.

