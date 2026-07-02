export type Dimension = "EI" | "SN" | "TF" | "JP"
export type Letter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P"

export interface Question {
  id: number
  dimension: Dimension
  text: string
  optionA: { text: string; letter: Letter }
  optionB: { text: string; letter: Letter }
}

// 12 questions — 3 per dimension (E/I, S/N, T/F, J/P)
export const questions: Question[] = [
  {
    id: 1,
    dimension: "EI",
    text: "After a long, busy week, how do you prefer to recharge?",
    optionA: { text: "Going out and spending time with a group of friends", letter: "E" },
    optionB: { text: "Staying in with quiet time to myself", letter: "I" },
  },
  {
    id: 2,
    dimension: "EI",
    text: "In a classroom or group discussion, you usually:",
    optionA: { text: "Speak up early and think out loud", letter: "E" },
    optionB: { text: "Listen first and reflect before sharing", letter: "I" },
  },
  {
    id: 3,
    dimension: "EI",
    text: "At a social event where you know few people, you tend to:",
    optionA: { text: "Introduce yourself and meet many new people", letter: "E" },
    optionB: { text: "Stick with one or two people you feel comfortable with", letter: "I" },
  },
  {
    id: 4,
    dimension: "SN",
    text: "When learning something new, you focus more on:",
    optionA: { text: "Concrete facts, details, and real examples", letter: "S" },
    optionB: { text: "The big picture, patterns, and possibilities", letter: "N" },
  },
  {
    id: 5,
    dimension: "SN",
    text: "You are more drawn to:",
    optionA: { text: "Practical ideas that can be applied right now", letter: "S" },
    optionB: { text: "Theories and imaginative ideas about the future", letter: "N" },
  },
  {
    id: 6,
    dimension: "SN",
    text: "When describing an experience, you usually give:",
    optionA: { text: "A step-by-step, literal account of what happened", letter: "S" },
    optionB: { text: "An impression of what it meant or could mean", letter: "N" },
  },
  {
    id: 7,
    dimension: "TF",
    text: "When making an important decision, you rely more on:",
    optionA: { text: "Logic, consistency, and objective analysis", letter: "T" },
    optionB: { text: "Values, empathy, and how people are affected", letter: "F" },
  },
  {
    id: 8,
    dimension: "TF",
    text: "When a friend shares a problem, your first instinct is to:",
    optionA: { text: "Help them find a solution", letter: "T" },
    optionB: { text: "Understand and support how they feel", letter: "F" },
  },
  {
    id: 9,
    dimension: "TF",
    text: "You would rather be seen as:",
    optionA: { text: "Fair and reasonable", letter: "T" },
    optionB: { text: "Caring and compassionate", letter: "F" },
  },
  {
    id: 10,
    dimension: "JP",
    text: "How do you prefer to approach your work and studies?",
    optionA: { text: "With a clear plan, schedule, and deadlines", letter: "J" },
    optionB: { text: "Keeping things flexible and open to change", letter: "P" },
  },
  {
    id: 11,
    dimension: "JP",
    text: "Your workspace and daily life are usually:",
    optionA: { text: "Organized, tidy, and structured", letter: "J" },
    optionB: { text: "Spontaneous, adaptable, and free-flowing", letter: "P" },
  },
  {
    id: 12,
    dimension: "JP",
    text: "When it comes to plans, you feel best when:",
    optionA: { text: "Things are decided and settled ahead of time", letter: "J" },
    optionB: { text: "You can keep your options open until the last moment", letter: "P" },
  },
]

export interface TypeProfile {
  code: string
  name: string
  nickname: string
  summary: string
  strengths: string[]
  weaknesses: string[]
  careers: string[]
  famous: string[]
}

export const typeProfiles: Record<string, TypeProfile> = {
  INTJ: {
    code: "INTJ",
    name: "The Architect",
    nickname: "Strategic Mastermind",
    summary:
      "Imaginative and strategic thinkers with a plan for everything. INTJs combine deep analysis with a drive to turn bold ideas into reality.",
    strengths: ["Strategic long-term thinking", "Independent and decisive", "Highly knowledgeable", "Determined"],
    weaknesses: ["Overly critical of themselves and others", "Can dismiss emotions", "Impatient with inefficiency"],
    careers: ["Scientist / Researcher", "Software Architect", "Strategic Planner", "Engineer", "Investment Analyst"],
    famous: ["Elon Musk", "Michelle Obama", "Isaac Newton"],
  },
  INTP: {
    code: "INTP",
    name: "The Logician",
    nickname: "Innovative Thinker",
    summary:
      "Innovative inventors with an unquenchable thirst for knowledge. INTPs love exploring theories and finding logical explanations for how things work.",
    strengths: ["Analytical and original", "Open-minded", "Objective", "Loves solving complex problems"],
    weaknesses: ["Can be absent-minded", "Dislikes rules and routine", "Overthinks decisions"],
    careers: ["Researcher", "Software Developer", "Mathematician", "Professor", "Data Scientist"],
    famous: ["Albert Einstein", "Bill Gates", "Marie Curie"],
  },
  ENTJ: {
    code: "ENTJ",
    name: "The Commander",
    nickname: "Bold Leader",
    summary:
      "Bold, imaginative, and strong-willed leaders who always find a way — or make one. ENTJs thrive on organizing people and resources toward big goals.",
    strengths: ["Confident and efficient", "Strong-willed", "Strategic leader", "Charismatic"],
    weaknesses: ["Can be stubborn and dominant", "Impatient", "Cold or blunt at times"],
    careers: ["CEO / Executive", "Entrepreneur", "Management Consultant", "Lawyer", "Project Director"],
    famous: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay"],
  },
  ENTP: {
    code: "ENTP",
    name: "The Debater",
    nickname: "Curious Innovator",
    summary:
      "Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs are quick, clever, and love exploring new possibilities.",
    strengths: ["Quick and inventive", "Excellent brainstormer", "Charismatic and energetic", "Knowledgeable"],
    weaknesses: ["Argumentative", "Dislikes routine", "Can struggle to follow through"],
    careers: ["Entrepreneur", "Lawyer", "Consultant", "Marketing Strategist", "Product Manager"],
    famous: ["Thomas Edison", "Leonardo da Vinci", "Mark Twain"],
  },
  INFJ: {
    code: "INFJ",
    name: "The Advocate",
    nickname: "Insightful Idealist",
    summary:
      "Quiet, principled idealists who are creative and full of conviction. INFJs are driven by a deep sense of purpose and a desire to help others.",
    strengths: ["Insightful and creative", "Principled and passionate", "Altruistic", "Determined"],
    weaknesses: ["Sensitive to criticism", "Prone to burnout", "Perfectionistic", "Private"],
    careers: ["Counselor / Therapist", "Writer", "Teacher", "Psychologist", "Nonprofit Leader"],
    famous: ["Nelson Mandela", "Mother Teresa", "Martin Luther King Jr."],
  },
  INFP: {
    code: "INFP",
    name: "The Mediator",
    nickname: "Thoughtful Idealist",
    summary:
      "Poetic, kind, and altruistic people, always eager to help a good cause. INFPs are guided by their values and a rich inner world.",
    strengths: ["Empathetic and caring", "Creative and imaginative", "Open-minded", "Idealistic"],
    weaknesses: ["Overly idealistic", "Takes things personally", "Can be impractical"],
    careers: ["Writer / Author", "Artist", "Counselor", "Social Worker", "Graphic Designer"],
    famous: ["William Shakespeare", "J.R.R. Tolkien", "Audrey Hepburn"],
  },
  ENFJ: {
    code: "ENFJ",
    name: "The Protagonist",
    nickname: "Inspiring Leader",
    summary:
      "Charismatic and inspiring leaders who are able to mesmerize their listeners. ENFJs are natural mentors who help others grow.",
    strengths: ["Charismatic and inspiring", "Empathetic", "Natural leader", "Reliable"],
    weaknesses: ["Overly idealistic", "Too selfless", "Sensitive to criticism"],
    careers: ["Teacher", "HR Manager", "Coach / Mentor", "Public Relations", "Nonprofit Director"],
    famous: ["Barack Obama", "Oprah Winfrey", "Maya Angelou"],
  },
  ENFP: {
    code: "ENFP",
    name: "The Campaigner",
    nickname: "Enthusiastic Creative",
    summary:
      "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile. ENFPs see life as full of exciting possibilities.",
    strengths: ["Enthusiastic and energetic", "Excellent communicator", "Curious and creative", "Warm"],
    weaknesses: ["Easily distracted", "Overthinks things", "Struggles with routine tasks"],
    careers: ["Journalist", "Actor / Performer", "Entrepreneur", "Marketing Specialist", "Teacher"],
    famous: ["Robert Downey Jr.", "Robin Williams", "Walt Disney"],
  },
  ISTJ: {
    code: "ISTJ",
    name: "The Logistician",
    nickname: "Practical Organizer",
    summary:
      "Practical and fact-minded individuals whose reliability cannot be doubted. ISTJs value tradition, order, and doing things the right way.",
    strengths: ["Responsible and reliable", "Organized and thorough", "Practical", "Honest and direct"],
    weaknesses: ["Can be stubborn", "Resistant to change", "Overly by-the-book"],
    careers: ["Accountant", "Auditor", "Engineer", "Administrator", "Military Officer"],
    famous: ["George Washington", "Warren Buffett", "Angela Merkel"],
  },
  ISFJ: {
    code: "ISFJ",
    name: "The Defender",
    nickname: "Dedicated Protector",
    summary:
      "Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are supportive, loyal, and quietly hardworking.",
    strengths: ["Supportive and reliable", "Patient and loyal", "Hardworking", "Practical and caring"],
    weaknesses: ["Overly humble", "Takes on too much", "Reluctant to change", "Represses feelings"],
    careers: ["Nurse", "Teacher", "Social Worker", "Administrator", "Healthcare Provider"],
    famous: ["Mother Teresa", "Kate Middleton", "Rosa Parks"],
  },
  ESTJ: {
    code: "ESTJ",
    name: "The Executive",
    nickname: "Organized Manager",
    summary:
      "Excellent administrators, unsurpassed at managing things — or people. ESTJs bring order, structure, and strong leadership to any team.",
    strengths: ["Dedicated and strong-willed", "Organized leader", "Honest and direct", "Reliable"],
    weaknesses: ["Inflexible and stubborn", "Judgmental", "Difficulty relaxing"],
    careers: ["Manager", "Judge", "Business Administrator", "Financial Officer", "Police Officer"],
    famous: ["Sonia Sotomayor", "John D. Rockefeller", "Judge Judy"],
  },
  ESFJ: {
    code: "ESFJ",
    name: "The Consul",
    nickname: "Caring Supporter",
    summary:
      "Extraordinarily caring, social, and popular people, always eager to help. ESFJs thrive on harmony and taking care of those around them.",
    strengths: ["Warm and supportive", "Strong sense of duty", "Loyal", "Good at connecting people"],
    weaknesses: ["Needs approval", "Sensitive to criticism", "Can be inflexible"],
    careers: ["Teacher", "Nurse", "Event Planner", "HR Specialist", "Sales Representative"],
    famous: ["Taylor Swift", "Jennifer Garner", "Bill Clinton"],
  },
  ISTP: {
    code: "ISTP",
    name: "The Virtuoso",
    nickname: "Hands-On Problem Solver",
    summary:
      "Bold and practical experimenters, masters of all kinds of tools. ISTPs love to understand how things work by taking a hands-on approach.",
    strengths: ["Practical and hands-on", "Great in a crisis", "Relaxed and spontaneous", "Logical"],
    weaknesses: ["Easily bored", "Dislikes commitment", "Can be private and reserved"],
    careers: ["Mechanic / Engineer", "Pilot", "Electrician", "Forensic Scientist", "Athlete"],
    famous: ["Michael Jordan", "Clint Eastwood", "Bear Grylls"],
  },
  ISFP: {
    code: "ISFP",
    name: "The Adventurer",
    nickname: "Gentle Artist",
    summary:
      "Flexible and charming artists, always ready to explore new possibilities. ISFPs live in the moment and express themselves creatively.",
    strengths: ["Charming and sensitive", "Creative and artistic", "Curious", "Passionate"],
    weaknesses: ["Unpredictable", "Easily stressed", "Overly competitive at times"],
    careers: ["Artist / Designer", "Musician", "Photographer", "Chef", "Veterinarian"],
    famous: ["Frida Kahlo", "Michael Jackson", "Britney Spears"],
  },
  ESTP: {
    code: "ESTP",
    name: "The Entrepreneur",
    nickname: "Energetic Doer",
    summary:
      "Smart, energetic, and very perceptive people who truly enjoy living on the edge. ESTPs are action-oriented and thrive in fast-paced settings.",
    strengths: ["Bold and energetic", "Practical and perceptive", "Sociable", "Great in a crisis"],
    weaknesses: ["Impatient and risk-prone", "Can be blunt", "Dislikes theory and structure"],
    careers: ["Entrepreneur", "Sales Executive", "Paramedic", "Marketer", "Sports Coach"],
    famous: ["Ernest Hemingway", "Madonna", "Donald Trump"],
  },
  ESFP: {
    code: "ESFP",
    name: "The Entertainer",
    nickname: "Spontaneous Performer",
    summary:
      "Spontaneous, energetic, and enthusiastic people — life is never boring around them. ESFPs love people, fun, and living fully in the moment.",
    strengths: ["Bold and enthusiastic", "Excellent people skills", "Practical", "Observant"],
    weaknesses: ["Easily bored", "Dislikes conflict", "Struggles with long-term planning"],
    careers: ["Actor / Performer", "Event Host", "Tour Guide", "Sales", "Fashion Designer"],
    famous: ["Adele", "Jamie Foxx", "Marilyn Monroe"],
  },
}
