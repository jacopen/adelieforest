import * as React from 'react'
import ArticleHeader from './ArticleHeader'
import ArticleFooter from './ArticleFooter'

type Props = {
}

const Article = () => (
  <section>
    <ArticleHeader />
    <h2>記事だよ</h2>
    <div>bodyだよ</div>
    <ArticleFooter />
  </section>
)

export default Article
