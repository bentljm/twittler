/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  if(streams.users[username] === undefined) {
    streams.users[username] = [];
  }
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

var getDate = function() {
  var d = new Date();
  day = d.getDate();
  month = d.getMonth() + 1;
  year = d.getFullYear();
  if(d.getHours() > 12) {
    hours = d.getHours() - 12;
    time = "PM"
  } else {
    hours = d.getHours();
    time = "AM"
  }
  if(d.getMinutes() < 10) {
    minutes = "0" + d.getMinutes();
  } else {
    minutes = d.getMinutes();
  }
  if(d.getSeconds() < 10) {
    seconds = "0" + d.getSeconds();
  } else {
    seconds = d.getSeconds();
  }
  return "created " + [hours,minutes,seconds].join(":") + " " + time + " on " + [month, day].join('/');
}

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = getDate();
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(){
  // if(!visitor){
  //   throw new Error('set the global visitor property!');
  // }
  var tweet = {};
  tweet.user = prompt("What is your Twittler handle?");
  tweet.message = prompt("What would you like to tweet?");
  tweet.created_at = getDate();
  addTweet(tweet);
};
