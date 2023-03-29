import { useState } from "react";

/**
 * Koristiti toFixed metodu da definiramo preciznost decimala countera.
 * Omogućiti da se preciznost definira preko props "precision".
 * BONUS: Ako "precision" nije definiran, koristiti 0 za preciznost.
 */

export function Counter(props) {
    const [count, setCount] = useState(props.initialValue);

    function handleClickPlus() {
        setCount(count + props.step);
    }

    function handleClickMinus() {
        setCount(count - props.step);
    }

    return (
        <>
            <button onClick={handleClickMinus}>-</button>
            <span>{count.toFixed(props.precision || 0)}</span>
            <button onClick={handleClickPlus}>+</button>
        </>
    );
}
