import { Part } from './Part';

export function Content({ parts }) {
  return (
    <div>
      {parts.map(({ id, name, exercises }) => (
        <Part key={id} partname={name} exercises={exercises} />
      ))}
    </div>
  );
}
