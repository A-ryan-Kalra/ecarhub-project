import { CarCard } from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const cars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.mode || "",
  });
  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  // console.log(isDataEmpty);
  // const date = new Date().getFullYear();
  // console.log(date);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto"
        id="discover"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {cars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-">
            <h2>Oops no result</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
