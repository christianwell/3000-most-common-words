
// List of words
const words = [
  "abandon",
  "ability",
  "able",
  "about",
  "above",
 "abroad",
  "absolute",
  "absolutely",
  "academic",
  "accept",
  "acceptable",
  "access",
  "accident",
  "accommodation",
  "accompany",
  "according to",
  "account",
  "accurate",
  "accuse",
  "achieve",
  "achievement",
  "acknowledge",
  "acquire",
  "across",
  "act",
  "action",
  "active",
  "activity",
  "actor",
  "actress",
  "actual",
  "actually",
  "ad",
  "adapt",
  "add",
  "addition",
  "additional",
  "address",
  "administration",
  "admire",
  "admit",
  "adopt",
  "adult",
  "advance",
  "advanced",
  "advantage",
  "adventure",
  "advertise",
  "advertisement",
  "advertising",
  "advice",
  "advise",
  "affair",
  "affect",
  "afford",
  "afraid",
  "after",
  "afternoon",
  "afterwards",
  "again",
  "against",
  "age",
  "agency",
  "agenda",
  "agent",
  "aggressive",
  "ago",
  "agree",
  "agreement",
  "ah",
  "ahead",
  "aid",
  "aim",
  "air",
  "aircraft",
  "airline",
  "airport",
  "alarm",
  "album",
  "alcohol",
  "alcoholic",
  "alive",
  "all",
  "all right",
  "allow",
  "almost",
  "alone",
  "along",
  "already",
  "also",
  "alter",
  "alternative",
  "although",
  "always",
  "amazed",
  "amazing",
  "ambition",
  "ambitious",
  "among",
  "amount",
  "analyse",
  "analysis",
  "ancient",
  "and",
  "anger",
  "angle",
  "angry",
  "animal",
  "ankle",
  "anniversary",
  "announce",
  "announcement",
  "annoy",
  "annoyed",
  "annoying",
  "annual",
  "another",
  "answer",
  "anxious",
  "any",
  "anybody",
  "any more",
  "anyone",
  "anything",
  "anyway",
  "anywhere",
  "apart",
  "apartment",
  "apologize",
  "app",
  "apparent",
  "apparently",
  "appeal",
  "appear",
  "appearance",
  "apple",
  "application",
  "apply",
  "appointment",
  "appreciate",
  "approach",
  "appropriate",
  "approval",
  "approve",
  "approximately",
  "April",
  "architect",
  "architecture",
  "area",
  "argue",
  "argument",
  "arise",
  "arm",
  "armed",
  "arms",
  "army",
  "around",
  "arrange",
  "arrangement",
  "arrest",
  "arrival",
  "arrive",
  "art",
  "article",
  "artificial",
  "artist",
  "artistic",
  "as",
  "ashamed",
  "ask",
  "asleep",
  "aspect",
  "assess",
  "assessment",
  "assignment",
  "assist",
  "assistant",
  "associate",
  "associated",
  "association",
  "assume",
  "at",
  "athlete",
  "atmosphere",
  "attach",
  "attack",
  "attempt",
  "attend",
  "attention",
  "attitude",
  "attract",
  "attraction",
  "attractive",
  "audience",
  "August",
  "aunt",
  "author",
  "authority",
  "autumn",
  "available",
  "average",
  "avoid",
  "award",
  "aware",
  "away",
  "awful",
  "baby",
  "back",
  "background",
  "backwards",
  "bacteria",
  "bad",
  "badly",
  "bag",
  "bake",
  "balance",
  "ball",
  "ban",
  "banana",
  "band",
  "bank (money)",
  "bank (river)",
  "bar",
  "barrier",
  "base",
  "baseball",
  "based",
  "basic",
  "basically",
  "basis",
  "basketball",
  "bath",
  "bathroom",
  "battery",
  "battle",
   "be v., auxiliary",
  "beach",
"bean",
  "bear (deal with)",
  "bear (animal) ",
  "beat",
  "beautiful",
  "beauty",
  "because",
  "become",
  "bed",
  "bedroom",
  "bee",
  "beer",
  "before prep",
  "beg",
  "begin",
  "beginning",  
  "behave",
  "behaviour",
  "behind",
  "being",
  "belief",
  "believe",
  "bell",
  "belong",
  "below",
  "belt",
  "bend",
  "benefit",
  "bent",
  "best",
  "bet",
  "better",
  "between",
  "beyond",
  "bicycle",
  "big",
  "bike",
  "bill",
  "billion",
  "bin",
  "biology",
  "bird",
  "birth",
  "birthday",
  "biscuit",
  "bit",
  "bite",
  "bitter",
  "black",
  "blame",
  "blank",
  "blind",
  "block",
  "blog",
  "blonde",
  "blood",
  "blow",
  "blue",
  "board",
  "boat",
  "body",
  "boil",
  "bomb",
  "bond",
  "bone",
  "book",
  "boot",
  "border",
  "bored",
  "boring",
  "born",
  "borrow",
  "boss",
  "both",
  "bother",
  "bottle",
  "bottom",
  "bowl",
  "box",
  "boy",
  "boyfriend",
  "brain",
  "branch",
  "brand",
  "brave",
  "bread",
  "break",
  "breakfast",
  "breast",
  "breath",
  "breathe",
  "breathing",
  "bride",
  "bridge",
  "brief",
  "bright",
  "brilliant",
  "bring",
  "broad",
  "broadcast",
  "broken",
  "brother",
  "brown",
  "brush",
  "bubble",
  "budget",
  "build",
  "building",
  "bullet",
  "bunch",
    "burn",
  "bury",
  "bus",
  "bush",
  "business",
  "businessman",
  "busy",
  "but",
  "butter",
  "button",
  "buy",
  "by",
  "bye",
  "cable",
  "cafe",
  "cake",
  "calculate",
  "call",
  "calm",
  "camera",
  "camp",
  "campaign",
  "camping",
  "campus",
  "can1",
  "can2",
  "cancel",
  "cancer",
  "candidate",
  "cannot",
  "cap",
  "capable",
  "capacity",
  "capital",
  "captain",
  "capture",
  "car",
  "card",
  "care",
  "career",
  "careful",
  "carefully",
  "careless",
  "carpet",
  "carrot",
  "carry",
  "cartoon",
  "case",
  "cash",
  "cast",
  "castle",
  "cat",
  "catch",
  "category",
  "cause",
  "CD",
  "ceiling",
  "celebrate",
  "celebration",
  "celebrity",
  "cell",
  "cent",
  "central",
  "centre",
  "century",
  "ceremony",
  "certain",
  "certainly",
  "chain",
  "chair",
  "chairman",
  "challenge",
  "champion",
  "chance",
  "change",
  "channel",
  "chapter",
  "character",
  "characteristic",
  "charge",
  "charity",
  "chart",
  "chat",
  "cheap",
  "cheat",
  "check",
  "cheerful",
  "cheese",
  "chef",
  "chemical",
  "chemistry",
  "chest",
  "chicken",
  "chief",
  "child",
  "childhood",
  "chip",
  "chocolate",
  "choice",
  "choose",
  "church",
  "cigarette",
  "cinema",
  "circle",
  "circumstance",
  "cite",
  "citizen",
  "city",
  "civil",
  "claim",
  "class",
  "classic",
  "classical",
  "classroom",
  "clause",
  "clean",
  "clear",
  "clearly",
  "clever",
  "click",
  "client",
  "climate",
  "climb",
  "clock",
  "close1",
  "close2",
  "closed",
  "closely",
  "cloth",
  "clothes",
  "clothing",
  "cloud",
  "club",
  "clue",
  "coach",
    "coal",
  "coast",
  "coat",
  "code",
  "coffee",
  "coin",
  "cold",
  "collapse",
  "colleague",
  "collect",
  "collection",
  "college",
  "colour",
  "coloured",
  "column",
  "combination",
  "combine",
  "come",
  "comedy",
  "comfort",
  "comfortable",
  "command",
  "comment",
  "commercial",
  "commission",
  "commit",
  "commitment",
  "committee",
  "common",
  "commonly",
  "communicate",
  "communication",
  "community",
  "company",
  "compare",
  "comparison",
  "compete",
  "competition",
  "competitive",
  "competitor",
  "complain",
  "complaint",
  "complete",
  "completely",
  "complex",
  "complicated",
  "component",
  "computer",
  "concentrate",
  "concentration",
  "concept",
  "concern",
  "concerned",
  "concert",
  "conclude",
  "conclusion",
  "condition",
  "conduct",
  "conference",
  "confidence",
  "confident",
  "confirm",
  "conflict",
  "confuse",
  "confused",
  "confusing",
  "connect",
  "connected",
  "connection",
  "conscious",
  "consequence",
  "conservative",
  "consider",
  "consideration",
  "consist",
  "consistent",
  "constant",
  "constantly",
  "construct",
  "construction",
  "consume",
  "consumer",
  "contact",
  "contain",
  "container",
  "contemporary",
  "content1",
  "contest",
  "context",
  "continent",
  "continue",
  "continuous",
  "contract",
  "contrast",
  "contribute",
  "contribution",
  "control",
  "convenient",
  "conversation",
  "convert",
  "convince",
  "convinced",
  "cook",
  "cooker",
  "cooking",
  "cool",
  "copy",
  "core",
  "corner",
  "corporate",
  "correct",
  "correctly",
  "cost",
  "costume",
  "cottage",
  "cotton",
  "could",
  "council",
  "count",
  "country",
  "countryside",
  "county",
  "couple",
  "courage",
  "course",
  "court",
  "cousin",
  "cover",
  "covered",
  "cow",
  "crash",
  "crazy",
  "cream",
  "create",
  "creation",
  "creative",
  "creature",
  "credit",
  "crew",
  "crime",
  "criminal",
  "crisis",
  "criterion",
  "critic",
  "critical",
  "criticism",
  "criticize",
  "crop",
  "cross",
  "crowd",
  "crowded",
  "crucial",
  "cruel",
  "cry",
  "cultural",
  "culture",
  "cup",
  "cupboard",
  "cure",
  "curly",
  "currency",
  "current",
  "currently",
  "curtain",
  "curve",
  "curved",
  "custom",
  "customer",
  "cut",
  "cycle",
  "dad",
  "daily",
  "damage",
  "dance",
  "dancer",
  "dancing",
  "danger",
  "dangerous",
  "dark",
  "data",
  "date",
  "daughter",
  "day",
  "dead",
  "deal",
  "dear",
  "death",
  "debate",
  "debt",
  "decade",
  "December",
  "decent",
  "decide",
  "decision",
  "declare",
  "decline",
  "decorate",
  "decoration",
  "decrease",
  "deep",
  "deeply",
  "defeat",
  "defence",
  "defend",
  "define",
  "definite",
  "definitely",
  "definition",
  "degree",
  "delay",
  "deliberate",
  "deliberately",
  "delicious",
  "delight",
  "delighted",
  "deliver",
  "delivery",
  "demand",
  "demonstrate",
  "dentist",
  "deny",
  "department",
  "departure",
  "depend",
  "depressed",
  "depressing",
  "depth",
  "describe",
  "description",
  "desert",
  "deserve",
  "design",
  "designer",
  "desire",
  "desk",
  "desperate",
  "despite",
  "destination",
  "destroy",
  "detail",
  "detailed",
  "detect",
  "detective",
  "determine",
  "determined",
  "develop",
  "development",
  "device",
  "diagram",
  "dialogue",
  "diamond",
  "diary",
  "dictionary",
  "die",
  "diet",
  "difference",
  "different",
  "differently",
  "difficult",
  "difficulty",
  "dig",
  "digital",
  "dinner",
  "direct",
  "direction",
  "directly",
  "director",
   "dirt",
  "dirty",
  "disadvantage",
  "disagree",
  "disappear",
  "disappointed",
  "disappointing",
  "disaster",
  "disc",
  "discipline",
  "discount",
  "discover",
  "discovery",
  "discuss",
  "discussion",
  "disease",
  "dish",
  "dishonest",
  "dislike",
  "dismiss",
  "display",
  "distance",
  "distribute",
  "distribution",
  "district",
  "divide",
  "division",
  "divorced",
  "do1",
  "doctor",
  "document",
  "documentary",
  "dog",
  "dollar",
  "domestic",
  "dominate",
  "donate",
  "door",
  "double",
  "doubt",
  "down",
  "download",
  "downstairs",
  "downwards",
  "dozen",
  "draft",
  "drag",
  "drama",
  "dramatic",
  "draw",
  "drawing",
  "dream",
  "dress",
  "dressed",
  "drink",
  "drive",
  "driver",
  "driving",
  "drop",
  "drug",
  "drum",
  "drunk",
  "dry",
  "due",
  "during",
  "dust",
  "duty",
  "DVD",
  "each",
  "ear",
  "early",
  "earn",
  "earth",
  "earthquake",
  "easily",
  "east",
  "eastern",
  "easy",
  "eat",
  "economic",
  "economy",
  "edge",
  "edit",
  "edition",
  "editor",
  "educate",
  "educated",
  "education",
  "educational",
  "effect",
  "effective",
  "effectively",
  "efficient",
  "effort",
  "egg",
  "eight",
  "eighteen",
  "eighty",
  "either",
  "elderly",
  "elect",
  "election",
  "electric",
  "electrical",
  "electricity",
  "electronic",
  "element",
  "elephant",
  "eleven",
  "else",
  "elsewhere",
  "email",
  "embarrassed",
  "embarrassing",
  "emerge",
  "emergency",
  "emotion",
  "emotional",
  "emphasis",
  "emphasize",
  "employ",
  "employee",
  "employer",
  "employment",
  "empty",
  "enable",
  "encounter",
  "encourage",
  "end",
  "ending",
  "enemy",
  "energy",
  "engage",
  "engaged",
  "engine",
  "engineer",
  "engineering",
  "enhance",
  "enjoy",
  "enormous",
  "enough",
  "enquiry",
  "ensure",
  "enter",
  "entertain",
  "entertainment",
  "enthusiasm",
  "enthusiastic",
  "entire",
  "entirely",
  "entrance",
  "entry",
  "environment",
  "environmental",
  "episode",
  "equal",
  "equally",
  "equipment",
  "error",
  "escape",
  "especially",
  "essay",
  "essential",
  "establish",
  "estate",
  "estimate",
  "ethical",
  "euro",
  "evaluate",
  "even",
  "evening",
  "event",
  "eventually",
  "ever",
  "every",
  "everybody",
  "everyday",
  "everyone",
  "everything",
  "everywhere",
  "evidence",
  "evil",
  "exact",
  "exactly",
  "exam",
  "examination",
  "examine",
  "example",
  "excellent",
  "except",
  "exchange",
  "excited",
  "excitement",
  "exciting",
  "excuse",
  "executive",
  "exercise",
  "exhibition",
  "exist",
  "existence",
  "expand",
  "expect",
  "expectation",
  "expected",
  "expedition",
  "expense",
  "expensive",
  "experience",
  "experienced",
  "experiment",
  "expert",
  "explain",
  "explanation",
  "explode",
  "exploration",
  "explore",
  "explosion",
  "export",
  "expose",
  "express",
  "expression",
   "extend",
  "extent",
  "external",
  "extra",
  "extraordinary",
  "extreme",
  "extremely",
  "eye",
  "face",
  "facility",
  "fact",
  "factor",
  "factory",
  "fail",
  "failure",
  "fair",
  "fairly",
  "faith",
  "fall",
  "false",
  "familiar",
  "family",
  "famous",
  "fan",
  "fancy",
  "fantastic",
  "far",
  "farm",
  "farmer",
  "farming",
  "fascinating",
  "fashion",
  "fashionable",
  "fast",
  "fasten",
  "fat",
  "father",
  "fault",
  "favour",
  "favourite",
  "fear",
  "feather",
  "feature",
  "February",
  "fee",
  "feed",
  "feedback",
  "feel",
  "feeling",
  "fellow",
  "female",
  "fence",
  "festival",
  "few",
  "fiction",
  "field",
  "fifteen",
  "fifth",
  "fifty",
  "fight",
  "fighting",
  "figure",
  "file",
  "fill",
  "film",
  "final",
  "finally",
  "finance",
  "financial",
  "find",
  "finding",
  "fine",
  "finger",
  "finish",
  "fire",
  "firm",
  "first",
  "firstly",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "five",
  "fix",
  "fixed",
  "flag",
  "flame",
  "flash",
  "flat",
  "flexible",
  "flight",
  "float",
  "flood",
  "floor",
  "flour",
  "flow",
  "flower",
  "flu",
  "fly",
  "flying",
  "focus",
  "fold",
  "folding",
  "folk",
  "follow",
  "following",
  "food",
  "foot",
  "football",
  "for",
  "force",
  "foreign",
  "forest",
  "forever",
  "forget",
  "forgive",
  "fork",
  "form",
  "formal",
  "former",
  "fortunately",
  "fortune",
  "forty",
  "forward",
  "found",
  "four",
  "fourteen",
  "fourth",
  "frame",
  "free",
  "freedom",
  "freeze",
  "frequency",
  "frequently",
  "fresh",
  "Friday",
  "fridge",
  "friend",
  "friendly",
  "friendship",
  "frighten",
  "frightened",
  "frightening",
  "frog",
  "from",
  "front",
  "frozen",
  "fruit",
  "fry",
  "fuel",
  "full",
  "fully",
  "fun",
  "function",
  "fund",
  "fundamental",
  "funding",
  "funny",
  "fur",
  "furniture",
  "further",
  "furthermore",
  "future",
  "gain",
  "gallery",
  "game",
  "gang",
  "gap",
  "garage",
  "garden",
  "gas",
  "gate",
  "gather",
  "general",
  "generally",
  "generate",
  "generation",
  "generous",
  "genre",
  "gentle",
  "gentleman",
  "geography",
  "get",
  "ghost",
  "giant",
  "gift",
  "girl",
  "girlfriend",
  "give",
  "glad",
  "glass",
  "global",
  "glove",
  "go",
  "goal",
  "god",
  "gold",
  "golf",
  "good",
  "goodbye",
  "goods",
  "govern",
  "government",
  "grab",
  "grade",
  "gradually",
  "graduate",
  "grain",
  "grand",
  "grandfather",
  "grandmother",
  "grandparent",
  "grant",
  "grass",
  "grateful",
  "great",
  "green",
  "greet",
  "grey",
  "ground",
  "group",
  "grow",
  "growth",
  "guarantee",
  "guard",
  "guess",
  "guest",
  "guide",
  "guilty",
  "guitar",
  "gun",
  "guy",
  "gym",
  "habit",
  "hair",
  "half",
  "hall",
  "hand",
  "handle",
  "hang",
  "happen",
  "happily",
  "happiness",
  "happy",
  "hard",
  "hardly",
  "harm",
  "harmful",
  "hat",
  "hate",
  "have",
  "have to",
  "he",
  "head",
  "headache",
  "headline",
  "health",
  "healthy",
  "hear",
  "hearing",
  "heart",
  "heat",
  "heating",
  "heaven",
  "heavily",
  "heavy",
  "heel",
  "height",
  "helicopter",
  "hell",
  "hello",
  "help",
  "helpful",
  "her",
  "here",
  "hero",
  "hers",
  "herself",
  "hesitate",
  "hey",
  "hi",
  "hide",
  "high",
  "highlight",
  "highly",
  "hill",
  "him",
  "himself",
  "hire",
  "his",
  "historic",
  "historical",
  "history",
  "hit",
  "hobby",
  "hockey",
  "hold",
  "hole",
  "holiday",
  "hollow",
  "holy",
  "home",
  "homework",
  "honest",
  "honour",
  "hope",
  "horrible",
  "horror",
  "horse",
  "hospital",
  "host",
  "hot",
  "hotel",
  "hour",
  "house",
  "household",
  "housing",
  "how",
  "however",
  "huge",
  "human",
  "humorous",
  "humour",
  "hundred",
  "hungry",
  "hunt",
  "hunting",
  "hurricane",
  "hurry",
  "hurt",
  "husband",
  "I",
  "ice",
  "ice cream",
  "idea",
  "ideal",
  "identify",
  "identity",
  "if",
  "ignore",
  "ill",
  "illegal",
  "illness",
  "illustrate",
  "illustration",
  "image",
  "imaginary",
  "imagination",
  "imagine",
  "immediate",
  "immediately",
  "immigrant",
  "impact",
  "impatient",
  "imply",
  "import",
  "importance",
  "important",
  "impose",
  "impossible",
    "impress",
  "impressed",
  "impression",
  "impressive",
  "improve",
  "improvement",
  "in",
  "inch",
  "incident",
  "include",
  "included",
  "including",
  "income",
  "increase",
  "increasingly",
  "incredible",
  "incredibly",
  "indeed",
  "independent",
  "indicate",
  "indirect",
  "individual",
  "indoor",
  "indoors",
  "industrial",
  "industry",
  "infection",
  "influence",
  "inform",
  "informal",
  "information",
  "ingredient",
  "initial",
  "initially",
  "initiative",
  "injure",
  "injured",
  "injury",
  "inner",
  "innocent",
  "insect",
  "inside",
  "insight",
  "insist",
  "inspire",
  "install",
  "instance",
  "instead",
  "institute",
  "institution",
  "instruction",
  "instructor",
  "instrument",
  "insurance",
  "intelligence",
  "intelligent",
  "intend",
  "intended",
  "intense",
  "intention",
  "interest",
  "interested",
  "interesting",
  "internal",
  "international",
  "internet",
  "interpret",
  "interrupt",
  "interview",
  "into",
  "introduce",
  "introduction",
  "invent",
  "invention",
  "invest",
  "investigate",
  "investigation",
  "investment",
  "invitation",
  "invite",
  "involve",
  "involved",
  "iron",
  "island",
  "issue",
  "IT",
  "it",
  "item",
  "its",
  "itself",
  "jacket",
  "jam",
  "January",
  "jazz",
  "jeans",
  "jewellery",
  "job",
  "join",
  "joke",
  "journal",
  "journalist",
  "journey",
  "joy",
  "judge",
  "judgement",
  "juice",
  "July",
  "jump",
  "June",
  "junior",
  "just",
  "justice",
  "justify",
  "keen",
  "keep",
  "key",
  "keyboard",
  "kick",
  "kid",
  "kill",
  "killing",
  "kilometre",
  "kind (type)",
  "kind (caring)",
  "king",
  "kiss",
  "kitchen",
  "knee",
  "knife",
  "knock",
  "know",
  "knowledge",
  "lab",
  "label",
  "laboratory",
  "labour",
  "lack",
  "lady",
  "lake",
  "lamp",
  "land",
  "landscape",
  "language",
  "laptop",
  "large",
  "largely",
  "last1 (final)",
  "last1 (taking time)",
  "late",
  "later",
  "latest",
  "laugh",
  "laughter",
  "launch",
  "law",
  "lawyer",
  "lay",
  "layer",
  "lazy",
  "lead1",
  "leader",
  "leadership",
  "leading",
  "leaf",
  "league",
  "lean",
  "learn",
  "learning",
  "least",
  "leather",
  "leave",
  "lecture",
  "left",
  "leg",
  "legal",
  "leisure",
  "lemon",
  "lend",
  
  // ... add the rest of the words here ...
];

// Create list items dynamically
const list = document.getElementById("checkbox-list");
words.forEach((word) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = word;
  const label = document.createElement("label");
  label.textContent = word;
  label.htmlFor = word;
  li.appendChild(checkbox);
  li.appendChild(label);
  list.appendChild(li);
});

// Store checked state in local storage
const storage = window.localStorage;
list.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const id = event.target.id;
    const checked = event.target.checked;
    storage.setItem(id, checked);
  }
});

// Restore checked state from local storage
words.forEach((word) => {
  const checkbox = document.getElementById(word);
  const checked = storage.getItem(word) === "true";
  checkbox.checked = checked;
});