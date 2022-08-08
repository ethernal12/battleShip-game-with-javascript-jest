exports.coordinateDeleted = (shipCoordinates, damagedCoordinate) => {
    let flag = false;
    for (let index = 0; index < shipCoordinates.length; index++) {
        const location = shipCoordinates[index];
        console.log(location.toString(), 'locations in for');
        if (location.toString() === damagedCoordinate.toString()) {
            console.log('shouldnt find the cooridinate as it is deleted in fire function!');
            flag = true;
            break;
        }

    }
    return flag;
}