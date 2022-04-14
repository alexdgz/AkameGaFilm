const anilistApi = {

    bySearch: (recherche) => new Promise((resolve, reject) => { // recherche anime par nom

        var query = `
            query($search: String) {
            Page(page: 1, perPage: 48) { # Define the query itself
                media (search: $search, type: ANIME, isAdult: false) { # Insert our variables into the query arguments (type: ANIME is hard-coded in the query)
                    id
                    title {
                        romaji
                        english
                        native
                    }
                    type
                    genres
                    coverImage {
                        extraLarge
                        large
                        medium
                    }
                    description
                    startDate {
                        year
                        month
                        day
                    }
                    endDate {
                        year
                    }
                    duration
                    format
                    studios {
                        nodes {
                            name
                        }
                    }
                    episodes
                    status
                    averageScore
                    popularity

                }
            }
        }`;

        var variables = {
            search: recherche // Insert our variables into the query arguments
        };


        var url = 'https://graphql.anilist.co', // The URL to query
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    variables: variables
                })
        };
        

        fetch(url, options).then(response => response.json()) // Send the request and return the response
        .then(jsonResponse => resolve(jsonResponse))
        .catch((err) => reject(err));

    })
};

export default anilistApi;

