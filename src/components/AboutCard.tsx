const AboutCard = () => {
    return (
        <div className='relative'>
            <div className="grid grid-cols-1 bg-white shadow-lg rounded-lg px-4 py-6">
            <h2 className="text-gray-900 text-lg py-2 font-semibold">About</h2>
                <div className="bg-gray col-span-3">
                    <p>I was born and raised in Pittsburgh, PA (Go Steelers!!), and I'm currently a Junior at Carnegie Mellon University studying Artificial Intelligence.  My interests lie in the intersection of real-world problems with interesting algorithms.  At CMU, I've delved into the cutting edge of Machine Learning at the same time as I pursue the fundamentals via my discovered passions of CS Theory and Math.</p>
                    <hr className="my-2"></hr>
                    <p>I've found great fulfillment in teaching as a TA for CMU's AI games class (15-281) and developing projects that I, and others find useful.  ScottyLabs, CMU's largest software engineering club, provided an incredible space for me and a team to develop <a href='https://cmumaps.com'>CMUMaps</a>, a project I love for the complexity of it's theory and extreme utility.  To help others have a similar experience to my CMUMaps experience, I lead ScottyLabs' Labrador committee, an incubator-style program for the future of ScottyLabs (and external) projects.  This year, I'm the director of ScottyLabs.  I'm incredibly excited for what the team is cooking for this year.</p>
                    <hr className="my-2"></hr>
                    <p>Beyond my coursework and clubs, you can find me running all around Pittsburgh and in local races.  I love running for the dedication it requires, the exhilaration of success, and the peace of the outdoors. </p>
                </div>
            </div>
        </div>
    );
}
export default AboutCard;