### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
**jason web token is a token used to mediate access to either certain web pages or client data**
- What is the signature portion of the JWT?  What does it do?
**the signature portion is where a unique code/key is used to encrypt the data and can only be decrypted by that exact key**
- If a JWT is intercepted, can the attacker see what's inside the payload?
**i do not know, im trying to be honest so i didnt google it**
- How can you implement authentication with a JWT?  Describe how it works at a high level.
**WELL jwt is used for authorization not authentication, but after a user is authorized, bcrypt returns
that user's data, then the returned username, admin status and any other data of choice is then signed with
the secret key to create a token. *THEN* you can create middleware to check for the token in either the 
query, body or header and verify that the client that sent the token has authorization to the requested page**
- Compare and contrast unit, integration and end-to-end tests.
**unit testing is test individual units/functions, integration is testing code that are inter-connected and end-to-end is used to test all the functionality in the codebase**
- What is a mock? What are some things you would mock?
**thats when you creat your own version the api for testing instead of using the actual api**
- What is continuous integration?
**i do not know**
- What is an environment variable and what are they used for?
**environment variables are similar to global variables that can be configured according to the development process**
- What is TDD? What are some benefits and drawbacks?
**test driven development is writing the tests first and then building your code around it, 
benefits: less errors, makes more sence to center code around the test than centering the test around the code, drawbacks: it takes longer to get to the meat of things**.
- What is the value of using JSONSchema for validation?
  **it ensures that all the data being sent or posted will be in the correct type and format**
- What are some ways to decide which code to test?
**code that can compromise data integrity and data security**
- What does `RETURNING` do in SQL? When would you use it?
**returning returns the columns that you want after the query has been made**
- What are some differences between Web Sockets and HTTP?
**http is the protocol for transfering data between client and server , i do not kno what web sockets are**
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
**i prefer express based on how the language makes me feel**
