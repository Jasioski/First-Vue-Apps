"---------#README---------"

Before testing Vue.js app, make sure you have vue installed on your machine.

To install vue go into your terminal and type in these commands: 
> npm install vue 
> npm install -g vue-cli

Note: Installing vue-cli is not required however, it will make it easier to create and view projects
.
If you have vue-cli installed you can navigate to the root directory of this app (should end in \first_app)
and in your terminal enter:
> npm run dev

When successful the terminal will display the message "Compiled successfully in XXXXms"
To view the app, open your browser and in the URL field enter: http://localhost:8080
In case you have crlf expected lf errors fix it with this command in cmd: npm run lint -- --fix."

Open another terminal and run the server by typing into your terminal in the root folder of the application:
> node server.js