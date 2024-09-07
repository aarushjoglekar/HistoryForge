import WarHub from "../components/WarHub";

export default function revHub() {
  return (
    <WarHub
      Args={{
        title: "Revolutionary War",
        n1: "Leading Events (1)",
        n2: "The Battle of Saratoga (2)",
        n3: "Winter at Valley Forge (3)",
        n4: "The Battle of Yorktown (4)",
        p1a: {'Text':"Townshend Acts (1767)\nThe Townshend Acts were a series of laws passed by the British Parliament in 1767 that imposed duties on various goods imported into the American colonies, such as paper, glass, paint, tea, and lead. \n\nBoston Massacre (1770)\nThe Boston Massacre was a violent confrontation between British soldiers and American colonists that occurred on March 5, 1770, in Boston, Massachusetts.\nIt resulted in the deaths of five colonists and is considered a significant event leading up to the American Revolution, as it escalated tensions between Britain and its American colonies.\n\nBoston Tea Party (1773)\nThe Boston Tea Party was a political protest by the American colonists against the British government and the British East India Company that took place on December 16, 1773, in Boston, Massachusetts.\nThe protest was in response to the Tea Act of 1773, which allowed the British East India Company to sell tea directly to the colonies, effectively creating a monopoly and undercutting local merchants.\n\n"},
        p2a: {
          'originalText': "John Burgoyne wants to control the Hudson River. What do you do",
          'originalAnimation': require('../lottieFiles/Animation - 1725740661394.json'),
          'correctSlot': 3,
          'wrong1Slot': 1,
          'correctDecision': 'Ambush them near the Hudson',
          'correctExplanation': 'Correct! You set up defenses near bemis heights, ambush the British, and maintain control of the Hudson',
          'correctAnimation': require('../lottieFiles/Animation - 1725742173864.json'),
          'wrong1Decision': 'Ignore the threat, the Hudson river is not important',
          'wrong1Explanation': 'The Hudson is important as if it were given up, trade and communication between the north and south would be limited',
          'wrong1Animation': require('../lottieFiles/NoComs.json'),
          'wrong2Decision': 'Retreat, they have too many troops',
          'wrong2Explanation': 'The Hudson is too important to give up. Try to use a military tactic to outsmart the British.',
          'wrong2Animation': require('../lottieFiles/4_1.json'),
        },
        p3a: {
          'originalText': "Winter has come to Valley Forge and it's cold. You only have 25 barrels of flour and minimal pork to keep your troops fed. What do you do",
          'originalAnimation': require('../lottieFiles/food.json'),
          'correctSlot': 2,
          'wrong1Slot': 1,
          'correctDecision': 'Deal with the cold and try to survive.',
          'correctExplanation': 'Correct! You decide to train your soldiers and pray they make it out of the winter. Marquis da Lafayette and Baron Friedrich von Steuben, French and Perusian military officers, hold training for your troops. In addition, you order soldiers to make log cabins and find straw to stay warm.',
          'correctAnimation': require('../lottieFiles/Log House.json'),
          'wrong1Decision': 'Move away from Valley Forge to some place warmer',
          'wrong1Explanation': 'Your troops are already too tired to move. In addition, Valley Forge is relatively safe from British attack.',
          'wrong1Animation': require('../lottieFiles/sun.json'),
          'wrong2Decision': 'Quarter in civilian homes borrowing their food to survive the winter',
          'wrong2Explanation': 'One cause to the Revolutionary war was the Quartering act which allowed British soldiers to live inside American homes without consent. Quartering soldiers would go against a fundamental principle the US based their war on.',
          'wrong2Animation': require('../lottieFiles/house.json'),
        },
        p4a: {},
      }}
    />
  );
}
