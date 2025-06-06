# AuraSphere Backend Requirements Document

## 1. Introduction

This document outlines the requirements for the backend of AuraSphere (MyAuraGram), a full-stack social media platform inspired by Instagram. AuraSphere enables users to express themselves through posts reflecting their moods and energy (aura), offering features such as profiles, media sharing, real-time interactions, stories, messaging, and an admin dashboard. The backend is designed with scalability, modularity, security, and extensibility in mind, leveraging Express.js and a modern JavaScript (ES6+) stack.

---

## 2. Functional Requirements

### 2.1 User Authentication
- Support user sign-up and authentication via email and Google OAuth (provider to be decided: Firebase Auth or Auth0).
- Secure session management and JWT-based authorization flows.

### 2.2 Profile Management
- Create and edit user profiles (bio, avatar, username, personal details).
- Profile privacy settings and avatar uploads.

### 2.3 Media Uploads & Post Management
- Allow users to upload images and short videos.
- Store media in cloud storage (e.g., Cloudinary, Firebase Storage).
- Enable posting captions and hashtags.
- Retrieve and manage user posts.

### 2.4 Feed & Explore Functionality
- Provide a scrollable feed of posts from followed users.
- Explore page for trending content and hashtags.
- Smooth delivery and filtering mechanisms.

### 2.5 Post Interactions & Follow System
- Like, comment on, and save posts with real-time update mechanisms.
- User can follow/unfollow other users to curate their feed.
- Record and display counts/engagement metrics.

### 2.6 Notifications & Real-time Capabilities
- Real-time notifications for interactions (likes, comments, follows) using Socket.io or Firebase Realtime Database.
- Scalable push notification architecture.

### 2.7 Stories
- Users can share 24-hour disappearing media stories.
- Story viewing, posting, and deletion workflows.

### 2.8 Messaging
- Direct, real-time user-to-user messaging with optional media sharing.
- Manage chat sessions, message history, and unread indicators.

### 2.9 Admin Dashboard
- Admin interface for managing reports, flagged content, and user moderation.
- Dashboard analytics for usage and activity.

### 2.10 Optional/Advanced Features
- Audio reels: Users can record and share short audio clips.
- Profile themes: Custom themes/color palettes for profile pages.
- Mood-based media filters and suggestions.
- AI-generated captions or hashtags for new posts.
- Scheduling: Post at a specified future time.

---

## 3. Technical Requirements

- Platform: Node.js with Express.js (as backend web framework).
- Language: JavaScript (ES6+).
- Data interchange: RESTful API; JSON as transport format.
- Real-time: WebSocket/SSE for messaging and notifications.
- Media: Integration with provider such as Cloudinary or Firebase Storage.
- Database (to be decided during implementation): Likely MongoDB, Firebase, or Supabase.
- Authentication: JWT, OAuth (Google)/Email provider.
- Testing: Jest framework for unit/integration testing.
- Linting: ESLint with existing configuration.
- Documentation: Endpoints auto-documented via Swagger.
- Configuration management via environment variables.
- Graceful shutdown (SIGTERM support).
- Security: CORS enabled, rate limiting, input validation, and sanitization.

---

## 4. Module Overview

- **/controllers**: Route handlers for business logic (e.g., health checks, posts, authentication).
- **/routes**: API endpoint definitions and binding to controllers.
- **/middleware**: Shared Express middleware for validation, authentication, error handling.
- **/services**: Abstraction for business processes (e.g., media management, notification, profile).
- **/models**: (To be implemented) Database models and schemas.
- **/utils**: (Planned) Helper utilities, common response formatting, validation, etc.

---

## 5. API Overview

Swagger documentation is available at `/docs`.

Example API endpoints (planned and current):

- `GET /`: Health check endpoint.
- `POST /auth/signup`: Register new user (future).
- `POST /auth/login`: User login (future).
- `GET /users/:id/profile`: Get user profile (future).
- `POST /posts`: Create a new post (future).
- `GET /feed`: Fetch user feed (future).
- `POST /interactions/like`: Like a post (future).
- `POST /interactions/comment`: Comment on post (future).
- `GET /notifications`: Get current notifications (future).
- `POST /story`: Create a story (future).
- Real-time socket endpoints for messaging, typing indicators, etc. (future).

---

## 6. Third-party Integrations

Planned or optional integrations include:
- **Firebase Auth/Auth0**: Authentication.
- **Cloudinary/Firebase Storage**: Media/image/video storage.
- **Socket.io / Firebase Realtime DB**: Real-time features for notifications and messaging.
- **AI Services (OpenAI API, etc.)**: AI-generated captions or filtering.
- **Analytics Tools**: Usage monitoring (admin only).

---

## 7. Architectural Considerations

- **Modular Design**: Each feature is encapsulated in its own module (controller/service/route).
- **Scalability**: Stateless API layer, easily horizontally scalable behind load balancer.
- **Security**: Strict input validation, CORS, secure session tokens, environment-based secrets.
- **Documentation**: Continuous endpoint coverage via Swagger (OpenAPI 3.0).
- **Extensibility**: New features can be added as modules without impacting existing code.
- **Error Handling**: Centralized error middleware for JSON error output.
- **Testing**: Comprehensive unit/integration tests via Jest.

---

## 8. Roadmap & Milestones

1. Expand project structure and core setup.
2. Build authentication and profile management (routes, controllers, services).
3. Implement media upload/storage and post management.
4. Develop feed, explore, interactions, and follow system.
5. Integrate notifications and real-time architecture.
6. Add stories and messaging functionality.
7. Create admin dashboard features.
8. Add optional/recommended features (audio reels, AI, scheduling).
9. Finalize middleware, harden security, and extend documentation.
10. Complete coverage with automated tests and continuous integration.

---

## 9. Open Topics & Risks

- **Database Selection**: Final choice between MongoDB, Firebase, or Supabase postponed until data model is defined.
- **Media Storage Provider**: Cloudinary vs Firebase Storage to be finalized based on integration testing.
- **Scaling Real-time Features**: Verification of chosen provider’s scalability for messaging and notifications.
- **Privacy/Compliance**: Ensure data privacy and compliance with applicable regulations.
- **AI Feature Feasibility**: Explore cost and API access for AI-generated features.

---

## 10. References

- [Swagger API Docs - `/docs`]
- [README.md for summary]
- Initial project files in `/aurasphere/src` as codebase entrypoint.
