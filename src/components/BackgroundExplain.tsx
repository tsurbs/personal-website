const BackgroundExplain = () => {
    return (
        <div className='relative top-16 w-[400px]'>
            <div className="grid grid-cols-3 gap-5  bg-white shadow-lg rounded-lg px-4 py-6">
                <div className="bg-gray col-span-2">
                    <h2 className="text-gray-900 text-lg py-2 font-semibold">What is this thing?</h2>
                </div>
                <div className="bg-gray col-span-3">
                    I was interested in my data from running all around Pittsburgh, so I used the Strava API to grab it and discretize it into these clusters. This visualization just picks a random start and end point for the green dot to run between.  I also have an RNN-based model that predicts the next position given the past clusters... In the future, I'll add that here.
                </div>
            </div>
        </div>
    );
}
export default BackgroundExplain;