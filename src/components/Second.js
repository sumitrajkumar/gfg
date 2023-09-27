import React from 'react'
import './Second.css'
function Second() {
    return (
        <>
            <div class="second-page-middle-content">
                <p id="para">Hello, What Do You Want To Learn?</p>

                <div class="group">
                    <input type="text" />
                    <button class="btn" type="button">Search</button>
                </div>

                <div className='second_page_below_input'>
                    <p>Data Science & ML</p>
                    <p>GATE:DS & AI</p>
                    <p>DSA:BAasic To Advance Course</p>
                </div>
            </div>





            <div className='all-cards'>
                <div className='back-color'>
                    <div class="card">
                        <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/read.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Object Oriented Program...</h5>
                            <p class="card-text">As the name suggests, Object-Oriented Programming or OOPs refers to languages that use objects in pr... </p>
                        </div>
                    </div>

                    <div class="card">
                        <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/practice.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Explore Practice Problem</h5>
                            <p class="card-text">Solve DSA Problems.Filter based on topic tags and company tags.Get curated problem list by GFG ex...</p>
                        </div>
                    </div>

                    <div class="card">
                        <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/learn.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DSA to Development:A...</h5>
                            <p class="card-text">This course is designed to take you on a tranformative journey from mastering Data Structures and Algorithms to...</p>

                        </div>
                    </div>
                </div>
                <div className='size'>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000000000">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-8">
                                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230803173237/Google-Workspace-copy-(1).webp" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Maximising Productivity with Google Workspace</h5>
                                            <p class="card-text">When starting a  business selecting the right email and office software to power your operations is crucial.Choosing the right software for your</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="card" >
                                <div class="row g-0">
                                    <div class="col-8">
                                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230912135127/reactjs-cheat-sheet-2-copy.webp" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-4">
                                        <div class="card-body">
                                            <h5 class="card-title">React Cheat Sheet</h5>
                                            <p class="card-text">Reactis an open-source javaScript library used to create user interfaces in a declaration and effective way.It is a component-based front-end library responsible for...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-8">
                                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230505175603/100-Days-of-Machine-Learning.webp" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-4">
                                        <div class="card-body">
                                            <h5 class="card-title">100 Days of Machine Learning -A Complete Guide For Begineers</h5>
                                            <p class="card-text">Machine Learning is a rapidly growing field wihthin the broader domain of Artificial Intelligence. It involves developing...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


            </div>

            </div>

        </>
    )
}

export default Second
