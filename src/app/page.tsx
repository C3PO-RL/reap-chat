import { redirect } from "next/navigation";

export default function Home() {
  redirect("/cases/1/checklist");
}
