export const Intro = (props) => {
    return (
        <div className="intro">
            <h2>{props.nazev}</h2>
            <p>{props.popis}</p>
        </div>
    )
}