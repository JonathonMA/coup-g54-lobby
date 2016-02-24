let roles = {
  "Communications": {
    "Director": "Take two cards from the deck.",
    "Newscaster": "Pay 1 credit and take three cards from the deck.",
    "Producer": "Take one card from the deck and one from a target (target’s choice). (C)",
    "Reporter": "Take one card from the deck and 1 credit.",
    "Writer": "Take one card from the deck. After looking at the card, may pay 1 credit to take one more card from the deck (repeatable)."
  },
  "Finance": {
    "Banker": "Take 3 credits.",
    "Capitalist": "Take 4 credits. Other players can then also claim to be a Capitalist. Once all challenges are resolved, pay 1 credit to every other surviving Capitalist.",
    "Farmer": "Take 3 credits and give 1 credit to another player.",
    "Speculator": "Double your credits (max. 5). If successfully challenged, return extra credits to the treasury and pay challenger your initial amount.",
    "Spy": "Take 1 credit and another action."
  },
  "Force": {
    "Crime Boss": "Choose a target. Target can give you 2 credits to end turn. Otherwise, pay 5 credits to make target lose a life.",
    "General": "Pay 5 credits to all other targeted players lose a life. (C)",
    "Guerilla": "Pay 4 credits to make target lose a life. (C)",
    "Judge": "Give 3 credits to target to make target lose a life. If target counteracts, she keeps the 3 credits. (C)",
    "Mercenary": "Pay 3 credits to place Disappear token on a target. Target loses a life at the end of their next turn. (C)",
    "Communist": "Take up to 3 credits from richest player and give them to poorest player. (C)"
  },
  "Special Interests": {
    "Customs Officer": "Take the two Tax tokens. Keep one and place the other on a role card. Other players must give you 1 credit before claiming the chosen role.",
    "Foreign Consular": "Take the two Treaty tokens. Keep one and give the other to another player. You cannot target each other (including with coups).",
    "Intellectual": "If you lose a life, you may claim to be Intellectual to take 5 credits. If successfully challenged, lose another life. If unsuccessfully challenged, challenger loses a life.",
    "Lawyer": "When another player is eliminated, you may take all their credits.",
    "Missionary": "If you lose a life (except in a coup), you may claim to be a Missionary to take one card from the deck. If successfully challenged, lose another life. If unsuccessfully challenged, challenger loses a life.",
    "Peacekeeper": "Take 1 credit and the Peacekeeping token. You cannot be targeted while you have the token (coups against you are still possible).",
    "Politician": "Take up to 2 credits from target. (C)",
    "Priest": "All other players give you 1 credit. (C)",
    "Protestor": "Pay 2 credits and choose a target. Another player can then pay 3 credits to make the target lose a life. (C)"
  }
}

export default roles
