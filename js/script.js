const div = document.getElementById("resp");
const navbar_btt = document.getElementsByClassName("navbar_button")[0];
const navbar_links = document.getElementsByClassName("navbar_links")[0];
const navbar = document.getElementsByClassName("navbar")[0];

function conversor_de_temperatura(){
    let celsius = parseFloat(document.getElementById("celsius").value); 

    if(isNaN(celsius)){
        return alert("Por favor digite um número válido!")
    }

    let fahrenheit = ((celsius * 1.8) + 32);   
    let kelvin = celsius + 273.15;
  
    div.innerHTML = `Temperatura em celsius: ${celsius}<br> Temperatura em fahrenheit: ${fahrenheit}<br> Temperatura em kelvin: ${kelvin}`;    
}

function toggle_menu(event){

    if(event.type == 'touchstart') event.preventDefault();

    navbar_links.classList.toggle('active');
    navbar.classList.toggle('active');
}

navbar_btt.addEventListener('click', toggle_menu);
navbar_btt.addEventListener('touchstart', toggle_menu);