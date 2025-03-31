import { Card, CardContent } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "./OurClients.css";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Corporate Client",
    review:
      "GNV Events Management transformed our corporate gala into a spectacular evening. Their attention to detail and professionalism exceeded our expectations!",
    rating: 5,
    image: "/images/emily.jpg",
  },
  {
    name: "Michael Smith",
    role: "Private Client",
    review:
      "The wedding planning process was seamless with GNV! Every moment was magical, and their team ensured everything was perfect!",
    rating: 5,
    image: "/images/michael.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Charity Organizer",
    review:
      "Working with GNV Events Management for our charity fundraiser was an absolute pleasure. They brought our vision to life beautifully!",
    rating: 4.5,
    image: "/images/sarah.jpg",
  },
];

export default function OurClientSays() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="client-card"
            >
              <Card className="p-8 shadow-lg rounded-3xl bg-white/80 backdrop-blur-md border border-gray-200 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-14 h-14 border-2 border-blue-500 rounded-full" src={client.image} alt={client.name} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
                    <p className="text-sm text-gray-500">{client.role}</p>
                  </div>
                </div>
                <CardContent>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">“{client.review}”</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={i < Math.floor(client.rating) ? "text-yellow-500" : "text-gray-300"}
                        size={20}
                        fill={i < Math.floor(client.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
