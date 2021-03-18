## everyday-journal 

It's a classic diary like journal. You pick any date from the calendar and start writing whatever you want. So basically a user account keeps the jounral text stored for its respective date. Selecting a date creates entry in the database for that user and date, and if there's already a row in db for that speicific user and date, it retrieves it, so you can read or update. 

It's no ground breaking app, but after doing some full stack web with express/django, I wanted to get something up and running using asp.net asap to get myself comfortable with .NET. So I thought this would be cool, because I myself write journal everyday (on a diary in real life), so having a UI like that which can serve the same purpose felt the right project to build.

So journals get stored in journal table with the date and userId. And if you are not logged in, then a random session id is generated and kept in local storage for reference, to keep the texts you write stored temporarily in another table . Then after authenticating, if there is data in the temporary table for that sessionId, then the respective rows are generated in the journal table for that user, and get deleted from temporary table.

Used jwt for authentication. ASP .NET5 on back-end, React on front-end. Hosted the server on heroku using docker. So gained somewhat knowledge on docker as well.
