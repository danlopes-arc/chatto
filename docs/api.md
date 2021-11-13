
# API
## Authentication
- bearer token
- all routes require authentication unless explicitly told otherwise

## Routes
### Auth
```HTTP
POST /auth
```

### User
- Get current user
  ```HTTP 
  GET /user
  ```

- Create user
  - must not be authenticated
  ```HTTP
  POST /users
  ```

- Get user
  ```HTTP
  GET /users/{username}
  ```

### Chat
  - Get current user's chats
    ```HTTP
    GET /chats
    ```

#### Direct
  - Create direct chat
    ```HTTP
    POST /chats/{user}
    ```

  - Get direct chat
    ```HTTP
    GET /chats/{user}
    ```
    ##### Message

  - Get direct chat messages
    ```HTTP
    GET /chats/{user}/messages
    ```

  - Create direct chat message
    ```HTTP
    POST /chats/{user}/messages
    ```

#### Group

  - Create group
    ```HTTP
    POST /groups
    ```

  - Get group
    - auth user must be in the group

    ```HTTP
    GET /groups/{group}
    ```

  - Delete group 
    - auth user must be the group owner

    ```HTTP
    DELETE /groups/{group}
    ```

  - TODO: Rename group
    - auth user must be the group owner

    ```HTTP
    PUT /groups/{group}/name
    ```

- Update group owner
  - auth user must be the group owner

  ```HTTP
  PUT /groups/{group}/owner
  ```

##### Users
- Get group users
  - auth user must be in the group

  ```HTTP
  GET /groups/{group}/users
  ```

- Add group user
  - auth user must be the group owner

  ```HTTP
  POST /groups/{group}/users
  ```

- Remove group user
  - auth user must be the group owner
  - the gorup owner cannot be removed

  ```HTTP
  DELETE /chats/{group}/users/{user}
  ```

##### Messages
  - Get group messages
    - auth user must be in the group

    ```HTTP
    GET /groups/{group}/messages/{message}
    ```

  - Create group messages
    - auth user must be in the group

    ```HTTP
    POST /groups/{group}/messages
    ```
