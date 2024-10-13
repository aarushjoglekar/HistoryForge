from flask import Flask, request
import google.generativeai as gs
import os
import random
import json
from dotenv import load_dotenv

load_dotenv()

keys = [
    os.getenv("APIKEY1"),
    os.getenv("APIKEY2")
]

app = Flask(__name__)


def callAI(prompt):
    model = gs.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(
        "Generate a situation where a history video game player gets to decide between three decisions to winning the following battle in the following war. (use double quotes for key value pairs)"
        + "\n"
        + f"Battle: {prompt['b']}"
        + "\n"
        + f"War: {prompt['w']}"
        + "\n"
        + "I need you to give me a situation, briefly overviewing the decision the player has to make, 3 choices for the player to make, explanations for why the wrong solutions are wrong, and explanation for why the correct solution is correct."
        + "\n"
        + "Format your response as the following in a way that i can use json.loads() in python:\n"
        + "{'originalText': [The prompt for the user], 'correctDecision': [The correct decision for the user to make],'correctExplanation': 'Correct! [The explanation of the correct decision],'wrong1Decision': [The first incorrect decision for the user to make],'wrong1Explanation': [The explanation why this decision is wrong],'wrong2Decision': [The second incorrect decision for the user to make],'wrong2Explanation': [The explanation why this decision is wrong],}"
        + "\n\n\n\n"
        + "Example:"
        + "\n\n\n"
        + "{ 'originalText': 'You are the commander of the American forces defending Plattsburgh, New York, during the War of 1812. The British army and navy are preparing to launch a major attack on your position. You must decide how to best defend the city.','correctDecision': 'Reinforce the land defenses and prepare for a prolonged siege.','correctExplanation': 'Correct! Reinforcing the land defenses and preparing for a prolonged siege was the most effective strategy. This would allow the American forces to withstand the British land attack and eventually force them to retreat.','wrong1Decision': 'Focus on defending the lake and try to prevent the British navy from landing troops.','wrong1Explanation': 'Incorrect. While defending the lake was important, it was not enough. The British could still land troops and launch a land attack, which would be difficult to defend against without adequate land defenses.','wrong2Decision': 'Attempt a surprise counterattack on the British forces before they launch their attack.','wrong2Explanation': 'Incorrect. A surprise counterattack was risky and unlikely to succeed against a larger British force. It would also have depleted the American forces and made them more vulnerable to the British attack.}"
    )
    res = response.text.replace("?", "")
    res = res.replace("#", "")
    res = res.replace("`", "")
    res = res[5:]
    return res


@app.route("/", methods=["GET", "PUT"])
def server():
    keyConfig = random.choice(keys)
    gs.configure(api_key=keyConfig)
    if request.method == "PUT":
        data = request.json  # Get JSON data
        prompt = data
    res = callAI(prompt)
    try:
        res = json.loads(res)
    except Exception as e:
        print(res)
        res = {"originalText": "error"}
    return res


if __name__ == "__main__":
    app.run(debug=True, host=os.getenv("HOST"), port=5555)
