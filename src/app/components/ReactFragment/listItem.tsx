export function Item(props: { object: string, brand: string }) {
    return (
        <>
            <li>{props.object} - {props.brand}</li>
        </>
    )
}