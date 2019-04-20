# Sandwich Maker
This is a project that uses modularity to let the user order a sandwich.  
* Each ingredient is a separate module that holds the pricing
* The orderBuilder calls on each module and the orderString module to build the order and print it for the user

## Screenshots
![A picture of the page with a completed order and receipt](https://raw.githubusercontent.com/tilleraj/sandwich-maker/master/screenshots/screenshot0.PNG)

## Getting Started
```
$ git clone https://github.com/tilleraj/sandwich-maker.git
```
OR
```
$ git@github.com:tilleraj/sandwich-maker.git
```

### Prerequisites  
This project assumes you have already setup a terminal environment like Git Bash (Windows) or Xcode + Homebrew (macOS). You will also need Node and HTTP-Server.

#### Installing Node
On macOS  
```
$ brew install node
```
On Windows  
Visit the node [website](https://nodejs.org/) and click on the green button with the version that says LTS next to it.

#### Installing HTTP-Server
```
$ npm install -g http-server
```

## Running
1. Navigate to the project folder in command line interface and type:
```
$ hs -p 8000  
```
2. In your web browser, navigate to: [http://localhost:8000](http://localhost:8000)
