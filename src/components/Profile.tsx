import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return (

        <div className={styles.profileContainer}>
            <img src="http://github.com/luizgustav12.png" alt="Luiz Gustavo" />
            <div>
                <strong> Luiz Gustavo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1 
                </p>
            </div>
        </div>    

    );
}