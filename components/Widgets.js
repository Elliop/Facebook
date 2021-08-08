import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "/1337.jpeg", name: "1337 FutureIsLoading" },
  { src: "/42.jpeg", name: "42 born2code" },
  { src: "/Nicolas.jpeg", name: "Nicolas Sadirac" },
  { src: "/Ayoub.jpeg", name: "Ayoub Boulbaz" },
  { src: "/Elon.jpeg", name: "Elon Musk" },
  { src: "/Bill.png", name: "Bill Gates" },
  { src: "/Mark.jpeg", name: "Mark Zuckerberg" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-65 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
