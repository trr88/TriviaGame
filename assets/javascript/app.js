window.onload = function() {

    var questions = [{
        question: "What are the little hooded beings on Tatooine?",
        choices: ["Ewoks", "Droids", "Jawas", "Wookies"],
        answer: 2
    }, {
        question: "How long did it take Han Solo to complete the Kessel Run?",
        choices: ["1 lightyear", "12 parsecs", "15 parsecs", "48 hours"],
        answer: 1
    }, {
        question: "How large was the exhaust port on the Death Star?",
        choices: ["Womp Rat", "Ewok", "R2-D2", "3.7 feet"],
        answer: 0
    }, {
        question: "What battle involved snow?",
        choices: ["Battle of Endor", "Battle of Hoth", "Battle of Yavin", "Battle of Scarif"],
        answer: 1
    }];

    var counter = 0;
    var selections = [];
    var timer = 90;
    var intervalId;


    // function start() {
    //     intervalId = setInterval(decrement, 1000);
    //     display();
    // }

    // function stopFunction() {
    //     clearInterval(intervalId);
    // }

    function display() {
        $(".question").html(questions[0]);
    }
    $("button").click(display);

    // function decrement() {
    //     timer--;
    // }

    // var remaining = getElementById("#timer");
    // remaining.html(timer);
}
