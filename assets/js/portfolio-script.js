const projectsContainer = document.querySelector(`#projectsContainer`)


// current sample 
/* 
<div class="project mr-3 mb-3">
    <a href="https://gusvalenzuela.github.io/quiz-game/" target="_blank">
    <img src="./assets/images/quizgame-bg.jpg" alt="Quiz Game"></a>
    <p class="projname" style="font-size: 14px;">
        QuizDown (Timed quiz game)
    </p>
</div>
*/

function createNewProjCont(){
    // loop through array of objects and print as many as needed
    for(i=0;i<projectsArray.length;i++){
        console.log(`project #` + i + ` is: ` + projectsArray[i].name)
    }
    var div = document.createElement(`div`)
    var img = document.createElement(`img`)
    var para = document.createElement(`p`)
    div.setAttribute(`class`,`project mr-3 mb-3`)
    para.setAttribute(`class`, `projname text-truncate`)
}

projectsContainer.addEventListener(`click`,function(e){
    var el = e.target
    console.log(el)

    switch(el.id){
        case `quizDownGame`:
            alert(`this is the Quiz Game Domain`)
            break
        case `felineCheesyGame`:
            alert(`This is the feline cheesy game!`)
            break
    }
})