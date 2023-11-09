export default ({type, label, placeholder, fieldRef, hassError}) => {

    const classes = "form-control w-full px-3 py-2 text-gray-700 rounded border border-solid border-black focus:border-green-500 focus:outline-none";

    return(
        <div className="form-group mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            { type === 'textarea' ? (
                <textarea className={classes} raws="3" placeholder={placeholder} {...fieldRef}/>
            ):(
                <input className={classes} type={type} placeholder={placeholder} {...fieldRef}/>
            )}
            {hassError && <p className="text-red-500 text-xs italic">{`${label} is required`}</p>}
        </div>
    );
};