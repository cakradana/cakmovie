# Cakmovie

Cakmovie is a movie information app built using React with Redux and Vite. It utilizes the TMDB (The Movie Database) API to provide users with comprehensive details about movies, including ratings, cast, reviews, and more. The project is set up with PNPM as the package manager for efficient dependency management.

## Features

- **Browse Movies**: Users can explore a vast collection of movies, search for specific titles, and discover popular, top-rated, and upcoming movies.

- **Movie Details**: Detailed information about each movie is available, including synopsis, release date, genre, runtime, a list of cast members, and even trailer video.

- **Ratings**: Users can view movie ratings.

## Installation

To set up the Cakmovie project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/cakradana/cakmovie.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cakmovie
   ```

3. Install the project dependencies using PNPM:

   ```bash
   pnpm install
   ```

4. Create a TMDB API key:

   - Visit the [TMDB website](https://www.themoviedb.org/) and create an account.
   - Generate an API key from your account settings.

5. Set up environment variables:

   - Create a new file named `.env` in the root directory.
   - Add the following content to the `.env` file:

     ```plaintext
     VITE_APP_TMDB_TOKEN=YOUR_TMDB_API_KEY
     ```

     Replace `YOUR_TMDB_API_KEY` with the API key you obtained from TMDB.

6. Start the development server:

   ```bash
   pnpm run dev
   ```

   This will start the development server on `http://localhost:5173`.

## Tech Stack

The following technologies and libraries were used in the development of Cakmovie:

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing application state.
- **Vite**: A fast and lightweight build tool for modern web applications.
- **TMDB API**: The Movie Database API provides access to a wide range of movie-related data.
- **PNPM**: A fast, disk space-efficient package manager for JavaScript.

## Contributing

Contributions to Cakmovie are welcome! If you find any bugs or want to suggest new features, please open an issue on the [GitHub repository](https://github.com/cakradana/cakmovie/issues). You can also submit pull requests with proposed changes.

When contributing, please follow the existing code style, ensure that tests pass, and provide clear commit messages.

## License

Cakmovie is open-source and released under the [MIT License](LICENSE). Feel free to modify and distribute the application as needed.

## Acknowledgments

Cakmovie makes use of the TMDB API to provide movie data. Special thanks to the TMDB community for their excellent work and maintaining such a comprehensive movie database.
