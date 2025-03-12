import { Content } from './components/Content';
import { Header } from './components/Header';
import { Total } from './components/Total';

export function App() {
  // const-definitions
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'React',
        exercises: 14,
        id: 4,
      },
      {
        name: 'Angular',
        exercises: 14,
        id: 5,
      },
      {
        name: 'Vue',
        exercises: 14,
        id: 6,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
