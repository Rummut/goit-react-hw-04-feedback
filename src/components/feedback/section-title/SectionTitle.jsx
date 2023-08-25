import { Title } from "./SectionTitle.styled"



export const Section = ({ title, children }) => {
    return (
        <><Title>{title}</Title> 
        {children}</>
    )
}