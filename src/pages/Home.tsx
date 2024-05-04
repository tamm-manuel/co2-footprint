import Table from "../components/Table";
import emissiondata from "../emissiondata.json";

const Home = () => {
  return (
    <div className="text-center mx-auto max-w-xl">
      <h1 className="text-lg sm:text-xl text-accent">What's the Co2-Footprint of our countries?</h1>

      <hr className="border-accent my-2" />

      <p>
        Have you ever asked yourself where the most Co2 comes from?
      </p>

      <p>
        Well, you're at the perfect website to find that out!
      </p>

      <p className="my-10">
        In the following table you can see the emessions of some companies around the globe:
      </p>

      <Table data={emissiondata} />
    </div>
  );
};

export default Home;