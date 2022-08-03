

function timeConverter(time){

    // if(time === 88){
    //     // not working
    //     console.log('saillllllllllll to distant SHORES')
    //     throw Error('Please send string')
        
        
    // }
 
  
    if(typeof time !== 'string'){
        console.log('my shitty err')
        return 'Please send string'
    }

    let timeArray = time.split('')
    if(timeArray[2] !== ':' || timeArray.length !== 5 || time.indexOf(' ') != -1){
        return 'please put it in correct format'
    }

    console.log(time.indexOf(' '), '????????')
    console.log(timeArray)


    let t = {
        '00:00':'midnight'
    }

    let t1 = time[0]
    let t2 = time[1]
    let t3 = time[3]
    let t4 = time[4]

    //first 2 numbers
    let first2 = Number(t1 + t2) 
    let last2 = Number(t3+t4)


    if(first2 < 0 || first2 > 24  ){
        return 'input out of range in first2'
    }
    if(last2 < 0 || last2 >= 60){
        return 'input out of range in last2'
    }
   
     //am & pm
     let amPM;
     if(Number(t1+t2) >= 12){
         amPM = 'pm'
     }else{
         amPM = 'am'
         
     }
    
 
    //number names
    let nummy = { 0o00:'twelve', 1: 'one', 2: 'two', 3: 'three', 4: 'four',5: 'five',6: 'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11: 'eleven',
        12:'tweleve', 13:'one', 14:'two', 15:'three', 16:'four', 17:'five', 18:'six', 19:'seven', 20:'eight', 21:'nine', 22:'ten',
        23:'eleven'}

    let nummy2 = {1:'ten', 2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty'}

    let nummy3 = {10:'ten', 11: 'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen'}
    
    
    //midnight
    if(first2  == 0 && last2== 0){
        return 'midnight'
    }
    //midday
    if(first2 == 12 && last2 == 0){
        return 'midday'
    }


    // o clock
    for(key in nummy){
        if(first2 == key && last2 == 0){
            
            return (`${nummy[key]} o clock`)
        }
    }

    let part1;
    let part2;
    let part3;
    ////////////////////////////////////////
    for(key in nummy){
        if(first2 == key){
            part1 = nummy[key]
        }
    }


        for(key in nummy2){
            if(t3 == key){
                part2 = nummy2[key]
            }
        }

   

    for(key in nummy){
        if(t4 == key){
            part3 = nummy[key]
        }
    }
    //////////////////////////////////////////////


     //checks if teen////////////////////////////////////////////////////////////
     let part4;
     if(last2 == 0){
        for(key in nummy3){
            if(last2 == key){
                part4 = nummy3[key]
                console.log('i cant believe this rans')
                return `${part1} ${part4} ${amPM}`
            }
            
        }
     }
    
     // checks if OH number//////////////////////////////////////////////////////////////////////////////////
     let part5;
    if(t3 == 0){
        console.log(first2)
        part5 = nummy[t4]
        console.log('o number')
        return `${part1} OH ${part5} ${amPM}`
    }
    //checks for time ending with zero as last digit//////////////////////////
    if(t4 == 0){
        for(key in nummy2){
            if(t3 == key){
                console.log('ends with zero as last digit')
                return `${part1} ${nummy2[key]} ${amPM}`
            }
        }
    }

    // returns if last2 r teen
    if(last2 >= 10 && last2 <= 20 ){
        for(key in nummy3){
            if(last2 == key){
                console.log('its teen')
                return `${part1} ${nummy3[key]} ${amPM}`
            }
        }
    }
    

    //........................all others between 20 and 59 returns here
    return `${part1} ${part2}${part3} ${amPM}`
}

console.log(timeConverter('01:50'))

module.exports = timeConverter