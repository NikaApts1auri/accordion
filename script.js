// const questionDivs = Array.from(document.querySelectorAll(".question-div"));

// questionDivs.forEach((questionDivs)=>{
//     questionDivs.addEventListener("click", (event) =>{
//         console.log(event.target);
//     });
// });

// პირველი ნაწილი არის ცუდი პრაქტიკა, რადგან კომპლექსურს პროექტი (საიტი) შეიძლება დაიქრაშოს, და შენელდეს


// const container = document.querySelector("main");
// let active=null;

// container.addEventListener("click",(event)=>{
//    const questionDiv = event.target.closest(".question-div");

//    if(questionDiv){
//     const answer = questionDiv.children[1];
//     const question = questionDiv.children[0].children[0];
//     const arrow = questionDiv.querySelector(".arrow");

//     if(active){
//         active.children[1].style.display="none";
//         active.querySelector(".question").style.fontWeight="normal";
//         active.querySelector(".arrow").style.transform="rotate(0deg)";
//     }
//     if(questionDiv===active){
//         answer.style.display= "none";
//         question.style.fontWeight="normal";
//         arrow.style.transform="rotate(0deg)"
//         active= null;
//     }else{
//         answer.style.display= "block";
//         question.style.fontWeight="bold";
//         arrow.style.transform="rotate(180deg)"
    
//         active=questionDiv;
//     }
  
   
//    }
// })

                                                                // way1

//     const container = document.querySelector("main");
//     let active=null;
//     container.addEventListener("click",(event)=>{
//     const questionDiv = event.target.closest(".question-div");

//    if(questionDiv){
//     if(active){
//         active.classList.remove("active");
 
//     }
//     if(questionDiv===active){
//       questionDiv.classList.remove("active");
//         active= null;
//     }else{
//         questionDiv.classList.add("active");
    
//         active=questionDiv;
//     }
   
//    }
// })
                                                        //   Better way[2]



 const container = document.querySelector("main");
    let active=null;
    container.addEventListener("click",(event)=>{
    const questionDiv = event.target.closest(".question-div");
    questionDiv.classList.toggle("active");

   if(questionDiv){
    if(active){
        active.classList.remove("active");
    }
    if(questionDiv===active){
        active= null;
    }else{
        active=questionDiv;
    }
   
   }
})
                                                    //    The Best way[3] for Accordion 