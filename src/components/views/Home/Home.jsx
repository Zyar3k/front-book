import { dbBooks } from "../../../dummyData";

const Home = () => {
  return (
    <div>
      {dbBooks.map((book) => (
        <div key={book._id}>
          <h4>{book.title}</h4>
          <p>
            {book.author.name} {book.author.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
