const { baseClassificationData } = require('../data/baseClassificationData');

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

    if (prediction === 'IG Caption') {
        const prompt = 'Given an image description, this program will generate an Instagram caption.\n\nImage description: girl holding a box of donuts and a baby, excited\nCaption: winter is coming!\n--\nImage description: group of 10 people eating dinner together for someone\'s birthday, happy\nCaption: Too many candles\n--\nImage description: girl in bathing suit at the beach, philosophical\nCaption: We dream in colors borrowed from the sea\n--\nImage description: a group of friends wearing skiing gear, on top of a mountain, ambitious\nCaption: No matter how high we climb, there\'s always more to achieve\n--\nImage description: a man smelling a flower, happy\nCaption: Life is a beautiful thing\n--\nImage description: a girl sitting on her roof, looking at her friends below, confused\nCaption: I\'m not sure if I want to come down\n--\nImage description: a group of friends sitting in a restaurant, excited\nCaption: We\'re not drunk, we\'re just happy\n--\nImage description: a group of friends sitting in a restaurant, nervous\nCaption: We\'re just nervous, not drunk\n--\nImage description: a couple holding hands walking through an apple orchard, happy\nCaption: I love you more than apples\n--\nImage description: a couple holding hands walking through an apple orchard, sad\nCaption: sad that winter is coming\n--\nImage description: two kids riding their bikes through a forest, mesmerized\nCaption: life is fascinating\n--\nImage description: A cat holding a gun\nCaption:'

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
}

module.exports = {
    baseController
}