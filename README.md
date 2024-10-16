# Ghost-Detector API 🎃👻

### Welcome, fearless humans (and sneaky ghosts)!  

Halloween is here, and with it comes the most important question of our time: Are there ghosts lurking around, watching your every move? Worry no more, because **Ghost-Detector** has you covered! Whether you're a human trying to avoid spectral surprises or a ghost in need of some human hunting, this API has everything you need. This cutting-edge (and definitely *not* haunted) service is the perfect solution to detect spooky spirits or to give ghosts some much-needed help in avoiding humans (we can be scarier than they think).

### Once upon a full moon night...
In a world where humans and ghosts coexist, there's always been tension. Ghosts, forever curious about our world, love to peek at us from beyond the veil. Meanwhile, humans, unaware of their transparent neighbors, walk around oblivious. But no more! This Halloween, we bridge the ghost-human gap with **Ghost-Detector**—the only API that caters to *both* realms!  

It's the perfect tool for those who want to keep their Halloween spooky but not *too* spooky. Whether you're a human looking to stay ghost-free or a ghost avoiding nosy humans, this API is for you!

---

## Documentation

### 1. `/detect` - Detect a Ghost 👻

**Endpoint (Human Version):** `/detect`

**Description:**  
Are you feeling a little chill in the air? Wondering if there’s a ghost hiding in that photo of your dark, creepy attic? This endpoint allows users to upload an image (JPEG, PNG), alongside their location (latitude and longitude), and detects if there’s a ghost present. If detected, it will even tell you the *type* of ghost and provide a bounding box for the spooky spirit.

**Request:**
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Parameters:**
  - `image`: The spooky image you want to check (formats: JPEG, PNG).
  - `location`: Your location (latitude, longitude) where the image was taken.

**Response:**
```json
{
  "ghost_detected": true,
  "ghost_type": "Poltergeist",
  "bounding_box": {
    "x": 120,
    "y": 80,
    "width": 200,
    "height": 200
  }
}
```

---

### 2. `/sightings` - Nearby Ghost Sightings 👀

**Endpoint (Human Version):** `/sightings`

**Description:**  
Curious if there are ghosts around? Or just want to avoid the most haunted spots? With this endpoint, provide your current location and get a list of ghost sightings within a 100-meter radius. Perfect for planning your next haunted pub crawl or avoiding that cursed cemetery!

**Request:**
- **Method:** `GET`
- **Parameters:**
  - `location`: Your current location (latitude, longitude).

**Response:**
```json
{
  "sightings": [
    {
      "ghost_type": "Banshee",
      "location": "13 Haunted Lane",
      "time": "02:00 AM"
    },
    {
      "ghost_type": "Wraith",
      "location": "Old Cemetery",
      "time": "03:15 AM"
    }
  ]
}
```

---

### 3. `/ghost-info` - Ghost Details 🕵️‍♂️

**Endpoint (Human Version):** `/ghost-info`

**Description:**  
You’ve encountered a ghost, but you’re not sure what kind it is? Or maybe you're just curious about a particular spectral species. This endpoint lets you retrieve detailed info on any ghost type, including fun facts like their favorite food (usually not pizza) and preferred haunting hours.

**Request:**
- **Method:** `GET`
- **Parameters:**
  - `ghost_type`: The type of ghost you want to know more about (e.g., "Poltergeist").

**Response:**
```json
{
  "ghost_type": "Poltergeist",
  "favorite_food": "Cold pizza",
  "favorite_time_of_night": "2:00 AM",
  "typical_age": "300 years",
  "origin": "Medieval Europe",
  "description": "A mischievous spirit known for moving objects and causing trouble."
}
```

---

### 4. `/users` - Human Users List 🧑‍💻

**Endpoint (Human Version):** `/users`

**Description:**  
Want to see who else is out there detecting ghosts? This endpoint lists all human users of the Ghost-Detector service, along with the number of ghost sightings they've encountered (brave souls!).

**Request:**
- **Method:** `GET`

**Response:**
```json
{
  "users": [
    {
      "username": "GhostHunter22",
      "sightings_count": 5
    },
    {
      "username": "SpookySeeker",
      "sightings_count": 12
    }
  ]
}
```

---

### 5. `/ghost/detect` - Detect a Human 🧟‍♂️

**Endpoint (Ghost Version):** `/ghost/detect`

**Description:**  
For our spectral friends, this endpoint works similarly to `/detect` but instead helps *ghosts* detect if there are any pesky humans in their photos. The response includes details like the human’s age, identity (if they’re a celebrity, even better!), and how afraid they are (measured in "spook levels").

**Request:**
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Parameters:**
  - `image`: A spooky photo taken by a ghost (formats: JPEG, PNG).

**Response:**
```json
{
  "human_detected": true,
  "human_age": 29,
  "human_identity": "John Doe",
  "spook_level": "Terrified"
}
```

#### 6. `/spook-level` - Check Spookiness of an Area

**Description:**  
Ever wondered how haunted a particular area is? This endpoint gives you a “spook level” score from 1 to 10 for any given location, based on historical hauntings and spectral activity.

**Request:**
- **Method:** `GET`
- **Parameters:**  
  - `location`: The location to check spookiness (latitude, longitude).

**Response:**
```json
{
  "spook_level": 8,
  "description": "This place is seriously haunted. Proceed with caution!"
}
```

#### 7. `/ghost/spooky-name` - Get a Spooky Name for Your Next Haunting

**Description:**  
Every ghost needs a terrifying name! Ghosts can use this endpoint to generate a spooky pseudonym to use when haunting their human neighbors.

**Request:**
- **Method:** `GET`

**Response:**
```json
{
  "spooky_name": "The Shadow Whisperer"
}
```

#### 8. `/ghost/sightings` - Ghosts Keeping Tabs on Human Sightings

**Description:**  
Just like humans track ghost sightings, ghosts can track humans. This endpoint lets ghosts see how many humans have recently been detected in their territory.

**Request:**
- **Method:** `GET`
- **Parameters:**  
  - `location`: The ghost's current location (latitude, longitude).

**Response:**
```json
{
  "human_sightings": [
    {
      "human_name": "Jane Smith",
      "location": "Haunted Mansion",
      "time": "10:00 PM"
    },
    {
      "human_name": "Bob the Builder",
      "location": "Spooky Forest",
      "time": "11:45 PM"
    }
  ]
}
```

#### 9. `/ghost/favorite-haunts` - Track Your Favorite Haunting Spots

**Description:**  
For ghosts who like to return to the same place again and again, this endpoint helps them track their favorite haunts and the number of scares they’ve given in each.

**Request:**
- **Method:** `GET`

**Response:**
```json
{
  "favorite_haunts": [
    {
      "location": "Old Lighthouse",
      "scares_given": 15
    },
    {
      "location": "Abandoned Hospital",
      "scares_given": 20
    }
  ]
}
```

#### 10. `/spirit-guide` - Summon a Spirit Guide for Help

**Description:**  
Stuck between worlds? This endpoint allows ghosts (or very brave humans) to summon a helpful spirit guide who can answer existential questions about life, death, and why ghosts always seem to prefer old Victorian houses.

**Request:**
- **Method:** `POST`
- **Parameters:**  
  - `question`: Your deep, spooky question (e.g., "Why are haunted dolls always so creepy?").

**Response:**
```json
{
  "answer": "Because they have seen too much... and they never blink."
}
```

---

### Happy Hauntings! 🎃👻

That’s all, folks! Whether you’re a human trying to stay ghost-free or a ghost looking to avoid the living, **Ghost-Detector** has your back (or your ectoplasmic tail). Be sure to play nice with the spirits, and remember—don’t cross the streams!
