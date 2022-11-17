const { baseClassificationData } = require('../data/baseClassificationData');
const { generativePrompts } = require('../data/generativePrompts');


const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

const baseController = async (req, res) => {
    const inputs = [req.body.inputs]
    const response = await cohere.classify({
        model: 'large',
        inputs: inputs,
        examples: baseClassificationData
      });
    const prediction = response.body.classifications[0].prediction

    var findPrompt = generativePrompts.find(item => item.name === prediction);
    var prompt = findPrompt.value + inputs + findPrompt.ending

    const generateResponse = await cohere.generate({
        model: 'xlarge',
        prompt: prompt,
        max_tokens: 500,
        temperature: 0.5,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ["--"],
        return_likelihoods: 'NONE'
        });

    res.status(200).json(generateResponse.body.generations[0].text)
    
}

module.exports = {
    baseController
}