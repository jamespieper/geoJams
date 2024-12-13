//Harry
//var clientID = "e1cd2ad3b29c4e6cb654335ea1e65189";
//var clientSecret = "4a2a67018d1c49719a2ad5972dcd4960";

//Harry 2
 var clientID = "9badf784cf3b4e8a90c9c512cc658fd1";
 var clientSecret = "273d94ece31d4fa9b7a02bb40295ee5f";

//Harry 3
// var clientID = "d4cf2e583ccb434fa2438f4bf4d72bcf";
// var clientSecret = "003003ad2bd34a61a73917e1e8b801d5";

//James 1
// var clientID = "13bac178f9df48d98c1d0b5b52e08820";
// var clientSecret = "8958bfe38bb3449f9553417dee186a14";

//James 2
// var clientID = "55ff2b4fb8364d6a9d6677d5d35b9525";
// var clientSecret = "d8b93d2fe59f4e6199f9b89aadd69a66";

//James 3
// var clientID = "2b82d05334904a14b45be5ebd86f4772";
// var clientSecret = "3ffaf08992ed4bf5bd28db2ea930fa6d";

//James 4
// var clientID = "b88517a424134fb6a8078e57c9f240c9";
// var clientSecret = "7cbc0e4ba40444efb642c16021ca5c48";

var playlistURLs = {
    "Australia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJPcfkRz0wJ0",
    "Chile": "https://api.spotify.com/v1/playlists/37i9dQZEVXbL0GavIqMTeb",
    "Canada": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKj23U1GF4IR",
    // "Croatia": "https://api.spotify.com/v1/playlists/7HLFayaacjut2hKJzCzpLb",
    // "Azerbaijan": "https://api.spotify.com/v1/playlists/5DvXFbWw9Zycd5xu9QHonm",
    "Brazil": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMXbN3EUUhlg",
    "Bulgaria": "https://api.spotify.com/v1/playlists/37i9dQZEVXbNfM2w2mq1B8",
    // "Belarus": "https://api.spotify.com/v1/playlists/37i9dQZEVXbIYfjSLbWr4V",
    "Austria": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKNHh6NIXu36",
    "Israel": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJ6IpvItkve3",
    "India": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLZ52XmnySJg",
    "Colombia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbOa2lmxNORXQ",
    "Italy": "https://api.spotify.com/v1/playlists/37i9dQZEVXbIQnj7RRhdSX",
    // "Honduras": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJp9wcIM9Eo5",
    "Greece": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJqdarpmTJDL",
    "Egypt": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLn7RQmT5Xv2",
    "Belgium": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJNSeeHswcKB",
    // "Cyprus": "https://api.spotify.com/v1/playlists/1NNauN205jiVeH2ixReshi",
    // "Haiti": "https://api.spotify.com/v1/playlists/6bBlhdOPVzOAEu2YLUe9BB",
    // "Kazakhstan": "https://api.spotify.com/v1/playlists/37i9dQZEVXbM472oKPNKzS",
    // "Dominican Republic": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKAbrMR8uuf7",
    "Japan": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKXQ4mDTEBXq",
    "Philippines": "https://api.spotify.com/v1/playlists/37i9dQZEVXbNBz9cRCSFkY",
    "Iceland": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKMzVsSGQ49S",
    // "Costa Rica": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMZAjGMynsQX",
    // "Czech Republic": "https://api.spotify.com/v1/playlists/37i9dQZEVXbIP3c3fqVrJY",
    "Saudi Arabia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLrQBcXqUtaC",
    "Nepal": "https://api.spotify.com/v1/playlists/7q2T93GlWovggBYLSXfE4M",
    "Germany": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJiZcmkrIHGU",
    "China": "https://api.spotify.com/v1/playlists/3qwyQJzNAt4BDfnijpKkbi",
    // "Estonia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLesry2Qw2xS",
    "Sri Lanka": "https://api.spotify.com/v1/playlists/5Z6oIyGPbhFFr0qpQd4l2t",
    "South Africa": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMH2jvi6jvjk",
    "France": "https://api.spotify.com/v1/playlists/37i9dQZEVXbIPWwFssbupI",
    // "Panama": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKypXHVwk1f0",
    "Hungary": "https://api.spotify.com/v1/playlists/37i9dQZEVXbNHwMxAkvmF8",
    // "Peru": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJfdy5b0KP7W",
    // "El Salvador": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLxoIml4MYkT",
    "Nigeria": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKY7jLzlJ11V",
    // "Denmark": "https://api.spotify.com/v1/playlists/37i9dQZEVXbL3J0k32lWnN",
    // "Uruguay": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMJJi3wgRbAy",
    // "Morocco": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJU9eQpX8gPT",
    // "Romania": "https://api.spotify.com/v1/playlists/37i9dQZEVXbNZbJ6TZelCq",
    // "Bolivia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJqfMFK4d691",
    // "Lithuania": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMx56Rdq5lwc",
    "Ecuador": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJlM6nvL1nD1",
    "Guatemala": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLy5tBFyQvd4",
    "Pakistan": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJkgIdfsJyTw",
    "Paraguay": "https://api.spotify.com/v1/playlists/37i9dQZEVXbNOUPGj7tW6T",
    "Thailand": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMnz8KIWsvf9",
    // "Cambodia": "https://api.spotify.com/v1/playlists/42E8Ls2T8QK63F6R3k5FOw",
    // "Zimbabwe": "https://api.spotify.com/v1/playlists/6TPHCNm0tvOx6gC0MJ5rZO",
    // "Slovakia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKIVTPX9a2Sb",
    "Luxembourg": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKGcyg6TFGx6",
    "Mexico": "https://api.spotify.com/v1/playlists/37i9dQZEVXbO3qyFxbkOE1",
    "Argentina": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMMy2roB9myp",
    "New Zealand": "https://api.spotify.com/v1/playlists/37i9dQZEVXbM8SIrkERIYl",
    "Turkey": "https://api.spotify.com/v1/playlists/37i9dQZEVXbIVYVBNw9D5K",
    "Sweden": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLoATJ81JYXz",
    "United Kingdom": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLnolsZ8PSNw",
    // "Latvia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJWuzDrTxbKS",
    "Finland": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMxcczTSoGwZ",
    "Suriname": "https://api.spotify.com/v1/playlists/6zFJ2HTXC3d38AgpfcPGph",
    "Ireland": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKM896FDX8L1",
    "USA": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp",
    "Norway": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJvfa0Yxg7E7",
    "Portugal": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKyJS56d1pgi",
    "Vietnam": "https://api.spotify.com/v1/playlists/37i9dQZEVXbLdGSmz6xilI",
    "Spain": "https://api.spotify.com/v1/playlists/37i9dQZEVXbNFJfN1Vw8d9",
    "Mongolia": "https://api.spotify.com/v1/playlists/2mZLDHPrl2nQRltFNBxGJR",
    "Switzerland": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJiyhoAPEfMK",
    // "Indonesia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbObFQZ3JLcXt",
    "Ghana": "https://api.spotify.com/v1/playlists/1gZujlcZuMxULOqXNmfzMZ",
    // "Poland": "https://api.spotify.com/v1/playlists/37i9dQZEVXbN6itCcaL3Tt",
    "Russia": "https://api.spotify.com/v1/playlists/6qv7CRaZr9nJaamM8Xtrv6",
    // "Netherlands": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKCF6dqVpDkS",
    // "Malaysia": "https://api.spotify.com/v1/playlists/37i9dQZEVXbJlfUljuZExa",
    "Singapore": "https://api.spotify.com/v1/playlists/37i9dQZEVXbK4gjvS1FjPY",
    // "Nicaragua": "https://api.spotify.com/v1/playlists/37i9dQZEVXbISk8kxnzfCq",
    "Ukraine": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKkidEfWYRuD"
};


let countrySongData = {};
let validCountries = [];
let _token;
let mapColoration = "avg_energy";

var width = 900,
    height = 600;

var svg = d3.select("#map-area").append("svg")
    .attr("width", width)
    .attr("height", height);

var energySvg = d3.select("#energy-graphic").append("svg")
    .attr("width", 300)
    .attr("height", 60);

var danceabilitySvg = d3.select("#danceability-graphic").append("svg")
    .attr("width", 300)
    .attr("height", 60);

var instrumentalnessSvg = d3.select("#instrumentalness-graphic").append("svg")
    .attr("width", 300)
    .attr("height", 60);

var legend = d3.select("#legend").classed("content", true);
var legendHeight = 150;

//creates svg elements within the div
var legendSvg = legend.append("svg")
    .attr("width", self.width)
    .attr("height", 150);

var projection = d3.geoMercator().translate([width / 2, height / 2 + 70]).scale([160]);
var path = d3.geoPath().projection(projection);
var countryCodes;

// Retrieves a token for the Spotify API
const _getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}

// Searches for a playlist and return the top result
const _searchPlaylist = async (token, country) => {
    const result = await fetch("https://api.spotify.com/v1/search?q=Top+50+-+" + country.replace(" ", "+") + "&type=playlist&limit=1", {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });

    const data = await result.json();
    return data.playlists.items[0];
}

// Returns a playlist given the url
const _getPlaylist = async (token, url) => {
    const result = await fetch(url, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });

    const data = await result.json();
    return data;
}

// Takes token and string of song ids (separated by commas) and return an array of the song's audio features
const _getSongFeatures = async (token, ids) => {
    const result = await fetch("https://api.spotify.com/v1/audio-features?ids=" + ids, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });

    const data = await result.json();
    return data.audio_features;
}

// Displays the summary statistics on the left sidebar when a country is clicked
const displayCountrySummary = (countryName) => {
    document.getElementById("tempo-graphic").innerHTML = "<h3>" + countrySongData[countryName].song_statistics.avg_tempo.toFixed(3) + " BPM" + "</h3>";
    document.getElementById("loudness-graphic").innerHTML = "<h3>" + countrySongData[countryName].song_statistics.avg_loudness.toFixed(3) + " dB" + "</h3>";

    // Update the dial charts
    updateDialChart(danceabilitySvg, countrySongData[countryName].song_statistics.avg_danceability.toFixed(3));
    updateDialChart(energySvg, countrySongData[countryName].song_statistics.avg_energy.toFixed(3));
    updateDialChart(instrumentalnessSvg, countrySongData[countryName].song_statistics.avg_instrumentalness.toFixed(3));

    // Update other elements
    document.getElementById("left-sidebar-title").innerHTML = countryName;
}

function showPopup(statistic) {
    var popupContainer = document.getElementById('popup-container');
    var popupText = document.getElementById('popup-text');

    // Set the text content based on the selected statistic
    switch (statistic) {
        case 'tempo':
            popupText.textContent = "The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.";
            break;
        case 'loudness':
            popupText.textContent = "The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.";
            break;
        case 'energy':
            popupText.textContent = "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. \nPerceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.";
            break;
        case 'danceability':
            popupText.textContent = "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.";
            break;
        case 'instrumentalness':
            popupText.textContent = "Predicts whether a track contains no vocals. \"Ooh\" and \"aah\" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \"vocal\". \nThe closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.";
            break;
    }

    popupContainer.style.display = 'flex';
}

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
}

// Function to update the dial chart
const updateDialChart = (svgGraphic, value) => {
    svgGraphic.selectAll("rect").remove();
    svgGraphic.selectAll("text").remove();
    var gradient = svgGraphic.append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("style", "stop-color: red; stop-opacity: 1");

    gradient.append("stop")
        .attr("offset", "50%")
        .attr("style", "stop-color: yellow; stop-opacity: 1");

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("style", "stop-color: green; stop-opacity: 1");

    svgGraphic.append("rect")
        .attr("width", 250)
        .attr("height", 15)
        .attr("fill", "url(#gradient)")  // Reference the gradient here
        .attr("stroke", "white")
        .attr("stroke-width", "2px")
        .attr("x", 0)
        .attr("y", 25);

    svgGraphic.append("rect")
        .attr("width", 5)
        .attr("height", 23)
        .attr("fill", "black")
        .attr("stroke", "white")
        .attr("stroke-width", "1px")
        .attr("x", value * 250)
        .attr("y", 21);

    svgGraphic.append("rect")
        .attr("width", 1)
        .attr("height", 23)
        .attr("stroke", "white")
        .attr("stroke-width", "1px")
        .attr("x", 0)
        .attr("y", 21);

    svgGraphic.append("rect")
        .attr("width", 1)
        .attr("height", 23)
        .attr("fill", "white")
        .attr("stroke", "white")
        .attr("stroke-width", "1px")
        .attr("x", 250)
        .attr("y", 21);

    svgGraphic.append("text")
        .html("0")
        .attr("x", 0)
        .attr("y", 60)
        .attr("fill", "white");

    svgGraphic.append("text")
        .html("1.0")
        .attr("x", 235)
        .attr("y", 60)
        .attr("fill", "white");

    svgGraphic.append("text")
        .html(value)
        .attr("x", value * 250)
        .attr("y", 13)
        .attr("fill", "white");
};

// Renders map's tooltip
tooltip_render = function (tooltip_data) {
    var text = "<div id=\"tooltip\"><h3>" + tooltip_data.country + "</h3>";
    text += "<h4>Trending Songs</h4>"
    text += "<p><b>1)</b> " + tooltip_data.first + "</p>"
    text += "<p><b>2)</b> " + tooltip_data.second + "</p>"
    text += "<p><b>3)</b> " + tooltip_data.third + "</p>"
    return text;
}


// renders the 'Country Comparison' sidebar on the right
function displayCountryComparison() {

    d3.csv("data/countries.csv").then((countries) => {
        countries.columns.forEach((country) => {
            validCountries.push(country);
        });

        // create a select dropdown for each of the 2 countries to compare
        let select1 = document.createElement('select');
        select1.id = "select1"

        let select2 = document.createElement('select');
        select2.id = "select2"


        // iterate through the countries and create a dropdown option for each of them
        //help from 
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add
        for (let i = 0; i < validCountries.length; i++) {




            let opt = validCountries[i];

            if (playlistURLs.hasOwnProperty(opt)) {
                let element = document.createElement("option");
                let element2 = document.createElement('option');

                element.text = opt;
                element.value = opt;

                element2.text = opt;
                element2.value = opt;

                select1.appendChild(element);
                select2.appendChild(element2);
            }



        }


        // add an onchange listener to update the visualizations whenever a new country is selected
        select1.onchange = () => {
            changeCountry(countrySongData[select1.value], "option1");
        }

        select2.onchange = () => {
            changeCountry(countrySongData[select2.value], "option2");
        }

        // append these 'select' elements to their respective 'span' parents
        document.getElementById('country1').appendChild(select1);
        document.getElementById('country2').appendChild(select2);

    });

}


// Call country comparison tool
displayCountryComparison();

// arrays of size 2 to hold data for the bar charts and lists
let durationData = [];
let popularityData = [];
let artistData = [];


// handles the data manipulation and parsing for a selected country using its Top 50 playlist
function changeCountry(countryPlaylist, option) {

    // array of songs from the playlist
    let songs = countryPlaylist.tracks.items;

    // keeps track of aggregate data for later average computations
    let totalSongDuration = 0;
    let totalSongPopularity = 0;
    let artistFrequency = {};


    // iterate through each song and sum up data
    for (let i = 0; i < songs.length; i++) {

        let duration = songs[i].track.duration_ms;
        totalSongDuration += duration;

        let popularity = songs[i].track.popularity;
        totalSongPopularity += popularity;


        let artists = songs[i].track.artists;


        // some songs have more than one artist, so we iterate through each
        // artist and store their frequency in a map
        for (let i = 0; i < artists.length; i++) {

            let artist = artists[i].name;

            // if the artist is already in the map, just update their frequency
            if (artistFrequency.hasOwnProperty(artist)) {
                artistFrequency[artist] += 1;
            }
            // otherwise put them in the array/map
            else {
                artistFrequency[artist] = 1;
            }

        }


    }


    // sort the artists in descending order by frequency
    let sortedArtists = Object.keys(artistFrequency).sort((a, b) => {

        return artistFrequency[b] - artistFrequency[a];
    });

    // that way we can just grab the first 3
    let top3artists = sortedArtists.slice(0, 3);

    // get averages
    let averageDuration = Math.round(totalSongDuration / 50000); // converts ms to s as well
    let averagePopularity = Math.round(totalSongPopularity / 50); // popularity is from 1 - 100


    // if the first option was changed, then we adjust the first data
    // entry according to the new countries data
    if (option === "option1") {
        durationData[0] = averageDuration;
        popularityData[0] = averagePopularity;
        artistData[0] = top3artists;
    }
    // and we handle the second option changing here
    else {
        durationData[1] = averageDuration;
        popularityData[1] = averagePopularity;
        artistData[1] = top3artists;
    }

    // call visualization function
    displayCountryComparisonData(averageDuration, averagePopularity, top3artists);


}


// define our svgs and their titles, as we don't want to have to re-render
// each entire svg every time the country changes.

let svgLegend = d3.select("#comparison-area").append("svg")
    .attr("width", 400)
    .attr("height", 50)
    .attr("class", "svgLegend")
    .append("g");

svgLegend.append('rect')
    .attr('width', 98)
    .attr('height', 7)
    .attr('x', 30)
    .attr('y', 5)
    .attr('fill', "#64e386");

svgLegend.append('rect')
    .attr('width', 98)
    .attr('height', 7)
    .attr('x', 135)
    .attr('y', 5)
    .attr('fill', "#296639");

let svgDuration = d3.select("#comparison-area").append("svg")
    .attr("width", 400)
    .attr("height", 150)
    .attr("class", "svgDuration")
    .append("g");

svgDuration.append('text').text('Average Song Length')
    .attr('x', 30)
    .attr('y', 30)
    .attr('fill', 'white');

d3.select('#comparison-area').append('br');

let svgPopularity = d3.select("#comparison-area").append("svg")
    .attr("width", 400)
    .attr("height", 150)
    .attr("class", "svgPopularity")
    .append("g");

svgPopularity.append('text').text('Average Popularity (1-100)')
    .attr('x', 30)
    .attr('y', 15)
    .attr('fill', 'white');

d3.select('#comparison-area').append('br');


let svgTop3Songs = d3.select("#comparison-area").append("svg")
    .attr("width", 400)
    .attr("height", 150)
    .attr("class", "svgDuration")
    .append("g");

svgTop3Songs.append('text').text('Top 3 Artists')
    .attr('x', 30)
    .attr('y', 30)
    .attr('fill', 'white');

svgTop3Songs.append('rect')
    .attr('width', 10)
    .attr('height', 10)
    .attr('x', 15)
    .attr('y', 65)
    .attr('fill', "#64e386");

svgTop3Songs.append('rect')
    .attr('width', 10)
    .attr('height', 10)
    .attr('x', 15)
    .attr('y', 90)
    .attr('fill', "#296639");


function closePopup1() {
    document.getElementById("popupContainer1").style.display = "none";
}

// here we handle the svg visualization using our global data variables
function displayCountryComparisonData(dur, pop, top3) {


    // create a bar chart showing the difference in average duration
    let bars = svgDuration.selectAll(".bar")
        .remove()
        .exit()
        .data(durationData);

    bars.enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('fill', (d, i) => {

            if (i == 0) {
                return "#64e386";
            }
            else {
                return "#296639";
            }
        })
        .attr('x', 30)
        .attr('y', (d, i) => {
            if (i == 0) {
                return 40;
            }
            else {
                return 80;
            }
        })
        .attr('height', 30)
        .attr('width', (d) => {
            return d;
        });

    // add the numeric labels to the end of the bars
    svgDuration.selectAll('.barLabelDuration')
        .remove()
        .exit()
        .data(durationData)
        .enter()
        .append('text')
        .attr('class', 'barLabelDuration')
        .attr('fill', 'white')
        .text((d) => {
            return "" + secondsToTimeString(d);
        })
        .attr('x', (d) => {
            return d + 40;
        })
        .attr('y', (d, i) => {
            if (i == 0) {
                return 60;
            }
            else {
                return 100;
            }
        });




    // create a bar chart showing the difference in average popularity
    let bars2 = svgPopularity.selectAll('.bar2')
        .remove()
        .exit()
        .data(popularityData);

    bars2.enter()
        .append('rect')
        .attr('class', 'bar2')
        .attr('x', (d, i) => {
            if (i == 0) {
                return 30;
            }
            else {
                return 120;
            }
        })
        .attr('fill', (d, i) => {

            if (i == 0) {
                return "#64e386";
            }
            else {
                return "#296639";
            }
        })
        .attr('y', (d) => {
            return 150 - d;
        })
        .attr('height', (d) => {
            return 2 * d;
        })
        .attr('width', 80);


    // add the numeric labels above each of the bars
    svgPopularity.selectAll('.barLabelPopularity')
        .remove()
        .exit()
        .data(popularityData)
        .enter()
        .append('text')
        .attr('class', 'barLabelPopularity')
        .attr('fill', 'white')
        .text((d) => {
            return d;
        })
        .attr('x', (d, i) => {
            if (i == 0) {
                return 60;
            }
            else {
                return 150;
            }
        })
        .attr('y', (d) => {
            return (140 - d);
        });


    // create text labels to show the top 3 artists
    svgTop3Songs.selectAll('.top3artists')
        .remove()
        .exit()
        .data(artistData)
        .enter()
        .append('text')
        .attr('class', 'top3artists')
        .attr('fill', 'white')
        .text((d) => {
            return d + " ";
        })
        .attr('x', 30)
        .attr('y', (d, i) => {
            if (i == 0) {
                return 75;
            }
            else {
                return 100;
            }
        });
}


// converts the provided seconds to a readible time format (ex: 3:21)
//help from 
// https://www.geeksforgeeks.org/how-to-convert-seconds-to-time-string-format-hhmmss-using-javascript/#
function secondsToTimeString(totalSeconds) {

    let total = new Date(totalSeconds * 1000);

    let minutes = total.getUTCMinutes();
    let seconds = total.getUTCSeconds();

    let str = minutes.toString() + ':'
        + seconds.toString().padStart(2, '0');

    return str;

}

function changeColoration() {
    let selected = document.getElementById("variableDropdown").value;
    mapColoration = selected;
    renderMap();
}

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

function renderMap() {
    var domain = [0, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1];
    var range = ["#ff0000", "#f95700", "#f38600", "#eda300", "#a4ff00", "#94f607", "#87ec0f", "#77e911", "#5de415", "#2add17", "#00d223"];
    colorScale = d3.scaleQuantile()
        .domain(domain).range(range);

    var legendQuantile = d3.legendColor()
        .shapeWidth(75)
        .cells(10)
        .orient('horizontal')
        .scale(colorScale);

    legendSvg.append("g")
        .attr("class", "legendQuantile")
        .call(legendQuantile);

    legendSvg.selectAll("text")
        .each((d, i, nodes) => {
            nodes[i].classList.add("legendText");
        })
        .attr("fill", "white");

    d3.json("data/world-110m.json").then((mapData) => {
        // Load list of countries with their respective country codes
        // The country codes are necessary because our geoJSON data labels countries by code, not name
        d3.json("data/countries.json").then((cc) => {
            countryCodes = cc;

            // Initialize tooltips
            var tip = d3.tip().attr('class', 'd3-tip')
                .direction('s')
                .html(function (event, d) {
                    const code = countryCodes.find(c => c["country-code"] === d.id);
                    if (!countrySongData[code.name]) {
                        return "<div id=\"tooltip\">No Data</div>";
                    };
                    let countrySongs = countrySongData[code.name].tracks.items;

                    tooltip_data = {
                        "country": code.name,
                        "first": countrySongs[0].track.name,
                        "second": countrySongs[1].track.name,
                        "third": countrySongs[2].track.name
                    }

                    // Call function to display country summary on left sidebar
                    displayCountrySummary(code.name);

                    return tooltip_render(tooltip_data);
                });

            svg.call(tip);

            var world = topojson.feature(mapData, mapData.objects.countries).features;
            const g = svg.append("g");

            g.selectAll("path")
                .data(world)
                .enter().append("path")
                .attr("fill", (d) => {
                    const code = countryCodes.find(c => c["country-code"] === d.id);
                    if (code === undefined || !countrySongData[code.name]) {
                        return "#3c3c3c"
                    }
                    return colorScale(countrySongData[code.name].song_statistics[mapColoration]);
                })
                .attr("stroke", "white")
                .attr("d", path)
                .on("mouseover", function () {
                    d3.select(this).style("fill", "#afcce0")
                })
                .on("mouseout", function () {
                    d3.select(this).style("fill", function (d) {
                        const code = countryCodes.find(c => c["country-code"] === d.id);
                        if (code === undefined || !countrySongData[code.name]) {
                            return "#3c3c3c"
                        }
                        return colorScale(countrySongData[code.name].song_statistics[mapColoration]);
                    });
                })
                .on("click", tip.show);
        })
    })
}

async function createVis() {
    // Uses token and country list to get array of Top 50 country playlists and stores it in countrSongData
    await _getToken().then(async (token) => {
        _token = token;
        await d3.csv("data/countries.csv").then(async (countries) => {
            await Promise.all(countries.columns.map(async (country) => {
                if (country in playlistURLs) {
                    const data = await _getPlaylist(_token, playlistURLs[country]);

                    // Add country summary statistics to master array
                    let countrySongs = data.tracks.items;

                    var ids = [];
                    countrySongs.forEach((song) => {
                        ids.push(song.track.id);
                    });

                    const audio_features = await _getSongFeatures(_token, ids.join(","));
                    var avg_danceability = 0;
                    var avg_tempo = 0;
                    var avg_energy = 0;
                    var avg_loudness = 0;
                    var avg_instrumentalness = 0;

                    audio_features.forEach((song_features) => {
                        avg_danceability += song_features.danceability;
                        avg_tempo += song_features.tempo;
                        avg_energy += song_features.energy;
                        avg_loudness += song_features.loudness;
                        avg_instrumentalness += song_features.instrumentalness;
                    });

                    avg_danceability /= audio_features.length;
                    avg_loudness /= audio_features.length;
                    avg_energy /= audio_features.length;
                    avg_tempo /= audio_features.length;
                    avg_instrumentalness /= audio_features.length;

                    data['song_statistics'] = {
                        'avg_danceability': avg_danceability,
                        'avg_loudness': avg_loudness,
                        'avg_energy': avg_energy,
                        'avg_tempo': avg_tempo,
                        'avg_instrumentalness': avg_instrumentalness
                    };

                    var data_filtered = {
                        'song_statistics': data['song_statistics'],
                        'tracks': data['tracks']
                    }

                    countrySongData[country] = data_filtered;
                }
            }));
        });
    });

    console.log(countrySongData);

    document.getElementById("tempo-graphic").innerHTML = "<h3>- BPM</h3>";
    document.getElementById("loudness-graphic").innerHTML = "<h3>- dB</h3>";
    updateDialChart(danceabilitySvg, 0);
    updateDialChart(energySvg, 0);
    updateDialChart(instrumentalnessSvg, 0);

    renderMap();
}

createVis();
