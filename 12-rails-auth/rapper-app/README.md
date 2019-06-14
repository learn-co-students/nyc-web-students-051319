##Rails Sessions, Cookies, Auth

# What are Sessions and Cookies?

- Ruby -- special hashes:
  - Why? -- HTTP is stateless
    - For every request the application "state" is emptied
      - It's temporary condition
  - Flash: it stores information for an additional request
  - Sessions: will last for as long as we tell it to
    - the only way to clear a session is to deliberately clear that session

# Cookies

- Another special hash that is instantiated by the server and sent to the client on boot-up
- Domain specific

# What is BCrypt?

- We use BCrypt to hash the user's password

# Authentication vs Authorization

- Authentication is: "are you who you say you are?"
- Authorization is: "should you have access to this information?"
