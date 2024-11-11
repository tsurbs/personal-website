const ExperienceCard = () => {
    return (
        <div className='relative'>
            <div className="grid grid-cols-1 bg-white shadow-lg rounded-lg px-4 py-6">
            <h2 className="text-gray-900 text-lg py-2 font-semibold">Lazarus AI SWE Intern</h2>
                <div className="bg-gray col-span-3">
                At Lazarus AI, I contributed to the company's document understanding platform by building a B2B sub-organization management system using Firebase and Flask. This structure allowed for efficient data, usage, and metrics separation and simplified billing management for clients. I also implemented obfuscation techniques for our Retrieval Augmented Generation (RAG) API for on-premise deployment and APAC Cloud deployment, including seamless CI/CD integration. Additionally, I increased test coverage on the RAG API to 80% and others through extensive unit testing, database mocking.  I also prototyped a SQL logging scheme, and established stable backups to support the Retrieval Augmented Generation (RAG) microservice. This role enabled me to strengthen my skills in backend development, database management, and production-level deployment for a rapidly evolving AI startup.
                <hr className="my-2"></hr>
                    
                </div>
            <h2 className="text-gray-900 text-lg py-2 font-semibold">CTAT Research Intern</h2>
                <div className="bg-gray col-span-3">
                As a Research Intern for Cognitive Tutor Authoring Tools Lab (CTAT Lab) at Carnegie Mellon University, I worked on an innovative tool that empowers educators to create adaptive online coaching systems. My contributions focused on enhancing functionality and user experience by developing a hybrid undo-redo system, intuitive spreadsheet and modal interfaces, and window-swapping capabilities. I also collaborated on refactoring 3,000 lines of code from JavaScript to TypeScript, which improved code quality and reliability. Additionally, I resolved 51 bug reports, strengthening the application's performance and stability. This role offered valuable experience in full-stack development and the opportunity to contribute to a meaningful educational technology project.
                <hr className="my-2"></hr>
                    
                </div>
            </div>
        </div>
    );
}
export default ExperienceCard;

