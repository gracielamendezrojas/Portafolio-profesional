function Modal({header, onCloseFunction, children}){
    return(
    <div id="default-modal" className="bg-black/50 font-mono overflow-y-auto overflow-x-hidden fixed top-1/3 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        {header}
                    </h3>
                    <button onClick={onCloseFunction} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4 text-2xl">
                    {children}
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={onCloseFunction} data-modal-hide="default-modal" type="button" className="cursor-pointer flex items-center justify-center rounded-full py-2 px-5 bg-violet-brand text-2xl text-white hover:text-violet-brand hover:bg-white hover:font-extrabold hover:border-solid hover:border-2 hover:border-violet-brand">Ok</button>
                </div>
            </div>
        </div>
    </div>
    ) 

}
export default Modal;