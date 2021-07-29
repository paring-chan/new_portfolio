import React from 'react'
import styles from '../styles/Home.module.scss'

const Footer = () => {
    return (
        <div className="section fp-auto-height">
            <div className={styles.footer}>
                <div>2021 &copy; STORM</div>
                <div>사업자등록번호: 799-60-00477</div>
                <div>
                    Designed & Developed by{' '}
                    <a href="https://github.com/pikokr" target="_blank">
                        pikokr
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
