import { Content } from './components/Content';
import { Header } from './components/Header';
import { Total } from './components/Total';

export function App() {
  // const-definitions
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}></Header>
      <Content
        data={{ part1, part2, part3, exercises1, exercises2, exercises3 }}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}
