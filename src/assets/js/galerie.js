
let filters = document.querySelectorAll("#filters div");

for(let filter of filters){
    filter.addEventListener("click", function(){
        
        let tag = this.id;

        // On commence par retirer la classe "active" des filtres
        for(let f of filters){
            removeActiveClass(f);
        }
        // On ajoute la classe "active" au filtre sélectionné
        addActiveClass(this);

        let images = document.querySelectorAll("#gallery  .gallery-content");

        for(let image of images){
            removeActiveClass(image);

            if(tag in image.dataset || tag === "all"){
                addActiveClass(image);
            }
        }
    });
}


function addActiveClass(element) {
    if(element.classList.contains("inactive")){
        element.classList.replace("inactive", "active");
    }
}

function removeActiveClass(element) {
    if(element.classList.contains("active")){
        element.classList.replace("active", "inactive");
    }
}