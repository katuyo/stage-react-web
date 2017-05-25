'use strict';

/**
 * @author palmtale
 * @since 2017/5/24.
 */


import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import DefaultLayout from "../src/main/layout/DefaultLayout";


const Index = (props) => (
    <DefaultLayout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </DefaultLayout>
);

Index.getInitialProps = async () => {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data
    }
};

export default Index;