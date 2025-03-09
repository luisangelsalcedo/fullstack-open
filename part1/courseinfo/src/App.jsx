import { Content } from './components/Content';
import { Header } from './components/Header';
import { Total } from './components/Total';

export function App() {
  // const-definitions
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };
  return (
    <div>
      <Header course={course}></Header>
      <Content data={{ part1, part2, part3 }} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
}
