// localhost:3000/

export const metadata = {
  title: "Welcome to my Sandbox",
};

export default function Page() {
  return (
    <main>
      <h1>Welcome to my Sandbox</h1>
      <ul>
        <li>
          <a href="/countries">Countries</a>
        </li>
        <li>
          <a href="/schools">Schools</a>
        </li>
        <li>
          <a href="/codametrix">Codametrix</a>
        </li>
        <li>
          <a href="/roomba">Roomba</a>
        </li>
      </ul>
    </main>
  );
}
