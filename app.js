const express = require('express');
const multer = require('multer'); // for handling file uploads
const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Multer setup for file uploads (handling image files)
const upload = multer({ dest: 'uploads/' });

// Dummy data for ghost sightings and users
let ghostSightings = [
  { ghost_type: 'Banshee', location: '13 Haunted Lane', time: '02:00 AM' },
  { ghost_type: 'Wraith', location: 'Old Cemetery', time: '03:15 AM' },
];

let ghostDetails = {
  Poltergeist: {
    favorite_food: 'Cold pizza',
    favorite_time_of_night: '2:00 AM',
    typical_age: '300 years',
    origin: 'Medieval Europe',
    description: 'A mischievous spirit known for moving objects and causing trouble.',
  },
};

let users = [
  { username: 'GhostHunter22', sightings_count: 5 },
  { username: 'SpookySeeker', sightings_count: 12 },
];

// Endpoint: Detect Ghost
app.post('/detect', upload.single('image'), (req, res) => {
  const location = req.body.location;
  const file = req.file;

  // Dummy logic for detecting a ghost
  if (file) {
    return res.json({
      ghost_detected: true,
      ghost_type: 'Poltergeist',
      bounding_box: { x: 120, y: 80, width: 200, height: 200 },
    });
  }
  res.json({ ghost_detected: false });
});

// Endpoint: Nearby Ghost Sightings
app.get('/sightings', (req, res) => {
  const location = req.query.location;

  // Dummy logic for returning sightings within 100 meters
  return res.json({ sightings: ghostSightings });
});

// Endpoint: Ghost Info
app.get('/ghost-info', (req, res) => {
  const ghostType = req.query.ghost_type;

  if (ghostDetails[ghostType]) {
    return res.json(ghostDetails[ghostType]);
  }

  res.status(404).json({ error: 'Ghost type not found!' });
});

// Endpoint: List Users
app.get('/users', (req, res) => {
  res.json({ users });
});

// Endpoint: Ghost Detect Human (for ghosts!)
app.post('/ghost/detect', upload.single('image'), (req, res) => {
  const file = req.file;

  // Dummy logic for detecting humans in ghost photos
  if (file) {
    return res.json({
      human_detected: true,
      human_age: 29,
      human_identity: 'John Doe',
      spook_level: 'Terrified',
    });
  }

  res.json({ human_detected: false });
});

// Bonus Endpoint: Check Spookiness of an Area
app.get('/spook-level', (req, res) => {
  const location = req.query.location;

  // Dummy logic for calculating spook level
  res.json({
    spook_level: 8,
    description: 'This place is seriously haunted. Proceed with caution!',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Ghost-Detector API running at http://localhost:${port}`);
});
