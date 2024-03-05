import React, { useEffect } from 'react';
import './opening.css';

const Opening = () => {
    useEffect(() => {
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');

        next.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        });

        prev.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        });

        document.addEventListener('click', activate, false);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('click', activate, false);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const activate = () => {
        // Add your activate function logic here
    };

    return (
        <div className="opening-body">
            <div className="container">
                <div className="slide">
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}>
                        <div className="content">
                            <div className="name">Switzerland</div>
                            <div className="des">description here..</div>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)' }}>
                        <div className="content">
                            <div className="name">Finland</div>
                            <div className="des">description here..</div>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)' }}>
                        <div className="content">
                            <div className="name">Iceland</div>
                            <div className="des">description here..</div>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)' }}>
                        <div className="content">
                            <div className="name">Australia</div>
                            <div className="des">description here..</div>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)' }}>
                        <div className="content">
                            <div className="name">Netherlands</div>
                            <div className="des">description here..</div>
                            <button>Explore More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)' }}>
                        <div className="content">
                            <div className="name">Ireland</div>
                            <div className="des">description here..</div>
                            <button>Explore More</button>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>

    );
}

export default Opening;
