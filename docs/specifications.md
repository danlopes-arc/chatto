# Specifications

- user
  - create
    - A person can create an account with username and password
    - A username is unique
  - login
    - A user can login with username and password
    - If username and password don't match the server will send an error message
  - get current
    - A user can get information about themselves
    - they must be authenticated to do so

- chat
  - create
    - A user can create a chat with another user
  - A user can send messages to another user
  - A direct chat can only have 2 users

- group
  - A user can create a group chat
  - Group members can send messages to the group
  - A group chat can have any number of users

- group member
  - is anyone who is in the group
  - can send messages to the group
  - can see the group messages
  - can see the other group members

- group owner
  - is the user who created the group
  - only they can:
    - add users to the group
    - remove users from the group
    - rename the group
