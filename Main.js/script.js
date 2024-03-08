function generator(){
    var Quotes = {
        '– Helen Keller –':'“Never bend your head. Always hold it high. Look the world straight in the eye.”',
        '– Dr. Henry Link –':'“We generate fears while we sit. We overcome them by action. Fear is nature’s way of warning us to get busy.”',
        '– Brian Tracy –':'“Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.”',
        '– Nelson Mandela –':'“May your choices reflect your hopes, not your fears.”',
        '– Zig Ziglar –':'“You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.”',
        '– Albert Einstein –':'“Imagination is everything. It is the preview of life’s coming attractions.”',
        '– anonymous –':'“You experience external change only once you change internally. Start today and watch how everything around you begins to change!”',
        '– Henry Link –':'“While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior.”',
        '– Michael Phelps –':'“I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.”',
        '– Franklin D. Roosevelt –':'“The only limit to our realization of tomorrow will be our doubts of today.”',
        '– Suzy Kassem –':'“Doubt kills more dreams than failure ever will.”',
        '– Maya Angelou –':'“You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot it’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.”',
        '– Cinderella –':'“Just because it’s what’s done doesn’t mean it’s what should be done!”',
        '– Mahatma Gandhi –':'“Learn as if you will live forever, live like you will die tomorrow.”',
    }

    var authors = Object.keys(Quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = Quotes[author];
    document.getElementById('quoteDisplay').innerHTML = quote;
    document.getElementById('Author').innerHTML = author;
}

// ! example 
// var Quotes = [{quote:'“Never bend your head. Always hold it high. Look the world straight in the eye.”',
// author:'– Helen Keller –'},{quote:'“We generate fears while we sit. We overcome them by action. Fear is nature’s way of warning us to get busy.”',
// author:'– Dr. Henry Link –'},{quote:'“Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.”',
// author:'– Brian Tracy –'},{quote:'“May your choices reflect your hopes, not your fears.”',
// author:'– Nelson Mandela –'},{quote:'“You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.”',
// author:'– Zig Ziglar –'}]

// function Generator(){
//     var temp= Quotes[Math.floor(Math.random()*Quotes.length)];
//     document.getElementById('quoteDisplay').innerHTML = temp;
    // document.getElementById('Author').innerHTML = temp;
// }