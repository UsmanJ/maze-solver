# Maze API

## Synopsis

This is an API built using NodeJS. It finds the solution in a Maze. The API is provided a start co-ordinates and a Maze structure which contains the end location.

An example is below:

{
	"mazeArray": [
	  ["", "", "", "X", "X", "X"],
	  ["X", "X", "", "", "X", "X"],
	  ["X", "X", "X", "", "X", "X"],
	  ["X", "X", "X", "", "X", "X"],
	  ["X", "X", "X", "", "X", "X"],
	  ["X", "X", "X", "", "", "G"]
	],
	"startX": 1,
	"startY": 1
}

## Technologies Used

* NodeJS
* Express

## Build & development

After cloning the repo, go into the server folder of the project and:

* Run `npm install`

* Run `npm start`
