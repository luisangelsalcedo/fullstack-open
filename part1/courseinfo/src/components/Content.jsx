export function Content({ data }) {
  return (
    <>
      <p>
        {data.part1} {data.exercises1}
      </p>
      <p>
        {data.part2} {data.exercises2}
      </p>
      <p>
        {data.part3} {data.exercises3}
      </p>
    </>
  );
}
