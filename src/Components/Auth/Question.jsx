import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AverageMarksContext } from '../WithNavbarPages/AverageMarksContext';

const Question = () => {
    // const { averageMarks, setAverageMarks } = useContext(AverageMarksContext);
    const { setAverageMarks } = useContext(AverageMarksContext);
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalMarks, setTotalMarks] = useState(0);
    const questions = [
        { question: 'Q1', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q2', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q3', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q4', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q5', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q6', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q7', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q8', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q9', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
        { question: 'Q10', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], marks: [1, 2, 3, 4] },
    ];
    const [selectedQuestions] = useState(questions.sort(() => 0.5 - Math.random()).slice(0, 5)); // Randomly select 5 questions
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleOptionChange = (e) => {
        setErrorMessage(''); // Clear any previous error message
        setTotalMarks(totalMarks + Number(e.target.value));
    };

    const handleNext = () => {
        if (!document.querySelector('input[name="answer"]:checked')) {
            setErrorMessage('Please select an option.');
            return; // Prevent navigation if no option is selected
        }

        setErrorMessage(''); // Clear error message if an option is selected

        if (currentQuestion < 4) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const averageMarks = totalMarks / 5;
            console.log(averageMarks);
            setAverageMarks(averageMarks);
            navigate('/thank');
        }
    };


    return (
        <>

            <div className='flex items-center justify-center h-screen bg-slate-200'>
                <div className='bg-slate-100 rounded-lg shadow-xl p-8 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4'>
                    <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center'>{selectedQuestions[currentQuestion].question}</h2>
                    <form key={currentQuestion}>
                        {selectedQuestions[currentQuestion].options.map((option, index) => (
                            <p key={index}>
                                <input type="radio" id={`option${index}`} name="answer" value={selectedQuestions[currentQuestion].marks[index]} onChange={handleOptionChange} />
                                <label htmlFor={`option${index}`}>{option}</label>
                            </p>
                        ))}
                    </form>
                    <button onClick={handleNext} className='w-full py-3 px-4 bg-slate-400 hover:bg-slate-600 rounded-md text-white font-semibold'>
                        {currentQuestion < 4 ? 'Next' : 'Submit'}
                    </button>
                    {errorMessage && (
                        <p className="text-red-500 text-sm font-semibold text-center">{errorMessage}</p>
                    )}
                    {/* <Link to={currentQuestion < 4 ? "#" : "/FirstPage"} onClick={handleNext} className='w-full py-3 px-4 bg-slate-400 hover:bg-slate-600 rounded-md text-white font-semibold'>
                        {currentQuestion < 4 ? 'Next' : 'Submit'}
                    </Link> */}
                </div>
            </div>

        </>
    )
}

export default Question