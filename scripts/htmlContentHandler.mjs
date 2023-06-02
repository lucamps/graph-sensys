export default class HtmlContentHandler {
    static getDivRes(rest) {
        const style = `style="border:0.2em solid ${rest.color}"`;

        const divContent = ` <li class="list-group-item" id="div-${rest.id}" ${style}>
            <p class="identificador">${rest.id}</p>
            <form class="form-expression">
                <div class="form form-res" id="form-${rest.id}">
                    <p id="x-value-${rest.id}">${rest.a}</p>
                    <p class="between-buttons" id="x-text-${rest.id}">${rest.nameVarA} + </p>
                    <p id="y-value-${rest.id}">${rest.b}</p>
                    <p class="between-buttons" id="y-text-${rest.id}">${rest.nameVarB} ${rest.rel} </p>
                    <p id="result-value-${rest.id}">${rest.value}</p>
                </div>
                <label for="range-${rest.id}" class="form-label"></label>
                <input type="range" class="form-range" min="0" max="5" step="0.5" id="range-${rest.id}">
            </form>
        </li>`;

        return divContent
    }
}