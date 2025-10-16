# User Management System (Docker-enabled)

## Run with Docker Compose (recommended)
This repository includes `docker-compose.yml` that starts:
- MySQL 8.1
- Backend (built from ./backend)
- Frontend (built from ./frontend)

From project root:
```
docker compose up --build
```

- Backend: http://localhost:8080
- Frontend: http://localhost:5173 (served by nginx)

Notes:
- Backend `application.properties` is configured to connect to MySQL service `mysql` in compose.
- Default MySQL root password: `password`
- Create admin user via `/api/auth/register` (set role to ROLE_ADMIN) or insert into DB.

