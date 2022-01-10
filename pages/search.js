import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(router.query);
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} for {noOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Prices</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, description, price, star, location, total, title }) => (
                <InfoCard
                  img={img}
                  key={img}
                  description={description}
                  price={price}
                  star={star}
                  location={location}
                  total={total}
                  title={title}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
