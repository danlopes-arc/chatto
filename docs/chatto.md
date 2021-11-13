# chatto
Chatto is a chat app where users can communicate among themselves either directly or through groups.

## How it works
### User
- can chat whith others directly
- can participate in groups
- are identified by usernames
- autheiticate with username and password

### Chat
- store messages users sent to the chat
- can either be a direct or group chat

#### Direct Chat
- store users participating in the chat
- can only have two users

#### Group Chat
- store users participating in the chat
- can have any number of users
- has a group owner
- has a name
- TODO: has a picture

### Group Owner
- is the user who creates a group chat
- TODO:
  - can add users
  - can remove users
  - can rename the group

### Message
- has the message body
- has the message author
- has the creation timestamp

## Tech
- The communication between client and server will be made initially by REST API.
- Then, the routs that need a two way instant communication will also be implemented by websockets.
- Finally, a graphql version will also be offered alongside with the others

### Backend
- Nestjs
- postgres
- websockets

### Frontend
- React
- some css library
