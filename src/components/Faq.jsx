import { useState } from "react";

const questionsAnswers = [
    {
        question: "How do I create a new task?",
        answer:
            "To create a new task, click on the 'Add Task' button located at the top of your task list. Enter the task details in the form that appears and click 'Save' to add it to your list.",
    },
    {
        question: "How can I edit an existing task?",
        answer:
            "To edit a task, click on the task you want to edit. This will open a form where you can change the task details. After making your changes, click 'Save' to update the task.",
    },
    {
        question: "How do I delete a task?",
        answer:
            "To delete a task, click the trash icon next to the task you want to remove. Confirm the deletion when prompted to permanently remove the task from your list.",
    },
    {
        question: "Can I set a due date for my tasks?",
        answer:
            "Yes, you can set a due date for your tasks. When creating or editing a task, you will see an option to select a due date. Choose your desired date and save the task.",
    },
    {
        question: "How do I mark a task as complete?",
        answer:
            "To mark a task as complete, click the checkbox next to the task. The task will be moved to the 'Completed Tasks' section, where you can view all your finished tasks.",
    },
    // {
    //     question: "Can I categorize my tasks?",
    //     answer:
    //         "Yes, you can categorize your tasks by using tags or creating separate lists for different types of tasks. When creating or editing a task, you can assign it to a category or add relevant tags.",
    // },
    // {
    //     question: "How do I search for a specific task?",
    //     answer:
    //         "To search for a task, use the search bar at the top of your task list. Enter keywords related to the task you are looking for, and the app will filter your tasks to show matching results.",
    // },
    // {
    //     question: "Can I set reminders for my tasks?",
    //     answer:
    //         "Yes, you can set reminders for your tasks to ensure you don't forget them. When creating or editing a task, you can set a reminder by selecting the date and time you want to be notified.",
    // },
    // {
    //     question: "How do I prioritize my tasks?",
    //     answer:
    //         "To prioritize your tasks, you can assign priority levels (e.g., high, medium, low) when creating or editing a task. Alternatively, you can reorder your tasks manually by dragging them to your desired position.",
    // },
    // {
    //     question: "Can I collaborate with others on tasks?",
    //     answer:
    //         "Yes, you can collaborate with others by sharing your task lists or assigning tasks to other users. Use the 'Share' or 'Assign' options to invite others to work on tasks with you.",
    // },
];


const Faq = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    function handleCurrentIndex(index) {
        setCurrentIndex(index === currentIndex ? null : index);
    }

    return (
        <div className="md:p-14 px-5 py-9 " id="faq">
            <div className="mb-28 flex justify-center">
                <h2 className="text-3xl text-slate-80 border-b-2 px-4 py-2 border-rose-500">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="w-11/12 max-w-3xl mx-auto">
                {
                    questionsAnswers.map((questionsAnswer, index) => {
                        return (
                            <div key={index} onClick={() => handleCurrentIndex(index)} className="mb-7 shadow-[0_0_20px_theme('colors.gray.500')] rounded">
                                <div className="question flex justify-between p-3">
                                    <h2 className="font-bold text-md">{questionsAnswer.question}</h2>

                                    {index === currentIndex
                                        ? <span>-</span>
                                        : <span>+</span>
                                    }
                                </div>
                                {index === currentIndex
                                    ? <div className="p-3 text-gray-500 text-sm">{questionsAnswer.answer}</div>
                                    : null
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Faq;
