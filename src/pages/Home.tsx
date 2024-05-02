import Table from "../components/Table";

const Home = () => {
  const companies = [
    {country: "United States", company: "Acme Corporation", emission: 1000},
    {country: "China", company: "Widget Industries", emission: 850},
    {country: "India", company: "Globex Corporation", emission: 720},
    {country: "Russia", company: "MegaCorp", emission: 630},
    {country: "Brazil", company: "Initech", emission: 570},
    {country: "Germany", company: "Techtronics", emission: 500},
    {country: "France", company: "Global Widgets", emission: 450},
    {country: "United Kingdom", company: "Omega Ltd", emission: 400},
    {country: "Italy", company: "Vista Corp", emission: 350},
    {country: "Canada", company: "Nexgen Solutions", emission: 300},
    {country: "United States", company: "Cyberdyne Systems", emission: 280},
    {country: "Japan", company: "Future Enterprises", emission: 250},
    {country: "South Korea", company: "Apex Innovations", emission: 230},
    {country: "Mexico", company: "Matrix Technologies", emission: 210},
    {country: "Indonesia", company: "Dynasty Group", emission: 190},
    {country: "United States", company: "Quantum Corp", emission: 170},
    {country: "Saudi Arabia", company: "Pinnacle Solutions", emission: 150},
    {country: "Turkey", company: "Sunrise Innovations", emission: 130},
    {country: "United Kingdom", company: "Aurora Enterprises", emission: 120},
    {country: "Argentina", company: "Stratos Industries", emission: 110},
    {country: "Poland", company: "Vertex Ltd", emission: 100},
    {country: "Spain", company: "Fusion Systems", emission: 90},
    {country: "Thailand", company: "Horizon Tech", emission: 80},
    {country: "South Africa", company: "Eon Group", emission: 70},
    {country: "Vietnam", company: "Orbit Solutions", emission: 65},
    {country: "Egypt", company: "Emerald Technologies", emission: 60},
    {country: "Nigeria", company: "Apex Innovations", emission: 55},
    {country: "Iran", company: "Nimbus Corp", emission: 50},
    {country: "Sweden", company: "Zephyr Enterprises", emission: 45},
    {country: "Norway", company: "Horizon Tech", emission: 40},
    {country: "Ukraine", company: "Nova Systems", emission: 38},
    {country: "Malaysia", company: "Galactic Innovations", emission: 35},
    {country: "Philippines", company: "Meridian Solutions", emission: 32},
    {country: "Belgium", company: "Zenith Group", emission: 30},
    {country: "Iraq", company: "Vertigo Enterprises", emission: 28},
    {country: "Finland", company: "Aurora Enterprises", emission: 26},
    {country: "Bangladesh", company: "Lunar Technologies", emission: 24},
    {country: "Colombia", company: "Platinum Systems", emission: 22},
    {country: "Pakistan", company: "Titan Group", emission: 20},
    {country: "Romania", company: "Apex Innovations", emission: 18},
    {country: "Kazakhstan", company: "Orbit Solutions", emission: 16},
    {country: "Chile", company: "Techtronics", emission: 14},
    {country: "Hong Kong", company: "Eclipse Corp", emission: 12},
    {country: "Hungary", company: "Innovate Ltd", emission: 10},
    {country: "Greece", company: "Pinnacle Solutions", emission: 9},
    {country: "Portugal", company: "Apex Innovations", emission: 8},
    {country: "Czech Republic", company: "Vertex Ltd", emission: 7},
    {country: "Israel", company: "Quantum Corp", emission: 6},
    {country: "Singapore", company: "Horizon Tech", emission: 5}
  ];

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

      <Table data={companies} />
    </div>
  );
};

export default Home;