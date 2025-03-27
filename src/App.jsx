import { useState } from "react";

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
  const [newArticle, setNewArticle] = useState("")
  const [articles, setArticles] = useState(articleList)
  function submitHandler(e) {
    //used to prevent rendering of page
    e.preventDefault()
    setArticles([...articles, { title: newArticle, id: newArticle.length }])
    console.log("submitted!")
    setNewArticle('')
  }

  return (
    <>
      <div className="container">
        {articles.map((article) => {
          return (

            <div key={`article-${article.id}`} className="card">
              <div className="card-head">{article.title}</div>
              <div className="card-body"></div>
            </div>

          )
        })}
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="newArticle" className="form-label">New Article's title</label>
            <input
              type="text"
              className="form-control"
              name="newArticle"
              id="newArticle"
              aria-describedby="newArticleHelpeId"
              placeholder="Article"
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)}
            />
            <small id="newArticleHelper" className="form-text text-muted">Insert here the title of a new article to add</small>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
