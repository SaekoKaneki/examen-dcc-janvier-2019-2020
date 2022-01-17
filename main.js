// Nom : Batta
// Prénom : Gwenaelle
// Groupe : 2285
(function (){
    const oFizzBuzz={
        init(){
            document.documentElement.classList.add('js-enabled');
            for (let i = 1; i<=200;i+=2){
                if(i%3===0 && i%9===0){
                    document.querySelector('#app').insertAdjacentHTML(`beforeend`, `
                    <li class="grid__item multiple-3-9">
                        ${i}
                        <div class="ribbon-wrapper">
                            <div class="ribbon">3 et 9</div> 
                        </div>
                    </li>`);
                }else if(i%3===0){
                    document.querySelector('#app').insertAdjacentHTML(`beforeend`, `
                    <li class="multiple-3 grid__item">
                        ${i}
                        <div class="ribbon-wrapper">
                            <div class="ribbon">3</div> 
                        </div>
                    </li>`);

                }else if(i%i === 0 && i%1===0){
                    document.querySelector('#app').insertAdjacentHTML(`beforeend`, `
                    <li class="premier grid__item">
                        ${i}
                        <div class="ribbon-wrapper">
                            <div class="ribbon">premier</div> 
                        </div>
                    </li>`);
                }
                else{
                    document.querySelector('#app').insertAdjacentHTML(`beforeend`, `<li class="grid__item">${i}</li>`);

                }
            }

        }
    }
    oFizzBuzz.init();
})();





