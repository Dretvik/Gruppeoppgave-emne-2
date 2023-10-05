//Model

const model = {
    app: {
        loggedInUser: null,
        currentPage: 'loginPage',
        displayMode: 'cinema',
        language: 'no',
        menu: ['','',],

    },
    inputs: {
        rateNewMovie: '',
        user: {
            userName: '',
            password: '',
            registration: '',
            forgotPassword: '',
        },
        search: '',
        filter: '',
    },
    //Data
    data: {
        user: {
            userName: 'Martin',
            password: 'Passord',
            registration: '',
            forgotPassword: 'Fyll inn e-mail',
            favoritegenre: ['','',],
            favoritefilms: ['','',],

        },
        newlyRated: [
          'The Dukes of Hazzard', 
          'The Grudge (2004)',
        ],
        highestRated: [
          'The Dukes of Hazzard', 
          'The Grudge (2004)',
        ],
        
        movies: [
            {
                id: 1,
                title: '',
                releaseDate: '',
                cover: '',
                duration: '',
                description: "",
                overallRating: '',
                personalRating: '',
                genre: [''],
                directors: [''],
                staringActors: [''],
            },
            {
                id: 2,
                title: 'The Dukes of hazzard',
                releaseDate: '2005',
                cover: '',
                duration: '1h and 44m',
                description: "Cousins Bo, Luke, and Daisy Duke, and their uncle Jesse, egg on the authorities of Hazzard County, Boss Hogg and Sheriff Coltrane",
                overallRating: '510',
                personalRating: '950',
                genre: ['Comedy'],
                directors: ['Jay Chandrasekhar'],
                staringActors: ['Seann William Scott', 'Johnny Knoxville', 'Jessica Simpson'],
            },
            {
                id: 3,
                title: 'The Grudge (2004)',
                releaseDate: '2004',
                cover: '',
                duration: '1h and 31m',
                description: "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.",
                overallRating: '590',
                personalRating: '832',
                genre: ['Horror', 'Mystery', 'Thriller'],
                directors: ['Takashi Shimizu'],
                staringActors: ['Sarah Michelle Gellar', 'Jason Behr', 'Clea DuVall'],
            },
        ],
    },
}