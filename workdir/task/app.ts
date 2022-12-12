const taskOne = (passengers:number, shuffle:number)=>{
    let count: number = 0;
    const boarded: object [] = [];
    const reservation: object [] = [];
    let locations: string [] = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"];

    let n: number = passengers/50;
    let diff: number;
    let startIndexBoarded: number;
    let endIndexBoarded: number;

    const boardedListFunction = (startIndexBoarded: number, endIndexBoarded: number) => {
        for (let i = startIndexBoarded; i < endIndexBoarded; i++) {
            boarded.push({
                name: `passenger${i + 1}`,
                location: locations[i%5]
            })
        }
        return boarded
    };

    const reservationListFunction = (startIndexBoarded: number, endIndexBoarded: number) => {
        for (let i = endIndexBoarded; i < passengers; i++) {
            reservation.push({
                name: `passenger${i + 1}`,
                location: locations[i%5]
            })
        }
        return reservation
    };
    

    //'if' block runs if passengers number is equal to or greater than 50. Else, 'else' block runs.
    if (n >= 1) {

        if (Math.floor(n) > shuffle) {

            startIndexBoarded = 50 * (Math.floor(n) - 1)
            startIndexBoarded
            endIndexBoarded = 50 * Math.floor(n);
            endIndexBoarded
            count = endIndexBoarded/50;
            boardedListFunction(startIndexBoarded, endIndexBoarded);
            reservationListFunction(startIndexBoarded, endIndexBoarded);
            
        } else {
            passengers % 50 > 0 ? n = Math.floor(n) : n = n - 1;
            diff = passengers - (50 * n);
            startIndexBoarded = 50 * n;
            endIndexBoarded = startIndexBoarded + (Math.floor(diff/5) * 5);
            count = Math.ceil(endIndexBoarded/50);
            // count
            if (diff % 5 === 0) {

                boardedListFunction(startIndexBoarded, endIndexBoarded);

            } else {
                if (diff > 5) {

                    boardedListFunction(startIndexBoarded, endIndexBoarded);
                    reservationListFunction(startIndexBoarded, endIndexBoarded);

                } else {

                    reservationListFunction(startIndexBoarded, endIndexBoarded);
                }

            }
        }

    } else {
        
        diff = passengers;
        startIndexBoarded = 0;
        endIndexBoarded = Math.floor(diff/5) * 5;
        count = Math.ceil(endIndexBoarded/diff);

       if (diff % 5 === 0) {
            boardedListFunction(startIndexBoarded, endIndexBoarded);

        } else {
            if (diff > 5) {
                boardedListFunction(startIndexBoarded, endIndexBoarded);
                reservationListFunction(startIndexBoarded, endIndexBoarded);
            } else {
                reservationListFunction(startIndexBoarded, endIndexBoarded);
            }
        }
    }

    return {
        boarded,
        reservation,
        count
    } 
}

taskOne(120, 3)

export default taskOne;