const http = require("http")
const openai = require("@langchain/openai")
const dotenv = require("dotenv")

// Load the Configurations..
dotenv.config();

const server = http.createServer(async (req, res) => {
    // Prepare the Model.
    const model = new openai.ChatOpenAI({
        temperature: 0
    });

    // Make an API call to the Model.
    const humanMessage = 
        "Can you tell me some tips to crack Software Engineering interviews ?";
    const response = await model.invoke(humanMessage);
    console.log(response);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(response.content);
});

server.listen(3000);