from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

chatbot = ChatBot('Sofia')

conversation = [
    "oi",
    "OI MEU AMIGO"
]

trainer = ListTrainer(chatbot)

trainer.train(conversation)
print('oi')