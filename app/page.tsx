// localhost:3000/

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <>
      <h1>App Router</h1>
      <a href="/home">Home</a> | <a href="/blog/first-post">Blog Post</a> |{" "}
      <a href="/sandbox">Sandbox</a>
    </>
  );
}
