export function OnClickEvent () {

    function myEvent() {
        alert ("Ativado!")
    }

    return (
        <div>
            <h4>Clique para disparar um evento!</h4>
            <button onClick={myEvent}>Ativar</button>
        </div>
    )
}