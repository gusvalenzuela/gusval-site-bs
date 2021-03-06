const projectsContainer = document.querySelector(`#projects-container`)

init()

function init(){
    createNewProjCont()
}
// sample >>
// <div class="card" style="width: 18rem;">
//                             <img src="..." class="card-img-top" alt="...">
//                             <div class="card-body">
//                               <h5 class="card-title">Card title</h5>
//                               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                               <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                           </div>

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

// })