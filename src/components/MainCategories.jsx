import { Link } from "react-router-dom"
const MainCategories = () => {
  return (
    <div className='w-full lg:flex md:flex sm:hidden hidden  justify-center items-center p-[10px]'>
            <ul className='links flex-row-reverse font-semibold items-center lg:gap-[30px] gap-[15px] lg:flex md:flex sm:hidden hidden relative md:text-[14px]'>
                <Link to={'/'}><li> أقوي العروض </li></Link> 
                <Link to={'/'}><li>  غرف المعيشة </li></Link>
                <Link to={'/'}><li>  غرف النوم </li></Link>
                <Link to={'/'}><li> غرف السفرة </li></Link>
                <Link to={'/'}><li> ترابيزات و حافظات أحذية</li></Link>
                <Link to={'/'}><li> أثاث الحدائق</li></Link>
                <Link to={'/'}><li> إضاءة</li></Link>
                <Link to={'/'}><li> مطابخ</li></Link>
            </ul>
        </div>
  )
}

export default MainCategories