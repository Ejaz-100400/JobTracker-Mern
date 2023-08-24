export default function SmallSidebar({type,name,labelText,label,defaultValue,onChange,placeholder}){
    return(
    <div className="p-2 w-100">
        <label htmlFor={name} className='form-label'>
            {labelText || name}
        </label>
        <input
        type={type}
        id={name}
        name={name}
        className='form-control'
        defaultValue={defaultValue || ''}
        placeholder={placeholder || ''}
        onChange={onChange}
        required
      />
    </div>
    )
}