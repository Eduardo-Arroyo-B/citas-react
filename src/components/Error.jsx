const Error = ({children}) => {
    return (
        <div className="bg-red-700 text-white text-center p-1 uppercase mb-3 font-bold rounded-md">
            {children}
        </div>
    )
}

export default Error;