"use sttrict";

(function () {
    const container = document.querySelector('#container')
    let flag = false;
    function createAccordion(data){
        const accordion = document.createElement('div')
        accordion.className = 'accordion'
        const accordionHeader =`<div class='accordion-header'>${data.name}</div>`
        accordion.innerHTML = accordionHeader
        function accordionDescription(){
            return `
            <div class='accordion-description'>
                <img class='img column'>
                <div class='item'>
                    <div class='column'><b>inn: </b>${data.inn}</div>
                    <div class='column'><b>name: </b>${data.name}</div>
                    <div class='column'><b>age: </b>${data.age}</div>
                </div>
                <div class='item'>
                    <div class='column'><b>email: </b>${data.email}</div>
                    <div class='column'><b>city: </b>${data.city}</div>
                    <div class='column'><b>gender: </b>${data.gender}</div>
                </div>
            </div>`
        }
        accordion.onclick = function () {
            if (flag === false){
                accordion.innerHTML = accordionHeader + accordionDescription()
                flag = true;
            } else
            {
                accordion.innerHTML = accordionHeader
                flag = false
            }
        }
        return accordion
    }
    for (let i in users) {
        container.appendChild(createAccordion(users[i]))
    }
}) ()