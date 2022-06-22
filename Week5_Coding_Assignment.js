class Month{
    constructor(activityName, reason){
        this.activityName = activityName;
        this.reason = reason;
    }
    describe () {
        return `${this.activityName} because of ${this.reason}`
    }
}

class Season {
    constructor(name) {
        this.name = name;
        this.month = [];
    }

    addmonth(month) {
        if (month instanceof Month) {
            this.month.push(month);
        } else {
          throw new Error (` You can only add an instance of Month. Argument is not a month: ${month}`);
        } 
    }

        describe() {
            return `${this.activityName} takes place in ${this.month.length} .`;
    }
}

class Menu {
    constructor() {
        this.season = [];
        this.selectedSeason = null
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.selectSeason();
                    break;
                case '2':
                    this.viewSeason();
                    break;
                case '3':
                    this.deleteSeason();
                    break;
                case '4':
                    this.displaySeasons();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();        
        }
        alert ('See You Later!!');
    }


    showMainMenuOptions(){
        return prompt(`
            0) Exit
            1) Add Favorite Season
            2) View Season
            3) Delete Season
            4) Display All Seasons
        `);
    }

    showSeasonMenuOptions(seasonInfo){
        return prompt(`
            0) back
            1) add favorite month
            2) delete month 
        ---------------------------------
        ${seasonInfo}`)
    }

    displaySeasons (){
        let seasonString = '';
        for (let i =0; i < this.season.length; i++){
            seasonString += i + ') ' + this.season[i].name + '\n';
        }
        alert(seasonString);
    }

    selectSeason (){
        let name = prompt ('Enter your favorite season of the year:');
        this.season.push (new Season(name));
    }
    viewSeason (){
        let index = prompt ('Enter the index of the season you want to view');
        if (index > -1 && index < this.season.length){
            this.selectedSeason = this.season[index];
            let description = 'The Season: ' + this.selectedSeason.name + '\n';

            for (let i = 0; i < this.selectedSeason.month.length; i++){
                description += i + ') ' + this.selectedSeason.month[i].activityName + ' - ' + this.selectedSeason.month[i].reason + '\n'
            }

            let selection = this.showSeasonMenuOptions(description);
            switch (selection){
                case '1':
                    this.createMonth();
                    break;
                case '2':
                    this.deleteMonth(); 
            }  
        } 
    }
    deleteSeason(){
        let index = prompt (`Enter the Season you would like to delete:`);
        if (index > -1 && index < this.season.length){
            this.season.splice(index, 1);
            }
    }
    createMonth(){
        let name = prompt('Enter your favorite month of this season:');
        let reason = prompt ('Enter the reason why you love this season:');
        this.selectedSeason.month.push(new Month(name, reason));
    }
    deleteMonth(){
        let index = prompt('Enter the index of the month you would like to delete:');
        if (index > -1 && index < this.selectedSeason.name.length) {
            this.selectedSeason.month.splice(index, 1);
        }
    }
    
}

let menu = new Menu()
menu.start();