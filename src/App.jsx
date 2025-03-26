const articleList = [
  {
    id: 1,
    title: "Understanding React",
    content: "React is a JavaScript library for building user interfaces...",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Getting Started with JavaScript",
    content: "JavaScript is a versatile programming language used for web development...",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "CSS Tips and Tricks",
    content: "CSS is used to style HTML elements. Here are some tips to improve your CSS skills...",
    author: "Alice Johnson"
  }
];

function App() {

  return (
    <div className="displayer">
      {articleList.map(article => {
        return (
          <>
            <div className="card">
              <div className="card-head">{article.title}</div>
              <div className="card-body"></div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default App
