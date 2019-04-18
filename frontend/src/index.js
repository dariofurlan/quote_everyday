function getEndpoint() {
    return self.registration.pushManager.getSubscription()
        .then(function (subscription) {
            if (subscription) {
                return subscription.endpoint;
            }

            throw new Error('User not subscribed');
        });
}

self.addEventListener('push', function (event) {
    event.waitUntil(
        getEndpoint()
            .then(function (endpoint) {
                return fetch('./getPayload?endpoint=' + endpoint);
            })
            .then(function (response) {
                return response.text();
            })
            .then(function (payload) {
                self.registration.showNotification('ServiceWorker Cookbook', {
                    body: payload,
                });
            })
    );
});

const demoralizing_quotes = [
    {
        author: "Axl Rose",
        quote: "Life sucks, but in a beautiful kind of way."
    }, {
        author: "Woody Allen",
        quote: "Life is divided into the horrible and the miserable.",
    }, {
        author: "Alexa Chung",
        quote: "Not everything happens for a reason. Sometimes life just sucks.",
    }, {
        author: "Bill Engvall",
        quote: "I believe pain is nature's way of saying, you're still alive, and life sucks.",
    }, {
        author: "Thomas Hobbes",
        quote: "The life of man is solitary, poor, nasty, brutish, and short.",
    }, {
        author: "P C Cast",
        quote: "Life isn't a book. There's no guarantee of a happy ending.",
    }, {
        author: "Ricky Gervais",
        quote: "Mondays are fine. It's your life that sucks.",
    }, {
        author: "Abraham Cowley",
        quote: "Life is an incurable Disease.",
    }, {
        author: "James Huneker",
        quote: "Life is like an onion: you peel off layer after layer and then you find there is nothing in it.",
    }, {
        author: "Chris Crutcher",
        quote: "If you think your life sucks, it probably does. Do something about it.",
    }, {
        author: "Ashleigh Brilliant",
        quote: "Life may have no meaning. Or even worse, it may have a meaning of which I disapprove.",
    }, {
        author: "Ellen Pompeo",
        quote: "Let's play a game of whose life sucks worse... I'll win, I always win.",
    }, {
        author: "David Gerrold",
        quote: "Life is hard. Then you die. Then they throw dirt in your face. Then the worms eat you. Be grateful that it happens in that order.",
    }, {
        author: "Oscar Wilde",
        quote: "Whenever life sucks, remember you're going to die someday.",
    }, {
        author: "Emile M. Cioran",
        quote: "Not to be born is undoubtedly the best plan of all. Unfortunately, it is within no one's reach.",
    }, {
        author: "Louis C. K.",
        quote: "People say, 'My phone sucks.' No, it doesn’t! The shittiest cellphone in the world is a miracle. Your life sucks. Around the phone.",
    }, {
        author: "Bill Maher",
        quote: "God knows life sucks. It's right there in the Bible. The book of Job is all about Job asking God to take away pain and misery. And God says, \"I can't take away pain and misery because then no one would talk to me\".",
    }, {
        author: "Nora Roberts",
        quote: "Happily ever after? If justice doesn't triumph and love doesn't make the circle in entertainment fiction, what's the point? Real life sucks too often.",
    }, {
        author: "Mike Tyson",
        quote: "I don't do anything. My life sucks.\n",
    }, {
        author: "Donald E. Williams, Jr.",
        quote: "Any day above ground is a good one.\n",
    }, {
        author: "Ned Vizzini",
        quote: "I didn’t want to wake up. I was having a much better time asleep. And that’s really sad. It was almost like a reverse nightmare, like when you wake up from a nightmare you’re so relieved. I woke up into a nightmare.",
    }, {
        author: "Joseph Brodsky ",
        quote: "Life—the way it really is—is a battle not between good and bad, but between bad and worse.",
    }, {
        author: "Mike Royko",
        quote: "Show me somebody who is always smiling, always cheerful, always optimistic, and I will show you somebody who hasn't the faintest idea what the heck is really going on.",
    }, {
        author: "Scott Dikkers",
        quote: "A true friend is a gift from God. Since God doesn't exist, guess what? Neither do true friends.",
    }, {
        author: "Stephen Chobsky",
        quote: "Things change. And friends leave. Life doesn't stop for anybody.",
    }, {
        author: "Tabitha Suzuma",
        quote: "As the light begins to intensify, so does my misery, and I wonder how it is possible to hurt so much when nothing is wrong.",
    }, {
        author: " Margaret Mitchell",
        quote: "Life's under no obligation to give us what we expect.",
    }, {
        author: "Jake Roberts",
        quote: "If you start the day miserable, nobody else can screw up your day",
    }, {
        author: "Voltaire",
        quote: "Optimism is the madness of insisting that all is well when we are miserable"
    }, {
        author: "Woody Allen",
        quote: "Life is full of misery, loneliness, and suffering - and it's all over much too soon."
    }, {
        author: "Woody Allen",
        quote: "If you want to make God laugh, tell him about your plans.",
    }, {
        author: "Dante Alighieri",
        quote_it: "Nessun maggior dolore, che ricordarsi del tempo felice, ne la miseria",
        quote:"There is no greater sorrow than to recall in misery the time when we were happy."
    }, {
        author: "Taraji P. Henson",
        quote: "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it’s there if you look deep.",
    }, {
        author: "Osho",
        quote: "Sadness gives depth. Happiness gives height. Sadness gives roots. Happiness gives branches. Happiness is like a tree going into the sky, and sadness is like the roots going down into the womb of the earth. Both are needed, and the higher a tree goes, the deeper it goes, simultaneously. The bigger the tree, the bigger will be its roots. In fact, it is always in proportion. That’s its balance.",
    }, {
        author: "Real Friends",
        quote: "I found myself in late night drives with no destination",
    }, {
        author: "Jenova Chen",
        quote: "We are all born alone and die alone. The loneliness is definitely part of the journey of life.",
    }, {
        author: "",
        quote: "",
    }, {
        author: "",
        quote: "",
    }, {
        author: "",
        quote: "",
    }, {
        author: "",
        quote: "",
    }, {
        author: "",
        quote: "",
    }, {
        author: "",
        quote: "",
    }, {
        author: "",
        quote: "",
    }, {
        author: "",
        quote: "",
    },
];

// TODO definire l'amarezza: nostalgia, cinismo, tristezza, solitudine ...
// TODO usare le definizioni di amarezza per mettere ogni tanto al posto delle frasi la definizione come nel dizionario