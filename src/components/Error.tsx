import classes from './Error.module.css';

const Error = () => {
    return (
        <div className={classes.error}>
            <p>
                Usuário não encontrado
            </p>
        </div>
    );
}
export default Error;