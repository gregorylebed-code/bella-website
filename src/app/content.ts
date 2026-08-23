// ============================================================
// BELLA'S WEBSITE CONTENT
// Edit this file to add Bella's pictures, stories, drawings,
// and YouTube videos. Save and the site updates automatically
// (or redeploy on Vercel if it's already live).
// ============================================================

export const siteName = "Bella's World";
export const tagline = "Welcome to my corner of the internet!";

// -----------------------------
// YOUTUBE CHANNEL
// Link to Bella's YouTube channel (shows as a button near the top).
// Leave as an empty string "" to hide the button.
// -----------------------------
export const youtubeChannelUrl = "https://www.youtube.com/@BellasBistro";
export const youtubeChannelName = "Bella's Bistro";
export const subscriberCount = 220;
export const subscriberGoal = 1000;

// -----------------------------
// ABOUT ME
// A quick intro for new visitors, plus a photo and quick facts.
// -----------------------------
export const aboutPhoto = "/photos/bella-rainbow-shirt.jpg";
export const aboutIntro = `Hi, I'm Bella! I'm 16 years old, I'm on the autism spectrum, and this is my corner of the internet. I love cooking, drawing, writing, and spending time with my family, friends, and pets. I hope to become a chef or a psychologist one day for kids and adolescents on the autism spectrum. I'm here to spread love and joy with passion, rainbows, and kindness.`;
export const quickFacts: string[] = [
  "16 years old",
  "On the autism spectrum",
  "Have two dogs and a rabbit",
  "Speak German, learning more languages",
  "Massive sock collection",
  "Photographic memory for random facts",
  "Can do voice impressions of Marge, Stewie, Homer, and Stitch",
  "Future goal: chef or psychologist for kids on the spectrum",
];

// -----------------------------
// PETS
// Put pet photos in: public/photos/
// -----------------------------
export const pets: {
  name: string;
  type: string;
  photo: string;
  traits: string[];
  likes: string[];
  dislikes: string[];
  quote: string;
  zoomies: number;
  cuddliness: number;
  foodMotivation: number;
}[] = [
  {
    name: "Rigatoni",
    type: "Dog",
    photo: "/photos/Rigatoni.jpg",
    traits: ["Energetic", "Cuddly"],
    likes: ["Swimming in the pool"],
    dislikes: ["Lemons", "Carrots"],
    quote: "I see a squirrel, and I'm going to go lightning speed.",
    zoomies: 10,
    cuddliness: 7,
    foodMotivation: 8,
  },
  {
    name: "Sadie",
    type: "Dog",
    photo: "/photos/Sadie.jpg",
    traits: ["Fluffy", "Sweet"],
    likes: ["Cuddles"],
    dislikes: ["Being bathed"],
    quote: "Just let me sleep, and pet me.",
    zoomies: 3,
    cuddliness: 10,
    foodMotivation: 6,
  },
  {
    name: "Lavender",
    type: "Rabbit",
    photo: "/photos/Lavender.png",
    traits: ["Sweetheart", "Quick to zoomie"],
    likes: ["Doing zoomies"],
    dislikes: ["Cuddles (like me)"],
    quote: "I love my mommy and daddy!",
    zoomies: 9,
    cuddliness: 2,
    foodMotivation: 9,
  },
];

// -----------------------------
// RELATIVES' PETS
// The extended family's pets. Put photos in public/photos/.
// -----------------------------
export const relativesPets: {
  name: string;
  type: string;
  photo: string;
  traits: string[];
  likes: string[];
  dislikes: string[];
  quote: string;
}[] = [
  {
    name: "Ellie",
    type: "Dog",
    photo: "",
    traits: [],
    likes: ["Cuddles", "Tug-of-war"],
    dislikes: [],
    quote: "I'm coming over to love you.",
  },
  {
    name: "Janine",
    type: "Dog",
    photo: "",
    traits: [],
    likes: ["Playing fetch (but won't give the ball back)"],
    dislikes: ["Having her ears pet"],
    quote: "Kisses with more kisses, no time to chit chat, I just want kisses.",
  },
  {
    name: "Penny",
    type: "Dog",
    photo: "",
    traits: [],
    likes: ["Sleeping in blankets"],
    dislikes: ["New people"],
    quote: "Belly rubs please!",
  },
];

// -----------------------------
// BUCKET LIST
// Sorted into Food, Life, and Travel. Add as many as you want.
// -----------------------------
export const bucketList: { food: string[]; life: string[]; travel: string[] } = {
  food: ["Go to all of South Jersey's restaurants", "Try new sushi roll types"],
  life: [
    "Hit 1k subs on Bella's Bistro",
    "Become a therapist for neurodivergent people like myself",
    "Be an old cat lady with 10 cats",
    "Get her own cooking show or cooking segment",
    "Learn a third language fluently",
  ],
  travel: [
    "Travel through all of the East Coast and West Coast",
    "Go to Germany and try authentic schnitzel",
    "Go to Paris for the Eiffel Tower",
    "Visit family in Hornchurch, London",
    "Take a cooking class in another country",
  ],
};

// -----------------------------
// BUILD BELLA'S PLATE
// A silly random meal generator. Add as many options as you want to
// each list, the page picks one from each at random.
// -----------------------------
export const plateBuilder: { mains: string[]; sides: string[]; desserts: string[] } = {
  mains: [
    "Chicken Nuggets",
    "Fish Tacos",
    "Cheeseburger",
    "Wendy's Nuggets (party count size)",
    "Pepperoni Pizza",
    "Orange Chicken",
    "BBQ Ribs",
    "Fried Chicken Taco",
    "Egg Tacos",
  ],
  sides: [
    "French Fries",
    "Loaded BBQ Tots",
    "Fried Rice",
    "Mac and Cheese",
    "Stouffer's Mac and Cheese",
    "Crab Rangoon",
    "Pirate's Booty",
    "Garlic Bread",
  ],
  desserts: [
    "Key Lime Pie Tart",
    "Mango Gelato",
    "Cookies",
    "Milkshake",
    "A Slice of Pizza (for breakfast, obviously)",
    "Ice Cream Sundae",
    "Teddy Grahams",
  ],
};

// -----------------------------
// KINDNESS CHALLENGE
// Small acts of kindness to spread love and joy. Add as many as you
// want, the page picks one at random each time someone clicks the button.
// -----------------------------
export const kindnessChallenges: string[] = [
  "Compliment a stranger today",
  "Check in on a friend you haven't talked to in a while",
  "Write a nice note for someone in your family",
  "Let someone go ahead of you in line",
  "Tell someone why you're grateful for them",
  "Send an encouraging message to someone having a hard week",
  "Help someone carry something heavy",
  "Give someone your full attention when they're talking to you",
  "Leave a kind comment for a creator you like",
  "Smile at someone who looks like they're having a rough day",
  "Say thank you to someone who doesn't hear it enough",
  "Include someone who's sitting alone",
];

// -----------------------------
// GUESS THAT FACT
// True or false facts about Bella. Mix in some false ones to keep it
// tricky! The page shows one at random and reveals the answer on click.
// -----------------------------
export const guessThatFacts: { fact: string; answer: boolean; explanation: string }[] = [
  {
    fact: "I speak German.",
    answer: true,
    explanation: "True! I speak German and plan to learn even more languages.",
  },
  {
    fact: "I have three dogs.",
    answer: false,
    explanation: "False, I have two dogs (Rigatoni and Sadie) and a rabbit (Lavender).",
  },
  {
    fact: "I can do a voice impression of Peter Griffin.",
    answer: false,
    explanation: "False! My impressions are Marge, Stewie, Homer, and Stitch.",
  },
  {
    fact: "I have a massive sock collection.",
    answer: true,
    explanation: "True! So many cool designs, foods, and animals.",
  },
  {
    fact: "My dream job is to be a chef or a psychologist.",
    answer: true,
    explanation: "True! I hope to help kids and adolescents on the spectrum one day.",
  },
  {
    fact: "I hate trying new foods.",
    answer: false,
    explanation: "False, food is my favorite four letter word! I love trying new things.",
  },
  {
    fact: "I have a photographic memory for random facts.",
    answer: true,
    explanation: "True! Ask me about Pokemon silhouettes sometime.",
  },
  {
    fact: "I'm a morning person.",
    answer: false,
    explanation: "False, definitely not a morning person, ask me about my 3:30am flight.",
  },
];

// -----------------------------
// SHOW AND TELL
// What Bella's currently into right now. Update anytime her
// favorites change. Photo is optional, leave as "" if you don't have one.
// -----------------------------
export const showAndTell: { category: string; emoji: string; title: string; blurb: string; photo: string }[] = [
  {
    category: "Favorite Show",
    emoji: "📺",
    title: "The Office",
    blurb: "Rewatching it for the hundredth time and it's still funny every single time.",
    photo: "",
  },
  {
    category: "Favorite Food Right Now",
    emoji: "🧀",
    title: "Goodles Mac and Cheese",
    blurb: "My current go-to, I could eat it every day and not get tired of it.",
    photo: "",
  },
  {
    category: "Current Hobby",
    emoji: "🔍",
    title: "Word Searches",
    blurb: "Perfect for keeping my brain busy and my hands moving at the same time.",
    photo: "",
  },
];

// -----------------------------
// BELLA'S AWARDS
// A silly made-up awards show for people, pets, and foods in
// Bella's life. Add as many categories as you want.
// -----------------------------
export const bellasAwards: { category: string; winner: string; emoji: string }[] = [
  {
    category: "Most Likely to Steal My Food While I'm in the Bathroom",
    winner: "Rigatoni",
    emoji: "🏆",
  },
  {
    category: "Most Adventurous Eater",
    winner: "Me :)",
    emoji: "🍽️",
  },
  {
    category: "Most Likely to Get a Cool Tattoo",
    winner: "Aunt Jill",
    emoji: "🎨",
  },
  {
    category: "Most Snackable Snack",
    winner: "Cheerios & Pirate's Booty (Pikachu Variety)",
    emoji: "🥇",
  },
  {
    category: "Most Likely to Talk to Animals Like They're People",
    winner: "Dad",
    emoji: "🐾",
  },
  {
    category: "Best Hype Person / Most Encouraging",
    winner: "Cousin Remi",
    emoji: "📣",
  },
  {
    category: "Best Sense of Style",
    winner: "Mom",
    emoji: "👗",
  },
  {
    category: "Most Likely to Start Singing Randomly",
    winner: "Pop Pop Mel",
    emoji: "🎤",
  },
  {
    category: "Funniest Person in the Family",
    winner: "Aunt Donna",
    emoji: "😂",
  },
  {
    category: "Best at Telling Stories",
    winner: "Uncle Charlie",
    emoji: "📖",
  },
  {
    category: "Best Gift Giver",
    winner: "Aunt Diane",
    emoji: "🎁",
  },
  {
    category: "Most Likely to Take a Million Photos of Their Food",
    winner: "Me :)",
    emoji: "📸",
  },
  {
    category: "Best Nap Taker",
    winner: "Uncle Gary",
    emoji: "😴",
  },
  {
    category: "Best at Making You Laugh When You're Upset",
    winner: "My Pets",
    emoji: "🐾",
  },
  {
    category: "Loudest Sneezer",
    winner: "Pop Pop Mel",
    emoji: "🤧",
  },
  {
    category: "Most Likely to Talk About Food for an Hour Straight",
    winner: "Me :)",
    emoji: "🍔",
  },
  {
    category: "Best Karaoke Voice",
    winner: "Mom Mom Judy",
    emoji: "🎤",
  },
  {
    category: "Coolest Aunt or Uncle",
    winner: "Uncle Brian & Uncle Jerry",
    emoji: "😎",
  },
  {
    category: "Sweetest Text Sender",
    winner: "Grandma Carole",
    emoji: "💌",
  },
  {
    category: "Best Cook in the Family (besides you!)",
    winner: "Step Dad Rob",
    emoji: "👨‍🍳",
  },
  {
    category: "Best Baker in the Family",
    winner: "Aunt Steph",
    emoji: "🧁",
  },
];

// -----------------------------
// BELLA'S RULEBOOK
// Life rules Bella lives by, in her own words. Add as many as you want.
// -----------------------------
export const bellasRulebook: string[] = [
  "Don't eat until you're stuffed like a teddy bear",
  "Everyone leaves happy",
  "Give my fur babies belly rubs",
  "Always try my new recipes",
  "Pets get the first hello when you walk in",
  "Say yes to trying something new at least once",
  "Always leave room for dessert",
  "Kindness first, always",
];

// -----------------------------
// THE BELLA SCALE
// Bella's own rating system, out of 10 rainbows. Add a new rating
// anytime you try something worth reviewing.
// -----------------------------
export const bellaScale: { item: string; rainbows: number; note: string }[] = [
  {
    item: "Coppola Pizza Wings",
    rainbows: 10,
    note: "The ultimate crisp and tenderness, to die for.",
  },
  {
    item: "Coppola Pizza (the pizza itself)",
    rainbows: 9,
    note: "Great crisp crust, good enough for breakfast the next day.",
  },
  {
    item: "Wendy's Nuggets",
    rainbows: 9,
    note: "Loved making them from my first shift, even the party count ones.",
  },
  {
    item: "Goodles Mac and Cheese",
    rainbows: 9,
    note: "My current go-to, could eat it every day.",
  },
  {
    item: "Max's Lager House Cheeseburger",
    rainbows: 9,
    note: "Some of the best pickles ever, fries tasted like Five Guys.",
  },
  {
    item: "Tin Lizzy's Cantina Tacos",
    rainbows: 9,
    note: "Fried fish, fried chicken, and cheeseburger tacos, all very very good.",
  },
  {
    item: "Scoops @ Peachtree Mango Gelato",
    rainbows: 8,
    note: "Delicious, perfect for a hot and humid day.",
  },
  {
    item: "Go Dawgs BBQ Loaded Tots",
    rainbows: 8,
    note: "Spectacular, though I was hoping for ribs and mac and cheese too.",
  },
];

// -----------------------------
// THE BELLA TRANSLATOR
// Words and phrases from Bella's own vocabulary, and what they
// actually mean. Add as many as you want.
// -----------------------------
export const bellaTranslator: { word: string; meaning: string }[] = [
  {
    word: "Wuder",
    meaning: "Water (that's just how we say it in Jersey)",
  },
  {
    word: "Mano Mano",
    meaning: "Marinara",
  },
  {
    word: "Moosh",
    meaning: "Rigatoni's squishy face",
  },
  {
    word: "Be serious about the chuckles",
    meaning: "An inside joke between me and my dad",
  },
  {
    word: "Spotty Chubs",
    meaning: "Lavender's nickname",
  },
  {
    word: "Boom Booms",
    meaning: "Thunder",
  },
  {
    word: "Codeworkers",
    meaning: "What I used to call coworkers",
  },
  {
    word: "Zippy",
    meaning: "One of my many childhood nicknames",
  },
  {
    word: "Inchers",
    meaning: "Inches",
  },
  {
    word: "Brain Go Up, Brain Go Down",
    meaning: "When someone's eyebrows go up or down",
  },
  {
    word: "Bones",
    meaning: "Pizza crust",
  },
  {
    word: "Sugar I'm Steve",
    meaning: `What I hear instead of "Sugar, you're sweet" in the song "Sugar" by Maroon 5`,
  },
];

// -----------------------------
// PICTURES
// Put image files in: public/photos/
// Then reference them here as "/photos/filename.jpg"
// -----------------------------
export const photos: { src: string; caption: string }[] = [
  { src: "/photos/bella-rainbow-shirt.jpg", caption: "Me in my rainbow shirt!" },
];

// -----------------------------
// DRAWINGS
// Put drawing images in: public/drawings/
// -----------------------------
export const drawings: { src: string; caption: string }[] = [
  { src: "/drawings/bella-drawing-01.png", caption: "Mickey Mouse" },
  { src: "/drawings/bella-drawing-02.png", caption: "My Rabbit" },
  { src: "/drawings/bella-drawing-03.png", caption: "Minion" },
  { src: "/drawings/bella-drawing-04.png", caption: "Stewie" },
  { src: "/drawings/bella-drawing-05.png", caption: "Delighted Taco" },
  { src: "/drawings/bella-drawing-06.png", caption: "Anxious Apple" },
  { src: "/drawings/bella-drawing-07.png", caption: "Monkey" },
  { src: "/drawings/bella-drawing-08.png", caption: "Gus" },
  { src: "/drawings/bella-drawing-09.png", caption: "Hamburger & Hot Dog Monster" },
  { src: "/drawings/bella-drawing-10.png", caption: "Police Dog" },
  { src: "/drawings/bella-drawing-11.png", caption: "Scooby & Shaggy" },
  { src: "/drawings/bella-drawing-12.png", caption: "Cartman" },
  { src: "/drawings/bella-drawing-13.png", caption: "BBQ Braces Dinosaur" },
  { src: "/drawings/bella-drawing-14.png", caption: "Rapper Squirrel" },
  { src: "/drawings/bella-drawing-15.png", caption: "Hula Hoop Bear" },
  { src: "/drawings/bella-drawing-16.png", caption: "Spaghetti & Meatballs Monsters" },
  { src: "/drawings/bella-drawing-17.png", caption: "Mr. Garrison & Mr. Hat" },
  { src: "/drawings/bella-drawing-18.png", caption: "Rainy Day Bear" },
  { src: "/drawings/bella-drawing-19.png", caption: "Uncle Gary" },
  { src: "/drawings/bella-drawing-20.png", caption: "Peter Griffin" },
  { src: "/drawings/bella-drawing-21.png", caption: "Skateboarding Hot Dog (with Burger, Ketchup & Mustard)" },
  { src: "/drawings/bella-drawing-22.png", caption: "Grumpy Pickle" },
  { src: "/drawings/bella-drawing-23.png", caption: "Nervous Egg & Bacon" },
  { src: "/drawings/bella-drawing-24.png", caption: "Overwhelmed Burrito" },
  { src: "/drawings/bella-drawing-25.png", caption: "Pizza Slice Monster" },
  { src: "/drawings/bella-drawing-26.png", caption: "Milk & Cookie" },
  { src: "/drawings/bella-drawing-27.png", caption: "Happy Cat at Dinner" },
  { src: "/drawings/bella-drawing-28.png", caption: "Kool-Aid Cup" },
];

// -----------------------------
// DRAW WITH ME PROMPTS
// Random drawing prompt generator. Add as many as you want, the
// page picks one at random each time someone clicks the button.
// -----------------------------
export const drawingPrompts: string[] = [
  "A nervous slice of pizza",
  "Your pet as a superhero",
  "A grumpy breakfast food",
  "A monster made of your favorite snack",
  "A sleepy animal wearing socks",
  "A food that's having the best day ever",
  "Your favorite cartoon character as an animal",
  "A rainbow-colored creature",
  "A food mashup nobody's tried before",
  "An overwhelmed vegetable having a rough day",
  "A dog wearing a chef hat",
  "Your dream dessert as a character",
];

// -----------------------------
// INGREDIENTS I CAN'T LIVE WITHOUT
// Bella's go-to pantry staples and condiments. Emoji shows if no photo.
// -----------------------------
export const ingredients: { name: string; emoji: string; note: string; photo: string }[] = [
  {
    name: "Spicy Mustard",
    emoji: "🌭",
    note: "Gives everything a little kick, no regular mustard for me.",
    photo: "",
  },
  {
    name: "Pickles",
    emoji: "🥒",
    note: "Non-negotiable on a burger, extra points if they're the good crunchy ones.",
    photo: "",
  },
  {
    name: "All Types of Cheese",
    emoji: "🧀",
    note: "Doesn't matter what kind, if it's cheese I'm in.",
    photo: "",
  },
  {
    name: "Salsa",
    emoji: "🍅",
    note: "Chips need a partner and salsa's always showing up.",
    photo: "",
  },
  {
    name: "Queso",
    emoji: "🫕",
    note: "Warm, melty, and honestly could be its own meal.",
    photo: "",
  },
  {
    name: "Guacamole",
    emoji: "🥑",
    note: "The best part of any chip and dip situation.",
    photo: "",
  },
];

// -----------------------------
// BLOG
// Write about anything: your day, something you're excited about,
// whatever you want. Newest posts should go at the TOP of the list.
// Date format: "Month Day, Year" (e.g. "July 18, 2026")
// -----------------------------
export const blogPosts: { title: string; date: string; text: string }[] = [
  {
    title: "Ocean City, Day 2!",
    date: "August 23, 2026",
    text: `Hi peeps, day 2 in Ocean City! We hit the beach today, which honestly might be my favorite part of this whole trip.

For lunch we had turkey and cheese sandwiches with spicy mustard, obviously, because you already know I can't live without that stuff.

I did some seashell hunting too, but sadly every single one I found was broken. Still looking for that perfect one.

More updates soon, sending yall love from the beach!
♥️Bella`,
  },
  {
    title: "Ocean City, Day 1!",
    date: "August 22, 2026",
    text: `Hi peeps! We made it to Ocean City! We got here around 3pm and our house is literally on the beach this year, and it's a very big home, so I'm already feeling fancy.

First stop obviously was food. We got Manco & Manco Pizza and honestly it did not disappoint, that thin crispy crust is elite. 10/10 start to the trip if you ask me.

Bonus round today: we got to see Uncle Gary, Uncle Charlie G, Aunt Jill, and the pups Ellie, Penny, and Janine! Lots of kisses with more kisses from Janine, no time to chit chat, she just wanted kisses, and Penny was very much in her "new people" era, which is fair, I get it.

Dad and I also took a walk on the boardwalk tonight, which is always one of my favorite parts of Ocean City.

More beach updates to come. Sending yall love and kindness from the shore!
♥️Bella`,
  },
  {
    title: "My First Two Shifts at Wendy's!",
    date: "August 9, 2026",
    text: `Hey all, I realized it's been a minute since I made a blog post. Last Saturday I had my first ever training shift at Wendy's. I did nuggets and french fries. I loved every second of it, even during my first lunch rush that was kinda overwhelming.

Yesterday I had to make two party count nuggets, which are like 50 or so nuggets each. That was fun but also overstimulating.

After work yesterday, dad and I DoorDashed dinner from a place called Coppola Pizza. The wings are to die for, the ultimate crisp and tenderness, and some great pizza with a crisp crust. I even had a slice for breakfast, which is a Bella novelty.

Today at 1pm I have a BBQ with such awesome food items and awesome family and friends.

As always, love and kindness sent your way!!
♥️Bella`,
  },
  {
    title: "My Atlanta Trip Recap!",
    date: "August 1, 2026",
    text: `Wow! What an awesome trip to Atlanta. I'm kinda in a whirlwind of emotions, like happy to be in NJ, sad missing all the Georgia peaches, and excited as I just had my first day of work ever.

The plane ride there was awesome, this guy was so nice to help me carry my bags. Lucky for me I had a window seat, and I am a fun-sized Twix bar so I could squeeze anywhere. Although, I couldn't stand my ears constantly popping.

Once we got to Atlanta we looked for 30 mins for a taxi and finally got one to the hotel. Keep in mind, I don't live in GA so... we had no clue where we were going (sorry GA residents). The hotel was nice. It was very cold in the lobby, but other than that it wasn't too bad. There was even a pool which sadly I didn't get to check out because we got downpoured on unfortunately. But it was really cool to stay in a hotel because I don't do that very often.

We did a lot of unpacking, and then went to the aquarium, which has over 500 species, which is really cool. I had a walking taco while sitting down at the aquarium in a place called Seaside Delights. For brunch, we went to this place called Corner Bakery Cafe, and I got something called an Anaheim panini, and that was really good. We were at the aquarium for like six hours, which is crazy, but one of the people we were with is studying to be a marine biologist, so they were checking it out and really enjoyed that. So that's why we were there a while.

For dinner that night we went to Max's Lager House. I'm not 21, so no beer and alcohol for me, don't you worry. I got this big fat cheeseburger with some of the best pickles ever, and the french fries kind of tasted like Five Guys french fries.

The next day we went to a place called World of Coca-Cola. It was really cool. I splurged a little bit and added more socks to my sock collection, which I probably shouldn't have, but it's okay. And I got to try a soda from Thailand, which was really cool. We went to this really cool egg place and they had a really good bacon, egg, and cheese on a brioche bun. I won't say the name because it has a curse word in it, so we'll just call it "the egg."

After Coca-Cola World, we went to Ponce City Market and checked out a couple stores. We had pizza at Jean's Pizza and it was really good, supposedly tastes just like New York style pizza. We split a key lime pie tart that was very good. For dinner we went to a place called Tin Lizzy's Cantina and I got three different types of tacos: a fried fish one, a fried chicken one, and a cheeseburger taco. It was very, very good.

The next day, just my mom and I took an Uber to the Atlanta Zoo. We saw flamingos, elephants, rhinos, meerkats, lemurs, giraffes, ostriches, zebras, gorillas, turtles, and so many more cool things. The closest we could get to barbecue there was a place called Go Dawgs, we got barbecue loaded tots and they were spectacular. Sadly no barbecue ribs or mac and cheese like I was hoping, but that's okay, maybe next time.

Later that day, we were gonna leave to go to the airport, and our flight got delayed like five times, so we ended up staying a little bit longer. We went to a place called Scoops @ Peachtree and I got a mango gelato and it was delicious, very good for a hot and humid day. After that we went to the airport and had Panda Express for dinner, I got orange chicken and fried rice, and we split crab rangoon.

Well, that was my trip to Atlanta. Thanks for listening to me yap.

A few extra bits since yall asked! My favorite animal at the zoo was the sea otter, but the penguins were a close second. At the aquarium, honestly the otters again. And I really loved seeing the elephants because we don't have elephants at our zoo back in Philadelphia anymore, and I miss them.

There were definitely some overwhelming moments, since I was traveling with people I hadn't traveled with before, but I handled it like a champ, my mom said so herself. The aquarium crowds were really busy at times so I had to navigate my little body through there, which is always fun. As for the flight delays, honestly they didn't annoy me. Once it happened twice I was just like, it's gonna happen again, that's part of it.`,
  },
  {
    title: "Atlanta, Here I Come!",
    date: "July 26, 2026",
    text: `Hi peeps! On Friday I'm having an early morning flight to Atlanta from Philadelphia. I have to get up at 3:30 am 😬. Keep in mind I'm not a morning person so we shall see how that goes. This is my second time on an airplane.

Our plans consist of aquarium, Stone Mountain, World of Coca Cola and possibly a bbq dinner like a true southern bbq. I'll take lots of pics to show yall my trip favs and highlights. I can't wait to try Atlanta restaurants for the first time!! I'll try to make a photo dump of my adventures, restaurants and sights to see!

We are also going to Ponce City Market which has rooftop mini golf, skee ball, and rooftop restaurant, and stores all in one! A tourist dream right? I will be with my mom, her friend Tabatha and Tabatha's daughter Gia. Who knows I may just develop a southern accent while I'm here... keep in mind I'm a Jersey gal. So we say "Wuder" and not "wader" hahahaha!

Fun fact: the Georgia Aquarium has over 500 species! And yes... my autism self will take a pic of each and every one for the photographic memory journal and I will remember them all. I even will have a window seat which is so cool!

We will be at a hotel, ps hopefully the beds and pillows are cozy. But that may be just my sensory icks... I wonder what the window view from the hotel will look like. I usually take a pic at every hotel I go to at night.

Fun fact: the aquarium takes 3-4 hours to go through, perfect for those who love memorizing random animals like me. It's been 10+ years since I've flown on a plane but I'm excited to embark on this journey. Sorry mom in advance if I don't shut up about all the animal pics later in the hotel.

I am bringing protein bars and Pirate's Booty for the plane. I hear they give out trading cards sometimes... but I'm too socially awkward to ask, plus at 6:30 or so in the morning I won't be thinking. I wonder the difference between our bbq in Jersey vs the one in the south.

If yall didn't know, food is my favorite four letter word. I'll peep up even if I'm mid sleep.`,
  },
  {
    title: "Welcome to Bella's World!",
    date: "July 18, 2026",
    text: `Hi, welcome to Bella's world! I'm 16 years of age! It's so nice to meet you all! Thank you for stopping by on my website. This is where I'll showcase my art, recipes, my cooking channel!

A couple fun facts about me: I am on the autism spectrum, I have two dogs and a rabbit. Some ways I describe myself: hard working, empathetic, artsy, funny, always hungry. I love spending time with my family, friends, and pets! In my spare time I cook, play video games, watch YouTube. I also speak German and plan to speak other languages too!

I hope to become a chef or a psychologist one day for kids and adolescents on the autism spectrum. I'm here to spread love and joy with passion and rainbows and kindness.

Just know, please don't ever ask me to decide what to eat, or whatever you can't decide, because spoiler alert: I can never decide, so if I decide for you, it won't be decided lol. But that's the woman in me hahahaha.

Some of my skills include: cooking, writing stories, food blogging, some might call me the dog whisperer. I have a strong sense for details, and a photographic memory. Could I tell you 9x7? I'm afraid not. But I can tell you every Pokemon by silhouettes, therefore I'm a woman with useless info. But aren't we all (no offense).

I also have a massive fun sock collection! So many cool designs, foods, animals. I can do voice impressions of Marge, Stewie, Homer, Stitch. And make useless bird call noises.`,
  },
];

// -----------------------------
// TIDBITS: AUTISM AND MORE
// Short posts, facts, thoughts, or stories about autism, your brain,
// or anything else you want to share here. Newest goes at the TOP.
// Date format: "Month Day, Year" (e.g. "July 18, 2026")
// -----------------------------
export const tidbits: { title: string; date: string; text: string }[] = [];

// -----------------------------
// AUTISM SUPERPOWERS
// Strengths and things that make your brain awesome. Short phrases,
// shown as a highlight list.
// -----------------------------
export const autismSuperpowers: string[] = [
  "Photographic memory for random facts",
  "Strong sense for details",
  "Handles new experiences like a champ, even the overwhelming ones",
  "Deeply loyal and empathetic to family, friends, and pets",
];

// -----------------------------
// TIDBITS FAQ
// Common questions people ask, answered in your own words.
// -----------------------------
export const tidbitsFaq: { q: string; a: string }[] = [
  {
    q: "What is autism, in your own words?",
    a: "It's just a different way my brain works, how I think, feel, and experience the world. It's part of who I am, not something wrong with me.",
  },
  {
    q: "What's something people get wrong about autism?",
    a: "People think it looks the same for everyone. It doesn't. I can handle plane rides and new people like a champ one day and get overwhelmed by a busy aquarium crowd the next. Both are normal for me.",
  },
  {
    q: "What helps you when you feel overwhelmed?",
    a: "Having a plan helps, and so does having people around who don't rush me. I just need to navigate things at my own pace.",
  },
  {
    q: "Why do you love random facts so much?",
    a: "I have a really strong memory for details, so things like Pokemon silhouettes or 500 species at an aquarium just stick with me. It's one of my favorite things about my brain.",
  },
  {
    q: "What do you want people to know about talking to someone autistic?",
    a: "Just talk to me like a normal person. I'm funny, I love food, I have opinions on socks. Autism is part of me, not all of me.",
  },
  {
    q: "What are your sensory likes?",
    a: "Funny animal videos, playing with my pets, and hanging with friends. Those are my happy place things.",
  },
  {
    q: "What are your sensory dislikes?",
    a: "Unpredictable loud sounds or noises, loud talking, and loud chewing. Those are the ones that get me every time.",
  },
];

// -----------------------------
// AFFIRMATIONS
// Things you'd say to motivate someone else. Add as many as you want,
// the page picks a random one each time someone clicks the button.
// -----------------------------
export const affirmations: string[] = [
  "You are doing better than you think you are.",
  "It's okay to go at your own pace, there's no rush.",
  "You handled that like a champ, be proud of yourself.",
  "Your brain works differently, not wrong.",
  "You are allowed to take up space and be exactly who you are.",
  "One overwhelming moment doesn't erase all the good ones.",
  "You are worthy of love and kindness, especially from yourself.",
];

// -----------------------------
// YOUTUBE VIDEOS
// Paste the video ID from the URL.
// Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID is "dQw4w9WgXcQ"
// -----------------------------
export const videos: { id: string; title: string }[] = [
  // { id: "dQw4w9WgXcQ", title: "My latest video!" },
];

// -----------------------------
// "NEW" BADGES
// Whenever you add something to a section above (a drawing, a photo, a
// recipe, a video, etc.), bump that section's date here to today's date
// ("YYYY-MM-DD"). Any section updated in the last 14 days shows a little
// "NEW" badge on its nav button. Blog posts get their badge automatically
// from the newest post's date, no need to touch it here.
// -----------------------------
export const sectionUpdates: Record<string, string> = {
  Pictures: "2026-07-11",
  Drawings: "2026-08-14",
  "Ausome Autism": "2026-08-14",
  "Build Bella's Plate": "2026-08-14",
  "Kindness Challenge": "2026-08-15",
  "Guess That Fact": "2026-08-15",
  "Show and Tell": "2026-08-15",
  "Bella's Awards": "2026-08-16",
  "Bella's Rulebook": "2026-08-16",
  "The Bella Scale": "2026-08-16",
  "The Bella Translator": "2026-08-16",
  Videos: "2026-07-11",
  Affirmations: "2026-07-11",
  Quiz: "2026-08-01",
  "Ask Bella": "2026-08-08",
  Pets: "2026-08-14",
  "Bucket List": "2026-08-14",
  Ingredients: "2026-08-22",
};
