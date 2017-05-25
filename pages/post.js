'use strict';

/**
 * @author palmtale
 * @since 2017/5/24.
 */


import Layout from '../src/main/layout/DefaultLayout'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
);

Post.getInitialProps = async (context) => {
    const { title,id } = context.query;
    const tid = title || id;
    const res = await fetch(`http://api.tvmaze.com/shows/${tid}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show }
};

export default Post;