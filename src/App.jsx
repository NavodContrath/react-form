import { useState } from "react";

const articleList = [
  "Understanding React",
  "Getting Started with JavaScript",
  "CSS Tips and Tricks",
];

function App() {
  const [newArticle, setNewArticle] = useState("")
  const [articles, setNewArticles] = useState(articleList)
  function submitHandler(e) {
    //used to prevent rendering of page
    e.preventDefault()
    setNewArticles([...articles, newArticle])
    console.log("submitted!")
  }

  return (
    <>
      {articles.map(article => {
        return (
          <>
            <div className="card">
              <div className="card-head">{article}</div>
              <div className="card-body"></div>
            </div>
          </>
        )
      })}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="newArticle" className="form-label">Name</label>
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
          {console.log(newArticle)}
          <small id="newArticleHelper" className="form-text text-muted">Insert here a new article to add</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
