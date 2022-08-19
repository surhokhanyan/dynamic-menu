// // For learning lesson
// let result = document.querySelector("#result");
// let btn = document.querySelector("#btn");
//
//
// btn.onclick = function(){
//     result.innerText = "Hello";
// }
// // Պարզ է որ այս դեպքում ամեն անգամ click անելուց հետո մեր h1 թեգի մեջ կավելանա Hello գրվածքը
// // Դիտարկենք այն պահը երբ կարող ենք event-ը օգտագործել նաև ֆունկցիոնալ տարբերակով՝ Element.clic() կառուցվածքով
// // մեր օրինակում element-ը մեր button-ն է, ուստի կարող ենք առանց օգտատիրոջ ֆիզիկական մասնակցության օգտագործել click գործողությունը սահմանելով setTimeout ֆունկցիան։
// setTimeout(()=>{
//     btn.click();
// }, 3000);
//
// // Քանի որ event-ները կապված են լինում HTML ի որևէ կոնկրետ թեգի հետ, այս իմաստով շատ է օգտագործվում this ցուցիչը,
// // որը մշտապես ցույց է տալիս այն էլեմենտը, որի հետ կապված է event-ը։
// // օրինակ
//
// let people = ["James", "Frank", "Vincent", "Albert"];
// let ul = document.createElement("ul");
// people.forEach(elm =>{
//     let item= document.createElement("li");
//     item.innerText = elm;
//     item.onclick = function(){
//         this.style.fontSize = "30px";
//     }
//     ul.append(item);
// })
// document.body.append(ul);
//
// // item.onclick -ի դեպքում աշխատում է անանուն ֆունկցիա, որի ներսում this.style.fontSize-ին վերագրվել է 30px արժեքը։
// // This-ն այստեղ հղում է անում այն էլեմենտին, որի վրա քլիքկ է արվել։
//
// // Հաջորդ կարևոր հատկությունը event ֆունկցիայի պարամետրն է։ Պարզվում է, որ event իրականացնող ֆունկցիան default պառամետր ունի, որին,
// // կարող ենք տալ կամայական անվանում։ Սովորաբար գրում են e տառը, պայմանավորված event
// let elms = [...document.querySelectorAll("#picturesDIv img")];
// elms.map((elm,ind) => elm.onclick = choosePhoto.bind(null, ind));   //********* Բացատրել
// // function choosePhoto(e){
// //     e.target.style.borderRadius = "50%";
// // }
// // Ֆունկցիային ավելացնենք h1#result թեգը և փոխենք choosePhoto ֆունկցիան
// function choosePhoto(index,e){
//     result.innerText = "You have clicked at " + index;
//     e.target.style.borderRadius = "50%";
// }


// Prevent default մեթոդը։
// Որոշ event-ների համար browser-ում կան նախասահմանված ձևեր։ Ուշագրավ է որ մենք կարող ենք կասեցնել նրանց աշխատանքը։

document.body.addEventListener("contextmenu", (e) =>{
    e.preventDefault();
    let menu = ["add", "remove", "edit", "update", "exit"];
    let ul = document.createElement("ul");
    ul.className = "dynamic-menu";
    menu.forEach(item =>{
        let elm = document.createElement("li");
        elm.innerText = item;
        elm.addEventListener("click", function (){
            this.closest("ul.dynamic-menu").remove();
        })
        ul.append(elm);
    });
    document.body.querySelector(".dynamic-menu")?.remove();
    document.body.append(ul);
    let style = document.createElement("style");
    style.id = "menu-style";
    document.head.querySelector("#menu-style")?.remove();
    style.innerText = `
    .dynamic-menu{
        position:absolute;
        top: ${e.clientY}px;
        left:${e.clientX}px;
    }
    .dynamic-menu li{
        list-style:none;
        width:150px;
        padding:5px;
        border:2px solid #2196f3;
        margin: 5px;
        cursor: pointer;
        background: #219613;
        color: #fff;
    }
    .dynamic-menu li:hover{
        border: 2px solid #219613;
        background: transparent;
        color: #000;
    }`
    document.head.append(style);
});
document.body.addEventListener("click", ()=>{
    document.body.querySelector(".dynamic-menu")?.remove();
})



