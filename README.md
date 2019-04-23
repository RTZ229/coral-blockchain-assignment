# Documentation

[github link to the application][link]

[link]: https://github.com/RTZ229/coral-blockchain-assignment.git


# a. Steps I executed 
* I have been learning nodejs from a udemy course named:
The Complete Node.js Developer Course (3rd Edition)

* My first step was to set up a RESTful API to get the input from the 
web form I created from my prior knowledge of html and css.

* After createing the index page I struggeled to send a response webpage back to the 
application running on localhost port:3000

* To solve this problem I used an npm module called handlebars which can be 
utilised by the express app object to render webpages to the application and 
provide inputs from the application into the webpages.

* My next step was to create a connection to the mysql database whose 
host and password details were provided by Coral-Blockchain team.

* I set up a mysql connection object and then successfully connected the database
to the application.

* I created 2 seperate routes(post requests):

 1. First route is called /user_create and it basically takes input from the req
   object in the callback function of the post request. I set up the index page to
   take four inputs from the index page and clicking the submit button it redirects
   to the /user_create route. Each input had a name property which can be accessed through
   the req object in app.js located in /src file of the application.

 2. The second route is called /user_search and it basically takes input from the req
   object in the callback function of the post request. I set up the index page to 
   take one input from the index page and clicking the submit button it redirects to the
   /user_search route.

* Then I created 2 response webpages which will show up when the user either creates
a new user data or searches for an existing user by using an email id.


* In each route I used the db object(mysql connection object) to query the database 
for fetching or creating the relevant data.

* In the process I learned about mysql stored procedures, so to create a user if it does
not exist in the first place or update the user if the email is already present I used 
mysql procedures and ran a set of codes in mysql to create a new user if the user with 
a certain email id doesn't exist or to update a user if the user with a certain email
id already exists.

* I also set up a flag in mysql procedure to let my app know whether I created a user
or updated an existing user.

* Using this flag I decided in my application which page to render if there is already 
a user present or not.

* I took care of proper error handling in the application if it does throw errors 
due to a bad connection with mysql or othewise.

* After all this I took on to style my application using proper css styling techniques.

## web sources:

nodejs udemy course
https://www.youtube.com/watch?v=4fWWn2Pe2Mk
http://www.mysqltutorial.org/mysql-exists/
http://www.mysqltutorial.org/introduction-to-sql-stored-procedures.aspx
https://www.npmjs.com/package/handlebars
https://www.npmjs.com/package/express
https://www.npmjs.com/package/mysql
https://www.npmjs.com/package/path
https://www.npmjs.com/package/body-parser

# b. My learnings

* I learned how to use handlebars npm module and It's importance.
* I learned a few new mysql techniques like using EXISTS(subquery).
* I learned how to go about proper error handling and setting up flags to get a proper 
   visibility inside the application.

# c. Challenging and fun parts
* Most challenging part in creating this application was to setting up mysql procedures
and learning few new commands that till now I had not come across.

* rendering response pages to the application was also challenging.

* Most fun part was the testing and styling of my application.
* Watching the appliaction which I created work was very satisfying and fun.

# d. Suggestions

* Since apart from mysql there are other databases also available like mongoDB(noSQL DB)
* You could ask the candidates to create an application compatible with mongoDB as well.
* Adding a delete function in the assignment would also be fun and challenging at the same time.
* I thoroughly enjoyed doing this assignment looking forward to hearing from you.