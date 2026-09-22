export const PHONE = "(312) 555-0142";
export const PHONE_HREF = "tel:+13125550142";
export const EMAIL = "reservations@royalblackcarschicago.com";

const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=70`;

export const IMG = {
  hero: U("1767285610734-f0858d5248fe"),
  airport: U("1558222209-134191edfe0d"),
  corporate: U("1769787301187-0fab290ba2f2"),
  areaMap: U("1758384076382-21f6587e1048"),
};

export const services = [
  { href: "/airport-car-service/", title: "Airport transfers", text: "O'Hare, Midway and private terminals, with meet and greet inside arrivals.", img: U("1558222209-134191edfe0d") },
  { href: "/corporate-car-service/", title: "Corporate travel", text: "Monthly billing, a named dispatcher and NDA-signed chauffeurs.", img: U("1769787301187-0fab290ba2f2") },
  { href: "/hourly-chauffeur/", title: "Hourly & as-directed", text: "Keep the car and chauffeur for meetings, showings or a night out.", img: U("1449965408869-eaa3f722e40d") },
  { href: "/private-jet-transfers/", title: "Private aviation", text: "Planeside pick-ups at Signature, Atlantic Aviation, PWK and DPA.", img: U("1780296269675-169390638617") },
  { href: "/event-transportation/", title: "Events & venues", text: "United Center, Soldier Field, McCormick Place and every arena night.", img: U("1767285610734-f0858d5248fe") },
  { href: "/services/", title: "Weddings & occasions", text: "Weddings, birthdays and door-to-door medical appointment rides.", img: U("1773063449875-332dff62b6e3") },
];

export const airports = [
  { code: "ORD", name: "O'Hare", note: "All terminals", rate: "$95", href: "/airports/ohare/" },
  { code: "MDW", name: "Midway", note: "Baggage claim", rate: "$85", href: "/airports/midway/" },
  { code: "PWK", name: "Chicago Executive", note: "FBO planeside", rate: "$135", href: "/airports/chicago-executive-pwk/" },
];

export const fleet = [
  { title: "Luxury sedan", models: "Cadillac XTS · Lincoln MKZ", seats: "3 seats", bags: "2 bags", tag: "1–3 guests", img: U("1764090317825-9b76e437c8d8") },
  { title: "Executive sedan", models: "Mercedes-Benz E & S-Class · BMW 5 & 7 Series", seats: "3 seats", bags: "3 bags", tag: "1–3 guests", img: U("1764089859662-7b4773dff85b") },
  { title: "Midsize SUV", models: "Cadillac XT5 · Lincoln Nautilus", seats: "4 seats", bags: "3 bags", tag: "Up to 4", img: U("1617209680907-4f9b76218a4b") },
  { title: "Full-size SUV", models: "Chevrolet Suburban · GMC Yukon XL", seats: "6 seats", bags: "6 bags", tag: "Up to 6", img: U("1769787301187-0fab290ba2f2") },
  { title: "Premium luxury SUV", models: "Lincoln Navigator", seats: "6 seats", bags: "6 bags", tag: "Up to 6", img: U("1764090317565-46fe49fe2a31") },
  { title: "Executive SUV", models: "Cadillac Escalade", seats: "6 seats", bags: "6 bags", tag: "Up to 6", img: U("1698840074036-94aa3fce8750") },
  { title: "Mercedes Sprinter", models: "Executive and passenger layouts", seats: "14 seats", bags: "14 bags", tag: "Up to 14", img: U("1698840059740-ba83e510733b") },
];

export const northwest = ["Schaumburg","Hoffman Estates","Elk Grove Village","Arlington Heights","Rolling Meadows","Mount Prospect","Des Plaines","Roselle","Bloomingdale","Itasca","Wood Dale","Addison","Hanover Park","Streamwood","Bartlett","Wheeling","Buffalo Grove","Palatine","Inverness","Barrington","South Barrington","Barrington Hills"];

export const west = ["Oak Brook","Lombard","Downers Grove","Westmont","Hinsdale","Clarendon Hills","Willowbrook","Darien","Woodridge","Burr Ridge","Lisle","Naperville","Wheaton","Glen Ellyn","Carol Stream","Glendale Heights","West Chicago","Warrenville","Winfield","St. Charles","Geneva","Batavia","Elmhurst","Villa Park","Berkeley","Hillside","Westchester","La Grange","Western Springs","Brookfield","Riverside","River Forest","Oak Park","Forest Park","Elmwood Park"];

export const venues = [
  ["United Center","united-center"],["Soldier Field","soldier-field"],["Wrigley Field","wrigley-field"],
  ["Guaranteed Rate Field","guaranteed-rate-field"],["McCormick Place","mccormick-place"],["Navy Pier","navy-pier"],
  ["Wintrust Arena","wintrust-arena"],["Credit Union 1 Arena","credit-union-1-arena"],["Rosemont Theatre","rosemont-theatre"],["Allstate Arena","allstate-arena"],
];

export const faqs = [
  { q: "How much is a black car from downtown to O'Hare?", a: "A luxury sedan is $95 flat from the Loop, River North and Streeterville, including tolls, parking, meet and greet and gratuity. SUVs and Sprinters are quoted when you book and the rate never changes afterwards." },
  { q: "What happens if my flight is delayed?", a: "We track the flight from departure and move the pick-up automatically. Wait time at O'Hare and Midway is free for the first 60 minutes after landing." },
  { q: "How early should the car collect me for a flight?", a: "Three hours before a domestic departure from O'Hare, three and a half for international. Add 20 to 40 minutes from the Northwest or West suburbs depending on the expressway." },
  { q: "Do you provide child seats?", a: "Yes — infant, toddler and booster seats, fitted and checked before pick-up. The first seat is free on every ride." },
  { q: "Can my company be invoiced monthly?", a: "Yes. Corporate accounts are invoiced monthly with cost centres and trip codes, and we can bill by department. Personal bookings are charged to the card on file after the ride." },
];

export const reviews = [
  { quote: "My flight landed two hours early and the car was already waiting. That has never happened to me in Chicago.", name: "Daniel R.", trip: "O'Hare to the Loop" },
  { quote: "Eleven people between McCormick Place and two hotels for three days, and not one mix-up.", name: "Priya S.", trip: "Convention group" },
  { quote: "Booked a booster seat and it was already fitted when the Escalade arrived in Naperville.", name: "Megan T.", trip: "Naperville to Midway" },
];

export const slug = (s) => s.toLowerCase().replace(/\./g, "").replace(/ /g, "-");
