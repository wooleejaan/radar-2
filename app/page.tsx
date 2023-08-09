import Radar from "@/components/radar/radar";

const data = [
  { axis: "strength", value: 10, order: 0 },
  { axis: "intelligence", value: 2, order: 1 },
  { axis: "charisma", value: 6, order: 2 },
  { axis: "dexterity", value: 4, order: 3 },
  { axis: "luck", value: 10, order: 4 },
  // { axis: "azole", value: 10, order: 5 },
];

const defaultData = [
  { axis: "default1", value: 4, order: 0 },
  { axis: "default2", value: 8, order: 1 },
  { axis: "default3", value: 2, order: 2 },
  { axis: "default4", value: 6, order: 3 },
  { axis: "default5", value: 8, order: 4 },
];

export default function Home() {
  return <Radar data={data} defaultData={defaultData} />;
}
