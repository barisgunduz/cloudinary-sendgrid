import React from "react";
import Layout from "./Layout";
import { Helmet } from "react-helmet";

const Home = () => (
    <Layout>
        <Helmet>
            <title>MERN Stack</title>
            <meta
                name="description"
                content="MERN Stack React Cloudinary Sendgrid SSR App"
            />
        </Helmet>
        <div className="container text-center">
            <h1 className="p-5">Home</h1>
            <hr />
            <p className="lead">
                loremipsum loremipsum loremipsum loremipsum loremipsum
                loremipsum loremipsum
            </p>
        </div>
    </Layout>
);

export default Home;
