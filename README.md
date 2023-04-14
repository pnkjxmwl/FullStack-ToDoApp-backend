##ToDo API Documentation
This API is built using Node.js and MongoDB to manage a simple todo list. The following endpoints are available:

Endpoints
GET /api/todo
Returns a list of all todos in the database.

Response json
```
[
  {
    "_id": "609ee187e901883afc6c2d62",
    "text": "Buy groceries",
    "priority": 1,
    "status": "pending",
    "__v": 0
  },
  {
    "_id": "609ee1aae901883afc6c2d63",
    "text": "Walk the dog",
    "priority": 2,
    "status": "pending",
    "__v": 0
  }
]
```

POST /api/save
Creates a new todo in the database.

Request json
```
{
  "text": "Finish project",
  "priority": 1
}

```
Response json
```
{
  "_id": "609ee2f4e901883afc6c2d64",
  "text": "Finish project",
  "priority": 1,
  "status": "pending",
  "__v": 0
}
```

POST /api/update

Updates an existing todo in the database.

Request json
```
{
  "_id": "609ee2f4e901883afc6c2d64",
  "text": "Finish project by tomorrow",
  "priority": 1,
  "status": "in-progress"
}
```
Response text
```
Updated Successfully...
```

POST /api/delete

Marks an existing todo as deleted.

Request json
```
{
  "_id": "609ee2f4e901883afc6c2d64"
}
```
Response text
```
Deleted Successfully...
```
Models
The ToDo model has the following properties:

json
```
{
  "text": {
    "type": "string",
    "required": true
  },
  "priority": {
    "type": "number",
    "required": true
  },
  "status": {
    "type": "string"
  }
}
```
Technologies Used
Node.js
MongoDB
Dependencies
Express.js
Mongoose
Dotenv
Cors

Running Locally
Clone the repository: git clone https://github.com/username/repo.git
Navigate to the project directory: cd repo
Install dependencies: npm install
Create a .env file and add your MongoDB URL: MONGODB_URL=mongodb://<username>:<password>@<host>:<port>/<database>
Start the server: npm start
