const error = document.getElementById("error");
const table = document.getElementById("table");
const historyContainer = document.querySelector(".history");
const historiesID = document.getElementById("histories");

class UI {



    static AddMeansToUI(data) {

        if(!error.classList.contains("none")){
            error.classList.add("none");
        }


        if(table.classList.contains("none")) {
            table.classList.remove("none");
            table.querySelector("thead").remove();
            table.querySelector("tbody").remove();
        }
        else {
            table.querySelector("thead").remove();
            table.querySelector("tbody").remove();
        }


        let tbody = document.createElement("tbody");
        table.appendChild(tbody);


        if (data.language == "t"){
            
            for(let i = 0; i<data.meanings_tr.length; i++) {

                if (i === 0){
                        let thead = document.createElement("thead");
                        thead.innerHTML = '<tr><td height="30"></td><td height="30">Turkish</td><td height="30">English</td></tr>';
                        table.appendChild(thead);
                }
                
    
                    tbody.innerHTML += `<tr>
                    <td height="30">${(i+1)}</td>
                    <td height="30">${data.meanings_tr[i]}</td>
                    <td height="30">${data.meanings_en[i]}</td>
                </tr>`;
            }
        }
    else {
        for(let i = 0; i<data.meanings_en.length; i++) {
            if (i === 0){
                    let thead = document.createElement("thead");
                    thead.innerHTML = '<tr><td height="30"></td><td height="30">English</td><td height="30">Turkish</td></tr>';
                    table.appendChild(thead);
            }
                tbody.innerHTML += `<tr>
                <td height="30">${(i+1)}</td>
                <td height="30">${data.meanings_en[i]}</td>
                <td height="30">${data.meanings_tr[i]}</td>
            </tr>`;
        }
    }





    }





    static ErrorMessages() {
    if(!table.classList.contains("none")){

        table.classList.add("none");

    }

        error.classList.remove("none");
        error.textContent = "Your word is incorrect!";
        error.style = "font-size:1.4rem;color:red;margin-top:14px;text-shadow:0px 0px 7px black;";
    }

static clearAllHistories(){

    let childs = historiesID.childNodes;

    let i = 0;
    while(i<childs.length){

        if(i === 0){
            childs[i].remove();
        }

    }

}
    static LoadAllHistories(histories) {


        histories.forEach((items) => {
            let HistoryContent = document.createElement("div");
            HistoryContent.classList.add("history-content");
            
            HistoryContent.innerHTML =  `
            <div class="history-content-child">
                <svg class="history-svg"><path class="history-path" d="M9.54 0c2.63,0 5.02,1.07 6.75,2.79 1.73,1.73 2.79,4.11 2.79,6.75 0,2.63 -1.07,5.01 -2.79,6.74 -1.73,1.73 -4.12,2.8 -6.75,2.8 -2.63,0 -5.02,-1.07 -6.75,-2.79 -1.72,-1.72 -2.79,-4.11 -2.79,-6.75 0,-2.63 1.07,-5.02 2.79,-6.74 1.73,-1.73 4.12,-2.8 6.75,-2.8zm-1.13 9.79c0,0.27 0.13,0.51 0.36,0.63l3.19 2.13c0.37,0.27 0.86,0.17 1.08,-0.19 0.27,-0.37 0.17,-0.86 -0.19,-1.11l-2.83 -1.89 0 -4.09c0,-0.44 -0.36,-0.8 -0.83,-0.8 -0.41,0 -0.8,0.36 -0.8,0.8l0.03 4.52zm6.42 -5.54c-1.35,-1.35 -3.22,-2.19 -5.29,-2.19 -2.07,0 -3.94,0.84 -5.29,2.19 -1.35,1.35 -2.19,3.22 -2.19,5.29 0,2.07 0.84,3.94 2.19,5.29 1.35,1.35 3.22,2.19 5.29,2.19 2.07,0 3.94,-0.84 5.29,-2.19 1.35,-1.35 2.19,-3.22 2.19,-5.29 0,-2.07 -0.84,-3.94 -2.19,-5.29z"/></svg>
                <span>${items}</span>
            </div>
            <div class="history-icon">
                <svg class="xmark-svg"><path class="xmark-path" d="M-0 41.24l0 0.37c0.02,7.73 0.8,12.56 3.94,19.35 2.01,4.34 5.12,8.69 8.29,11.85 10.27,10.23 139.74,139.32 140.91,141.06 -1.16,1.73 -130.63,130.81 -140.91,141.06 -3.27,3.26 -6.21,7.38 -8.29,11.85 -2.36,5.1 -3.66,10.48 -3.94,15.85l0 4.45c0.53,10.33 4.79,20.34 12.39,27.94 7.23,7.23 17.36,12.71 28.21,12.71l0.36 0c7.6,-0.01 13.19,-0.53 20,-3.94 4.72,-2.37 8.33,-4.75 11.85,-8.29l60.42 -60.42c0.38,-0.38 78.94,-79.34 80.64,-80.48 1.71,1.15 80.05,79.88 80.48,80.32l60.42 60.42c3.76,3.76 6.79,5.82 11.8,8.34 4.85,2.45 10.33,3.77 15.9,4.05l4.47 0c7.07,-0.35 14.06,-2.36 19.89,-5.88 12.65,-7.64 20.19,-21.01 20.91,-34.88l0 -4.41c-0.26,-4.96 -1.41,-9.9 -3.52,-14.61 -1.84,-4.1 -3.05,-6 -5.61,-9.42 -0.84,-1.11 -1.46,-1.7 -2.33,-2.78 -2.08,-2.6 -60.43,-60.49 -60.71,-60.77 -0.38,-0.38 -79.82,-79.42 -80.96,-81.12 1.2,-1.8 130.45,-130.61 140.91,-141.06 7.64,-7.63 11.72,-17.52 12.23,-27.61l0 -4.39c-0.53,-10.28 -4.76,-20.47 -12.71,-28.43 -15.44,-15.47 -39.75,-16.42 -56.85,-2.98 -5.45,4.29 -17.39,16.96 -22.91,22.48l-80.88 80.88c-6.79,6.79 -13.35,13.35 -20.14,20.14 -1.67,1.67 -19.02,19.31 -20.38,20.22 -1.73,-1.16 -130.82,-130.62 -141.06,-140.9 -3.11,-3.12 -7.59,-6.31 -11.85,-8.29 -5.14,-2.39 -10.64,-3.69 -16.17,-3.94l-3.93 0c-8.05,0.36 -15.96,2.95 -22.64,7.67 -3.76,2.66 -7.69,6.6 -10.42,10.36 -4.32,5.97 -7.81,14.96 -7.81,23.2z"/>
                </svg>
            </div>
            `;

            historiesID.appendChild(HistoryContent);

        });

    }


    static RemoveHistoryFromUI(target){

        target.parentElement.remove();
        
        if(HistoryRemoveButton.length === 0) {
            historyContainer.classList.add("none");
            label1.classList.add("searchRadius");
            SearchContainer.classList.add("searchRadius");
        }
        

    }



    static AddHistoryToUI(items) {



                let historyContent = document.createElement("div");
                historyContent.classList.add("history-content");

                historyContent.innerHTML = `
                <div class="history-content-child">
                    <svg class="history-svg"><path class="history-path" d="M9.54 0c2.63,0 5.02,1.07 6.75,2.79 1.73,1.73 2.79,4.11 2.79,6.75 0,2.63 -1.07,5.01 -2.79,6.74 -1.73,1.73 -4.12,2.8 -6.75,2.8 -2.63,0 -5.02,-1.07 -6.75,-2.79 -1.72,-1.72 -2.79,-4.11 -2.79,-6.75 0,-2.63 1.07,-5.02 2.79,-6.74 1.73,-1.73 4.12,-2.8 6.75,-2.8zm-1.13 9.79c0,0.27 0.13,0.51 0.36,0.63l3.19 2.13c0.37,0.27 0.86,0.17 1.08,-0.19 0.27,-0.37 0.17,-0.86 -0.19,-1.11l-2.83 -1.89 0 -4.09c0,-0.44 -0.36,-0.8 -0.83,-0.8 -0.41,0 -0.8,0.36 -0.8,0.8l0.03 4.52zm6.42 -5.54c-1.35,-1.35 -3.22,-2.19 -5.29,-2.19 -2.07,0 -3.94,0.84 -5.29,2.19 -1.35,1.35 -2.19,3.22 -2.19,5.29 0,2.07 0.84,3.94 2.19,5.29 1.35,1.35 3.22,2.19 5.29,2.19 2.07,0 3.94,-0.84 5.29,-2.19 1.35,-1.35 2.19,-3.22 2.19,-5.29 0,-2.07 -0.84,-3.94 -2.19,-5.29z"/></svg>
                    <span>${items}</span>
                </div>
                <div class="history-icon">
                    <svg class="xmark-svg"><path class="xmark-path" d="M-0 41.24l0 0.37c0.02,7.73 0.8,12.56 3.94,19.35 2.01,4.34 5.12,8.69 8.29,11.85 10.27,10.23 139.74,139.32 140.91,141.06 -1.16,1.73 -130.63,130.81 -140.91,141.06 -3.27,3.26 -6.21,7.38 -8.29,11.85 -2.36,5.1 -3.66,10.48 -3.94,15.85l0 4.45c0.53,10.33 4.79,20.34 12.39,27.94 7.23,7.23 17.36,12.71 28.21,12.71l0.36 0c7.6,-0.01 13.19,-0.53 20,-3.94 4.72,-2.37 8.33,-4.75 11.85,-8.29l60.42 -60.42c0.38,-0.38 78.94,-79.34 80.64,-80.48 1.71,1.15 80.05,79.88 80.48,80.32l60.42 60.42c3.76,3.76 6.79,5.82 11.8,8.34 4.85,2.45 10.33,3.77 15.9,4.05l4.47 0c7.07,-0.35 14.06,-2.36 19.89,-5.88 12.65,-7.64 20.19,-21.01 20.91,-34.88l0 -4.41c-0.26,-4.96 -1.41,-9.9 -3.52,-14.61 -1.84,-4.1 -3.05,-6 -5.61,-9.42 -0.84,-1.11 -1.46,-1.7 -2.33,-2.78 -2.08,-2.6 -60.43,-60.49 -60.71,-60.77 -0.38,-0.38 -79.82,-79.42 -80.96,-81.12 1.2,-1.8 130.45,-130.61 140.91,-141.06 7.64,-7.63 11.72,-17.52 12.23,-27.61l0 -4.39c-0.53,-10.28 -4.76,-20.47 -12.71,-28.43 -15.44,-15.47 -39.75,-16.42 -56.85,-2.98 -5.45,4.29 -17.39,16.96 -22.91,22.48l-80.88 80.88c-6.79,6.79 -13.35,13.35 -20.14,20.14 -1.67,1.67 -19.02,19.31 -20.38,20.22 -1.73,-1.16 -130.82,-130.62 -141.06,-140.9 -3.11,-3.12 -7.59,-6.31 -11.85,-8.29 -5.14,-2.39 -10.64,-3.69 -16.17,-3.94l-3.93 0c-8.05,0.36 -15.96,2.95 -22.64,7.67 -3.76,2.66 -7.69,6.6 -10.42,10.36 -4.32,5.97 -7.81,14.96 -7.81,23.2z"/>
                    </svg>
                </div>
                `;
    
                historiesID.insertBefore(historyContent, historiesID.firstElementChild);
        
                if(HistoryRemoveButton.length > 10) {
                historiesID.lastElementChild.remove();
                }
    

    }



}