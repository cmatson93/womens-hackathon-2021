import styles from './title.module.scss'

const Title = ({ text }) => {
    
    return (
        <h1 className={styles.title}>
            {text}
        </h1>
    );
}

export default Title; 