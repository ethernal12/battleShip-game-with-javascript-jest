exports.checkForShips = (player, coordinates) => {
    if(!coordinates) throw Error('Coordinates parameter not passed to the checkForShips function!');
    if(!player) throw Error('Player parameter not passed to the checkForShips function!');
    let shipPresent, ship;
    for (let index = 0; index < player.ships.length; index++) {
        ship = player.ships[index];
        shipPresent = ship.locations.filter((actualCoordinate, i) => {
            return ((actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]));
        })[0];
        if (shipPresent) {
            return ship;
        };
    }
    return false;
}

exports.fire = (player, coordinates) => {
    if(!coordinates) throw Error('Coordinates parameter not passed to the fire function!');
    if(!player) throw Error('Player parameter not passed to the fire function!');
    const ship = this.checkForShips(player, coordinates);
    if (ship != false) {
        ship.damage.push(coordinates); // add damaged coordinated to damage array
        for (let index = 0; index < ship.locations.length; index++) {
            const location = ship.locations[index];
            if (location.toString() === coordinates.toString()) {
                ship.locations.splice(index, 1); // remove the damaged coordinates from array
                break;
            }
        }
        return ship;
    } else {
        return false;
    }
}