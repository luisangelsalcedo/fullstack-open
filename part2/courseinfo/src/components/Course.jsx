import { Content } from './Content';
import { Header } from './Header';
import { Total } from './Total';

export function Course({ course }) {
  const { name, parts } = course;
  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
      <hr />
    </>
  );
}
