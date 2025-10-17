# 🚀 User Management System

A complete full-stack User Management System built with Spring Boot backend and modern HTML frontend.

## ✨ Features

- **Complete CRUD Operations**: Create, Read, Update, Delete users
- **Role-Based System**: Admin, User, and Manager roles
- **Beautiful UI**: Modern, responsive design with animations
- **Real-time Updates**: Instant UI updates after operations
- **Database Integration**: H2 in-memory database with console access
- **REST API**: Complete backend API for user management
- **No Authentication**: Public access for easy testing and development

## 🛠️ Technology Stack

### Backend
- **Spring Boot 3.2.5**
- **Spring Data JPA**
- **Spring Security** (configured for public access)
- **H2 Database** (in-memory)
- **Lombok** for code simplification
- **Maven** for dependency management

### Frontend
- **HTML5** with modern CSS3
- **JavaScript (ES6+)**
- **Responsive Design**
- **Fetch API** for backend communication

## 🚀 Quick Start

### Prerequisites
- Java 21 or higher
- Maven 3.6+

### Running the Application

1. **Clone the repository**
   ```bash
   git clone https://github.com/vikram/User-Management-System.git
   cd User-Management-System
   ```

2. **Start the Backend**
   ```bash
   cd backend
   mvn spring-boot:run
   ```

3. **Access the Application**
   - **Frontend**: Open `frontend/index.html` in your browser
   - **Backend API**: `http://localhost:8080/api/users`
   - **Database Console**: `http://localhost:8080/h2-console`

## 📊 Sample Users

The system comes with pre-created users:

| Username | Password | Role | Full Name |
|----------|----------|------|-----------|
| admin | admin123 | ADMIN | System Administrator |
| john_doe | user123 | USER | John Doe |
| jane_manager | manager123 | MANAGER | Jane Smith |

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/{id}` | Update user |
| DELETE | `/api/users/{id}` | Delete user |
| GET | `/health` | Health check |

## 🗄️ Database Access

**H2 Console Credentials:**
- **URL**: `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: `password`

## 📁 Project Structure

```
User-Management-System/
├── backend/
│   ├── src/main/java/com/example/ums/
│   │   ├── config/
│   │   │   └── SecurityConfig.java
│   │   ├── controller/
│   │   │   ├── HomeController.java
│   │   │   └── UserController.java
│   │   ├── model/
│   │   │   └── User.java
│   │   ├── repository/
│   │   │   └── UserRepository.java
│   │   └── UmsApplication.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── application-docker.properties
│   └── pom.xml
├── frontend/
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   ├── package.json
│   └── vite.config.js
├── docker-compose.yml
└── README.md
```

## 🎨 Frontend Features

- **Modern UI**: Beautiful gradient backgrounds and card layouts
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Form Validation**: Client-side validation for all inputs
- **Real-time Feedback**: Success/error messages for operations
- **User Cards**: Visual representation of users with edit/delete actions
- **Role Badges**: Color-coded role indicators

## 🔒 Security Configuration

The application is configured for public access during development:
- CORS enabled for frontend communication
- No authentication required
- H2 console accessible
- All API endpoints public

## 🐳 Docker Support

The project includes Docker configuration:
```bash
docker-compose up --build
```

## 📝 User Model

```java
@Entity
public class User {
    private Long id;
    private String username;
    private String password;
    private String role;        // ADMIN, USER, MANAGER
    private String fullName;
    private String email;
}
```

## 🌐 Access URLs

- **Main Application**: `frontend/index.html`
- **Backend API**: `http://localhost:8080`
- **Users API**: `http://localhost:8080/api/users`
- **Health Check**: `http://localhost:8080/health`
- **Database Console**: `http://localhost:8080/h2-console`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vikram**
- GitHub: [@vikram](https://github.com/vikram)
- Email: www.vikramvh.11@gmail.com

---

**Built with ❤️ using Spring Boot + HTML + CSS + JavaScript**