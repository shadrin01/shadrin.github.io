function searchSongs() {
    var searchText = document.getElementById('searchInput').value;
    var apiUrl = 'https://itunes.apple.com/search?term=' + encodeURIComponent(searchText) + '&entity=song&limit=10';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data: ', error));
}

function displayResults(data) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    data.results.forEach(song => {
        var songDiv = document.createElement('div');
        songDiv.innerHTML = `
            <p><strong>${song.trackName}</strong> by ${song.artistName}</p>
            <audio controls src="${song.previewUrl}"></audio>
        `;
        resultsDiv.appendChild(songDiv);
    });
}