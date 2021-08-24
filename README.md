# Zoominfo_assignment

Hi!

This is a description of my implementation.

## Structure

The repository is divided into 2 folders, server and client:

*  The client side is implemented using Angular.
*  For the server side, 
   I've used Express as a framework and Docker for the container environments.  
   docker-compose defines 2 containers:

         *  Server, which listens on localhost:4200.
         *  Mongodb, which listens on localhost:27017.

## Build & Run

   Client: 

   ```bash
   cd ./client ; npm install ; ng serve
   ```
   Server: 

   ```bash
   cd ./server ; npm install ; docker-compose up
   ```

## Usage

After building, the server initializes the Mongo database with a json Object containing a list of users - using mongoose.  
As mentioned, you can interact with the frontend on localhost:4200 and see backend responses on localhost:3080.

Each object (user) is of the following structure :  
  
      username : String,  
      password : String,  
      logged : Boolean,  
      firstname : String,  
      lastname : String,  
      email : String,  
      contacts : [Object]  
   
On the client side, the user submits his username and password. 

For example the users :  
   
   username: corey  
   password: 123  
     
   username: Queen  
   password: 123  
   
The server returns the user's id with which the user sends a request to  
recieve his full information. This is ment to simulate an example of 2fa authentication with a token.  

At this point, the user is redirected to the contacts page that contains:  

*  A list of cards with basic contact information sorted by the firstname.  
*  A serach bar.  
*  Pagination.  
  
Clicking on each card redirects to a simple page   
contaning contact information with a description.  
  
The user can logout from his contacts page and can rout back to his contacts page from the information page.  
  

Thanks !  

