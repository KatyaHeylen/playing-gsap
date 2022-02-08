let elements = document.querySelectorAll(".circle");

elements.forEach(element => {
    element.addEventListener('click', (e)=>{
        element.style.backgroundColor = "grey";
    });
});


// elements.forEach(element => {
//     element.addEventListener('mouseout', (e)=>{
//         element.style.backgroundColor = "red";
//     });
// });



