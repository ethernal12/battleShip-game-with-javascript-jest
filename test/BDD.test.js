const { checkForShips, damageShip, fire } = require('../game_logic/ships_methods');
const {coordinateDeleted } = require('../utils');
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

        expect(checkForShips(player, [0, 0]).locations[0]).toEqual([0, 0]);
    });
    test('should handle a ships located at more than one location ', () => {
        player = {
            ships: [
                { locations: [[0, 0], [0, 1]] }

            ]
        };

        expect(checkForShips(player, [0, 0])).toEqual(player.ships[0]);
        expect(checkForShips(player, [0, 1])).toEqual(player.ships[0]);
        expect(checkForShips(player, [9, 9])).toBe(false);
    });
    test('should check for multiple ships locations ', () => {
        player = {
            ships: [
                { locations: [[0, 0], [0, 1]] },
                { locations: [[0, 4], [0, 5], [0, 6]] }

            ]
        };

        expect(checkForShips(player, [0, 0])).toEqual(player.ships[0]);
        expect(checkForShips(player, [0, 1])).toEqual(player.ships[0]);
        expect(checkForShips(player, [0, 4])).toEqual(player.ships[1]);
        expect(checkForShips(player, [0, 5])).toEqual(player.ships[1]);
        expect(checkForShips(player, [0, 6])).toEqual(player.ships[1]);
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

        damageShip(ship, [0, 0])

        expect(ship.damage).not.toEqual([]);
        expect(ship.damage[0]).toEqual([0, 0]);
    })

})
describe('fire', () => {
    test('should record damage to a given players ship at a given coordinate', () => {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]],
                    damage: []
                }, // ship 1
                {
                    locations: [[0, 4], [0, 5], [0, 6]],
                    damage: []
                },// ship 2
                {
                    locations: [[0, 7], [0, 8], [0, 9]],
                    damage: []
                },// ship 3

            ],

        };
        const ship = fire(player, [0, 1]);
        const ship2 = fire(player, [0, 4]);
        const ship3 = fire(player, [0, 8]);
        expect(ship.damage[0]).toEqual(1);
        expect(ship2.damage[0]).toEqual(1);
        expect(ship3.damage[0]).toEqual(1);

    });
    test('should NOT record damage if there is no ship at the coordinates', () => {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]],
                    damage: []
                }, // ship 1
                {
                    locations: [[0, 4], [0, 5], [0, 6]],
                    damage: []
                },// ship 2
                {
                    locations: [[0, 7], [0, 8], [0, 9]],
                    damage: []
                },// ship 3

            ],

        };
        const ship = fire(player, [0, 3]);
        expect(ship).toBe(false);

    });
    test('should remove the ships damaged coordinate ', () => {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]],
                    damage: []
                }, // ship 1
                {
                    locations: [[0, 4], [0, 5], [0, 6]],
                    damage: []
                },// ship 2
                {
                    locations: [[0, 7], [0, 8], [0, 9]],
                    damage: []
                },// ship 3

            ],

        };
        const ship1 = fire(player, [0, 1]);
        const ship2 = fire(player, [0, 4]);
        const ship3 = fire(player, [0, 8]);

        let flag1 = coordinateDeleted(ship1.locations, [0, 1]);
        let flag2 = coordinateDeleted(ship2.locations, [0, 4]);
        let flag3 = coordinateDeleted(ship3.locations, [0, 8]);
  
        expect(flag1).toBe(false);
        expect(flag2).toBe(false);
        expect(flag3).toBe(false);

    });
})