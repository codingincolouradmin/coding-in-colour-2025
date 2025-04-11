import styles from './Image.module.css'

const Image = ({src , className}) => {
    return (
        <img 
        src={src}
        className={styles[className]} 
        />
           
        
    )
}

export default Image