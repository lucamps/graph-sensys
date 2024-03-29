export default class HtmlContentHandler {
    static getDivRes(rest) {
        const style = `style="background-color: ${rest.color}"`;

        const divContent = ` <li class="list-group-item list_expr dynamic-content" id="div-${rest.id}">
            <div class="container title_and_check">
                <input class="form-check-input" type="checkbox" name="check-${rest.id}" id="check-${rest.id}" ${style} checked>
                <p class="identificador">${rest.label}</p>
            </div>
            <form class="form-expression">
                <div class="form form-res" id="form-${rest.id}">
                    <p id="x-value-${rest.id}">${rest.a}</p>
                    <p class="between-buttons" id="x-text-${rest.id}">${rest.nameVarA} + </p>
                    <p id="y-value-${rest.id}">${rest.b}</p>
                    <p class="between-buttons" id="y-text-${rest.id}">${rest.nameVarB} ${rest.rel} </p>
                    <p id="result-value-${rest.id}">${rest.value}</p>
                </div>
                <label for="range-${rest.id}" class="form-label"></label>
                <input type="range" class="form-range" min="0" max="5" id="range-${rest.id}">
            </form>
        </li>`;

        return divContent
    }
}