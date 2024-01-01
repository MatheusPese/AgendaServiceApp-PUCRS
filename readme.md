# How to build and run the application



## Prerequisites

For running this repository, it is recommended, but not required to have the following installed into your machine:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)


This documentation will guide you through installing the application using these technologies. However, if preferred,  you can choose other technologies if you know how to do so.

## Getting Started

Cloning the repository into your machine is recommended, but you can download the files manually if prefered.



1. Clone the repository
      ``` 
      git clone <url of this repo> .
      ```
2. Install dependencies

      ```
      npm i
      ```

3. Certify that you have configured the environment variables correctly as the information provided in the commented .env file


4. Build and run docker containers
      ```
      docker compose up -d 
      ```

5. Either build and start the application, or run it in development mode.

      - Build and run for production
      
            
            npm run build

            npm run start
            

      - Running in development for real time testing

            
            npm run dev
            
   
   
   
With this, the web application should now be running.
You can access it with a web browser by pasting the following url:

      
      http://localhost:3000
      

As this application also have a mongo express environment configured in docker, you can easly access the mongodb database using the following url:
      
      
      http://localhost:8081
      
