from flask import Flask, request
import requests
import google.generativeai as gs
import os
import random
import json


key2 = 'AIzaSyAnqg0wXE85yPRcqOHc7dPO6zzkxJQLV4Q'
gs.configure(api_key='AIzaSyAzyKWVhZcy34DTNF_pan3lh73rX8YA8iY')

app = Flask(__name__)

def callAI(w,b):
   pass

@app.route("/", methods = ['GET', 'PUT'])
def server():
    if request.method == 'PUT':
        data = request.json  # Get JSON data
        prompt = data
    model = gs.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content("Generate a situation where a history video game player gets to decide between three decisions to winning the following battle in the following war." + "\n" + f"Battle: {prompt['b']}" + "\n" + f"War: {prompt['w']}" + '\n' + 'I need you to give me a situation, briefly overviewing the decision the player has to make, 3 choices for the player to make, explanations for why the wrong solutions are wrong, and explanation for why the correct solution is correct.' + '\n' + 'Format your response as the following in a way that i can use json.loads() in python:\n' + "{'originalText': [The prompt for the user], 'correctDecision': [The correct decision for the user to make],'correctExplanation': 'Correct! [The explanation of the correct decision],'wrong1Decision': [The first incorrect decision for the user to make],'wrong1Explanation': [The explanation why this decision is wrong],'wrong2Decision': [The second incorrect decision for the user to make],'wrong2Explanation': [The explanation why this decision is wrong],}" + '\n\n\n\n' + "Example:" + "\n\n\n" + "{ 'originalText': 'You are the commander of the American forces defending Plattsburgh, New York, during the War of 1812. The British army and navy are preparing to launch a major attack on your position. You must decide how to best defend the city.','correctDecision': 'Reinforce the land defenses and prepare for a prolonged siege.','correctExplanation': 'Correct! Reinforcing the land defenses and preparing for a prolonged siege was the most effective strategy. This would allow the American forces to withstand the British land attack and eventually force them to retreat.','wrong1Decision': 'Focus on defending the lake and try to prevent the British navy from landing troops.','wrong1Explanation': 'Incorrect. While defending the lake was important, it was not enough. The British could still land troops and launch a land attack, which would be difficult to defend against without adequate land defenses.','wrong2Decision': 'Attempt a surprise counterattack on the British forces before they launch their attack.','wrong2Explanation': 'Incorrect. A surprise counterattack was risky and unlikely to succeed against a larger British force. It would also have depleted the American forces and made them more vulnerable to the British attack.}")
    res = response.text.replace('?', "")
    res = res.replace('#',"")
    res = res.replace("`", "")
    res = res.replace("'", '"')
    res = res[5:]
    with open("test.txt", "w") as f:
      f.write(res)
    return json.loads(res)

        
    


@app.route("/test", methods = ['PUT'])
def test():
    data = request.json  # Get JSON data
    prompt = data.get('prompt', '')
    return prompt['w']



if __name__ == "__main__":
    app.run(debug = True, host = "10.80.5.97", port = 5555)