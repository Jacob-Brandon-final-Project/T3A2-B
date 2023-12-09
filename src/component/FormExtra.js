export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
            <input
                id="remeber-me"
                name="remeber-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="rember-me" className="ml-2 block text-sm text-gray-900">
                Remember me!
            </label>
        </div>

        <div className="text-sm">
            <a href="#" className="font-medium text-purple-600 hover:text-black">
                Forgot your password?
            </a>
        </div>
        </div>
    )
}