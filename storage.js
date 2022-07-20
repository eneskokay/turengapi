class Storage{

    static getHistoriesFromStorage() {
        let histories;
        if(localStorage.getItem('histories') === null) {
            histories = [];
        }
        else {
            histories = JSON.parse(localStorage.getItem('histories'));
        }
        return histories;
    }


    static AddHistoriesToStorage(word) {

        let histories = this.getHistoriesFromStorage();

        if (histories.indexOf(word) > -1 === false) {

            histories.unshift(word);

            if(histories.length > 10) {
                histories.splice(histories.length-1,1);
            }
            
            localStorage.setItem('histories', JSON.stringify(histories));
            return true;
        }

    }


    
    static RemoveFromStorage(order) {

        let histories = this.getHistoriesFromStorage();

        histories.splice(order,1);
        localStorage.setItem('histories', JSON.stringify(histories));

    }

}