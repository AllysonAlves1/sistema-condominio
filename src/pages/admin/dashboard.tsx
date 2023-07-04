import CardEntrada from "@/components/Cards/CardEntrada";
import CardSaida from "@/components/Cards/CardSaida";
import CardTable from "@/components/Cards/CardTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <CardEntrada />
      <CardSaida />
      <CardTable />
    </div>
  )
}