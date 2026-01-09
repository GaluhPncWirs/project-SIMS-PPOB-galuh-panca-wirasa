import type React from "react";
import NavigationBar from "../../components/navbar/content";

export default function ContainerRoot({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <div className="w-10/12 mx-auto mt-10">{children}</div>
    </div>
  );
}
