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
        var divCard = document.createElement(`div`)
        let divCardBody = document.createElement(`div`)
        var anchor1 = document.createElement(`a`)
        var anchor2 = document.createElement(`a`)
        var img = document.createElement(`img`)
        var h5 = document.createElement(`h5`)
        var para = document.createElement(`p`)
        
        anchor1.setAttribute(`href`,val.url)
        anchor1.setAttribute(`target`,`_blank`)
        anchor1.setAttribute(`class`,`btn btn-primary rounded-0 m-1`)
        anchor2.setAttribute(`href`,val.repo_url)
        anchor2.setAttribute(`target`,`_blank`)
        anchor2.setAttribute(`class`,`btn btn-primary rounded-0 m-1`)
        img.setAttribute(`id`,val.id)
        img.setAttribute(`class`,`card-img-top`)
        img.setAttribute(`src`,val.img_src)
        img.setAttribute(`alt`,val.img_alt)
        img.setAttribute(`title`,val.name)
        img.setAttribute(`name`,val.name)
        divCard.setAttribute(`class`,`card mb-3 mr-3`)
        divCard.setAttribute(`style`,`width: 18rem`)
        divCardBody.setAttribute(`class`,`card-body`)
        para.setAttribute(`class`, `card-text`)
        h5.textContent = `${val.name}`
        para.textContent = `${val.description}`
        anchor1.textContent = `See project`
        anchor2.textContent = `See repo`
        divCard.append(img)
        divCard.append(divCardBody)
        divCardBody.append(h5, para, anchor1, anchor2)
        projectsContainer.appendChild(divCard)
    })
}

// })