const express = require('express');
const app = express();
const port = 3000;

// Mock database
const applications = {
    "12345": { status: "In-Process" },
    "67890": { status: "Pending" },
};

app.get('/check-application/:appNumber', (req, res) => {
    const appNumber = req.params.appNumber;
    if (applications[appNumber]) {
        res.json({ exists: true, data: applications[appNumber] });
    } else {
        res.json({ exists: false });
    }
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
