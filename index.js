var newLi;

//1. Select the section with an id of container without using querySelector.
function stepOne() {
    var containerById = document.getElementById('container');
    console.log(containerById);
}

//2. Select the section with an id of container using querySelector.
function stepTwo() {
    var containerByQS = document.querySelector('#container');
    console.log(containerByQS);
}

//3. Select all of the list items with a class of “second”.
function stepThree() {
    var liGroupClassSecond = document.getElementsByClassName('second');
    console.log(liGroupClassSecond);
}

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
function stepFour() {
    var liClassThirdWithinOl = document.querySelector('ol .third');
    console.log(liClassThirdWithinOl);
}

//5. Give the section with an id of container the text “Hello!”.
function stepFive() {
    var myContainer = document.getElementById('container');
    var pTag = document.createElement('p');
    pTag.innerText = 'Hello!';
    myContainer.appendChild(pTag);
    // console.log(myContainer);
    // console.log(pTag);
}

//functions stepSix & stepSeven disrupt the flow of the rest of the functions so comment out stepSeven to check that stepSix() executes.
//6. Add the class main to the div with a class of footer.
function stepSix() {
    var footer = document.querySelector('.footer');
    footer.classList.add('main');
}

// 7. Remove the class main on the div with a class of footer.
function stepSeven() {
    var footer = document.querySelector('.footer');
    footer.classList.remove('main');
}

//8. Create a new li element.
function stepEight() {
    var newLi = document.createElement('li');
    var ul = document.querySelector('ul');
    //stepTen() is here because it needs to be called after stepEight() to work.
    if (ul && newLi) {
        ul.appendChild(newLi);
    }

    console.log(newLi);

    //stepNine() is here because it needs to be called after stepEight() to work.
    if (newLi) {
        newLi.innerText = 'four';
    }
}

//9. Give the <li> tag the text “four” by using the innerText function. [see above]
// function stepNine() {
//     if (newLi) {
//         newLi.innerText = 'four';
//     }
// }

//10. Append the li to the ul element.  [see above]
// function stepTen() {
//     var ul = document.querySelector('ul');
//     if (ul && newLi) {
//         ul.appendChild(newLi);
//     }
// }

//11. Loop over all of the <li> elements inside the <ol> tag and give each of them a background color of “green”.
function stepEleven() {
    var ol = document.querySelector('ol');
    var li = ol.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'green';
    }
}

//12. Remove the div with a class of footer.
function stepTwelve() {
    var footer = document.querySelector('.footer');
    footer.remove();
}

document.addEventListener('DOMContentLoaded', function () {
    try {
        stepOne();
    } catch (error) {
        console.error("Error in stepOne:", error);
    }

    try {
        stepTwo();
    } catch (error) {
        console.error("Error in stepTwo:", error);
    }

    try {
        stepThree();
    } catch (error) {
        console.error("Error in stepThree:", error);
    }

    try {
        stepFour();
    } catch (error) {
        console.error("Error in stepFour:", error);
    }

    try {
        stepFive();
    } catch (error) {
        console.error("Error in stepFive:", error);
    }

    try {
        stepSix();
    } catch (error) {
        console.error("Error in stepSix:", error);
    }

    try {
        stepSeven();
    } catch (error) {
        console.error("Error in stepSeven:", error);
    }

    try {
        stepEight();
    } catch (error) {
        console.error("Error in stepEight:", error);
    }

    // try {
    //     stepNine();
    // } catch (error) {
    //     console.error("Error in stepNine:", error);
    // }

    // try {
    //     stepTen();
    // } catch (error) {
    //     console.error("Error in stepTen:", error);
    // }

    try {
        stepEleven();
    } catch (error) {
        console.error("Error in stepEleven:", error);
    }

    try {
        stepTwelve();
    } catch (error) {
        console.error("Error in stepTwelve:", error);
    }
});

