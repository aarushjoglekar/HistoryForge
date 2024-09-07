import WarHub from "../components/WarHub";

export default function war1812Hub() {
  return (
    <WarHub
      Args={{
        title: "The War of 1812",
        n1: "Leading Events (1)",
        n2: "The Battle of Lake Erie (2)",
        n3: "The Battle of Plaattsburgh (3)",
        n4: "The Battle of New Orleans (4)",
        p1a: {'Text':"Impressment of American Sailors (1803-1812)\nThe British Royal Navy forcibly pressed American sailors into their service, claiming they were British deserters. This practice was seen as a violation of American sovereignty and led to increasing tensions between the two nations.\n\nEmbargo Act (1807)\nIn response to British impressment, President Thomas Jefferson signed the Embargo Act, which prohibited American ships from trading with foreign nations. While intended to pressure Britain and France to stop their aggressive practices, the embargo had devastating effects on the American economy and was eventually repealed.\n\nChesapeake-Leopard Affair (1807)\nThe British warship HMS Leopard attacked the American frigate USS Chesapeake off the coast of Virginia, boarding and seizing four American sailors. This incident was seen as a clear act of aggression and further inflamed tensions between the United States and Great Britain.\n\n"},
        p2a: 
        {
          'originalText': 'You are the captain of the USS Perry, leading the American fleet into the Battle of Lake Erie. The British fleet, led by Captain Barclay, is larger and better equipped. You must decide on your strategy to win this crucial battle.',
          'originalAnimation': 'hi',
          'correctSlot': 3,
          'wrong1Slot': 1,
          'correctDecision': 'Focus on the British flagship to disable their command structure.',
          'correctExplanation': 'Correct! Boarding the flagship will disrupt the British chain of command, making it difficult for them to coordinate their fleet. This will give you a tactical advantage and increase your chances of victory.',
          'correctAnimation': 'hi',
          'wrong1Decision': 'Engage the British fleet in a traditional naval battle.',
          'wrong1Explanation': 'Incorrect! The British fleet has a numerical advantage, and their ships are larger and more heavily armed. Engaging in a traditional naval battle would likely result in defeat.',
          'wrong1Animation': 'hi',
          'wrong2Decision': 'Retreat to a nearby harbor and wait for reinforcements.',
          'wrong2Explanation': 'Incorrect! Retreating would be a sign of weakness and would demoralize your crew. It would also allow the British to maintain control of Lake Erie, which is crucial for securing the American frontier.',
          'wrong2Animation': 'hi',
        },
        p3a: 
        {
          'originalText': 'The Battle of Plattsburgh is about to commence. As the American commander, you must decide how to defend the fort against the British invasion.',
          'originalAnimation': 'hi',
          'correctSlot': 2,
          'wrong1Slot': 1,
          'correctDecision': 'Reinforce the shoreline defenses',
          'correctExplanation': 'Correct! Reinforcing the shoreline defenses is crucial, as the British will likely attempt a landing. This will give your forces a strategic advantage and increase the chances of repelling the invasion.',
          'correctAnimation': 'hi',
          'wrong1Decision': 'Focus on defending the fort',
          'wrong1Explanation': 'Incorrect! While defending the fort is important, focusing solely on it could leave the shoreline vulnerable. The British could easily land and outflank your forces.',
          'wrong1Animation': 'hi',
          'wrong2Decision': 'Retreat to a more defensible position',
          'wrong2Explanation': 'Incorrect! Retreating would abandon the fort and demoralize your troops. It would also give the British a significant advantage in terms of territory and resources.',
          'wrong2Animation': 'hi',
        },
        p4a: 
        {
          'originalText': 'The Battle of New Orleans is about to begin. You command the American forces, tasked with defending the city from a British invasion. The British army is significantly larger and better equipped. Your decision will determine the outcome of the battle and the fate of the United States.',
          'originalAnimation': 'hi',
          'correctSlot': 3,
          'wrong1Slot': 1,
          'correctDecision': 'Use the terrain to your advantage. Fortify along the Mississippi.',
          'correctExplanation': 'Correct! By leveraging the river and building fortifications, you can create a narrow bottleneck that forces the British to attack in a concentrated manner. This will allow your troops to inflict heavy casualties on the enemy and ultimately win the battle.',
          'correctAnimation': 'hi',
          'wrong1Decision': 'Retreat from the city and abandon it to the British.',
          'wrong1Explanation': 'Incorrect! Retreating would be a major strategic mistake. It would demoralize your troops, weaken your position, and potentially lead to the loss of the entire Louisiana Territory.',
          'wrong1Animation': 'hi',
          'wrong2Decision': 'Launch a frontal assault on the British army.',
          'wrong2Explanation': 'Incorrect! A frontal assault against a larger, better-equipped enemy would likely result in a devastating defeat. Your troops would be outnumbered and outgunned, and you would lose valuable lives and resources.',
          'wrong2Animation': 'hi',
        }
      }}
    />
  );
}
