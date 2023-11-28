const btns = document.querySelectorAll(".btn");
const storeCharas = document.querySelectorAll(".store-chara");

for(i = 0; i<btns.length; i++){
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        storeCharas.forEach((chara)=>{
            if(filter == "all"){
                chara.style.display = "block"
            }
            
            else{
                if(chara.classList.contains(filter)){
                    chara.style.display = "block"
                }
                
                else{
                    chara.style.display = "none"
                }
            }
        })
    })
}