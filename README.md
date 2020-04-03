# Monster_Slayer_Game
This is a very simple game. You can choose different behavior in each round until one of the monster and you win the game.

This game is built in Vue FrameWork and it is also my first Vue application. I learned many things in this app.

1. You need a vue instance to control the element in the html. When you declare this instance, you need to give it the element 
name you want to control, the data(an object) will be used and also the different methods.
2. After we have all the js parts, we need to decorate our HTML code to connect them together. In terms of event listener, you
can add v-on:click = "fnname" or @click.. property in the HTML tag to listen to click event and trigger fnname function(method).
You can also use v-for="turn in turns" to iterate the data like array which is iteratible. And also using v-if, v-else to show or 
not. Using v-bind:style="{width:monsterHealth + '%'}" or abbr :style... and using :class="{classnm:booleandt}" to decide css related
things.

Another interesting thing is I just know that the creator of Vue is a Chinese programmer called Yuxi You. It is so cool and make
me more enthusiasm to understand it.

Yisheng Sun
04/02/2020
