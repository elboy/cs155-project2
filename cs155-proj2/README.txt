---------------------------------------

Exploit Alpha (Cookie Theft):
When user doesn't exist, render 'profile/view' with error message that doesn't contain the nonexistent (and possibly malicious) username.
 
Resources: 
  - None

---------------------------------------

Exploit Beta (Cross-Site Request Forgery):
We added a hidden input field to /transfer/form.ejs with name="authenticity_token" and value that will be set by the server side rendering of the page. In server code, we have '/transfer' logic create an HMAC of a random key and session.account and save this auth_token in the session. In '/post_transfer' we check that the value stored in the hidden field matches the session stored auth_token. If they don't match, then an error is rendered on the page. Note that our Exploit Beta will continue to the cs155 homepage but no money is transferred. 
 
Resources: 
  - Rewatched 5/3 lecture starting at min 41

---------------------------------------

Exploit Charlie (Session Hijacking with Cookies):

 
Resources: 
  - 

---------------------------------------

Exploit Delta (Cooking the Books with Cookies):

 
Resources: 
  - https://github.com/mapbox/node-sqlite3/wiki/API#databaserunsql-param--callback

---------------------------------------

Exploit Echo (SQL Injection):
We use SQL prepare statements to protect against SQL injection. Specifically, we specify user-supplied data (the username) in the '/close' functionality as part of the params rather than creating an SQL query via string concatentation.
 
Resources: 
  - node-sqlite3 APIS, https://github.com/mapbox/node-sqlite3/wiki/API#databaserunsql-param--callback

---------------------------------------

Exploit Foxtrot (Profile Worm):

 
Resources: 
  - 

---------------------------------------