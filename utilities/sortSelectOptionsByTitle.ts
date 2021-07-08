import { SelectOption } from "../types";

export default function sortSelectOptionsByTitle(a: SelectOption, b: SelectOption) {
    return (a.title > b.title) ? 1 : -1;
}
