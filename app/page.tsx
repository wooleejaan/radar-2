import Radar from "@/components/radar/radar";

const data = [
  { axis: "strength", value: 13, order: 0 },
  { axis: "intelligence", value: 1, order: 1 },
  { axis: "charisma", value: 8, order: 2 },
  { axis: "dexterity", value: 4, order: 3 },
  { axis: "luck", value: 10, order: 4 },
  // { axis: "azole", value: 10, order: 5 },
];

export default function Home() {
  return <Radar data={data} />;
}
