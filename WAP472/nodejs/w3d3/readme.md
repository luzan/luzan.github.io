1. Store all the data submitted by the User in the cookies. 

Use all kinds of data, arrays, strings, object, arrays of objects.

2. Create a new html, display page, with the Labels and the values submitted the User in the form.

3. Add a new html , login page with fields, Username and Password.

a. If the Username/Password is incorrect, redirect to Login Page. If Username/Password is correct, redirect to the form Page.

b. Generate a key from the Username and Password and store the key in Cookie

5. Every request to the Server should check for that key in cookie, if it is not present, redirect to login page. 

6. Use MVC Pattern, all the handler methods move to the Controller.