# URL Shortener

A full-stack web application for creating and managing shortened URLs.
The project provides a simple and clean interface to generate short links and manage them through a REST API.

The backend is built with Django REST Framework, while the frontend uses React and Bootstrap to deliver a responsive user interface.

## Features
- Create short links quickly and easily
- Manage links for authenticated users
- Support for anonymous link creation
- Session-based authentication
- CSRF protection
- RESTful API built with Django REST Framework
- Responsive UI with React and Bootstrap
- Copy-to-clipboard functionality for generated links

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework

### Frontend
- JavaScript
- React
- Bootstrap

### Testing
- pytest
- pytest-django
- Playwright (E2E testing)

### Security
- Session Authentication
- CSRF Protection

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
