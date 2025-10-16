import { Character, Reaction } from '../types';

export const allCharacters: Character[] = [
  { 
    id: 1, 
    name: "Luke Skywalker", 
    species: "Human", 
    birthYear: "19 BBY",
    description: "A farm boy from Tatooine who became one of the greatest Jedi in the galaxy, leading the fight against the Galactic Empire.",
    imageUrl: "/images/luke-skywalker.jpg" 
  },
  { 
    id: 2, 
    name: "C-3PO", 
    species: "Droid", 
    birthYear: "112 BBY",
    description: "A protocol droid fluent in over six million forms of communication, often nervous and worried about the dangers faced by his friends.",
    imageUrl: "/images/c3po.jpg" 
  },
  { 
    id: 3, 
    name: "R2-D2", 
    species: "Droid", 
    birthYear: "33 BBY",
    description: "An astromech droid and loyal companion to C-3PO and Anakin Skywalker, known for his bravery and crucial role in many battles.",
    imageUrl: "/images/r2d2.jpg" 
  },
  { 
    id: 4, 
    name: "Darth Vader", 
    species: "Human", 
    birthYear: "41.9 BBY",
    description: "Once the heroic Jedi Knight Anakin Skywalker, he fell to the dark side of the Force and became the terrifying enforcer of the Emperor.",
    imageUrl: "/images/darth-vader.jpg" 
  },
  { 
    id: 5, 
    name: "Leia Organa", 
    species: "Human", 
    birthYear: "19 BBY",
    description: "A fearless leader and princess of Alderaan, she was a crucial figure in the Rebel Alliance and later the New Republic.",
    imageUrl: "/images/leia-organa.jpg" 
  },
  { 
    id: 6, 
    name: "Owen Lars", 
    species: "Human", 
    birthYear: "52 BBY",
    description: "Luke Skywalker's uncle who raised him on their moisture farm on Tatooine, protective and fearful of the boy following in his father's footsteps.",
    imageUrl: "/images/owen-lars.jpg" 
  },
  { 
    id: 7, 
    name: "Beru Whitesun lars", 
    species: "Human", 
    birthYear: "47 BBY",
    description: "Owen Lars' wife and Luke's aunt, she provided a loving and supportive upbringing for the future Jedi on a harsh desert planet.",
    imageUrl: "/images/beru-lars.jpg" 
  },
  { 
    id: 8, 
    name: "R5-D4", 
    species: "Droid", 
    birthYear: "unknown",
    description: "An outdated astromech droid offered to Owen Lars by Jawas, whose malfunctioning motivator allowed R2-D2 to escape detection.",
    imageUrl: "/images/r5d4.jpg" 
  },
  { 
    id: 9, 
    name: "Biggs Darklighter", 
    species: "Human", 
    birthYear: "24 BBY",
    description: "A close childhood friend of Luke Skywalker who joined the Rebel Alliance as a fighter pilot before Luke did.",
    imageUrl: "/images/biggs-darklighter.jpg" 
  },
  { 
    id: 10, 
    name: "Obi-Wan Kenobi", 
    species: "Human", 
    birthYear: "57 BBY",
    description: "A wise and powerful Jedi Master who trained Anakin Skywalker and later guided Luke Skywalker, serving as a general in the Clone Wars.",
    imageUrl: "/images/obi-wan-kenobi.jpg" 
  },
  { 
    id: 11, 
    name: "Anakin Skywalker", 
    species: "Human", 
    birthYear: "41.9 BBY",
    description: "The prophesied Chosen One, a Jedi hero whose tragic fall to the dark side shaped the destiny of the galaxy.",
    imageUrl: "/images/anakin-skywalker.jpg" 
  },
  { 
    id: 12, 
    name: "Chewbacca", 
    species: "Wookiee", 
    birthYear: "200 BBY",
    description: "A loyal Wookiee co-pilot of the Millennium Falcon and best friend to Han Solo, known for his strength and signature roar.",
    imageUrl: "/images/chewbacca.jpg" 
  },
  { 
    id: 13, 
    name: "Han Solo", 
    species: "Human", 
    birthYear: "29 BBY",
    description: "A charismatic smuggler and captain of the Millennium Falcon who, along with his Wookiee co-pilot, became a key figure in the Rebellion.",
    imageUrl: "/images/han-solo.jpg" 
  },
  { 
    id: 14, 
    name: "Jabba Desilijic Tiure", 
    species: "Hutt", 
    birthYear: "600 BBY",
    description: "A notorious Hutt gangster and crime lord who controlled a vast criminal empire from his palace on Tatooine.",
    imageUrl: "/images/jabba-the-hutt.jpg" 
  },
  { 
    id: 15, 
    name: "Yoda", 
    species: "Unknown", 
    birthYear: "896 BBY",
    description: "The wise and diminutive Grand Master of the Jedi Order, known for his unique speech patterns and immense mastery of the Force.",
    imageUrl: "/images/yoda.jpg" 
  },
  { 
    id: 16, 
    name: "Palpatine", 
    species: "Human", 
    birthYear: "82 BBY",
    description: "The secretive Sith Lord Darth Sidious, who orchestrated the Clone Wars and transformed the Republic into the Galactic Empire.",
    imageUrl: "/images/palpatine.jpg" 
  },
  { 
    id: 17, 
    name: "Boba Fett", 
    species: "Human", 
    birthYear: "31.5 BBY",
    description: "A legendary Mandalorian bounty hunter and a clone of Jango Fett, known for his iconic armor and reputation.",
    imageUrl: "/images/boba-fett.jpg" 
  },
  { 
    id: 18, 
    name: "Lando Calrissian", 
    species: "Human", 
    birthYear: "31 BBY",
    description: "A smooth-talking gambler, owner of the Millennium Falcon before losing it to Han Solo, and later a general in the Rebellion.",
    imageUrl: "/images/lando-calrissian.jpg" 
  },
  { 
    id: 19, 
    name: "Bail Prestor Organa", 
    species: "Human", 
    birthYear: "67 BBY",
    description: "Senator of Alderaan and adoptive father to Leia Organa, a key founder and leader in the early days of the Rebel Alliance.",
    imageUrl: "/images/bail-organa.jpg" 
  },
  { 
    id: 20, 
    name: "Captain Antilles", 
    species: "Human", 
    birthYear: "unknown",
    description: "The captain of the Tantive IV, captured and interrogated by Darth Vader in the opening scene of 'A New Hope'.",
    imageUrl: "/images/captain-antilles.jpg" 
  },
  { 
    id: 21, 
    name: "Aayla Secura", 
    species: "Twi'lek", 
    birthYear: "48 BBY",
    description: "A graceful and formidable Jedi General during the Clone Wars, killed during the execution of Order 66.",
    imageUrl: "/images/aayla-secura.jpg" 
  },
  { 
    id: 22, 
    name: "Mace Windu", 
    species: "Human", 
    birthYear: "72 BBY",
    description: "A senior and powerful member of the Jedi High Council, known for his stern demeanor and use of the unique Vaapad lightsaber form.",
    imageUrl: "/images/mace-windu.jpg" 
  },
];

export const allReactions: Reaction[] = [
  { id: "9907", content: "�", characterId: 13, deleted: false },
  { id: "1302", content: "🚀", characterId: 13, deleted: false },
  { id: "9906", content: "�", characterId: 5, deleted: false },
  { id: "1003", content: "�", characterId: 10, deleted: false },
  { id: "9902", content: "�", characterId: 13, deleted: true },
  { id: "9903", content: "�", characterId: 4, deleted: false },
  { id: "1301", content: "�", characterId: 13, deleted: false },
  { id: "401", content: "😈", characterId: 4, deleted: false },
  { id: "9908", content: "💰", characterId: 17, deleted: true },
  { id: "9901", content: "⭐", characterId: 5, deleted: false },
  { id: "1001", content: "�", characterId: 10, deleted: false },
  { id: "1303", content: "👍", characterId: 13, deleted: false },
  { id: "301", content: "💙", characterId: 3, deleted: false },
  { id: "201", content: "�", characterId: 2, deleted: false },
  { id: "302", content: "⭐", characterId: 3, deleted: true },
  { id: "1002", content: "🙏", characterId: 10, deleted: true },
  { id: "1702", content: "🥶", characterId: 17, deleted: false },
  { id: "1304", content: "�", characterId: 13, deleted: false },
  { id: "407", content: "�", characterId: 4, deleted: true },
  { id: "202", content: "🤖", characterId: 2, deleted: false },
  { id: "1502", content: "�", characterId: 15, deleted: false },
  { id: "9905", content: "🤖", characterId: 3, deleted: false },
  { id: "1701", content: "💰", characterId: 17, deleted: false },
  { id: "1501", content: "🧙", characterId: 15, deleted: false },
  { id: "401", content: "�", characterId: 4, deleted: false },
  { id: "303", content: "⚡", characterId: 3, deleted: false },
  { id: "9904", content: "�", characterId: 1, deleted: false },
  { id: "2202", content: "�", characterId: 22, deleted: false },
  { id: "1503", content: "✨", characterId: 15, deleted: false },
  { id: "1202", content: "🤣", characterId: 12, deleted: false },
  { id: "405", content: "�", characterId: 4, deleted: false },
  { id: "203", content: "❓", characterId: 2, deleted: false },
  { id: "406", content: "�", characterId: 4, deleted: false },
  { id: "1504", content: "�", characterId: 15, deleted: false },
  { id: "2201", content: "🟣", characterId: 22, deleted: false },
  { id: "1802", content: "�", characterId: 18, deleted: false },
  { id: "204", content: "🤖", characterId: 2, deleted: false },
  { id: "503", content: "⭐", characterId: 5, deleted: false },
  { id: "501", content: "�", characterId: 5, deleted: false },
  { id: "1501", content: "�", characterId: 15, deleted: false },
  { id: "504", content: "👑", characterId: 5, deleted: false },
  { id: "104", content: "�", characterId: 1, deleted: false },
  { id: "1201", content: "�", characterId: 12, deleted: false },
  { id: "1801", content: "🎩", characterId: 18, deleted: false },
  { id: "303", content: "⚡", characterId: 3, deleted: false },
  { id: "102", content: "⭐", characterId: 1, deleted: false },
  { id: "502", content: "�", characterId: 5, deleted: false },
  { id: "401", content: "😈", characterId: 4, deleted: false },
  { id: "103", content: "�", characterId: 1, deleted: true },
  { id: "404", content: "😈", characterId: 4, deleted: false },
  { id: "105", content: "�", characterId: 1, deleted: false },
  { id: "106", content: "�", characterId: 1, deleted: true },
  { id: "1004", content: "�", characterId: 10, deleted: false },
];
