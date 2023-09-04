import '../css/contact.css'

export function Contact() {
//    const response = await fetch('../../utils/repos.json');
//    const responseInObject = await response.json();
//    console.log(responseInObject);
    async function getRepos() {
        const response = await import('/public/repos.json');
        // const responseInObject = await response.json();
        console.log(response.default);
    }
    getRepos();
   return (
        <div className="contact">
            <h1>Contact</h1>
        </div>
    );
}
