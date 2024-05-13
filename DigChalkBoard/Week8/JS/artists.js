function searchArtist() {
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput=== "") {
        alert("Please enter artist's name");
        return;
        }

    const baseURL = "https://musicbrainz.org/ws/2/artist/?query=";
    const format = "&fmt=json";
    const searchURL = baseURL + encodeURIComponent(searchInput) + format;

    fetch(searchURL)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data.artists);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
}


function displaySearchResults(artists) {
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = "";

    if (artists.length === 0) {
        searchResultsDiv.textContent = "No artists found"
        return;
    }

    const resultlist = document.createElement('ul')
    artists.forEach(artist => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = artist.name;
        link.href = '#';
        link.onclick = () => fetchAlbums (artist.id);
        listItem.appendChild(link)
        resultlist.appendChild(listItem);
    });
    searchResultsDiv.appendChild(resultlist);
}


function fetchAlbums(artistID) {
    const baseURL = "https://musicbrainz.org/ws/2/release/?artist=";
    const format = "&fmt=json";
    const albumsURL = baseURL + artistID + format;

    fetch(albumsURL)
        .then(response => response.json())
        .then(data => {
        displayAlbumResults(data.releases);
        })
        .catch(error => {
            console.error("Error fetching albums:", error);
    });

}

function displayAlbumResults(albums) {
    const albumResultsDiv = document.getElementById("albumResults");
    albumResultsDiv.innerHTML = "";

    if (albums.length === 0) {
        albumResultsDiv.textContent = 'No albums found for this artist';
        return;
    }

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const header1 = document.createElement('th');
    header1.textContent = "Release Date";
    const header2 = document.createElement("th");
    header2.textContent = "Album Name";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    table.appendChild(headerRow);

    albums.forEach(album => {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        cell1.textContent = album.date ? album.date: "N/A";
        const cell2 = document.createElement("td");
        cell2.textContent = album.title;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    albumResultsDiv.appendChild(table);
}