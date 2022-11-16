const { baseClassificationData } = require('../data/baseClassificationData');
const { igCaption } = require('../data/igCaption');


const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

const baseController = async (req, res) => {
    const response = await cohere.classify({
        model: 'large',
        inputs: [req.body.inputs],
        examples: baseClassificationData
      });

    const prediction = response.body.classifications[0].prediction
    console.log(prediction)

    if (prediction === 'igCaption') {
        prompt = igCaption
    }

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