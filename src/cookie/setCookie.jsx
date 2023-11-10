import Cookies from 'js-cookie';

const SetCookie = (cookiename, order) =>{
    Cookies.set(cookiename, order, {
        expires:7,
        secure:true,
        sameSite:'Strict',
        path:''
    });
};

export default SetCookie;