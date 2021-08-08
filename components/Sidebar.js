import { useSession } from "next-auth/client";

function Sidebar() {
  const [sessioon, loading] = useSession();
  return <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]"></div>;
}

export default Sidebar;
