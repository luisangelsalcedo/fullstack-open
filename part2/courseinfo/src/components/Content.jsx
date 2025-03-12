import { Part } from './Part';

export function Content({ parts }) {
  return (
    <div>
      {parts.map((course) => (
        <Part
          key={course.id}
          partname={course.name}
          exercises={course.exercises}
        />
      ))}
    </div>
  );
}
