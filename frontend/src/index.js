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