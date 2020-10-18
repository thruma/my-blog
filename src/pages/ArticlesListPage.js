import React from 'react';
import articleContent from './article-content';
import {Link} from 'react-router-dom';

const ArticlesListPage = () => (
<>
<h1>ArticlesListPage</h1>
{articleContent.map((article, key) => (
    <Link className="artticle-list-item" key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
<p>{article.content[0].substring(0,150)}...</p>
    </Link>

))}
</> 
);

export default ArticlesListPage;
