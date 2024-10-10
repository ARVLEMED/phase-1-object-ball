function gameObject() {
    return {
        homeTeam: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: [
                {
                    PlayerName: "Alan Anderson",
                    Number: 0,
                    Shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 1,
                },
                {
                    PlayerName: "Reggie Evans",
                    Number: 30,
                    Shoe: 14,
                    Points: 12,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 12,
                    Blocks: 12,
                    SlamDunks: 7,
                },
                {
                    PlayerName: "Brook Lopez",
                    Number: 11,
                    Shoe: 17,
                    Points: 17,
                    Rebounds: 19,
                    Assists: 10,
                    Steals: 3,
                    Blocks: 1,
                    SlamDunks: 15,
                },
                {
                    PlayerName: "Mason Plumlee",
                    Number: 1,
                    Shoe: 19,
                    Points: 26,
                    Rebounds: 12,
                    Assists: 6,
                    Steals: 3,
                    Blocks: 8,
                    SlamDunks: 5,
                },
                {
                    PlayerName: "Jason Terry",
                    Number: 31,
                    Shoe: 15,
                    Points: 19,
                    Rebounds: 2,
                    Assists: 2,
                    Steals: 4,
                    Blocks: 11,
                    SlamDunks: 1,
                },
            ],
        },
        awayTeam: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise, Purple",
            players: [
                {
                    PlayerName: "Jeff Adrien",
                    Number: 4,
                    Shoe: 18,
                    Points: 10,
                    Rebounds: 1,
                    Assists: 1,
                    Steals: 2,
                    Blocks: 7,
                    SlamDunks: 2,
                },
                {
                    PlayerName: "Bismak Biyombo",
                    Number: 0,
                    Shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assists: 7,
                    Steals: 7,
                    Blocks: 15,
                    SlamDunks: 10,
                },
                {
                    PlayerName: "DeSagna Diop",
                    Number: 2,
                    Shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 4,
                    Blocks: 5,
                    SlamDunks: 5,
                },
                {
                    PlayerName: "Ben Gordon",
                    Number: 8,
                    Shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assists: 2,
                    Steals: 1,
                    Blocks: 1,
                    SlamDunks: 0,
                },
                {
                    PlayerName: "Brendan Haywood",
                    Number: 33,
                    Shoe: 15,
                    Points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    Blocks: 5,
                    SlamDunks: 12,
                },
            ],
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    
    for (const player of game.homeTeam.players) {
        if (player.PlayerName === playerName) {
            return player.Points;
        }
    }
    
    for (const player of game.awayTeam.players) {
        if (player.PlayerName === playerName) {
            return player.Points;
        }
    }
    return null; 
}

function shoeSize(playerName) {
    const game = gameObject();
    
    for (const player of game.homeTeam.players) {
        if (player.PlayerName === playerName) {
            return player.Shoe;
        }
    }
    
    for (const player of game.awayTeam.players) {
        if (player.PlayerName === playerName) {
            return player.Shoe;
        }
    }
    return null; 
}

function teamColors(teamName) {
    const game = gameObject();
    
    if (game.homeTeam.teamName === teamName) {
        return game.homeTeam.colors;
    }

    if (game.awayTeam.teamName === teamName) {
        return game.awayTeam.colors;
    }
    return null; 
}
function teamNames() {
    const game = gameObject();
    return [game.homeTeam.teamName, game.awayTeam.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    let numbers = [];

    if (game.homeTeam.teamName === teamName) {
        numbers = game.homeTeam.players.map(player => player.Number);
    } else if (game.awayTeam.teamName === teamName) {
        numbers = game.awayTeam.players.map(player => player.Number);
    }

    return numbers; 
}

function playerStats(playerName) {
    const game = gameObject();

    for (const player of game.homeTeam.players) {
        if (player.PlayerName === playerName) {
            return player; 
        }
    }

    for (const player of game.awayTeam.players) {
        if (player.PlayerName === playerName) {
            return player; 
        }
    }

    return null; 
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const player of game.homeTeam.players) {
        if (player.Shoe > largestShoeSize) {
            largestShoeSize = player.Shoe;
            rebounds = player.Rebounds; 
        }
    }

    for (const player of game.awayTeam.players) {
        if (player.Shoe > largestShoeSize) {
            largestShoeSize = player.Shoe;
            rebounds = player.Rebounds; 
        }
    }

    return rebounds; 
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerName = "";

    for (const player of game.homeTeam.players) {
        if (player.Points > maxPoints) {
            maxPoints = player.Points;
            playerName = player.PlayerName;
        }
    }

    for (const player of game.awayTeam.players) {
        if (player.Points > maxPoints) {
            maxPoints = player.Points;
            playerName = player.PlayerName;
        }
    }

    return playerName; 
}

function winningTeam() {
    const game = gameObject();
    const homeTeamPoints = game.homeTeam.players.reduce((sum, player) => sum + player.Points, 0);
    const awayTeamPoints = game.awayTeam.players.reduce((sum, player) => sum + player.Points, 0);

    return homeTeamPoints > awayTeamPoints ? game.homeTeam.teamName : game.awayTeam.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (const player of game.homeTeam.players) {
        if (player.PlayerName.length > longestName.length) {
            longestName = player.PlayerName;
        }
    }

    for (const player of game.awayTeam.players) {
        if (player.PlayerName.length > longestName.length) {
            longestName = player.PlayerName;
        }
    }

    return longestName; 
}

function doesLongNameStealATon() {
    const game = gameObject();
    
    let longestNamePlayer = "";
    let longestNameSteals = 0;

    for (const player of game.homeTeam.players) {
        if (player.PlayerName.length > longestNamePlayer.length) {
            longestNamePlayer = player.PlayerName;
            longestNameSteals = player.Steals;
        }
    }

    for (const player of game.awayTeam.players) {
        if (player.PlayerName.length > longestNamePlayer.length) {
            longestNamePlayer = player.PlayerName;
            longestNameSteals = player.Steals;
        }
    }

    let maxSteals = 0;

    for (const player of game.homeTeam.players) {
        if (player.Steals > maxSteals) {
            maxSteals = player.Steals;
        }
    }

    for (const player of game.awayTeam.players) {
        if (player.Steals > maxSteals) {
            maxSteals = player.Steals;
        }
    }

    return longestNameSteals === maxSteals;
}

