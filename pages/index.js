import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav';

import fetch from 'isomorphic-unfetch'
import TodoList from '../components/TodoList';

const Home = (props) => {
  return (
  <div className="container">
    <Head title="Home" />
      <TodoList items={props.todoList.todo} />
    

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .container {
        margin: 50px
      }
    `}</style>
  </div>
  )
};

Home.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/api/todos');
    const data = await res.json();
    return {
        todoList: data
    }
};

export default Home
