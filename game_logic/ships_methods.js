exports.checkForShips = (player, coordinates) => {
    let shipPresent, ship;
    for (let index = 0; index < player.ships.length; index++) {
        ship = player.ships[index];

        shipPresent = ship.locations.filter((actualCoordinate) => {
            return ((actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]));
        })[0];

        if (shipPresent) {
            return true;
        };

    }
    return false;
}

exports.damageShip = (ship, coordinates) => {

    ship.damage.push(coordinates);

    return ship.damage;
}