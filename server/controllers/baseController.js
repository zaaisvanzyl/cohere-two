const { baseClassificationData } = require('../data/baseClassificationData');

const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

const baseController = async (req, res) => {
    const response = await cohere.classify({
        model: 'large',
        inputs: [req.body.inputs],
        examples: baseClassificationData
      });
    res.status(200).json(response.body.classifications)
}

module.exports = {
    baseController
}