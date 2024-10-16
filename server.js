const app = require('../Ghost-Detector/app'); // Import the app

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Ghost-Detector API is running on port ${port}`);
});
