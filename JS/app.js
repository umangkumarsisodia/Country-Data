let first = document.getElementById('first');
let second = document.getElementById('second');

//Used for showing hemburger menu or hide hemburger menu
function hemBurgerMenu(){
    let hemburger = document.querySelector('.hemburger');
    let closeBtn = document.querySelector('.closeBtn');
    let mobNav = document.querySelector('.mobile-nav')

    hemburger.addEventListener('click',(e)=>{
        mobNav.classList.add("open");
        e.preventDefault();
    })

    closeBtn.addEventListener('click',(e)=>{
        mobNav.classList.remove("open");
        e.preventDefault();
    })
}

hemBurgerMenu();

//Used to show list of all countries on the web page
function showList() {
    second.style.display = "none";
    first.style.display = "block";
    let countryList = document.getElementById('countryList');
    let str = "";
    let xhr = new XMLHttpRequest();
    xhr.open('GET',"https://restcountries.com/v2/all",true);
    xhr.onload=function(){
        let data = JSON.parse(this.responseText);
        for(let i=0; i<data.length;i++){
            str += `
            <li>${i+1}. ${data[i].name}</li>
            `
        } 
        countryList.innerHTML = str;
    }
    xhr.send();
}

//Used to show country data based on the user's search
function showCountryData() {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', (e)=>{
        first.style.display = "none";
        second.style.display = "block";
        let c_name = document.forms["myForm"]["searchBox"].value;
        let countryHead = document.getElementById('countryHead');
        let mapArea = document.getElementById('mapArea');
        let flagImage = document.getElementById('flagImage');
        let table = document.getElementById('table');
        let xhr1 = new XMLHttpRequest();
        let url = `https://restcountries.com/v3.1/name/${c_name}`;
        xhr1.open('GET',url,true);
        xhr1.onload = function() {
            let data1 = JSON.parse(this.responseText);
            let x = data1[0].maps.googleMaps;
                mapArea.setAttribute("href",x);
        }
        let xhr2 = new XMLHttpRequest();
        let lngSpoken = document.getElementById('lngSpoken');
        let str = ""
        xhr2.open('GET',"https://restcountries.com/v2/all",true);
        xhr2.onload=function(){
        let data = JSON.parse(this.responseText);
        for(let i=0; i<data.length;i++){
            if(data[i].name == c_name){
                flagImage.src = data[i].flag;
                countryHead.innerHTML = data[i].name;
                table.innerHTML = `
                <tr>
                    <td class="tableHead">Country Name</td>
                    <td>${data[i].name}</td>
                </tr>
                <tr>
                    <td class="tableHead">Capital</td>
                    <td>${data[i].capital}</td>
                </tr>
                <tr>
                    <td class="tableHead">Region</td>
                    <td>${data[i].region}</td>
                </tr>
                <tr>
                    <td class="tableHead">Sub-region</td>
                    <td>${data[i].subregion}</td>
                </tr>
                <tr>
                    <td class="tableHead">Currency</td>
                    <td>${data[i].currencies[0].name} (${data[i].currencies[0].symbol})</td>
                </tr>
                <tr>
                    <td class="tableHead">Latitude, Longitude</td>
                    <td>${data[i].latlng}</td>
                </tr>
                <tr>
                    <td class="tableHead">Area</td>
                <td>${data[i].area}</td>
                </tr>
                <tr>
                    <td class="tableHead">Population</td>
                    <td>${data[i].population}</td>
                </tr>
            `
            for(let j=0; j<data[i].languages.length; j++){

                str += data[i].languages[j].name+", ";
            }
            lngSpoken.innerHTML = str;
            }
        }
        }
        xhr1.send();
        xhr2.send();
        e.preventDefault();
        myForm.reset();
    });
}

//Show the country data
function mobileNavData() {
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', (e)=>{
        first.style.display = "none";
        second.style.display = "block";
        let c_name = document.forms["myForm1"]["searchBox1"].value;
        let countryHead = document.getElementById('countryHead');
        let mapArea = document.getElementById('mapArea');
        let flagImage = document.getElementById('flagImage');
        let table = document.getElementById('table');
        let xhr1 = new XMLHttpRequest();
        let url = `https://restcountries.com/v3.1/name/${c_name}`;
        xhr1.open('GET',url,true);
        xhr1.onload = function() {
            let data1 = JSON.parse(this.responseText);
            let x = data1[0].maps.googleMaps;
                mapArea.setAttribute("href",x);
        }
        let xhr2 = new XMLHttpRequest();
        let lngSpoken = document.getElementById('lngSpoken');
        let str = ""
        xhr2.open('GET',"https://restcountries.com/v2/all",true);
        xhr2.onload=function(){
        let data = JSON.parse(this.responseText);
        for(let i=0; i<data.length;i++){
            if(data[i].name == c_name){
                flagImage.src = data[i].flag;
                countryHead.innerHTML = data[i].name;
                table.innerHTML = `
                <tr>
                    <td class="tableHead">Country Name</td>
                    <td>${data[i].name}</td>
                </tr>
                <tr>
                    <td class="tableHead">Capital</td>
                    <td>${data[i].capital}</td>
                </tr>
                <tr>
                    <td class="tableHead">Region</td>
                    <td>${data[i].region}</td>
                </tr>
                <tr>
                    <td class="tableHead">Sub-region</td>
                    <td>${data[i].subregion}</td>
                </tr>
                <tr>
                    <td class="tableHead">Currency</td>
                    <td>${data[i].currencies[0].name} (${data[i].currencies[0].symbol})</td>
                </tr>
                <tr>
                    <td class="tableHead">Latitude, Longitude</td>
                    <td>${data[i].latlng}</td>
                </tr>
                <tr>
                    <td class="tableHead">Area</td>
                <td>${data[i].area}</td>
                </tr>
                <tr>
                    <td class="tableHead">Population</td>
                    <td>${data[i].population}</td>
                </tr>
            `
            for(let j=0; j<data[i].languages.length; j++){

                str += data[i].languages[j].name+", ";
            }
            lngSpoken.innerHTML = str;
            }
        }
        }
        xhr1.send();
        xhr2.send();
        e.preventDefault();
        myForm1.reset();
    });
}

//Function calling

mobileNavData();

showList();

showCountryData();

