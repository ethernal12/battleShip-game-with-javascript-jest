exports.checkForShips = (player, coordinates) => {
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

exports.damageShip = (ship, coordinates) => {

    ship.damage.push(coordinates);

}

exports.fire = (player, coordinates) => {
    const ship = this.checkForShips(player, coordinates);
    if (ship != false) {
        ship.damage.push(1);
        for (let index = 0; index < ship.locations.length; index++) {
            const location = ship.locations[index];
            console.log(location.toString());
            if (location.toString() === coordinates.toString()) {
                ship.locations.splice(index, 1);
                console.log('found the coordinate and deleting it!');
                break;
            }

        }
        console.log(ship.locations, 'locations');
        return ship;
    } else {
        console.log('no hit');
        return false;
    }



}