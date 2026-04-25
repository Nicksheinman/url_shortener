# URL Shortener

Live Demo: https://url-shortener-six-xi-42.vercel.app/

A full-stack web application for creating and managing shortened URLs with support for both authenticated and anonymous users.

The project was built with a strong focus on backend architecture, authentication flows, testing, and deployment reliability. It includes secure session-based authentication, email verification, password recovery, automated testing, and a fully deployed production environment.

## Features
- Create short links quickly and easily
- Manage links for authenticated users
- Support for anonymous link creation
- User registration with email verification
- Password reset via email flow
- Session-based authentication
- CSRF protection for secure requests
- Responsive frontend built with React and Bootstrap
- RESTful API built with Django REST Framework
- Automated backend and end-to-end testing

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- PostgreSQL

### Frontend
- JavaScript
- React
- Bootstrap

### Testing
- pytest
- pytest-django
- Playwright (E2E testing)

### Deployment
- Render (Backend + PostgreSQL)
- Vercel (Frontend)

### Security
- Session Authentication
- CSRF Protection
- Email Verification
- Password Recovery Flow

## Testing

### The project includes both backend and end-to-end testing:
- API endpoint testing with pytest
- Django integration testing with pytest-django
- End-to-end UI testing with Playwright

### Test coverage includes:
- authentication flows
- link creation/deletion
- anonymous sessions
- password reset flow
- API behavior validation

## Architecture

The application follows a REST API architecture:

React (Frontend)

⬇

Django REST API

⬇

Database

The frontend communicates with the backend through API endpoints to perform link management operations.

## Installation

### Backend
- pip install -r requirements.txt
- python manage.py migrate
- python manage.py runserver

### Frontend
- npm install
- npm run dev

### Running Tests
pytest
