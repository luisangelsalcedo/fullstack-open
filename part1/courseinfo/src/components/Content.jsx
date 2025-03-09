import { Part } from './Part';

export function Content({ data }) {
  return (
    <div>
      <Part partname={data.part1.name} exercises={data.part1.exercises} />
      <Part partname={data.part2.name} exercises={data.part2.exercises} />
      <Part partname={data.part3.name} exercises={data.part3.exercises} />
    </div>
  );
}
