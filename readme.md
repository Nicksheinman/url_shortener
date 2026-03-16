# URL Shortener

A full-stack web application for creating and managing shortened URLs.
The project provides a simple interface to generate short links and manage them through a REST API.

The backend is built with Django REST Framework, while the frontend uses React and Bootstrap to deliver a responsive user interface.

## Features
- URL shortening and link management
- User registration and authentication
- Authenticated users can manage their own links
- Support for anonymous link creation
- RESTful API built with Django REST Framework
- Session-based authentication
- CSRF protection
- Responsive UI built with React and Bootstrap

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework

### Frontend
- JavaScript
- React
- Bootstrap

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
