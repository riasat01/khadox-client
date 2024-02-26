import Image from "next/image";
import img from "../../../../../../../../../Downloads/banner-1.jpeg"
import { fetchAllDistricts } from "@/app/lib/district/allDistrict";

type LocationType = {
    id: number,
    name: string,
    image_url: string,
} 

const Locations = async () => {
  const locationData = await fetchAllDistricts();
    // console.log(locationData);
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg mx-8 md:mx-16 lg:mx-24 my-24">
            {
                locationData?.map((location: LocationType) => <section key={location?.id} className="card bg-base-100 shadow-xl image-full">
                <figure><Image width={500} height={300} src={location?.image_url} alt="Image" /></figure>
                <section className="card-body">
                  <h2 className="card-title">{location?.name}</h2>
                  {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                  <section className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </section> */}
                </section>
              </section>)
            }
        </section>
    );
};

export default Locations;