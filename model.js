//Model
const menuButtonAndSearchBar = /*HTML*/`
    <div class="dropdown">
    <button class="dropbtn">Menu</button>
    <div class="dropdown-content">
        <button onclick="mainPageView()">Main Page</button>
        <button onclick="profilePageView()">Profile Page</button>
        <br>
        <button onclick="userLogout()">Logout</button>
        <!-- Add more buttons here if needed -->
    </div>
    </div>

    <!--Search for title function -->
    <div class="searchDiv">
    <input type="text" id="searchInput" placeholder="Search for Movie Titles...">
    <button class="searchButton" onclick="performSearch()">Search</button>
    </div>
`;

const model = {
    app: {
        loggedInUser: [],
        currentPage: 'loginPage',
        cinemaMode: true,
        pages: [
            'loginPage',
            'homePage',
            'profilePage',
            'moviePage',
            'searchPage',
        ],
    },
    inputs: {
        rateNewMovie: null,
        user: {
            id: null, 
            userName: '',
            password: '',
            emailAdress: '',
            favGenre: [],
            favMovies: [],
            myRatedMovies: [],
            aboutMe: '',
            profileImage: '',
        },
        search: '',
        //nice to have filter: [],
    },
    //Data
    data: {
        search: '',
        //nice to have filter: [''],
        users:[
            {
                id: 1,
                userName: 'Martini',
                password: 'shaken',
                emailAdress: 'martini@getacademy.no',
                favGenre: ['Adventure','Fantasy',],
                favMovies: ['The Dukes of Hazzard','The Grudge (2004)',],
                myRatedMovies: ['The Dukes of Hazzard','The Grudge (2004)',],
                aboutMe: 'Jeg liker Martini!',     
                profileImage: './img/profileImages/emptyUser.jpg',

            },
            {
                id: 2, 
                userName: '',
                password: '',
                emailAdress: 'dummmyBruker@hotmail.com',
                favGenre: ['Action', 'Fantasy'],
                favMovies: [],
                myRatedMovies: [],
                aboutMe: 'Im a dummy user',
                profileImage: './img/profileImages/emptyUser.jpg',
            },
            {
                id: 3, 
                userName: 'Ellie',
                password: '1234',
                emailAdress: 'elliemarie@getacademy.no',
                favGenre: ['Fantasy', 'Adventure', 'Horror'],
                favMovies: [],
                myRatedMovies: [],
                aboutMe: 'Part of the development team! ',
                profileImage: './img/profileImages/emptyUser.jpg',
            },
            {
                id: 4, 
                userName: 'Espen',
                password: '1234',
                emailAdress: 'espenh@getacademy.no',
                favGenre: [],
                favMovies: [],
                myRatedMovies: [],
                aboutMe: 'Part of the development team!',
                profileImage: './img/profileImages/emptyUser.jpg',
            },
            {
                id: 5, 
                userName: 'Ellen',
                password: '1234',
                emailAdress: 'ellenbirgittea@getacademy.no',
                favGenre: [],
                favMovies: [],
                myRatedMovies: [],
                aboutMe: 'Part of the development team!',
                profileImage: './img/profileImages/emptyUser.jpg',
            },
            {
                id: 6, 
                userName: 'Markus',
                password: '1234',
                emailAdress: 'markus@getacademy.no',
                favGenre: [],
                favMovies: [],
                myRatedMovies: [],
                aboutMe: 'Part of the development team!',
                profileImage: './img/profileImages/emptyUser.jpg',
            },
            {
                id: 7, 
                userName: 'Tor',
                password: '1234',
                emailAdress: 'toralver@getacademy.no',
                favGenre: [],
                favMovies: [],
                myRatedMovies: [],
                aboutMe: 'Part of the development team!',
                profileImage: './img/profileImages/emptyUser.jpg',
            },
        ], 
        genre: [],

        highestRated: [
          'The Dukes of Hazzard', 
          'The Grudge (2004)',
        ],       
        movies: [
            // {
            //     id: 1,
            //     title: '',
            //     releaseDate: '',
            //     cover: '',
            //     duration: '',
            //     description: "",
            //     overallRating: '',
            //     personalRating: '',
            //     genre: [''],
            //     directors: [''],
            //     staringActors: [''],
            // },
            {
                id: 2,
                title: 'The Dukes of hazzard',
                releaseDate: '2005',
                cover: './img/coverImages/dukesOfHazzard.jpg',
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
                cover: './img/coverImages/theGrudge.jpg',
                duration: '1h and 31m',
                description: "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.",
                overallRating: '590',
                personalRating: '832',
                genre: ['Horror', 'Mystery', 'Thriller'],
                directors: ['Takashi Shimizu'],
                staringActors: ['Sarah Michelle Gellar', 'Jason Behr', 'Clea DuVall'],
            },
            {
                id: 4,
                title: 'Titanic',
                releaseDate: '1997',
                cover: './img/coverImages/titanic.jpg',
                duration: '3h and 14m',
                description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                overallRating: '790',
                personalRating: '',
                genre: ['Drama', 'Romance'],
                directors: ['James Cameron'],
                staringActors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
            },
            {
                id: 5,
                title: 'Jurassic Park',
                releaseDate: '1993',
                cover: './img/coverImages/jurassicPark.jpg',
                duration: '2h and 7m',
                description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
                overallRating: '820',
                personalRating: '',
                genre: ['Action', 'Adventure', 'Sci-Fi'],
                directors: ['Steven SpielBerg'],
                staringActors: ['Sam Niell', 'Laura Dern', 'Jeff Goldblum'],
            },
            {
                id: 6,
                title: 'Forrest Gump',
                releaseDate: '1994',
                cover: './img/coverImages/forrestGump.jpg',
                duration: '2h and 22m',
                description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
                overallRating: '882',
                personalRating: 'You have not rated this movie yet',
                genre: ['Drama', 'Romance'],
                directors: ['Robert Zemeckis'],
                staringActors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
            },
        ],
    },
}