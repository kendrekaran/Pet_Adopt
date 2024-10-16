import { Link } from "react-router-dom"
import './App.css'
import './abt.css'


function MainPage(){
    return(
        <>
            <header>
                <div className="leftbanner">
                    <h1>Welcome to Pet Heaven!</h1>
                    <h3>Find Your Furry Friend Today!</h3>
                    <Link to="/adopt"><button className="adoptBtn">Adopt a Pet</button></Link>
                </div>
                <div className="rightbanner">
                    <img className="dogy"  src="dog.webp"/>
                </div>
            </header>

            <main className="dog1">
                <div>
                    <h2>Why Adopt?</h2>
                    <p>Adopting a pet is not just a kind act; it also brings countless benefits to your life:</p>
                    <p><b>Save a Life:</b> By adopting, you're giving a homeless animal a second chance.</p>
                    <p><b>Companionship:</b> Pets offer unconditional love and companionship, enriching your life with joy and happiness.</p>
                    <p><b>Cost-Effective:</b> Adoption fees are generally lower than buying from breeders, and many adopted pets come vaccinated and spayed/neutered.</p>
                </div>
                <div><img src="dog1.webp"/></div>
            </main>


            <main className="dog2">
                <div>
                <h2>Our Pets</h2>
                <p>We have a wide range of pets available for adoption. Explore our categories to find your new best friend:</p>
                <p><b>Dogs</b> From playful puppies to calm adult dogs, we have a variety of breeds waiting for you.</p>
                <p><b>Cats:</b> Looking for a furry companion? Our adorable cats and kittens are ready to be loved.</p>
                <p><b>Other Animals:</b> We also have birds, rabbits, and other small animals looking for a loving home.</p>
                </div>
                <div><img src="dog2.webp"/></div>
            </main>

            <main className="dog3">
                <div>
                <h2>Adoption Process</h2>
                <p>Our process is simple and supportive, so you can focus on finding the perfect pet:</p>
                <p><b>1. Browse Available Pets:</b> Check out our profiles of pets looking for adoption.</p>
                <p><b>2. Fill Out an Application:</b> Once you find a pet that steals your heart, fill out our adoption application.</p>
                <p><b>3. Meet Your Future Pet:</b> Schedule a meeting with your chosen pet to ensure it’s a perfect match.</p>
                <p><b>4. Complete the Adoption:</b> After a successful meeting, finalize the adoption process and welcome your new pet into your home!</p>
                </div>
                <div><img src="dog7.png"/></div>
            </main>

            <main className="dog4"> 
                <div>
                <h2>Get Involved</h2>
                <p>Want to help even more? You can support us by:</p>
                <p><b>Volunteering</b> Join our team of dedicated volunteers and make a difference in the lives of pets.</p>
                <p><b>Donating:</b> Every contribution helps us care for animals in need and support our adoption programs.</p>
                <p><b>Fostering</b> Open your home to a pet temporarily while they wait for their forever family.</p>
                </div>
                <div><img src="dog5.webp"/></div>
            </main>

            <div className="footer">
                <footer>
                    <h2>Join Our Community</h2>
                    <p>Follow us on social media for updates on adoptable pets, upcoming events, and success stories. Together, we can make a difference in the lives of animals in need!</p>
                </footer>

                <footer>
                    <h2>Contact Us</h2>
                    <p>Have questions? We’re here to help! Reach out to us via our contact page, and we'll get back to you as soon as possible.</p>
                </footer>

                <footer>
                    <h2>Start Your Adoption Journey Today!</h2>
                    <p> Browse our available pets and take the first step toward adding a furry friend to your family!</p>
                </footer>
            </div>
            <div className="aboutFooter">
                <p>&copy; 2024 Pet Adopt. All rights reserved.</p>
            </div>

        </>
    )
}

export default MainPage