exports.coordinateDeleted = (ship, damagedCoordinate ) => {
    if(!ship) throw Error('ship parameter not passed to the coordinateDeleted function!');
    if(!damagedCoordinate) throw Error('damagedCoordinate parameter not passed to the coordinateDeleted function!');
    let flag = false;
    for (let index = 0; index < ship.length; index++) {
        const location = ship[index];
        if (location.toString() === damagedCoordinate.toString()) {
            console.log('shouldnt find the cooridinate as it is deleted in fire function!');
            flag = true;
            break;
        }

    }
    return flag;
}