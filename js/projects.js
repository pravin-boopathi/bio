// Your JavaScript file
function createFeatureList(features) {
    return features.map(feature => `<p><span class="feature-list">${feature.icon} ${feature.text}</span></p>`).join('');
}

function applyDarkModeStyles() {
    const prFeatures = document.querySelectorAll('.pr-Feature');
    const featureLists = document.querySelectorAll('.feature-list');

    // prFeatures.forEach(feature => feature.style.color = 'greenyellow');
    featureLists.forEach(list => list.style.color = 'gray');
}

function createProjectTemplate(imgsrc, imageSrc, title, description, features, darkMode) {
    const container = document.getElementById("projectContainer");

    const projectTemplate = `
        <div class="pr-1">
            <a href="${imgsrc}" target="_blank" class="pr-img-container">
                <img src="${imageSrc}" alt="" class="pr-img">
                <div class="view-site-text">View Site</div>
            </a>
            <div class="pr-text">
                <h1>${title}</h1>
                <p class="pr-p">${description}</p>
                <p class="pr-Feature">Key Features:</p>
                ${createFeatureList(features)}
            </div>
        </div><hr>
    `;

    container.innerHTML += projectTemplate;

    if (darkMode) {
        applyDarkModeStyles();
    }
}

// Example usage for Fit-Hub project
const featuresArray1 = [
    { icon: '🏋️', text: '<span style="color: darkgray;">Interactive Design:</span> Fit-Hub boasts an interactive and visually appealing design that seamlessly guides users through various fitness resources, programs, and offerings.' },
    { icon: '💪', text: '<span style="color: darkgray;">Comprehensive Fitness Resources:</span> The website is a treasure trove of fitness knowledge, providing users with access to comprehensive workout routines, nutritional tips, and wellness advice.' },
    { icon: '🎨', text: '<span style="color: darkgray;">Visual Appeal:</span> The incorporation of captivating visuals and a user-friendly interface creates an inviting atmosphere, motivating visitors to embark on their fitness journey.' }
];

createProjectTemplate('https://fit-hub-snr.netlify.app/', '/images/Fit-Hub.png', 'Fit-Hub', 'In the realm of digital craftsmanship, one of my significant undertakings has been the creation of Fit-Hub – a dynamic and engaging Fitness Gym website.', featuresArray1, true);


// Listening Hub
// const featuresArray2 = [
//     { icon: '🌐', text: '<span style="color: darkgray;">Global Reach:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//     { icon: '🚀', text: '<span style="color: darkgray;">Fast Performance:</span> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { icon: '🔒', text: '<span style="color: darkgray;">Secure Data:</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
// ];

// createProjectTemplate('/images/Listening-Hub.png', 'Listening Hub', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan gravida mauris et fringilla.', featuresArray2, false);


// Cryptex
const featuresArray3 = [
    { icon: '🌐', text: '<span style="color: darkgray;">Responsive Design:</span> The website is built with a responsive design to ensure a consistent and enjoyable experience across different devices.' },
    { icon: '🚀', text: '<span style="color: darkgray;">Interactive Charts: </span>Visualize cryptocurrency trends and performance through interactive charts and graphs.' },
    { icon: '🔒', text: '<span style="color: darkgray;">Real-Time Data:</span>  Stay informed with real-time cryptocurrency data, including prices, market trends, and other relevant information.' }
];
createProjectTemplate('https://cryptex-pravin.netlify.app/','/images/cryptex.png', 'Cryptex', 'Cryptex is a cutting-edge cryptocurrency frontend design project that I developed using HTML, CSS, and JavaScript. ', featuresArray3, false);


//ZEN - EV 
// const featuresArray4 = [
//     { icon: '🌐', text: '<span style="color: darkgray;">Global Reach:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//     { icon: '🚀', text: '<span style="color: darkgray;">Fast Performance:</span> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { icon: '🔒', text: '<span style="color: darkgray;">Secure Data:</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
// ];
// createProjectTemplate('/images/zen-ev.png', 'ZEN-EV', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan gravida mauris et fringilla.', featuresArray4, false);

// Cinema Dudes
const featuresArray5 = [
    { icon: '🌐', text: '<span style="color: darkgray;">Extensive Movie Library: </span> Explore a vast library of movies spanning various genres, ensuring there is something for every movie lover.' },
    { icon: '🚀', text: '<span style="color: darkgray;">Search and Filter Options:</span> Easily find your favorite movies with robust search and filter functionalities.' },
    { icon: '🔒', text: '<span style="color: darkgray;">User Accounts: </span>Enhance your movie-watching experience with personalized user accounts, allowing you to create playlists, track watch history, and receive recommendations.' }
];
createProjectTemplate('https://cinema-dudes.netlify.app/','/images/CD.png', 'Cinema Dudes', 'Cinema Dudes is an exciting movie streaming site designed to deliver an immersive and convenient cinematic experience to users.', featuresArray5, false);

//Amazon Clone
// const featuresArray6 = [
//     { icon: '🌐', text: '<span style="color: darkgray;">Global Reach:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//     { icon: '🚀', text: '<span style="color: darkgray;">Fast Performance:</span> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { icon: '🔒', text: '<span style="color: darkgray;">Secure Data:</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
// ];
// createProjectTemplate('/images/shopify.png', 'Amazon Clone', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan gravida mauris et fringilla.', featuresArray6, false);

//Tindog
const featuresArray7 = [
    { icon: '🌐', text: '<span style="color: darkgray;">Meet New and Interesting Dogs:</span>Explore a vibrant community of dogs nearby, ready to make new friends, share playdates, and build lasting relationships.' },
    { icon: '🚀', text: '<span style="color: darkgray;">Interactive Profiles: </span> Create unique profiles for your dogs, complete with adorable photos, interests, and preferences.' },
    { icon: '🔒', text: '<span style="color: darkgray;">JavaScript:</span>Implemented interactive features for seamless doggy matchmaking and socializing.' }
];
createProjectTemplate('https://pravin-boopathi.github.io/tindog/','/images/tindog.png', 'TinDog', 'Tindog is not just a dating app; it is a canine connection platform designed to help your furry friends find the true love of their lives. ', featuresArray7, false);
