*This is an example of how Cohere's classification endpoint could be used to make the generative endpoint feel as if it were a "zero shot" model.*


**How it works:**

When a user sends a prompt, classifies what the user is trying to do, and then fetches the respective prompt for the generative command. 

Two example have been added to show this. You can write Instagram captions or summarize text. New prompts can easily be added.

There might be an opportunity for the community to "crowdsource" a wide variety of prompts to increase its capabilities.



**To start the server:**

cd server
node server.js

Within postman, send a get request to localhost:4009/api/ with the following body (raw JSON):

{
    "inputs": "Write an instagam caption for a cowboy riding a horse through a forest"
}

The response should be an Instagram caption.