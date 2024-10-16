function AboutPage(){
    return(
        <>
        <div className="aboutHeader">
            <h1 className="aboutH1">About Us</h1>
        </div>

        <div className="aboutMain">
            <section class="mission">
                <h2 className="aboutH2">Our Mission</h2>
                <p>At Pet Adopt, our mission is to create a loving and caring environment for animals while connecting them with their forever homes. We strive to educate the community about responsible pet ownership and promote adoption as the first choice when looking for a new pet.</p>
            </section>

            <section class="vision">
                <h2 className="aboutH2">Our Vision</h2>
                <p>We envision a world where every pet has a loving home. By working with local shelters and the community, we aim to eliminate the suffering of animals caused by homelessness, neglect, and abuse.</p>
            </section>

            <section class="team">
                <h2 className="aboutH2">Meet Our Team</h2>
                <p>Our team consists of passionate animal lovers, volunteers, and professionals dedicated to making a difference. From rescuers to veterinary experts, everyone at Pet Adopt is committed to helping animals find their perfect home.</p>
            </section>
        </div>

        <div className="aboutFooter">
            <p>&copy; 2024 Pet Adopt. All rights reserved.</p>
        </div>
        </>
    )
}

export default AboutPage;