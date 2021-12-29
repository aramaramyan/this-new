"use strict"

/* Add: Pushes the passed-through song to the songs array
   Play: Plays current song based on array index
   Stop: Holds place in array, but calls above stop song prototype function
   Next: Sets the next song in the songs array, calling the above play prototype function
   Song should take in two arguments, title and artist, which should both be added as properties when the Song constructor function is used.
   Play: Sets the song as playing using isPlaying
   Stop: Sets the song as not playing (isPlaying = false) */

function Playlist() {
  this.count    = 0;
  this.playlist = [];
}

Playlist.prototype.add = function(newMusic) {
  if(typeof(newMusic) !== "object" || newMusic === null) {
    return "The argument of function must be an object!";
  }

  this.playlist.push(newMusic);
}

Playlist.prototype.play = function() {
  if(this.playlist.length === 0) {
    return "There is no music in your playlist!";
  }

  return `${this.playlist[this.count].music} started to play.`;
}

Playlist.prototype.stop = function() {
  return `${this.playlist[this.count].music} stopped.`;
}

Playlist.prototype.next = function() {
  if(this.count === this.playlist.length - 1) {
    this.count = 0;
    return `${this.playlist[this.playlist.length - 1].music} stopped, ${this.playlist[this.count].music} started.`;
  } else {
    this.count++;
    return `${this.playlist[this.count - 1].music} stopped, ${this.playlist[this.count].music} started.`;
  }
}

Playlist.prototype.previous = function() {
  if(this.count === 0) {
    this.count = this.playlist.length - 1;
    return `${this.playlist[0].music} stopped, ${this.playlist[this.count].music} started.`;
  } else {
    this.count--;
    return `${this.playlist[this.count + 1].music} stopped, ${this.playlist[this.count].music} started.`;
  }
}

function Song(music, musician) {
  this.music    = music;
  this.musician = musician;
}

const playlist = new Playlist();

const heyJude = new Song("Hey Jude", "The Beatles");
const jaded   = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

console.log(playlist.play());     // Hey Jude started to play.
console.log(playlist.next());     // Hey Jude stopped, Jaded started.
console.log(playlist.next());     // Jaded stopped, Hey Jude started.
console.log(playlist.previous()); // Hey Jude stopped, Jaded started.
console.log(playlist.stop());     // Jaded stopped.
console.log(playlist.play());     // Jaded started to play.