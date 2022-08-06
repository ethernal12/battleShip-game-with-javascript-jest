const { checkForShips, damageShip } = require('../game_logic/ships_methods');

test('should pass initial test', () => {
    expect(true).toBe(true);
})

describe('check for battle ships', () => {

    test('should correctly return no ships at a given players coordinate', () => {
        player = {
            ships: [
                { locations: [[0, 0]] }

            ]
        };

        expect(checkForShips(player, [9, 9])).toBe(false);
    });
    test('should correctly return ships at a given players coordinate', () => {
        player = {
            ships: [
                { locations: [[0, 0]] }

            ]
        };

        expect(checkForShips(player, [0, 0])).toBe(true);
    });
    test('should handle a ships located at more than one location ', () => {
        player = {
            ships: [
                { locations: [[0, 0], [0, 1]] }

            ]
        };

        expect(checkForShips(player, [0, 0])).toBe(true);
        expect(checkForShips(player, [0, 1])).toBe(true);
        expect(checkForShips(player, [9, 9])).toBe(false);
    });
    test('should check for multiple shipss locations ', () => {
        player = {
            ships: [
                { locations: [[0, 0], [0, 1]] },
                { locations: [[0, 4], [0, 5], [0, 6]] }

            ]
        };

        expect(checkForShips(player, [0, 0])).toBe(true);
        expect(checkForShips(player, [0, 1])).toBe(true);
        expect(checkForShips(player, [0, 4])).toBe(true);
        expect(checkForShips(player, [0, 5])).toBe(true);
        expect(checkForShips(player, [0, 6])).toBe(true);
        expect(checkForShips(player, [9, 9])).toBe(false);
    });
})


describe('check for battle ships', () => {
    test('should expect damage if ship was hit', () => {
        const ship =
        {
            locations: [[0, 0]],
            damage: []
        }


        
        expect(damageShip(ship, ship.locations[0]).length).not.toEqual(0);

    })

})