# Enterprise Deployment System

## Environments
- Development (Heroku)
- Staging (Heroku)
- Production (IIS)

## Features
- Environment isolation
- MongoDB Atlas (separate DBs)
- Health check API: /health
- Logging with morgan
- Performance monitoring
- Deployment scripts
- Rollback support

## Run Locally
npm install
npm run dev

## Health Check
GET /health

## Deployment
Use scripts inside /scripts folder