# Maze Solver

## Synopsis

This application allows you to input a maze structure along with a start point (x,y) and returns the solution to the maze via an API call.

This application is split into two parts, client side, and server side. Both need their dependencies to be installed individually and run individually. The application has also been deployed to Heroku to display that the code is production ready.


An example of how to enter the maze structure in at client side is given below:

Input

..XXX  
X.XXX  
X.XXX  
X.XXX  
X...G  

Output

DDXXX  
XDXXX  
XDXXX  
XDXXX  
XDDDG


The API is built using NodeJS. When provided start co-ordinates and a Maze structure which contains the end location, the API returns the solved maze.

An example of the input is below:

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
* React
* Redux


## Build & development

After cloning the repo:

* Go into the `./` and `./client` folder of the project and run `npm install` in each folder separately

* Run `npm start` from the root of the project

This will run the client and server on different ports but both will be able to speak to each other.