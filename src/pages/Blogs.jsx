import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-center text-4xl font-semibold mt-8 mb-8'>Question And Answer</h3>
            <p className='px-10'>
                <b>1. Question: </b>What is an access token and refresh token? How do they work and where should we store them on the client-side? <br/>
                <i><b>Answer: </b>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. We can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.</i>
            </p> <br/>

            <p className='px-10'>
                <b>2. Question: </b>Compare SQL and NoSQL databases? <br/>
                <i><b>Answer: </b>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</i>
            </p> <br/>

            <p className='px-10'>
                <b>3. Question: </b>What is express js? What is Nest JS? <br/>
                <i><b>Answer: </b>NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.</i>
            </p> <br/>

            <p className='px-10'>
                <b>4. Question: </b> What is MongoDB aggregate and how does it work?<br/>
                <i><b>Answer: </b>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</i>
            </p> <br/>
        </div>
    );
};

export default Blogs;