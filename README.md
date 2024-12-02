# Node.js Webhook
## Name

-Kenya Luna

## Node.js Webhook Example with Ngrok

This project is a basic "Hello, World!" webhook implementation built with Node.js and Express. It demonstrates how to set up a server to receive webhook events and process them in real-time. The server is exposed to the internet using Ngrok, allowing external services to send events to it for testing and development.

## Features

   - **Node**.js: JavaScript runtime for building server-side applications.
   - **Express**: Minimalist web framework for creating APIs and web servers.
   - **Webhooks**: Mechanism for real-time notifications from external applications or services.
   - **Ngrok**: Tool to create a secure tunnel and expose the webhook server publicly.

## Requirements

 - Node.js (version 16 or higher)
 - npm (Node package manager)
 - Ngrok (installed and configured)

## Installation
1. Clone this repository:
```bash
   git clone https://github.com/lunakenya/Project-with-WebHook.git
   ```
2. Install dependencies:
```bash
npm install
   ```
## Running the Application
1. Start the webhook server:
```bash
node server.js
   ```
Go to http://localhost:3000/webhook and try sending a POST using tools like Postman

1. Create a new request (New Request).
2. Set the method to POST.
3. Enter the URL:
```bash 
 http://localhost:3000/webhook
```
4. Go to the Body tab, select raw and the type JSON.
5. Write a test JSON like this:
```bash 
{
  "evento": "Hola Mundo",
  "mensaje": "Probando webhook"
}
```
6. Click Send.

Check the response:

In Postman, you should see the response: Event received!.
In your terminal, the server should print the received event:



Expose the application using Ngrok:

