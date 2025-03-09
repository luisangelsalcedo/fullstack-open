import { Part } from './Part';

export function Content({ parts }) {
  return (
    <div>
      <Part partname={parts[0].name} exercises={parts[0].exercises} />
      <Part partname={parts[1].name} exercises={parts[1].exercises} />
      <Part partname={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
}
