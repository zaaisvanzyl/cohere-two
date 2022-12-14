const baseClassificationData = [
    {"text": "Write an instagram caption based on the following image description", "label": "igCaption"},
    {"text": "Write an instagram caption for a photo of a cat", "label": "igCaption"},
    {"text": "Summarize the following academic paper", "label": "summarize1"},
    {"text": "Summarize this paragraph:", "label": "summarize1"},
    {"text": "Summarize this dialogue: Cohere offers an API to add cutting-edge language processing to any system. Cohere trains massive language models and puts them behind a simple API. Moreover, through training, users can create massive models customized to their use case and trained on their data. This way, Cohere handles the complexities of collecting massive amounts of text data, the ever evolving neural network architectures, distributed training, and serving models around the clock.", "label": "summarize1"},
    {"text": "Write a story about a robot who falls in love with a human", "label": "writeAStory"},
    {"text": "Write a story about a cat that chases a mouse", "label": "writeAStory"},
]

module.exports = {
    baseClassificationData
}