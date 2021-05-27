const root = document.getElementById('root');

const createEle =()=>{
    for (let i=0;i<10;i++){
        let div = document.createElement("div")
        root.appendChild(div);
        div.classList.add("careerBlock"); 
        div.addEventListener("click", commonQ);
      }
}

const commonQ=()=>{
    for (let i=0;i<10;i++){
        let div = document.createElement("div")
        root.appendChild(div);
        div.classList.add("questionBlock"); 
        div.addEventListener("click", commonA);
      }
}