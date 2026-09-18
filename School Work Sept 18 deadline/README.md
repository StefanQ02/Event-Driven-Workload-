# Render Users API

Simple Node.js + Express API for a Render Web Service.

## Endpoint

GET `/api/users`

Returns a JSON array containing:
- LastName
- FirstName
- Email
- Password

The included records are fictional demo data. Do not put real passwords or personal information in a public API.

## Render settings

- Service type: Web Service
- Runtime: Node
- Build Command: `npm install`
- Start Command: `npm start`
- Plan: Free (suitable for a school/demo project)

Render requires the server to listen on `0.0.0.0`; this project already does that.

After deployment, open:

`https://YOUR-SERVICE-NAME.onrender.com/api/users`
