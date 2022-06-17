let startBtn = document.querySelector("#startBtn"),
main_item = document.querySelectorAll(".main_item"),
main_conteiner = document.querySelectorAll(".main_conteiner"),
victory = document.querySelector(".victory"),
couterOfClicks = 0,
couterOfTry = 0,
Arr = []
let except = []

function SetImage(item,url){
   item.style.backgroundImage = `url("${url}")`
   item.style.backgroundSize = "contain"
   item.style.backgroundRepeat = "no-repeat"
   item.style.backgroundPosition = "center"
}

main_conteiner.forEach(item=>SetImage(item,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYIEMq7K_PBa3EsduG4abA15Lv-myukn3xg&usqp=CAU"))

main_item.forEach(item=>{
    if( item.getAttribute("data-name")=="triangle"){
        SetImage(item,"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Penrose_triangle.svg/1200px-Penrose_triangle.svg.png")
    }
    if(item.getAttribute("data-name")=="rect"){
        SetImage(item,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNr5r6lyOnkLsnMSuImwsTk-c98ppH6BM7XQ&usqp=CAU")
    }
    if(item.getAttribute("data-name")=="circle"){
        SetImage(item,"https://png.pngtree.com/png-clipart/20200801/ourlarge/pngtree-blue-purple-gradient-circle-png-image_2319138.jpg")
    }
    if(item.getAttribute("data-name")=="hearth"){
        SetImage(item,"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png")
    }
    if(item.getAttribute("data-name")=="star"){
        SetImage(item,"https://w7.pngwing.com/pngs/166/368/png-transparent-black-star-illustration-computer-icons-star-star-stable-three-dimensional-five-pointed-star-angle-triangle-logo.png")
    }
})

function Find(array, item){
    for (let i=0; i<array.length; i++){
        if (array[i] == item){
            return true;
        }
    }
    return false;
}
function findToSame(){
    for(let item of main_item){
        item.style.opacity = 0
            item.addEventListener("click",()=>{
                if(!Find(except, item.getAttribute("data-name"))){
                    item.style.opacity = 1
                    Arr.push(item.getAttribute("data-name"))
                    couterOfClicks++
                    item.classList.add("click")
                    if(Arr.length==2){  
                        if(Arr[0]==Arr[1]){
                        console.log(item.getAttribute("data-name"))
                        main_item.forEach(item1=>{
                            if(item1.getAttribute("data-name")==Arr[0]){
                                item.style.opacity = 1
                                except.push(item1.getAttribute("data-name"))
                            }
                        })
                    }}
                    if(couterOfClicks==3){
                        couterOfClicks=0
                        let ClassClick = document.querySelectorAll(".click")
                        console.log(ClassClick)
                        ClassClick.forEach(item=>{
                        item.style.opacity=0
                        item.classList.remove("click")
                        Arr = []
                    })
                    main_item.forEach(item1=>{
                        except.forEach(item=>{
                            if(item1.getAttribute("data-name")==item){
                                item1.style.opacity=1
                            }
                        })
                       
                    })
                    }
                    if(couterOfClicks==2){
                        couterOfTry++
                    }
                    if(except.length==10){
                        victory.style.display = "block"
                        victory.textContent = "Поздравляем с победой! Количество ваших попыток: "+couterOfTry
                    }
                    
                }
            })
    }
}


startBtn.addEventListener('click',()=>{
    for(let item of main_conteiner){
        item.style.order = Math.random()*9+1|0
    }
    main_item.forEach(item=>item.style.opacity = 1)
    except = []
    victory.style.display = "none"
    victory.textContent = ""
    let id = setTimeout(findToSame,2000)
})



