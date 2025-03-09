import { Part } from './Part';

export function Content({ data }) {
  return (
    <div>
      <Part partname={data.part1} exercises={data.exercises1} />
      <Part partname={data.part2} exercises={data.exercises2} />
      <Part partname={data.part3} exercises={data.exercises3} />
    </div>
  );
}
