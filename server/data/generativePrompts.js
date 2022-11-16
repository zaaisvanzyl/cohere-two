
const generativePrompts = [
    {"igCaption": 'Given an image description, this program will generate an Instagram caption.\n\nImage description: girl holding a box of donuts and a baby, excited\nCaption: winter is coming!\n--\nImage description: group of 10 people eating dinner together for someone\'s birthday, happy\nCaption: Too many candles\n--\nImage description: girl in bathing suit at the beach, philosophical\nCaption: We dream in colors borrowed from the sea\n--\nImage description: a group of friends wearing skiing gear, on top of a mountain, ambitious\nCaption: No matter how high we climb, there\'s always more to achieve\n--\nImage description: a man smelling a flower, happy\nCaption: Life is a beautiful thing\n--\nImage description: a girl sitting on her roof, looking at her friends below, confused\nCaption: I\'m not sure if I want to come down\n--\nImage description: a group of friends sitting in a restaurant, excited\nCaption: We\'re not drunk, we\'re just happy\n--\nImage description: a group of friends sitting in a restaurant, nervous\nCaption: We\'re just nervous, not drunk\n--\nImage description: a couple holding hands walking through an apple orchard, happy\nCaption: I love you more than apples\n--\nImage description: a couple holding hands walking through an apple orchard, sad\nCaption: sad that winter is coming\n--\nImage description: two kids riding their bikes through a forest, mesmerized\nCaption: life is fascinating\n--\nImage description: A cat holding a gun\nCaption:'},
    {"summarize1": 'Summarize the following text:\nIs Wordle getting tougher to solve? Players seem to be convinced that the game has gotten harder in recent weeks ever since The New York Times bought it from developer Josh Wardle in late January. The Times has come forward and shared that this likely isn’t the case. That said, the NYT did mess with the back end code a bit, removing some offensive and sexual language, as well as some obscure words There is a viral thread claiming that a confirmation bias was at play. One Twitter user went so far as to claim the game has gone to “the dusty section of the dictionary” to find its latest words.\n\nSummary: Wordle has not gotten more difficult to solve.\n--\nSummarize the following text:\nArtificialIvan, a seven-year-old, London-based payment and expense management software company, has raised $190 million in Series C funding led by ARG Global, with participation from D9 Capital Group and Boulder Capital. Earlier backers also joined the round, including Hilton Group, Roxanne Capital, Paved Roads Ventures, Brook Partners, and Plato Capital.\n\nSummary: ArtificialIvan has raised $190 million in Series C funding.\n--\nSummarize the following text:\nThe National Weather Service announced Tuesday that a freeze warning is in effect for the Bay Area, with freezing temperatures expected in these areas overnight. Temperatures could fall into the mid-20s to low 30s in some areas. In anticipation of the hard freeze, the weather service warns people to take action now.\n\nSummary:'}
]

module.exports = {
    generativePrompts
}