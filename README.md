# Library

[Another Odin Project exercise](https://www.theodinproject.com/courses/javascript/lessons/library).

This project is centered around learning how to implement OOP concepts in JavaScript.

## TO-DO:
1. ~~Set up HTML/CSS/JS skeleton files~~
2. ~~Add function to take user input and based on that input add a new book to a Books array.~~
3. ~~Add function to loop through array and display each book on the page.~~
4. ~~Add "NEW BOOK" button, which should pull up a form to fill its attributes~~
5. ~~Add button on each book's display to remove from library.~~
    - ~~Obviously this will require associating the particular DOM element with the particular book. A solution is to add a data-attribute with the array index.~~
6. ~~Add button on each book's display to change it's `read` status.~~
    - ~~This should be a method on the Book's prototype instance~~ (not sure why, but I made a setter anyway for practice)
7. ~~**Extra Credit**: Use either LocalStorage or an online DB service (they recommend Firebase for this) to add persistence, so the data is preserved if the user leaves and comes back.~~

## Reflection
I might have been wrong in my assumption that this project was mainly about learning to implement OOP concepts, because I didn't really use them, outside of Book. But then again, my DOM generators account for about 80% of my JavaScript, so perhaps I missed something there? I will be interested to look at other approaches to the project, and see how their code is structured.

### Pitfalls:
- Multiple times I was too clever for my own good.
    - I thought it would be more efficient to use a Map instead of an Array for the library, but the lack of array functions meant I was constantly converting it back to an array. The potential benefit of using an array was almost nil anyway.
    - My first pass at the modal "add book" form, it was almost entirely generated in JavaScript. This didn't serve any real purpose, as every attribute was hard-coded, and the ~20 lines of HTML took up almost 3 times as many lines of JS.
- I tried to wing my layout, which made redesigning it a pain.

### Learning Highlights:
- CSS is starting to click for me, and this is the first project where I'm actually pretty happy with the Responsiveness of the design.
- I feel cautiously comfortable with Prototypes and dealing with Prototypal inheritance.
- At this point, I *definitely* have a lot of experience dealing with the DOM through vanilla JS.
- Learning how to convert objects back and forth to JSON in order to cache them was much easier than I though. I'm excited to do more with this, even if I wasn't attached enough to this particular project to try to extend it to FireBase.

### Things I wish I had done better, but it's time to move on:
- I used custom styling/logic for my form validation, but the style of the pop up is pretty ugly.
- I only briefly tested in FireFox, and there seems to be a weird bug with the form styling, where it shows a red border around it after validation fails once. Not sure why that is.
- I wanted to add sorting, which would have been a relatively simple matter of adding onclick listeners to the table headings, assigning a function that sorts the library and then rebuilds the table in the new order. But other rabbit-holes took up a lot of time, and I think it's better at this point to just move on.