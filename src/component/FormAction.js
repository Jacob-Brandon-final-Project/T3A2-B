export default function FormAction({
    handleSubmit,
    type='button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='button' ?
            <button
                type={action}
                className="p-3.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outine-none focus:ring-green-200 dark:focus:ring-green-800"
                onSubmit={handleSubmit}
            >
                {text}
            </button>
            :
            <></>
        }
        
        </>
    )
}