import { TouchRipple } from "./TouchRipple"

export namespace Button {
    export function Primary({text, wait, onTap}: {
        text: string,
        wait?: boolean,
        onTap: Function
    }) {
        return (
            <TouchRipple onTap={onTap} wait={wait}>
                <button class="primary">{text}</button>
            </TouchRipple>
        )
    }

    export function Category({text, selected}: {text: string, selected: boolean}) {
        const className = selected
            ? "category selected"
            : "category";

        return (
            <TouchRipple onTap={() => {}}>
                <button className={className}>{text}</button>
            </TouchRipple>
        )
    }
}