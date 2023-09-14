import Item from "./Item"

const SayilarPage = () => {
  return (
    <main className="container min-h-[calc(100vh_-_416px)] flex flex-col gap-4 py-5">
        <h1 className="heading">Sayılar</h1>

        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </article>
    </main>
  )
}

export default SayilarPage