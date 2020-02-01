const projectsContainer = document.querySelector(`#projectsContainer`)


function createNewProjCont(){
    // loop through array of objects and print as many as needed
    for(i=0;i<projectsArray.length;i++){
        console.log(`project #` + i + ` is: ` + projectsArray[i].name)
    }
}