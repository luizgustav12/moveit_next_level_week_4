import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    return (
        <header className={styles.experienceBar}>  {/* usa className ao inves de so class */}

            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />    {/* o tamanho vai ser fixo dentro do coisa la, vai avancando com o tempo */}

                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>

        </header>
    );
}