const projectsContainer = document.querySelector(`#projects-container`)

init()

function init(){
    createNewProjCont()
}

function createNewProjCont(){
    projectsContainer.innerHTML = ``
    
    // loop through array of objects and print as many as needed
    projectsArray.forEach(function(val){
        // console.log(val.name)
        var div = document.createElement(`div`)
        var anchor = document.createElement(`a`)
        var img = document.createElement(`img`)
        var para = document.createElement(`p`)
        
        anchor.setAttribute(`href`,val.url)
        anchor.setAttribute(`target`,`_blank`)
        anchor.setAttribute(`class`,`project-anchor`)
        img.setAttribute(`id`,val.id)
        img.setAttribute(`class`,`project-img`)
        img.setAttribute(`src`,val.img_src)
        img.setAttribute(`alt`,val.img_alt)
        img.setAttribute(`title`,val.name)
        img.setAttribute(`name`,val.name)
        div.setAttribute(`class`,`project mr-3 mb-3`)
        para.setAttribute(`class`, `projname text-truncate`)
        para.innerHTML = `${val.name}<br>${val.lead}`
        anchor.appendChild(img)
        div.appendChild(anchor)
        anchor.appendChild(para)
        projectsContainer.appendChild(div)
    })
}

// if only linking to other pages, anchor tags are fine
// projectsContainer.addEventListener(`click`,function(e){
//     var el = e.target
//     // console.log(el)
//     for(i=0;i<projectsArray.length;i++){
//         if(el.id === projectsArray[i].id){
//             console.log(`This is the: "` + projectsArray[i].name + `" project`)
//         }
//     }

// })