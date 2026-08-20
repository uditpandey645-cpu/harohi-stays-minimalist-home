import living from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.10_PM.jpeg.asset.json";
import bedroom from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.16_PM.jpeg.asset.json";
import hallway from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.12_PM.jpeg.asset.json";
import galleryWall from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.19_PM.jpeg.asset.json";
import balcony from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.28_PM.jpeg.asset.json";
import kitchen from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.00_PM.jpeg.asset.json";
import counter from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.13_PM.jpeg.asset.json";
import drawer from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.21_PM.jpeg.asset.json";
import bathroom from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.19_PM_1.jpeg.asset.json";
import bedside from "@/assets/WhatsApp_Image_2026-08-20_at_10.00.03_PM.jpeg.asset.json";

export const BOOKING_URL =
  "https://www.airbnb.co.in/rooms/1755860327453448819?unique_share_id=8876dab3-60ee-43d1-8b02-912a1e53ec97&viralityEntryPoint=1&s=76";

export const heroImage = {
  src: living.url,
  alt: "Living area with patterned feature wall, sofa and bean bags",
};

export const photos = [
  heroImage,
  { src: bedroom.url, alt: "Bedroom with upholstered bed, floral wallpaper and warm wall lights" },
  { src: hallway.url, alt: "Entrance hallway with framed art wall and ring pendant light" },
  { src: galleryWall.url, alt: "Close view of the framed poster wall and round mirror" },
  { src: balcony.url, alt: "Private covered balcony at dusk with open city outlook" },
  { src: kitchen.url, alt: "Fully fitted kitchen with cabinetry, sink and refrigerator" },
  { src: counter.url, alt: "Kitchen counter with induction cooktop, kettle and chopping board" },
  { src: drawer.url, alt: "Kitchen drawer stocked with cutlery and cooking utensils" },
  { src: bathroom.url, alt: "Bathroom with stone-look tiling, toilet and health faucet" },
  { src: bedside.url, alt: "Bedside table with table lamp and small plant" },
];
