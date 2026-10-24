import { useState } from "react";
import "./App.css";

const movieNames = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Avatar",
  "Titanic",
  "Avengers: Endgame",
  "Spider-Man",
  "Doctor Strange",
  "Black Panther",
  "Iron Man",
  "Frozen",
  "Toy Story",
  "Finding Nemo",
  "Coco",
  "Inside Out",
  "The Lion King"
];

// Demo images hain, actual movie posters nahi
const movies = movieNames.map((title, index) => ({
  id: index + 1,
  title,
  image: `https://picsum.photos/seed/movie${index + 1}/400/300`,
  description: `Enjoy ${title} on the big screen. Select Book Seat to enter your booking details.`
}));

const emptyForm = {
  name: "",
  email: "",
  mobile: ""
};

function App() {
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  function openMovie(movie) {
    setSelectedMovie(movie);
    setPage(2);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value
    }));

    setError("");
  }

  function submitBooking(event) {
    event.preventDefault();

    if (form.name.trim() === "") {
      setError("Please enter your name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const newBooking = {
      id: `BK-${crypto.randomUUID().toUpperCase()}`,
      movie: selectedMovie.title,
      name: form.name.trim(),
      email: form.email.trim(),
      mobile: form.mobile.trim()
    };

    setBooking(newBooking);
    setError("");
    setPage(4);
  }

  function startAgain() {
    setPage(1);
    setSelectedMovie(null);
    setForm(emptyForm);
    setBooking(null);
    setError("");
  }

  return (
    <main className="container">
      <h1>Movie Booking</h1>

      {/* Page 1: Movie list */}
      {page === 1 && (
        <section>
          <h2>Choose a Movie</h2>

          <div className="movie-grid">
            {movies.map((movie) => (
              <button
                key={movie.id}
                className="movie-card"
                type="button"
                onClick={() => openMovie(movie)}
                aria-label={`View details for ${movie.title}`}
              >
                <img
                  src={movie.image}
                  alt={`Illustration for ${movie.title}`}
                  loading="lazy"
                />
                <h3>{movie.title}</h3>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Page 2: Movie details */}
      {page === 2 && selectedMovie && (
        <section className="panel">
          <button type="button" onClick={() => setPage(1)}>
            Back to Movies
          </button>

          <h2>{selectedMovie.title}</h2>

          <img
            className="detail-image"
            src={selectedMovie.image}
            alt={`Illustration for ${selectedMovie.title}`}
          />

          <p>{selectedMovie.description}</p>

          <button type="button" onClick={() => setPage(3)}>
            Book Seat
          </button>
        </section>
      )}

      {/* Page 3: Booking form */}
      {page === 3 && selectedMovie && (
        <section className="panel">
          <button type="button" onClick={() => setPage(2)}>
            Back to Details
          </button>

          <h2>Book a Seat: {selectedMovie.title}</h2>

          <form className="booking-form" onSubmit={submitBooking}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />

            <label htmlFor="mobile">Mobile</label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              title="Enter exactly 10 digits"
              autoComplete="tel-national"
              required
            />

            {error && <p role="alert">{error}</p>}

            <button type="submit">Submit</button>
          </form>
        </section>
      )}

      {/* Page 4: Confirmation */}
      {page === 4 && booking && (
        <section className="panel">
          <h2>Seat Booked Successfully!</h2>
          <p>This is a demo booking confirmation.</p>

          <p className="booking-id">
            <strong>Booking ID:</strong> {booking.id}
          </p>

          <p>
            <strong>Movie:</strong> {booking.movie}
          </p>

          <p>
            <strong>Name:</strong> {booking.name}
          </p>

          <p>
            <strong>Email:</strong> {booking.email}
          </p>

          <p>
            <strong>Mobile:</strong> {booking.mobile}
          </p>

          <button type="button" onClick={startAgain}>
            Book Another Movie
          </button>
        </section>
      )}
    </main>
  );
}

export default App;