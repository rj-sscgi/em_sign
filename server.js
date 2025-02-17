const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS package

const app = express();
const port = 3000;

// Enable CORS for all origins (for development only)
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST route to handle incoming requests
app.post("/process", (req, res) => {
	console.log("Received Request:", req.body);

	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).json({ message: "Request body is required" });
	}

	// Simulate response with received data
	res.json({
		message: "Workflow processed successfully",
		receivedData: req.body,
	});
});

// Start the server
app.listen(port, () => {
	console.log(
		`✅ Server running on https://ssclsdrfatienza.sscgi.com.inc:3000`
	);
});
