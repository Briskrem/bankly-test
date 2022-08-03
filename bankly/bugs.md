
- **middleware/auth** ..function authuser uses jwt.decode to check authorization and to receive the payload
  instead of using *jwt.verify* and its secret key, which can leave vulneabilty to hackers.
- **config.js** ..require('dotenv') was missing config()
- **user model** .. *get method* was missing throw. test added on line 140.
- **partialUpdate.js query line 35** the query returns * which includes the password and then 
  returns that in the response body which is a security risk.
- **routes/auth/login** await was missing infront User.