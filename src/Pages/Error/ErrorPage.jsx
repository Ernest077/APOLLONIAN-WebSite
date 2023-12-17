import cls from "./ErrorPage.module.scss";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className={cls.ErrorPage}>
            <div>Error 404
                <p>Page not found</p>
            </div>
            <Link to="/" className={cls.DrawerLink}>
                Back
            </Link>
        </div>
    )
}

export default ErrorPage;