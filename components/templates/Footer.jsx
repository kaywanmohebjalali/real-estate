import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-backGround-dark flex flex-col items-center justify-evenly  text-white  h-[25vh] ">
    <ul className="container flex gap-4 flex-wrap justify-evenly text-sm small:text-[1rem] xl:text-xl">
        <li className="nav__item">
            <a href="#" className="nav__link">خانه رویایی خود را پیدا کنید</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">درخواست پروپوزال</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">برنامه اجاره خانه ها</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">با ما تماس بگیرید</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">ملک خود را ارسال کنید</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">با ما کار کنید</a>
        </li>
    </ul>

    <p className="container text-center text-[0.7rem] small:text-[1rem] md:text-xl">
        &copy; حقوق مادی معنوی این سایت برای
        <strong className="text-backGround-gold mx-1">کیوان محب جلالی</strong>
        محفوظ میباشد
    </p>
</footer>
     )
}

export default Footer