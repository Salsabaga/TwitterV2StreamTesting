//esversion: 6
require("dotenv").config();
const express = require("express");
const Twitter = require("twitter");

const app = express();

const config = {
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
	bearer_token: process.env.BEARER_TOKEN,
};

const client = new Twitter(config);

const params = {
	query: "love",
	max_results: 10,
};

client.get(
	"https://api.twitter.com/2/tweets/search/recent",
	params,
	(err, tweets, response) => {
		if (!err) {
			console.log(tweets);
		}
	}
);

app.listen(3000, (req, res) => {
	console.log("server is running");
});
