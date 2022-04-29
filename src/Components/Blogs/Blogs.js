import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='context-api'>
            <h1>What is context api</h1>
        মনে করেন আমার ৫ টা কমপোনেন্ট আছে । এখন আমি যদি প্রথম কমপোনেন্ট থেকে ৫নম্বর কমপোনেন্ট এ কোন ডাটা পাঠাতে চাই তহলে আমাকে প্রথম কমপোনেন্ট থেকে ২য় আবার ২য় থেকে ৩য় আবার ৩য় থেকে ৪র্থ তার পর ৪র্থ থেকে ৫নম্বর কমপোনেন্ট  এ পাঠাতে হবে প্রোপস এর মাধ্যেমে আর এটা একটা ঝামেলা ও বটে আর এই সমস্যা সমাধানের জন্যে context api । context api সকল কমপোনেন্ট কে একেবারে রেপ করে ফেলে  এর পর আমরা যেখানে context api কে coll করবো সেখানে output পাবো । একটা কমপোনেন্ট এর ভিতর দিয়ে আর একটাতে এভাবে ডাটা পাস করতে প্রয়োজন পরে না । এক বারে যেখানে ডাটা দেখাতে চাই সেখানে context api কে coll করলে ডাটা পাওয়া যাবে । 
            </div>
            <div className='semantic-tag'>
            <h1>What is Semantic tag</h1>
        Semantic tag হলো এমন কতগুলো tag । যাদের কত গুলো নির্দিষ্ট মিনিং আছে HTML page এর কছে, ব্রাউজার এর কাছে ও গুগল বট এর কাছে । যে tag গুলো দারা এরা বুঝতে পারে যে ওই tag এর ভিতর কি আছ । যেমন :-
        {/* <header></header> */} header একটা semantic tag . HTMl page , google bott এরা বুঝতে পারে  যে এটা website এর হেড  এর অংশ
            </div>

        </div>
    );
};

export default Blogs;