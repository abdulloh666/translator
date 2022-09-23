let form = document.querySelector("#form");
let inputEl = document.querySelector("#search-input");
let imgDiv = document.querySelector("#img-div");
let thingName = document.querySelector("#thing-name");
let infoP = document.querySelector("#info-p");
let lang = document.querySelector("#select");
let list = ["moshina" , "kuchuk" , "iphone" , "ayiq" , "chips" , "uy" , "passport"].sort();

console.log(list);

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    
    if(inputEl.value == "moshina"){
        if(lang.value == "eng"){
            imgDiv.classList.add("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        imgDiv.classList.remove("img-div-iphone")
        imgDiv.classList.remove("img-div-house")
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        thingName.innerHTML = "Car";
        infoP.innerHTML = "Car is the most popular vehicle on the world.";
        }

        else if(lang.value == "ru"){
            imgDiv.classList.add("img-div-car");
            imgDiv.classList.remove("img-div-dog")
            imgDiv.classList.remove("img-div-iphone")
            imgDiv.classList.remove("img-div-house")
            imgDiv.classList.remove("img-div-passport")
            imgDiv.classList.remove("img-div-chips")
            imgDiv.classList.remove("img-div-bear")
            thingName.innerHTML = "Автомобиль";
            infoP.innerHTML = "Автомобиль – самое популярное транспортное средство в мире.";
        }
        
    }

    else if(inputEl.value == "kuchuk"){
        if(lang.value == "eng"){
        imgDiv.classList.add("img-div-dog");
        imgDiv.classList.remove("img-div-iphone")
        imgDiv.classList.remove("img-div-house")
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        thingName.innerHTML = "Dog";
        infoP.innerHTML = "Did you know that dogs see the world only in gray color.";
        }

        else if(lang.value == "ru"){
            imgDiv.classList.add("img-div-dog");
        imgDiv.classList.remove("img-div-iphone")
        imgDiv.classList.remove("img-div-house")
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        thingName.innerHTML = "Собака";
        infoP.innerHTML = "Знаете ли вы, что собаки видят мир только в сером цвете.";
        }
        
    }

    else if(inputEl.value == "iphone"){

        if(lang.value == "eng"){
        imgDiv.classList.add("img-div-iphone");
        imgDiv.classList.remove("img-div-house")
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        thingName.innerHTML = "iPhone";
        infoP.innerHTML ="The worlds most popular phone is Iphone.";
        }

        else if(lang.value == "ru"){
            imgDiv.classList.add("img-div-iphone");
        imgDiv.classList.remove("img-div-house")
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        thingName.innerHTML = "Айфон";
        infoP.innerHTML ="Самый популярный телефон в мире — Iphone."; 
        }
        
    }

    else if(inputEl.value == "uy"){

        if(lang.value == "eng"){
        imgDiv.classList.add("img-div-house");
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        imgDiv.classList.remove("img-div-iphone")
        thingName.innerHTML = "House";
        infoP.innerHTML = "House is building for people";
        }

        else if(lang.value == "ru"){
            imgDiv.classList.add("img-div-house");
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        imgDiv.classList.remove("img-div-iphone")
        thingName.innerHTML = "Дом";
        infoP.innerHTML = "Дом строится для людей";
        }
        
    }

    else if(inputEl.value == "passport"){

        if(lang.value == "eng"){
        imgDiv.classList.add("img-div-passport");
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        imgDiv.classList.remove("img-div-iphone")
        imgDiv.classList.remove("img-div-house")
        thingName.innerHTML = "Passport";
        infoP.innerHTML = "An offial document of every person.";
        }

        else if(lang.value == "ru"){
            imgDiv.classList.add("img-div-passport");
        imgDiv.classList.remove("img-div-chips")
        imgDiv.classList.remove("img-div-bear")
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        imgDiv.classList.remove("img-div-iphone")
        imgDiv.classList.remove("img-div-house")
        thingName.innerHTML = "Заграничный пасспорт";
        infoP.innerHTML = "Официальный документ каждого человека.";
        }
        
    }

    else if(inputEl.value == "chips"){

        if(lang.value == "eng"){
    imgDiv.classList.add("img-div-chips");
            imgDiv.classList.remove("img-div-bear")
            imgDiv.classList.remove("img-div-car");
            imgDiv.classList.remove("img-div-dog")
            imgDiv.classList.remove("img-div-iphone")
            imgDiv.classList.remove("img-div-house")
            imgDiv.classList.remove("img-div-passport")
            thingName.innerHTML = "Chips";
            infoP.innerHTML = "Just snack.";
        }

        else if(lang.value == "ru"){
            imgDiv.classList.add("img-div-chips");
            imgDiv.classList.remove("img-div-bear")
            imgDiv.classList.remove("img-div-car");
            imgDiv.classList.remove("img-div-dog")
            imgDiv.classList.remove("img-div-iphone")
            imgDiv.classList.remove("img-div-house")
            imgDiv.classList.remove("img-div-passport")
            thingName.innerHTML = "Чипсы";
            infoP.innerHTML = "Просто закуски.";
        }
        
    }

    else if(inputEl.value == "ayiq"){

        if(lang.value == "eng"){
        imgDiv.classList.add("img-div-bear");
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        imgDiv.classList.remove("img-div-iphone")
        imgDiv.classList.remove("img-div-house")
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        thingName.innerHTML = "Bear";
        infoP.innerHTML = "An animal.";
        }

        else if(lang.value == "ru"){
            imgDiv.classList.add("img-div-bear");
        imgDiv.classList.remove("img-div-car");
        imgDiv.classList.remove("img-div-dog")
        imgDiv.classList.remove("img-div-iphone")
        imgDiv.classList.remove("img-div-house")
        imgDiv.classList.remove("img-div-passport")
        imgDiv.classList.remove("img-div-chips")
        thingName.innerHTML = "Медведь";
        infoP.innerHTML = "Животное.";
        }
        
    }

})