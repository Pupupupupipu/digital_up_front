/**
 * 
 * @param {{
 *    children: any,
 *    className: string,
 *    size: 'md' | 'lg',
 *    variant: 'primary' | 'outline'
 *    type: any
 * }} props 
 *  
 */

export function UIButton({children, className, size, variant, type}){
    const buttonClassName = `transiton-colors, ${className},
        ${{
            md: "rounded px-6 py-2 text-sm leading-tight",
            lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
        }[size]},
        ${{
            primary: "bg-gray-700 text-white border-2 border-slate-900 hover:bg-gray-900",
            outline: "border border-slate-900 text-slate-900 hover:bg-gray-300",
        }[variant]}`
    

    return(
        <button className={buttonClassName} type={type} >{children}</button>
    )
}