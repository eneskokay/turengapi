const SearchContainer = document.getElementById("search-container");
const Searchform = document.getElementById("search-form");
const SearchInput = document.getElementById("search-input");
const label1 = document.getElementById("label1");
const HistoryRemoveButton = document.getElementsByClassName("history-icon");
let HistoryContent = document.getElementsByClassName("history-content");

eventListeners();

function eventListeners() {
document.addEventListener('click', function(event) {
   if (Storage.getHistoriesFromStorage().length > 0) {
     let clicked = SearchContainer.contains(event.target);
     
     if(clicked) {
        historyContainer.classList.remove("none");
        SearchContainer.classList.remove("searchRadius");
        label1.classList.remove("searchRadius");
     }
     else {
        historyContainer.classList.add("none");
        label1.classList.add("searchRadius");
        SearchContainer.classList.add("searchRadius");
     }
   }
});

}
historiesID.removeChild(historiesID.firstChild);


UI.LoadAllHistories(Storage.getHistoriesFromStorage());

function clickOnHistories(removed){

document.addEventListener("click", function(event){

let HistoryContentChild = document.getElementsByClassName("history-content-child");

let clicked = false;
for(let l = 0; l<HistoryContentChild.length; l++){
   if(HistoryContentChild[l].contains(event.target)){
      clicked = true;
   }
}

   if(historiesID.contains(event.target) === true || clicked === true){
   for(let i = 0; i<HistoryContent.length; i++) {
      if((event.target === HistoryContent[i]) || (HistoryContent[i].contains(event.target))){
          Storage.RemoveFromStorage(i);
          start(HistoryContent[i].textContent.trim(),false);
          Storage.AddHistoriesToStorage(HistoryContent[i].textContent.trim());
          SearchInput.value = HistoryContent[i].textContent.trim();
          historiesID.insertBefore(HistoryContent[i], historiesID.firstElementChild);
          
          Removing();
     }
    }
  }

  
});

}

clickOnHistories();


let HistoryArray = [];

Removing();
function Removing() {
   HistoryArray = Array.from(HistoryRemoveButton);
   const StaticRemoveButtons = Array.from(HistoryRemoveButton);
   
   for(let i = 0; i<StaticRemoveButtons.length; i++) {
      StaticRemoveButtons[i].addEventListener("click", function(e){
         let l = 0;
         while(l < HistoryArray.length){
            if(HistoryArray[l] === StaticRemoveButtons[i]) {
               HistoryArray.splice(l,1);
               UI.RemoveHistoryFromUI(e.currentTarget);
               Storage.RemoveFromStorage(l);
            }
            else {
               l++;
            }
         }
         e.stopPropagation();
      });
   }
}

Searchform.addEventListener("submit", create.bind(this));


function create(event){

   let searchword = SearchInput.value.trim();

   start(searchword,true);

event.preventDefault();

}



function start(searchword,FromHistoryContainer){

   if(searchword !== "") {
      let data;
      Fetch.GetFromDataBase(searchword)

      .then((result)=>{

         let parser = new DOMParser();
         let doc = parser.parseFromString(result, 'text/html');
         
         let table = doc.querySelector("#englishResultsTable")

         if (table !== null){
            let ResultObject = {meanings_en:[],meanings_tr:[]};
            let en = table.querySelectorAll("td.en a");
            let tr = table.querySelectorAll("td.tr a");
            let language = table.querySelector("tr th.c2");
            
            ResultObject.language = language.textContent[0].toLowerCase();
            

            tr.forEach(function(items){
               ResultObject.meanings_tr.push(items.textContent.trim());
            });
            
            en.forEach(function(items){
               ResultObject.meanings_en.push(items.textContent.trim());
            });
            
            UI.AddMeansToUI(ResultObject);

            if(FromHistoryContainer === true){
               if(Storage.AddHistoriesToStorage(searchword.toLowerCase())){
               
                  UI.AddHistoryToUI(searchword.toLowerCase());
                  Removing();
                  
               }
            }
         }
         else{
            UI.ErrorMessages();
         }
      });
   }
}
