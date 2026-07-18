# Game Waitlist API

Express REST API for managing a digital game waitlist, built to replace manual paper and Excel tracking for floor staff. Provides full CRUD operations via route parameters, with validation, sanitization, and error handling for unstable network conditions.

## Tech Stack

- Node.js
- Express 5
- In-memory data store

## Getting Started

```bash
npm install
npm run dev
```

Server runs on `http://localhost:3000` by default (set `PORT` env var to override).

## Endpoints

### Health Check

**GET /health**

Response `200`:
```json
{ "success": true, "data": { "status": "ok" }, "error": null }
```

### List all waitlist entries

**GET /waitlist**

Response `200` (with entries):
```json
{ "success": true, "data": [ { "id": 1, "name": "Alex", "gameTitle": "Catan", "partySize": 4, "createdAt": "..." } ], "error": null }
```

Response `200` (empty):
```json
{ "success": true, "data": [], "error": null, "message": "No data found" }
```

### Get a single entry

**GET /waitlist/:id**

Response `200`: entry object
Response `404`: entry not found
Response `400`: invalid id parameter

### Create an entry

**POST /waitlist**

Request body:
```json
{ "name": "Alex", "gameTitle": "Catan", "partySize": 4, "contactNumber": "optional" }
```

Required fields: `name` (string), `gameTitle` (string), `partySize` (positive integer)

Response `201`: created entry
Response `400`: validation errors with field-level messages

### Update an entry

**PUT /waitlist/:id**

Request body: same shape as POST
Response `200`: updated entry
Response `404`: entry not found
Response `400`: validation errors or invalid id

### Delete an entry

**DELETE /waitlist/:id**

Response `200`:
```json
{ "success": true, "data": { "id": 1 }, "error": null, "message": "Entry removed successfully" }
```
Response `404`: entry not found

## Error Handling

- Undefined routes return a `404` JSON error (no default HTML error page)
- Malformed JSON request bodies return a `400` with a clear error, without crashing the server
- All unexpected errors are caught by centralized middleware and return a standardized JSON error shape

## Response Shape

All responses follow:
```json
{ "success": boolean, "data": object | array | null, "error": string | null }
```

## Linting

```bash
npm run lint
```

## Notes

- Data is stored in-memory and resets on server restart. A persistent store (database) would be a follow-up task before production use.