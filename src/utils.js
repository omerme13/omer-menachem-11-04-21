export class Utils {
    // convertFToC = f => Math.round(((f - 32) * 5/9) * 10) / 10;
    convertFToC = f => Math.round((f - 32) * 5/9);

    convertDayToString = (day) => {
        switch(day) {
            case 0: 
                return 'Sunday';
            case 1: 
                return 'Monday';    
            case 2: 
                return 'Tuesday';
            case 3: 
                return 'Wednesday';  
            case 4: 
                return 'Thursday';
            case 5: 
                return 'Friday'; 
            default: 
                return 'Saturday'                 
        }
    }
}

export const utils = new Utils();