import { Content } from './components/Content';
import { Header } from './components/Header';
import { Total } from './components/Total';

export function App() {
  // const-definitions
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}
