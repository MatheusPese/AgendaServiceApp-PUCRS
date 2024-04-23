# What is this for?

This project was my Final Project for my postgraduate studies at PUCRS University as a FULLSTACK developer. Its primary objective was to demonstrate my learning in full-stack web development. It is a web application that serves as an MVP (Minimum Viable Product) for an appointment scheduling system tailored initially for a beauty salon but designed with flexibility to expand to other service-oriented businesses.

Using a stack that integrates MongoDB for database management, TypeScript for robust and type-safe development, GitHub Actions for continuous integration and deployment, Heroku for hosting, Docker for containerization, Jest for testing, Node.js for backend services, Tailwind CSS for responsive and streamlined UI, React for dynamic frontend interfaces, Figma for UX/UI planning and design, and other tools, the application embodies my proficiency as a full-stack developer.

The core functionality allows users to schedule appointments for services, demonstrating features such as user authentication, appointment booking, and others. 


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
      
