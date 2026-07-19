import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const markets = [
  {
    id: 1,
    title: "Mobility",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lHQBJ445YUPAbkSwr_lt9nvR4Wk_zMk-4UE5mNVCCA&s",
  },
  {
    id: 2,
    title: "Warehouse Robots",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVt5jZ53l7U10A0K3_8cWfFBv_7mS1tCoQQbHUe4ZKpbdgok5GWtndzKrk&s=10",
  },
  {
    id: 3,
    title: "Smart Traffic / ITS",
    image:
      "https://images.stockcake.com/public/6/f/3/6f347707-a207-474c-82aa-d4616c224efd_large/smart-traffic-management-stockcake.jpg",
  },
  {
    id: 4,
    title: "Smart Surveillance",
    image:
      "https://www.telit.com/wp-content/uploads/2025/09/security_systems_2-600x400.jpg",
  },
  {
    id: 5,
    title: "Healthcare",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250120/pngtree-caring-medical-professional-portrait-with-healthcare-concept-image_16880532.jpg",
  },
  {
    id: 6,
    title: "Drones",
    image:
      "https://i.pinimg.com/736x/a4/11/be/a411bef306853295c76918b63a8a8f6f.jpg",
  },
  {
    id: 7,
    title: "Humanoid Robots",
    image:
      "https://i.pinimg.com/736x/64/42/29/64422905feb0c1bf7bc07dec5e04b427.jpg",
  },
];

function MarketSlider() {
  return (
    <section className="py-15 bg-white bg-gradient-to-l from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#243B7B]">
          Markets We Serve
        </h2>

        <div className="w-20 h-1 bg-green-800 mx-auto mt-4 mb-12 rounded"></div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={25}
          slidesPerView={4}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3500}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {markets.map((market) => (
            <SwiperSlide key={market.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                <img
                  src={market.image}
                  alt={market.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-center">
                    {market.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MarketSlider;
